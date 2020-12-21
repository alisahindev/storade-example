import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img from "../icons/image.png";

function CardComp() {
  return (
    <Col style={{ padding: 0 }}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>2019 Fall - Winter collection Silk Tunic</Card.Text>
          <Card.Title>$ 49,90</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardComp;
