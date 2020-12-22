import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import OrderItem from "./OrderItem";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import ModalComp from "../modal/Modal";

const OrderCart = observer(() => {
  const [show, setShow] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const { cartStore } = useStore();
  const { subTotal, tax, discount, cartItems } = cartStore;
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
        <span className="icon-svg-contact"></span>
        <span>Add Customer</span>
      </div>
      <div className="order-card">
        {cartStore.cartItems.map((item) => (
          <OrderItem
            onRemove={() => cartStore.removeItem(item.id)}
            detail={item.detail}
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            installment={item.installment}
          />
        ))}
      </div>
      <div className="bill-section">
        <span className="subtotal">
          <span>Subtotal</span>
          <span className="price">{subTotal?.toFixed(2)}</span>
        </span>
        <span className="subtotal">
          <span>Tax %18</span>
          <span className="price">{tax.toFixed(2)}</span>
        </span>
        <span className="subtotal">
          <span className="discount">
            Discount (%10)
            <span
              onClick={() => {
                setEdit(true);
                setShow(true);
              }}
              className="icon-svg-pencil"
            ></span>
            <span className="icon-svg-trash"></span>
          </span>
          <span className="price">{`-${discount.toFixed(2)}`}</span>
        </span>
        <div className="subtotal add-discount">
          <span>Add Discount</span>
          <span
            onClick={() => setShow(true)}
            className="icon-svg-discount"
          ></span>
        </div>
        <Button className="charge">
          <span>Charge</span>
          <span>{(tax + subTotal - discount).toFixed(2)}</span>
        </Button>
        <ModalComp
          isEdit={isEdit}
          show={show}
          onHide={() => {
            setEdit(false);
            setShow(false);
          }}
        />
      </div>
    </Col>
  );
});

export default OrderCart;
