import React from 'react';

const AddToCart = (props) => {
  const { remainingQuantity, addItemsToCart, stateQuantity, price } = props;

  if(remainingQuantity > 0) {
    return (
      <button onClick={addItemsToCart} className="add-to-cart-btn">
        <span>Add to Order</span>
        <span>${(stateQuantity * price).toFixed(2)}</span>
      </button>
    )
  } else {
    return null;
  }
}

export default AddToCart;