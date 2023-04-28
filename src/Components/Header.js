import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const Header = () => {
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
      </Container>
    </Navbar>
  );
};

export default Header;
