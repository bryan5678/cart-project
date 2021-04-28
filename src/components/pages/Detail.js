import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DataContext from '../../components/contextAPI/DataContext';

class Detail extends Component {
    static contextType = DataContext;
    state = {
        product: [],
    }

    getProduct = () =>{
        const {products} = this.context
        const {product} = this.state
        const id = Number(this.props.match.params.id)

        products.forEach((item, index) =>{
            if(item._id === id){
                product.push(products[index])
                this.setState({product},
                    ()=>console.log(product)
                )
            }
          
        })    
        
    };

    componentDidMount(){
        this.getProduct();
        // console.log("Details componentDidMount")
        
        const dataProduct = JSON.parse(localStorage.getItem('dataProduct'));
        if(dataProduct !== null){
            this.setState({product: dataProduct}
            // ,()=> console.log(this.state.product)
            )
        }
        

    }
    componentDidUpdate(){
        // console.log("Details componentDidUpdate")
        const {product} = this.state;
        localStorage.setItem('dataProduct', JSON.stringify(product))

    };

    componentWillUnmount(){
        // console.log("Details componentWillUnmount")
        localStorage.removeItem('dataProduct')
    }

    

    render() {
        const {product} = this.state;
        return (
            <Container>
                <h1 className="app">Product details</h1>
                <p className="app">{this.props.match.url}</p>

                <Row className="mt-5">
                    {
                        product.map((item) =>{
                            return(
                            <Col sm={12} key={item._id}>
                                <Card className="card--courses mb-3">
                                    {/* <NavLink className="no-underline" to={`${this.props.match.url}/${item._id}`}> */}
                                    <Row>
                                        <Col md={4}>
                                            <Card.Img className="px-4 py-3" variant="top" src={item.img} alt={item.alt}/>
                                        </Col>
                                        <Col md={8} >
                                            <Card.Body>
                                                <Card.Title className="f-20">{item.title}</Card.Title>
                                                <Card.Text className="f-15">{item.text}</Card.Text>
                                                <Card.Subtitle className="my-3 text-muted">{item.des}</Card.Subtitle>

                                                <div className="card__rating justify-content-center">
                                                        <span className="card__stars f-15">
                                                            {[...Array(item.stars)].map((star) =>{
                                                                return  <FaStar className="mr-1"/>;
                                                            })}
                                                            { [...Array(item.halfStars)].map((star) =>{
                                                                return  <FaStarHalfAlt className="mr-1"/>;
                                                            })}
                                                            {[...Array(item.unStars)].map((star) =>{
                                                                return  <FaRegStar className="mr-1" 
                                                                        />
                                                            })}
                                                        </span>
                                                        <span className="f-15 card__score">
                                                            {item.score}
                                                        </span>
                                                        <span className="f-15 card__total">
                                                            {item.total}
                                                        </span>
                                                    </div>
                                                    <div className="text-center card__price">
                                                        <span className="mx-2 f-15">${item.oldPrice}</span>
                                                        <span className="mx-2 f-20">${item.newPrice}</span>
                                                    </div>
                                            </Card.Body>
                                            <Row className="align-items-center mb-3">
                                                <Col className="d-flex justify-content-end">
                                                    <Link className=" f-15" to="/product">Back to Product List</Link>     
                                                </Col>
                                                <Col>
                                                    <Button className ="w-50 f-15" size="sm" onClick={()=> this.context.changeCart(item._id, "+1")} variant="primary">Buy now</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card> 
                            </Col> 
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default Detail
