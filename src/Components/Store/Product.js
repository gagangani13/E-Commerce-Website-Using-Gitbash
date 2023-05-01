import React, { useContext,useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import CartContext from "../Context/CartContext";
import ProductDetail from "./ProductDetail";
const Product = () => {
  
  const[reRoute,setRoute]=useState(null)
  const details = useContext(CartContext);
  function addItemToCart(e) {
    details.addItemToCart(e.target.id);
  }
  function clicked(e) {
    setRoute(e.target.parentElement.id)
  }

  return (
    <div
      className="container"
      style={{ maxWidth: "75vw", padding: "20px 30px", margin: "auto" }}
    >
      <div
        className="d-flex justify-content-around flex-wrap"
        style={{ rowGap: "2rem" }}
      >
        {details.items.map((item) => {
          return (
            <Card style={{ width: "30rem" }}>
              <div id={item.Id}>
                <Card.Title className="text-center" onClick={clicked}>
                  {item.title}
                </Card.Title>
                <Card.Img variant="top" onClick={clicked} src={item.imageUrl} />
              </div>
              <Card.Body className="d-flex align-items-baseline justify-content-between">
                <Card.Text style={{fontSize:'large'}}>${item.price}</Card.Text>
                <Button variant="primary" id={item.Id} onClick={addItemToCart}>
                  ADD TO CART
                </Button>
              </Card.Body>
              {console.log(reRoute)}
              {reRoute&&<Route path="/STORE" >
                <Redirect to= {`/STORE/${reRoute}`}  />
                <ProductDetail/>
              </Route>}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
