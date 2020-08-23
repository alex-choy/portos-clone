import React from 'react';

const OrderPageQuantity = (props) => {
  const { increaseQuantity, decreaseQuantity, quantity } = props;
  return (
    <section className="order-modal-quantity">
      <button
        className={`quantity-btn ${quantity > 1 ? "" : "disabled"}`}
        onClick={decreaseQuantity}
      >
        &ndash;
      </button>
      <input type="text" value={quantity} disabled />
      <button className="quantity-btn" onClick={increaseQuantity}>
        +
      </button>
    </section>
  );
}

export default OrderPageQuantity;