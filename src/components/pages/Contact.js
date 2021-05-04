// import React from 'react'
// import { Container } from 'react-bootstrap';

// const Contact = () => {
//     return (
//         <>
//          <h1 className="app">Contact</h1>
//          <Container>
//          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptatum vel praesentium totam laudantium eos officiis ad obcaecati laboriosam alias vitae, ipsum a quasi maiores repellat molestias recusandae animi quisquam optio id est veritatis sunt. Doloribus quisquam nisi eaque perferendis doloremque repudiandae ad sit tempora praesentium dolorum sequi reprehenderit minus, tenetur ipsum autem nesciunt dicta necessitatibus assumenda. Nostrum praesentium aliquid cupiditate. Eius voluptas nulla, odit quidem perspiciatis non! Odio molestias error, unde, laudantium adipisci officiis architecto dolores, sequi autem soluta dolorem quas! Itaque minima deleniti deserunt voluptates ullam quasi earum architecto voluptatum iusto facilis perspiciatis animi repellat voluptate ducimus, odit ratione voluptatem consequuntur magnam eos inventore ipsa? Quas voluptatem, quibusdam dolor sint molestiae ipsa nihil eos amet consectetur laborum numquam quo dicta odio. Officiis iure maiores repudiandae perspiciatis recusandae iusto aspernatur cum corporis possimus! Expedita eligendi sit quis dicta? Explicabo, debitis. Assumenda doloribus accusamus deleniti iusto, nesciunt odio alias qui iste corporis maiores a odit expedita illum molestiae quibusdam ipsa aut pariatur officiis ducimus nam excepturi optio exercitationem, at recusandae! Aut expedita perspiciatis perferendis in esse voluptates asperiores, excepturi suscipit fugit omnis veritatis dicta quasi quo officia obcaecati debitis velit commodi optio exercitationem ad laudantium tenetur? Aperiam provident reiciendis, earum, beatae reprehenderit accusantium atque consectetur quaerat aut minima optio velit sed nihil adipisci voluptatibus hic sequi magnam laboriosam corrupti blanditiis!
//          <br></br>
//          Alias assumenda doloribus, laudantium non est impedit suscipit consectetur? Iusto aliquam eius quos iure perferendis quasi culpa laboriosam. Dolores ipsam velit debitis omnis, asperiores amet, quibusdam facere doloribus cupiditate, eveniet accusantium ea error dolor nisi unde quos culpa voluptate? Rerum quos expedita impedit? Nemo cupiditate nesciunt neque odio molestias ipsam ut eius qui iure impedit, reprehenderit corporis harum, ipsum possimus natus nostrum veritatis quasi voluptatibus. Laborum tenetur magnam neque voluptatibus, beatae nesciunt. Accusamus, ipsum temporibus incidunt dignissimos qui unde velit!</p>
//          </Container>
//         </>
        
//     )
// }

// export default Contact



import React from 'react';

class Contact extends React.Component {
  state = { width: 0, height: 0 };
  render() {
    return <span>Window size: {this.state.width} x {this.state.height}</span>;
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}

export default Contact


// import React, { Component } from 'react';

// import Button from '../../../components/UI/Button/Button';
// import Spinner from '../../../components/UI/Spinner/Spinner';
// import classes from './ContactData.css';
// import axios from '../../../axios-orders';
// import Input from '../../../components/UI/Input/Input';

// class ContactData extends Component {
//     state = {
//         orderForm: {
//             name: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'Your Name'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             street: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'Street'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             zipCode: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'ZIP Code'
//                 },
//                 value: '',
//                 validation: {
//                     required: true,
//                     minLength: 5,
//                     maxLength: 5,
//                     isNumeric: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             country: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'Country'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             email: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'email',
//                     placeholder: 'Your E-Mail'
//                 },
//                 value: '',
//                 validation: {
//                     required: true,
//                     isEmail: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             deliveryMethod: {
//                 elementType: 'select',
//                 elementConfig: {
//                     options: [
//                         {value: 'fastest', displayValue: 'Fastest'},
//                         {value: 'cheapest', displayValue: 'Cheapest'}
//                     ]
//                 },
//                 value: '',
//                 validation: {},
//                 valid: true
//             }
//         },
//         formIsValid: false,
//         loading: false
//     }

//     orderHandler = ( event ) => {
//         event.preventDefault();
//         this.setState( { loading: true } );
//         const formData = {};
//         for (let formElementIdentifier in this.state.orderForm) {
//             formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
//         }
//         const order = {
//             ingredients: this.props.ingredients,
//             price: this.props.price,
//             orderData: formData
//         }
//         axios.post( '/orders.json', order )
//             .then( response => {
//                 this.setState( { loading: false } );
//                 this.props.history.push( '/' );
//             } )
//             .catch( error => {
//                 this.setState( { loading: false } );
//             } );
//     }

//     checkValidity(value, rules) {
//         let isValid = true;
//         if (!rules) {
//             return true;
//         }
        
//         if (rules.required) {
//             isValid = value.trim() !== '' && isValid;
//         }

//         if (rules.minLength) {
//             isValid = value.length >= rules.minLength && isValid
//         }

//         if (rules.maxLength) {
//             isValid = value.length <= rules.maxLength && isValid
//         }

//         if (rules.isEmail) {
//             const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//             isValid = pattern.test(value) && isValid
//         }

//         if (rules.isNumeric) {
//             const pattern = /^\d+$/;
//             isValid = pattern.test(value) && isValid
//         }

//         return isValid;
//     }

//     inputChangedHandler = (event, inputIdentifier) => {
//         const updatedOrderForm = {
//             ...this.state.orderForm
//         };
//         const updatedFormElement = { 
//             ...updatedOrderForm[inputIdentifier]
//         };
//         updatedFormElement.value = event.target.value;
//         updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
//         updatedFormElement.touched = true;
//         updatedOrderForm[inputIdentifier] = updatedFormElement;
        
//         let formIsValid = true;
//         for (let inputIdentifier in updatedOrderForm) {
//             formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
//         }
//         this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
//     }

//     render () {
//         const formElementsArray = [];
//         for (let key in this.state.orderForm) {
//             formElementsArray.push({
//                 id: key,
//                 config: this.state.orderForm[key]
//             });
//         }
//         let form = (
//             <form onSubmit={this.orderHandler}>
//                 {formElementsArray.map(formElement => (
//                     <Input 
//                         key={formElement.id}
//                         elementType={formElement.config.elementType}
//                         elementConfig={formElement.config.elementConfig}
//                         value={formElement.config.value}
//                         invalid={!formElement.config.valid}
//                         shouldValidate={formElement.config.validation}
//                         touched={formElement.config.touched}
//                         changed={(event) => this.inputChangedHandler(event, formElement.id)} />
//                 ))}
//                 <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
//             </form>
//         );
//         if ( this.state.loading ) {
//             form = <Spinner />;
//         }
//         return (
//             <div className={classes.ContactData}>
//                 <h4>Enter your Contact Data</h4>
//                 {form}
//             </div>
//         );
//     }
// }

// export default ContactData;