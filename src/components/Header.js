import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, Route } from 'react-router-dom';
import DataContext from './contextAPI/DataContext';


const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product",
    to: "/product",
    exact: false, /* chỉnh tab active ngay khi load trang set true ở exact */
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false,
  },
  {
    name: "About",
    to: "/about",
    exact: false,
  },
  // {
  //   name: <FaShoppingCart/>,
  //   to: "/cart",
  //   exact: false,
  // },

  
]



const MenuItems=  ({label, to, activeOnlyWhenExact})=>{
    return(
        <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
            let active = match ? "activeStyle" : "";
            return (
                <Nav.Link as="li" className={`${active}`}>
                  <NavLink className="red" exact to={to}>{label}</NavLink>
                </Nav.Link>
            )
        }}
        />
    )
}

 class Header extends Component {
    static contextType = DataContext

    render() {
        const {cart} = this.context
        let totalItem = cart.reduce((prev, item)=>{
          return prev +  item.count
        },0)

        let menuItems= menus.map((menuItem, index)=>{
          return(
            <MenuItems 
              key={index} 
              label={menuItem.name} 
              to={menuItem.to} 
              activeOnlyWhenExact={menuItem.exact}/>
          )
        }) 
        return (
            <Navbar bg="light" expand="md" className="py-0 flex-row-reverse">

              <Navbar.Brand as="div" className="py-0">
                <Link className="no-underline relative" to="/cart">
                   <MenuItems label={<FaShoppingCart/>} to="/cart"/>
                   <span className={`cart ${totalItem>99 ? "cart-wide"  : ""}`}>{totalItem}</span>
                </Link>
              </Navbar.Brand>

              <Navbar.Brand as="div"><Link className="mx-auto no-underline" to="/">React-Bootstrap</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" relative" as="ul">
                
                {menuItems}
                
                {/* <span className={`cart ${totalItem>99 ? "cart-wide"  : ""}`}>{totalItem}</span> */}

                {/* <MenuItems label="Home" to="/" activeOnlyWhenExact/>
                <MenuItems label="Product" to="/product"/>
                <MenuItems label="Contact" to="/contact"/>
                <MenuItems label="About" to="/about"/> */}

                {/* <Nav.Link as="li">
                  <Link exact to="/">Home</Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to="/product">Product</Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to="/about">About</Link>
                </Nav.Link> */}

                
                {/* <Nav.Link to="/register">Log in/Register</Nav.Link> */}
                {/* <Nav.Link to="/cart">Cart</Nav.Link> */}
                </Nav>

              </Navbar.Collapse>


          </Navbar>
        )
    }
}

export default Header








