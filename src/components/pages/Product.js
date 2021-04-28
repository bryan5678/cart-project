import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import DataContext from '../../components/contextAPI/DataContext';
import Filter from './function/Filter';
import Sort from './function/Sort';


export class Product extends Component {
    static contextType = DataContext

    componentDidUpdate(){
        console.log("Product componentDidUpdate")
       
    };

    componentDidMount(){
        console.log("Product componentDidMount")
    }

    componentWillUnmount(){
        console.log("Product componentWillUnmount")
        // console.log(this.state.cart)
        const {rangePrice, products} = this.context

      
        
    }
    render() {
        const {products, changeCart} = this.context

        let result = products.map((product)=>{
            return (

                <Col key={product._id} xs={12} sm={6} md={4} lg={3} >
                    <Fade>

                        <Card className="card--courses mb-3">
                            <NavLink className="no-underline" to={`${this.props.match.url}/${product._id}`}>
                                <Card.Img className="px-4 py-3" variant="top" src={product.img} alt={product.alt}/>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.text}</Card.Text>
                                    <div className="card__rating">
                                            <span className="card__stars">
                                                {[...Array(product.stars)].map((star) =>{
                                                    return  <FaStar className="mr-1"/>;
                                                })}
                                                { [...Array(product.halfStars)].map((star) =>{
                                                    return  <FaStarHalfAlt className="mr-1"/>;
                                                })}
                                                {[...Array(product.unStars)].map((star) =>{
                                                    return  <FaRegStar className="mr-1" 
                                                            />
                                                })}
                                            </span>
                                            <span className="card__score">
                                                {product.score}
                                            </span>
                                            <span className="card__total">
                                                {product.total}
                                            </span>
                                        </div>
                                        <div className="card__price">
                                            <span>${product.oldPrice}</span>
                                            <span>   ${product.newPrice}</span>
                                        </div>
                                </Card.Body>
                            </NavLink>    
                            <Button className ="w-50 container mb-3" size="sm" onClick={()=> changeCart(product._id, "+1")} variant="primary">Buy now</Button>
                        </Card> 
                    </Fade>

                </Col> 
          
            )
        })
        return (
            <Container>
                <h1 className="app">Product list</h1>
                <p className="app">{this.props.match.url}</p>
                <Row className="mb-4">
                    {/* <Col sm={{ span: 4, offset: 4 }}></Col> */}

                    <Col sm={6} md={6} lg={6}>
                        <Sort/>
                    </Col>

                    <Col sm={6} md={6} lg={6}>
                        <Filter/>
                    </Col>
                  
                </Row>
                <Row>
                    {result}
                </Row>
            </Container>    
        )
    }
}

export default Product

