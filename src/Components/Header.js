import React, {  useContext, useEffect} from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import CartContext from "./Context/CartContext";
const Header = () => {
  const ctx=useContext(CartContext)
  function logout(){
    ctx.isLoggedInFunction(false)
    localStorage.removeItem('Login')
    localStorage.removeItem('Cart')
    localStorage.removeItem('Token')
  }
  useEffect(()=>{
    if(localStorage.getItem('Login')==='false'){
      ctx.isLoggedInFunction(false)
      localStorage.removeItem('Token')
      localStorage.removeItem('Cart')
    }else{
      ctx.isLoggedInFunction(localStorage.getItem('Login'))
      ctx.tokenFunction(localStorage.getItem('Token'))
      ctx.loadFromCrud()
    }

    // eslint-disable-next-line
  },[])
  return (
    <Navbar
      bg="dark"
      expand="sm"
      variant="dark"
      className="position-fixed w-100 text-l"
      style={{ zIndex: "5" }}
    >
      <Container >
        <NavLink to="/HOME"><NavbarBrand>HOME</NavbarBrand></NavLink>
        <NavLink to="/STORE"><NavbarBrand>STORE</NavbarBrand></NavLink>
        <NavLink to="/ABOUT"><NavbarBrand>ABOUT</NavbarBrand></NavLink>
        <NavLink to="/CONTACT"><NavbarBrand>CONTACT US</NavbarBrand></NavLink>
        {!ctx.isLoggedIn.loggedIn&&<NavLink to="/LOGIN"><NavbarBrand>LOGIN</NavbarBrand></NavLink>}
        {ctx.isLoggedIn.loggedIn&&<NavLink to="/LOGIN"><NavbarBrand onClick={logout}>LOGOUT</NavbarBrand></NavLink>}
      </Container>
    </Navbar>
  );
};

export default Header;
