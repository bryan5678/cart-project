import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import DataContext from '../../contextAPI/DataContext';



class Sort extends Component {
    static contextType = DataContext

    // componentDidUpdate(){
    //     console.log("About componentDidUpdate")
    // };

    // componentDidMount(){
    //     console.log("About componentDidMount")
    // }
    // componentWillUnmount(){
    //     console.log("About componentWillUnmount")
    //     // console.log(this.state.cart)
        
    // }
    render() {
        const {sort, sorting} = this.context

        return (
        <Form className="mt-md-3">
            <Form.Row className="justify-content-start justify-content-md-end align-items-center">
                <Col sm={4} md={4} lg={3} className="text-sm-left">
                    <Form.Label >Sorting Price: </Form.Label>

                </Col>

                <Col sm={8} md={8} lg={6}>

                    <Form.Control 
                    className="border border-primary text-primary px-1" 
                    as="select"
                    value={sort}
                    onChange={sorting}
                    >
                        <option  value="Popular" selected >Popular</option>
                        <option value="Lastest">Lastest</option>
                        <option value="Lowest">Lowest</option>
                        <option  value="Highest">Highest</option>
                    </Form.Control>
                </Col>
                
            </Form.Row>
        </Form>
            

        )
    }
}

export default Sort

