import React from 'react';
const displayButtons = (id, removeItemFromCart, editCartItems) => {
  return (
    <div className="cart-item-bot">
      <button 
        className="edit-cart-item cart-btn" 
        onClick={() => editCartItems(id)}>
        Edit  
      </button>
      <p className="separator">|</p>
      <button 
        className="remove-cart-item cart-btn" 
        onClick={() => removeItemFromCart(id)}>
        Remove 
      </button>
    </div>
  )
};

const ShoppingCartItem = ({ 
  cartQuantity, 
  foodItem: { id, name, price }, 
  removeItemFromCart, 
  editCartItems 
}) => {
  return (
    <div className="cart-item no-top-border">
      <div className="cart-item-top">
        <div className="item-top-left">
          <span className="cart-quantity">{cartQuantity}</span>
          <span className="cart-item-name">{name}</span>
        </div>
        <div className="item-top-right">
          <p>${(price * cartQuantity).toFixed(2)}</p>
        </div>
      </div>
      {/* Only make buttons for ordering, not in the confirmation page */}
      {removeItemFromCart && editCartItems ? displayButtons(id, removeItemFromCart, editCartItems) : ''}
    </div>
  );
}

export default ShoppingCartItem;