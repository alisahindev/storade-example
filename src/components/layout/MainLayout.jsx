import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "../content/Content";
import Navmenu from "../Navbar/Navbar";
import OrderCart from "../orderCart/OrderCart";

export default function MainLayout() {
  return (
    <Container fluid>
      <Row style={{ height: "100vh", overflow: "hidden" }}>
        <Navmenu />
        <Content />
        <OrderCart />
      </Row>
    </Container>
  );
}
