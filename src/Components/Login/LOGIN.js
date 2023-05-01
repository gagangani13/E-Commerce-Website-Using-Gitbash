import React, { useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { Route,Redirect } from "react-router-dom/cjs/react-router-dom";
import CartContext from "../Context/CartContext";
const LOGIN = () => {
    const ctx=useContext(CartContext)
  const emailRef = useRef();
  const passwordRef = useRef();
  async function addData(e) {
    e.preventDefault();

    const Email = emailRef.current.value;
    const Password = passwordRef.current.value;

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXPzqlI6fvUIQX7LiIqUK-vdC_dfWQ0q8",
      {
        method: "POST",
        body: JSON.stringify({
          email: Email,
          password: Password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    try {
      if (response.ok) {
        const token = data.idToken;
        ctx.isLoggedInFunction(token)

      } else {
        throw new Error();
      }
    } catch (error) {
      let msg = "ERROR";
      console.log(data);
      if (data && data.error && data.error.message) msg = data.error.message;
      alert(msg);
    }
  }
  return (
    <div
      style={{
        top: "8rem",
        position: "relative",
        backgroundColor: "#48d9cf3b",
      }}
    >
      <h1 style={{ backgroundColor: "darkgray" }} className="text-center mb-4">
        LOGIN
      </h1>
      <div className="container">
        <Form className="d-grid" onSubmit={addData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </div>
      {ctx.isLoggedIn&&<Route>
        <Redirect to='/STORE'/></Route>}
    </div>
  );
};

export default LOGIN;