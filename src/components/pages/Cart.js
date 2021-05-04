import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
// import {Route, NavLink, Link} from 'react-router-dom'
import DataContext from '../../components/contextAPI/DataContext';


class Cart extends Component {
    static contextType = DataContext;
   
    // state = { width: 0 };

    // updateDimensions = () => {
    //     // this.setState({ height: document.querySelector(".card").offsetHeight });
    //     this.setState({ width: window.innerWidth});
    //   };
  
   
    componentDidUpdate(){
        console.log("Cart componentDidUpdate")
        // window.addEventListener('resize', this.updateDimensions);
        // window.addEventListener('load', this.updateDimensions);
        // const wrapTag = document.querySelectorAll(".card")
        // for (let tag of wrapTag) {
        //    let addHeightTag =  tag.style.height
        //    addHeightTag = `${this.state.height}px`
        //    console.log(addHeightTag)
        // //    console.log(this.state.height)

        // }

    };

    componentDidMount(){
        console.log("Cart componentDidMount")
        // window.addEventListener('resize', this.updateDimensions);
        // window.addEventListener('load', this.updateDimensions);
        // // const wrapTag = document.querySelectorAll(".react-reveal")
        // // for (let tag of wrapTag) {
        // //    let addHeightTag =  tag.parentElement.style.height
        // // //    addHeightTag = `${this.state.height}px`
        // //    console.log(addHeightTag)
        // // //    console.log(this.state.height)

        // // }

    }

    componentWillUnmount(){
        console.log("Cart componentWillUnmount")
        // console.log(this.state.cart)
        // window.removeEventListener('resize', this.updateDimensions);
        // window.removeEventListener('load', this.updateDimensions);

    }
    

    render() {
        const { cart, changeCart, removeCart} = this.context;
       
        // let unique = [...new Set(cart)];
      

        // let duplicates = unique.map(item => cart.filter(str => str === item).length);
        // let duplicates = unique.map(item => [item._id, cart.filter(str => str === item).length]);
        // let duplicatesTotal = unique.map(item => cart.filter(str => str === item).length * item.newPrice);

        // console.log(unique)
        // let obj = Object.fromEntries(duplicates)
        // let objTotal = Object.fromEntries(duplicatesTotal)
        let total1 = cart.reduce((prev, item)=>{
            return prev + (item.newPrice * item.count)
        },0)

        // let val = obj.forEach(([key, value]) => {
        //     console.log(`${key} ${value}`); 
        //   });
       
        let result = cart.map((item) =>{
            return(
                    <Fade key={item._id} collapse >
                    <Card className="my-3 height">
                        <Card.Body >
                            <Row className="align-items-center">
                                <Col sm={12} md={4}>
                                    <Card.Title className="mb-0">{item.title}</Card.Title>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Card.Img className="px-4 py-3" variant="top" src={item.img} alt={item.alt}/>
                                </Col>
                                <Col sm={3} md={1}>
                                    <Card.Text className="d-flex justify-content-center f-15">${item.newPrice}</Card.Text>   
                                </Col>
                                <Col sm={3} md={2} className="d-flex justify-content-md-between justify-content-center align-items-center my-3">
                                    <Button size="md" variant="primary" onClick={()=> changeCart(item._id, "-1")}>-</Button>
                                    <span className="mx-3">
                                        {
                                        item.count
                                        }
                                    </span>
                                    <Button size="md" variant="primary" onClick={()=> changeCart(item._id, "+1")}>+</Button>
                                </Col>
                                <Col sm={12} md={2}>
                                    <Card.Text className="d-flex justify-content-center f-20 bold">${(item.newPrice*item.count).toFixed(2)}</Card.Text>
                                </Col>
                                <Col sm={12} md={12} className="d-flex justify-content-end">
                                    <Button  
                                    // data-id={item._id}
                                    size="sm" 
                                    variant="danger" 
                                    onClick={()=> removeCart(item._id)}
                                    >X</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Fade>            
            )
        })
        
        return (
            
            <Container>
                <h1 className="app">{`${cart.length === 0 ? "Cart Empty:"  : "Cart includes:"}`} {cart.length} items</h1>
                <Row>
                    {/* <Col style={{height: `${this.state.height}px`}}> */}
                    <TransitionGroup>
                        {result}
                    </TransitionGroup>
                    {/* </Col> */}
                  
                </Row>
                    <h1 className={`mt-3 ${cart.length === 0 ? "d-none"  : "d-block app"}`}>Total: ${total1.toFixed(2)}</h1>
            </Container>
        )
    }
}

export default Cart
