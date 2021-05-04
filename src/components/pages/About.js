import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap';
import Input from '../UI/Input'
import { FaEyeSlash, FaEye } from 'react-icons/fa';



class About extends Component {

    state={
        orderForm: {
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Last Name'
                },
                value: '',
                validation: {
                    required: true,
                    isLetter: true,
                    minLength: 1,
                    maxLength: 32,  

                },
                valid: false,
                touched: false,
                label: "Your Last Name",
            },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                    isLetter: true,
                    minLength: 1,
                    maxLength: 32,  

                },
                valid: false,
                touched: false,
                label: "First Name",
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'address'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 32,  

                },
                valid: false,
                touched: false,
                label: "address"

            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false,
                label: "ZIP code"

            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone Number'
                },
                value: '',
                validation: {
                    required: true,
                    isPhone: true,
                    minLength: 10,
                    maxLength: 10,  
                },
                valid: false,
                touched: false,
                label: "Phone Number"

            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                    autoComplete: 'off'
                },
                value: '',
                validation: {
                    required: true,
                    isPassword: true,
                    minLength: 8,
                    maxLength: 20,
                },
                valid: false,
                touched: false,
                label: "Password",
                icon: <FaEyeSlash/>,
            },
            passwordConfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password Confirmation',
                    autoComplete: 'off'

                },
                value: '',
                validation: {
                    required: true,
                    isMatch: true,  
                    minLength: 8,
                    maxLength: 20,  
                },
                valid: false,
                touched: false,
                label: "Password Confirmation",
                icon: <FaEyeSlash/>,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 32, 
                },
                valid: false,
                touched: false,
                label: "Country"

            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    minLength: 1,
                    maxLength: 32, 
                },
                valid: false,
                touched: false,
                label: "Email"

            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                validation: {},
                valid: true,
                label: "Delivery Type"

            }
        },
        formIsValid: false,
        loading: false
            
        
    }

    toogleType = (inputIdentifier) =>{
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
       
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        if ( updatedFormElement.elementConfig.type === "password") {
            updatedFormElement.elementConfig.type = "text";
            updatedFormElement.icon = <FaEye/>
          } else {
            updatedFormElement.elementConfig.type = "password";
            updatedFormElement.icon = <FaEyeSlash/>

          }

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({orderForm: updatedOrderForm});
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
       
    }

    checkValidity( value, rules) {
        let isValid = true;
        let passValue = this.state.orderForm.password.value
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isLetter) {
            //eslint-disable-next-line
            const pattern = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isPhone) {
            //eslint-disable-next-line
            const pattern = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isPassword) {
            //eslint-disable-next-line
            const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isMatch) {
            isValid = passValue.match(value) && isValid
        }

        if (rules.isEmail) {
            //eslint-disable-next-line
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            //eslint-disable-next-line
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    showError(value, rules) {
        let passValue = this.state.orderForm.password.value
        //eslint-disable-next-line
        const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //eslint-disable-next-line
        const patternNum = /^\d+$/;
       //eslint-disable-next-line
        const patternLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
        //eslint-disable-next-line
        const patternPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        //eslint-disable-next-line
        const patternPass =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (rules.required && value.trim() === '') {
            return 'Vui lòng nhập trường này' 
        }
        else if (rules.isLetter && !patternLetter.test(value)) {
            return 'Vui lòng nhập chữ'
        }
        else if (rules.isNumeric && !patternNum.test(value)) {
            return 'Vui lòng nhập số'    
        }
        else if (rules.isPhone && !patternPhone.test(value)) {
            return 'Vui lòng nhập số điện thoại Việt Nam hợp lệ có 10 chữ số'    
        }
        else if (rules.isPassword && !patternPass.test(value)) {
            return 'Mật khẩu có từ 8-20 ký tự (gồm 1 ký tự viết hoa - 1 ký tự là số)'    
        }
        else if (rules.isMatch && !passValue.match(value)) {
            return 'Mật khẩu nhập lại không khớp'    
        }
        else if (rules.isEmail && !patternEmail.test(value)) {
            return 'Vui lòng nhập Email'
        }
        else if (rules.required && !(value.length >= rules.minLength)) {
            return 'Vui lòng nhập nhiều hơn ' +  rules.minLength + " ký tự"
        }
        else if (rules.required && !(value.length <= rules.maxLength)) {
            return 'Vui lòng nhập ít hơn ' +  rules.maxLength + " ký tự"
        }
        else{
            return 
        }
       
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
       
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        // updatedOrderForm.password.elementConfig.type = "text"
        // updatedOrderForm.password.elementConfig.type = "text"

        updatedFormElement.valid = true;
        updatedFormElement.touched = false;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({orderForm: updatedOrderForm});

    }

    bluredHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
       

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }


   
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>

                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        label={formElement.config.label}
                        icon={formElement.config.icon}
                        showPassword={()=>this.toogleType(formElement.id)}
                        error={this.showError(formElement.config.value, formElement.config.validation)}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} 
                        blured={(event) => this.bluredHandler(event, formElement.id)}           
                        />
                ))}

            <Col>
                <button className="my-3 btn btn-primary" disabled={!this.state.formIsValid}>ORDER</button>
            </Col>
            </form>
        );
        return (
        <>
            <h1 className="app">Form</h1>
            <Container>
                 {form}
            </Container>
        </>
            

        )
    }
}

export default About



