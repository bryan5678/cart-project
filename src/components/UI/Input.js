import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Input extends Component {
    

    render() {
        let inputElement = null;

    switch ( this.props.elementType ) {
        case ( 'input' ):
            inputElement = ( 
                    <Col className="form-group relative" >
                        <label className="text-primary">{this.props.label}</label>
                        <input
                        className={`form-control pr-4 ${this.props.invalid && this.props.shouldValidate && this.props.touched ? " border-danger" : " border-success"}`}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onInput={this.props.changed} 
                        onBlur={this.props.blured} 
                        />
                        <div 
                            className="icon"
                            onClick={this.props.showPassword}
                        >   {this.props.icon}
                        </div>
                        <p className={`mt-1 mb-3 text-danger ${this.props.invalid && this.props.shouldValidate && this.props.touched ? "opacity-1" : "opacity-0"}`}>
                            {this.props.error}
                        </p>
                    </Col>                
            );
            break;
        case ( 'textarea' ):
            inputElement = (
                <div>
                <Col className="form-group">
                    <label>{this.props.label}</label>
                    <textarea
                        className='form-control'
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed} />
                    <span></span>
                </Col>
                </div>
                
            );
            break;
        case ( 'select' ):
            inputElement = (
                <Col className="form-group">
                    <label>{this.props.label}</label>
                    <select
                        className='form-control'
                        value={this.props.value}
                        onChange={this.props.changed}>
                        {this.props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                </Col>
            );
            break;
        default:
            inputElement = <input
                // className={inputClasses.join(' ')}
                {...this.props.elementConfig}
                value={this.props.value}
                onChange={this.props.changed} />;
        }
        return (
        <div>         
            {inputElement}
        </div>
        )
    }
}

export default Input
