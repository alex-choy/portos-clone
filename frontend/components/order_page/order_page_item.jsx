import React from 'react';

const OrderPageItem = (props) => {
  const { id, name, quantity, price, description } = props.foodItem;
  const priceOrSoldOut = (quantity > 0) ? 
      <p className="order-food-price">${parseFloat(price).toFixed(2)}</p>
      :
      <p className='sold-out-price'>SOLD OUT</p>;

  return (
    <div className="category-item" onClick={() => props.itemClick(id)}>
      <h3 className="order-food-title">{name}</h3>
      <p className="order-food-desc">{description}</p>
      {priceOrSoldOut}
    </div>
  );
};

export default OrderPageItem;