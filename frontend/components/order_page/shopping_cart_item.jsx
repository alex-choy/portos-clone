import React from 'react';

const ShoppingCartItem = ({ cartQuantity, foodItem: { name, price } }) => {

  return (
    <div className="cart-item">
      <div className="cart-item-top">
        <div className="item-top-left">
          <span className="cart-quantity">{cartQuantity}</span>
          <span>{name}</span>
        </div>
        <div className="item-top-right">
          <p>${(price * cartQuantity).toFixed(2)}</p>
        </div>
      </div>
      <div className="cart-item-bot">
        <button>Edit</button>
        <p className="separator">|</p>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;