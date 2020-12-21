import React from "react";

function OrderItem() {
  return (
    <div className="order-item">
      <span className="left">
        <span className="item-name">2019 Fall - Winter Collection</span>
        <span className="item-detail">Size M, Cotton</span>
      </span>
      <span className="right">
        <span className="installment">3x50,00</span>
        <span className="item-price">150,00</span>
      </span>
    </div>
  );
}

export default OrderItem;
