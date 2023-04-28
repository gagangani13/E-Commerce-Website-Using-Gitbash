import React, { useContext} from 'react'
import { Row,Col, Button, Container } from 'react-bootstrap'
import CartItem from './CartItem'
import CartContext from '../Context/CartContext'
const CartDisplay = () => {
    const details=useContext(CartContext)
  return (
    <div className='container' style={{width: 'auto',
        height: 'max-content',
        backgroundColor:' #443e3e',
        position: 'fixed',
        top: '10%',
        right: '2%',
        color:'white',
        display: "grid",
        rowGap: "1rem",
        zIndex:10
      }}>
        <Container className='d-flex align-items-center justify-content-between'>
          <h2>CART</h2>
          <Button variant='danger' onClick={details.showCart}>X</Button>
        </Container>
      <Row className='row-cols-3'>
        <Col>ITEM</Col>
        <Col>PRICE</Col>
        <Col>QUANTITY</Col>
      </Row>
      <CartItem/> 
 </div>
  )
}

export default CartDisplay
