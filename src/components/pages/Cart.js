import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
// import {Route, NavLink, Link} from 'react-router-dom'
import DataContext from '../../components/contextAPI/DataContext';


class Cart extends Component {
    static contextType = DataContext;
    // componentDidMount(){
    //     this.context.updateTotal()
    // }
   
   

    shouldComponentUpdate(){
        console.log("Cart shouldComponentUpdate")

    }
    componentDidUpdate(){
        console.log("Cart componentDidUpdate")
       

    };

    componentDidMount(){
        console.log("Cart componentDidMount")
        

    }

    componentWillUnmount(){
        console.log("Cart componentWillUnmount")
        // console.log(this.state.cart)
        
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
        // console.log(obj)

        // let val = obj.forEach(([key, value]) => {
        //     console.log(`${key} ${value}`); 
        //   });
       
        let result = cart.map((item) =>{
            return(
                <Fade key={item._id} collapse right>
                    <Card className="my-3 no-min-height">
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
                    <TransitionGroup {...this.groupProps}>
                        {result}
                    </TransitionGroup>
                </Row>
                    <h1 className={`mt-3 ${cart.length === 0 ? "d-none"  : "d-block app"}`}>Total: ${total1.toFixed(2)}</h1>
            </Container>
        )
    }
}

export default Cart
