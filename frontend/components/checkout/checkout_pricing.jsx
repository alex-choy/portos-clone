import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPricing = (props) => {
  const { totalPrice } = props;
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
     </div>
     <Link to="/checkout" className="checkout-btn">
       Place Order
     </Link>
    </div> 
  );
};

export default CheckoutPricing;