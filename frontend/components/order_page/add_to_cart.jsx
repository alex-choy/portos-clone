import React from 'react';

const AddToCart = (props) => {
  const { remainingQuantity, addItemToCart, stateQuantity, price, buttonText } = props;

  if(remainingQuantity > 0) {
    return (
      <button onClick={addItemToCart} className="add-to-cart-btn">
        <span>{buttonText}</span>
        <span>${(stateQuantity * price).toFixed(2)}</span>
      </button>
    );
  } else {
    return null;
  }
}

export default AddToCart;