import React, {  } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
// import CartContext from "./Context/CartContext";
const Header = () => {
  // const ctx=useContext(CartContext)
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
        <NavLink to="/LOGIN"><NavbarBrand>LOGIN</NavbarBrand></NavLink>
      </Container>
    </Navbar>
  );
};

export default Header;
