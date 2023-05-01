import React, { useContext,useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import CartDisplay from "./CartDisplay";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
const ProductDetail = () => {
  const[reRoute,setRoute]=useState(false)
  const details = useContext(CartContext);
  const { Id } = useParams();
  function addItemToCart(e) {
    details.addItemToCart(e.target.id);
  }
  function goBack() {
    setRoute(true)
  }

  return (
    <>
      <Button
        variant="primary"
        style={{ zIndex: "6", position: "fixed", right: "1%", top: "0%" }}
        onClick={details.showCart}
      >
        Cart{" "}
        <Badge bg="secondary">
          {details.items.reduce((acc, curr) => {
            return acc + Number(curr.Qty);
          }, 0)}
        </Badge>
      </Button>
      {details.openCart && <CartDisplay />}
      <div
        className="container"
        style={{
          maxWidth: "67vw",
          padding: "20px 30px",
          margin: "auto",
          position: "relative",
          top: "2rem",
        }}
      >
        {details.items.map((item) => {
          return (
            Number(item.Id) === Number(Id) && (
              <Card style={{ width: "50%" ,fontSize:'20px',fontWeight:'bold'}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body className='d-grid' style={{rowGap:'1rem',gridTemplateColumns:'50% 50%',}}>
                  <Card.Text>
                    Ratings:
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                  </Card.Text>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Button variant="danger" onClick={goBack}>GO BACK</Button>
                  <Button id={item.Id} variant="primary"onClick={addItemToCart}>ADD TO CART</Button>
                </Card.Body>
                {reRoute&& <Route path={`/STORE/${Id}`}>
                  <Redirect to='/STORE'/>
                  </Route>}
              </Card>
            )
          );
        })}
      </div>
    </>
  );
};

export default ProductDetail;
