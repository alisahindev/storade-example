import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardComp({ title, price, media, id, key, onClick }) {
  return (
    <Col key={key} style={{ padding: 0 }}>
      <Card onClick={onClick}>
        <Card.Img variant="top" src={`images/${media}.png`} />
        <Card.Body>
          <Card.Text>{title}</Card.Text>
          <Card.Title>{`$ ${price.toFixed(2)}`}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardComp;

CardComp.defaultProps = {
  title: "",
  price: "",
  media: "",
};
