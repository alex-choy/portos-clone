import React from 'react';

const OrderPageQuantity = (props) => {
  const { increaseQuantity, decreaseQuantity, stateQuantity, remainingQuantity } = props;
  if (remainingQuantity > 0 ) {
    return (
      <section className="order-modal-quantity">
        <button
          className={`quantity-btn ${stateQuantity > 1 ? "" : "disabled"}`}
          onClick={decreaseQuantity}
        >
          &ndash;
        </button>
        <input type="text" value={stateQuantity} disabled />
        <button className={`quantity-btn ${stateQuantity === remainingQuantity ? "disabled" : ""}`} onClick={increaseQuantity}>
          +
        </button>
      </section>
    );
  }
  return null;
}

export default OrderPageQuantity;