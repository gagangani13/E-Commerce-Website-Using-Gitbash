import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Row, Col, Card , Button} from "react-bootstrap";
const CartItem = () => {
  const details = useContext(CartContext);
  let total = 0;
  function remove(e){
    details.removeItemFromCart(e.target.id)
  }
  return (
    <>
      {details.items.map((item) => {
        total += Number(item.Qty) * item.price;
        return (
          <>
            {item.Qty > 0 && (
              <Row row-cols-3 className="align-items-center">
                <Col className="d-flex align-items-center ">
                  <Col>
                    <Card.Img
                      variant="left"
                      src={item.imageUrl}
                      style={{ width: "5rem" }}
                    />
                  </Col>
                  <Col>{item.title}</Col>
                </Col>
                <Col>${item.price}</Col>
                <Col className="d-flex align-items-center ">
                    <Col>{item.Qty}</Col>
                    <Button variant='danger' id={item.Id} onClick={remove}>REMOVE</Button>
                </Col>
              </Row>
            )}
          </>
        );
      })}
      <span className="text-end">Total Price:{total}</span>
    </>
  );
};

export default CartItem;
