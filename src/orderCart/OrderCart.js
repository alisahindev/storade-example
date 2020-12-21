import React from "react";
import { Button, Col } from "react-bootstrap";
import OrderItem from "./OrderItem";

function OrderCart() {
  return (
    <Col className="right-bar">
      <div className="order-top">
        <span className="order-tax">ORDER #SO0003</span>
        <span className="icons">
          <span className="icon-svg-scanner"></span>
          <span className="icon-svg-trash"></span>
        </span>
      </div>
      <span className="table">TABLE 1</span>
      <div className="add-customer">
        <span className="icon-svg-content"></span>
        <span>Add Customer</span>
      </div>
      <div className="order-card">
        <OrderItem />
      </div>
      <div className="bill-section">
        <span className="subtotal">
          <span>Subtotal</span>
          <span>381.35</span>
        </span>
        <span className="subtotal">
          <span>Tax %18</span>
          <span>68.65</span>
        </span>
        <span className="subtotal">
          <span>
            Discount<span className="icon-svg-pencil"></span>
            <span className="icon-svg-trash"></span>
          </span>
          <span>-45,00</span>
        </span>
        <div className="add-discount">
          <span>Add Discount</span>
          <span className="icon-svg-discount"></span>
        </div>
      </div>
      <Button>
        <span>Charge</span>
        <span>450,00</span>
      </Button>
    </Col>
  );
}
export default OrderCart;
