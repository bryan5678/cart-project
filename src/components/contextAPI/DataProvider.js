import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import data from "../data/data.json";
// import course1 from '../../img/kh1.jpg'
// import course2 from '../../img/kh2.jpg'
// import course3 from '../../img/kh3.jpg'
// import course4 from '../../img/kh4.jpg'
// import course5 from '../../img/kh5.jpg'
// import course6 from '../../img/kh6.jpg'
// import course7 from '../../img/kh7.jpg'
// import course8 from '../../img/kh8.jpg'
// import { v4 as uuidv4 } from 'uuid';
import DataContext from './DataContext';



class DataProvider extends Component {
    state={    
        products: data.products,
        sort: "",
        rangePrice: "",
        cart: [],
    }

    
    showRoute = (rs)=>{
        let result = null
        if(rs.length > 0){
          result = rs.map((route, index)=>{
            return (
              <Route 
                key={index}
                path={route.path}
                component={route.main} 
                exact={route.exact} />
            )
        })
        } 
        return result
      }

    filter = (event) =>{

        const rangePriceValue = event.target.value
        const filterProducts = Array.from(data.products).filter((item)=>{
           
            if(rangePriceValue==="price1"){
                return item.newPrice < 20
            }
            else if(rangePriceValue==="price2"){
                return item.newPrice > 20 && item.newPrice < 50

            }
            else if(rangePriceValue==="price3"){
                return item.newPrice >50 && item.newPrice < 100
            }
            else if(rangePriceValue==="price4"){
                return item.newPrice > 100
            }else {return item.newPrice }

        })

        this.setState(
            {rangePrice: rangePriceValue, products: filterProducts}
            // ,()=> console.log(rangePrice)

        )
    }

    sorting = (event) =>{
        const {products} = this.state;

        const sortValue = event.target.value
        const sortProducts = [...products].sort((a,b)=>{
            if(sortValue==="Lowest"){
                return a.newPrice>b.newPrice ? 1 : -1
            }
            else if(sortValue==="Highest"){
                return a.newPrice<b.newPrice ? 1 : -1
            }
            else if(sortValue==="Lastest"){
                return b._id-a._id
            }
            else{
                return a._id-b._id
            }
        })

        this.setState(
            {sort: sortValue, products: sortProducts}
            // ,()=> console.log(sort)

        )
    }
  

    changeCart = (id, adjust) =>{
        const {products, cart} = this.state;
            let alreadyInCart = false;
            const productItem = products.find(product =>{
                return product._id === id 
            })
            cart.forEach(item =>{
                 if(item._id === id){
                    item.count =  item.count + Number(adjust)
                    if(item.count===0 ){
                        this.removeCart(id)
                    }
                    if(item.count===0){
                        item.count = 1
                    }

                    alreadyInCart = true;
                 }
            })

            if (!alreadyInCart) {
                cart.push({ ...productItem, count: 1 });
              }

              this.setState({ cart }, ()=> console.log(cart))
  
    }

    removeCart = (id) =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            const cartItemRemove = cart.filter(item =>{
                return item._id === id
            })
            const cartItemIndex = cart.findIndex(item =>{
                return item._id === id
            })
            cart.splice(cartItemIndex, cartItemRemove.length) 
            this.setState(
                {cart: [...cart]}
                ,()=> console.log(cart)

            )
        }   
    }


    componentDidUpdate(){
        console.log("DataProvider componentDidUpdate")
        const {cart} = this.state;

        localStorage.setItem('dataCart', JSON.stringify(cart))


    };

    componentDidMount(){
        console.log("DataProvider componentDidMount")
        localStorage.removeItem('dataProduct')
        
        // const {cart} = this.state;
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart}
            // ,()=> console.log(cart)
            )
        }
    }

    componentWillUnmount(){
        console.log("DataProvider componentWillUnmount")        
    }

    render() {
        const {products, sort, cart, rangePrice} = this.state;
        const {showRoute, changeCart, removeCart, sorting, filter} = this;

        return (
            <DataContext.Provider value={{ products, sort, rangePrice, cart, showRoute, changeCart, removeCart, sorting, filter}} >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider