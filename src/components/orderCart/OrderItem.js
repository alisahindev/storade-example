import React from "react";

function OrderItem({ title, price, media, id, key, onClick, detail, installment, onRemove }) {
  return (
    <div onClick={onRemove} className="order-item">
      <span className="left">
        <span className="item-name">{title}</span>
        <span className="item-detail">{detail}</span>
      </span>
      <span className="right">
        <span className="installment">{`${installment}x${(price / installment).toFixed(0)}`}</span>
        <span className="item-price">{price.toFixed(2)}</span>
      </span>
    </div>
  );
}

export default OrderItem;
