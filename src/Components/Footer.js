import React from "react";
import { Nav } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="bg-dark text-white  p-30px 20px d-flex justify-content-around align-items-center" style={{ fontSize: "2rem" ,width:'100%',position:'absolute',marginTop:'2rem'}}>
        The Generics
      <div style={{display:"contents"}}>
        <Nav.Link href="https://www.youtube.com">
          <i class="fa-brands fa-youtube" style={{ color: "#e60f0f" }}></i>
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com">
          <i class="fa-brands fa-facebook"></i>
        </Nav.Link>
        <Nav.Link href="https://www.amazon.com">
          <i class="fa-brands fa-amazon" style={{ color: "#df7411" }}></i>
        </Nav.Link>
      </div>
    </footer>
  );
};

export default Footer;
