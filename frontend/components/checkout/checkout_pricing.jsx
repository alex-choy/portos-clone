import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPricing = (props) => {
  const { totalPrice, handleSubmitOrder, getErrors } = props;
  // const totalPrice = "hi";
  return (
    <div key="cart-bottom" className="no-top-border shopping-cart-bottom">
     <div className="checkout-pricing">
       <span className="prices">
         <span>Subtotal:</span>
         <span>{totalPrice}</span>
       </span>
       <span className="prices">
         <span>Taxes:</span>
         <span>$0.00</span>
       </span>
       <span className="prices total-price">
         <h3>Total:</h3>
         <h3>{totalPrice}</h3>
       </span>
        <span className="errors-wrapper">
          {getErrors()}
        </span>
     </div>
      <button onClick={handleSubmitOrder} className="checkout-btn">
       Place Order
     </button>
    </div> 
  );
};

export default CheckoutPricing;