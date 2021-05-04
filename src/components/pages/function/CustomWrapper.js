import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap';
// import DataContext from '../../contextAPI/DataContext';



class CustomWrapper extends Component {
    // static contextType = DataContext

    render() {
        const {rangePrice, filter} = this.context

        return (
             <div className="a">
                 <div className="b">

                 </div>
             </div>
        )
    }
}

export default CustomWrapper

