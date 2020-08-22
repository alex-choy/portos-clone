import React from 'react';

const OrderPageItem = (props) => {
  const { id, name, quantity, price, photo_url, description } = props.foodItem;
  return (
    <div className="category-item" onClick={() => props.itemClick(id)}>
      <h3 className="order-food-title">*{name}*</h3>
      <p className="order-food-desc">{description}</p>
      <p className="order-food-price">${parseFloat(price).toFixed(2)}</p>
    </div>
  );
};

export default OrderPageItem;