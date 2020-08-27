import React from 'react';
import ShoppingCartItem from '../order_page/shopping_cart/shopping_cart_item';
import CheckoutPricing from '../checkout/checkout_pricing';
const OrderItems = (props) => {
  const { cartFoodItems, foodItems } = props;
  // Below are button methods for updating items, are nil for the Checkout page
  const { removeItemFromCart, editCartItems } = props; 
  let totalPrice = 0;
  const renderedOrderItems = cartFoodItems.map((orderedItem, idx) => {
    const { quantity } = orderedItem;
    const foodId = (orderedItem.foodId) ? orderedItem.foodId : orderedItem.food_item_id;
    const foodItem = foodItems[foodId];
    totalPrice += foodItem.price * quantity;
    
    return <ShoppingCartItem
      key={idx}
      cartQuantity={quantity}
      foodItem={foodItem}
      removeItemFromCart={removeItemFromCart}
      editCartItems={editCartItems}
    />
  }); 

  const strTotalPrice = `$${totalPrice.toFixed(2)}`;
  // These show up only for submitting orders, not for confirmation
  const { handleSubmitOrder, getErrors } = props;
  renderedOrderItems.push(
    <CheckoutPricing
      key="total"
      totalPrice={strTotalPrice}
      handleSubmitOrder={handleSubmitOrder}
      getErrors={getErrors}
    />
  );

  return renderedOrderItems;
};

export default OrderItems;