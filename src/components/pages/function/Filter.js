import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap';
import DataContext from '../../contextAPI/DataContext';



class Filter extends Component {
    static contextType = DataContext

    render() {
        const {rangePrice, filter} = this.context

        return (
             <Form className="mt-md-3">
             <Form.Row className="mt-3 mt-sm-0 justify-content-start align-items-center">
                 <Col sm={4} md={4} lg={3} className="text-sm-left">
                    <Form.Label>Range Price: </Form.Label>
                 </Col>

                 <Col sm={8} md={8} lg={6}>

                     <Form.Control 
                     className="border border-primary text-primary px-1" 
                     as="select"
                     value={rangePrice}
                     onChange={filter}
                     >
                         <option value="price0" selected >All</option>
                         <option value="price1">Less than $20</option>
                         <option value="price2">$20 - $50</option>
                         <option value="price3">$50 - $100</option>
                         <option value="price4">More than $100</option>
                     </Form.Control>
                 </Col>   
             </Form.Row>
         </Form>
        )
    }
}

export default Filter

