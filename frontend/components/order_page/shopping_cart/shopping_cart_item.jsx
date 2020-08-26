import React from 'react';
const displayButtons = () => {
  return (
    <div className="cart-item-bot">
      <button onClick={() => editCartItems(id)}>Edit</button>
      <p className="separator">|</p>
      <button onClick={() => removeItemFromCart(id)}>Remove</button>
    </div>
  )
}
const ShoppingCartItem = ({ 
  cartQuantity, 
  foodItem: { id, name, price }, 
  removeItemFromCart, 
  editCartItems 
}) => {
  // let buttons;
  // if(removeItemFromCart && editCartItems) {
  //   // buttons = (
  //   //   <div className="cart-item-bot">
  //   //     <button onClick={() => editCartItems(id)}>Edit</button>
  //   //     <p className="separator">|</p>
  //   //     <button onClick={() => removeItemFromCart(id)}>Remove</button>
  //   //   </div>
  //   // )
  //   console.log('buttons added');
  // }
  console.log('shopping cart: ', id, name, price);
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
      {removeItemFromCart && editCartItems ? displayButtons() : ''}
    </div>
  );
}

export default ShoppingCartItem;