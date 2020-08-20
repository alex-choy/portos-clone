import React from 'react';

const FoodIndexItem = (props) => {
  const { name, quantity, price, description, image_url } = props.foodItem;
  console.log(typeof price);
  return (
    <div className="food-card">
        <h2>{name}</h2>
        <h5>{image_url}</h5>

        <p>Quantity: {quantity}</p>
        <p>${parseFloat(price).toFixed(2)} each</p>
        <p>{description}</p>
    </div>
  );
}

export default FoodIndexItem;