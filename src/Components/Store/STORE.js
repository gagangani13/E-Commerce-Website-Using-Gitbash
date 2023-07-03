import React, { useContext} from "react";
import { Card, Button, Badge } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import Product from "./Product";
import CartDisplay from "./CartDisplay";
import { Route,Redirect } from "react-router-dom/cjs/react-router-dom";
const STORE= () => {
  const details = useContext(CartContext)
  
  return (
    <>
    {!details.isLoggedIn.loggedIn&&<Route>
          <Redirect to='/LOGIN'/></Route>}
      {details.isLoggedIn.loggedIn&&<div>
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
        { details.openCart && <CartDisplay/>}
        <Card
          className="text-white text-center"
          variant="light"
          style={{
            width: "100%",
            height: "30vh",
            fontSize: "10vw",
            backgroundColor: "grey",
            justifyContent: "center",
          }}
        >
          The Generics
        </Card>
        <h3
          style={{ textAlign: "center", fontWeight: "bold", padding: "20px 0" }}
        >
          PRODUCTS
        </h3>
        <Product/>
        <Button
          variant="primary"
          className="d-flex  mx-auto mb-1rem"
          onClick={details.showCart}
        >
          SEE CART
        </Button>
      </div>}
    </>
  );
};

export default STORE;
