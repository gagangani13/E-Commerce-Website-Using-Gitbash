import React from "react";
import { Card, Button } from "react-bootstrap";
const Tours = () => {
  const arr = [
    {
      Id: 1,
      Date: "JUL 16",
      Location: "DETROIT,MI",
      Theatre: "DTE ENERGY MUSIC THEATRE",
    },
    {
      Id: 2,
      Date: "JUL 19",
      Location: "TORONTO,ON",
      Theatre: "BUDWEISER STAGE",
    },
    {
      Id: 3,
      Date: "JUL 22",
      Location: "BRISTOW,VA",
      Theatre: "JIGGY LUBE LIVE",
    },
    {
      Id: 4,
      Date: "JUL 29",
      Location: "PHOENIX,AZ",
      Theatre: "AK-CHIN PAVILION",
    },
    {
      Id: 5,
      Date: "AUG 2",
      Location: "LAS VEGAS,NV",
      Theatre: "T-MOBILE ARENA",
    },
    {
      Id: 6,
      Date: "AUG 7",
      Location: "CONCORD,CA",
      Theatre: "CONCORD PAVILION",
    },
  ];
  return (
    <>
      <Card
        className="text-white text-center"
        variant="light"
        style={{
          width: "100%",
          height: "40vh",
          fontSize: "10vw",
          backgroundColor: "grey",
          justifyContent: "center",
        }}
      >
        The Generics
      </Card>
      <Card.Title className='text-center'>TOURS</Card.Title>
      <Card style={{ top: "2rem",marginBottom:'2rem',backgroundColor:'#2d2c2c',color:'whitesmoke' }}>
        {arr.map((item) => {
          return (
            <Card.Body className="d-flex justify-content-between">
              <span>{item.Date}</span>
              <span>{item.Location}</span>
              <span>{item.Theatre}</span>
              <Button variant='success'>BUY TICKETS</Button>
            </Card.Body>
          );
        })}
      </Card>
    </>
  );
};

export default Tours;
