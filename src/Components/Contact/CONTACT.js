import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const CONTACT = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()
    async function addData(e){
        e.preventDefault();
        const details={Name:nameRef.current.value,Email:emailRef.current.value,Phone:phoneRef.current.value}
        const response=await fetch(`https://contact-us-2693d-default-rtdb.firebaseio.com/Users.json`,{
            method:'POST',
            body:JSON.stringify(details)
        })
        console.log(response.json())
        nameRef.current.value=''
        emailRef.current.value=''
        phoneRef.current.value=''
    }
  return (
    <div style={{top:'8rem',position:'relative',backgroundColor:'#48d9cf3b'}}>
    <h1 style={{backgroundColor:'darkgray'}} className='text-center mb-4'><i class="fa-solid fa-headset"></i> CONTACT US</h1>
    <div className='container'   >
    <h2 >Please submit this form if there are any issues</h2>
    <Form className="d-grid" onSubmit={addData}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" ref={nameRef} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" ref={phoneRef} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Above details are correct" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
};

export default CONTACT;
