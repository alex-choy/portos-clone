import React from 'react';

const FoodIndexItem = (props) => {
  const { name, quantity, price, description, image_url, photo_url } = props.foodItem;
  console.log('photo: ', photo_url);
  return (
    <div className="food-card">
        <h2>{name.toUpperCase()}</h2>
        <h5>{image_url}</h5>
        <img src={photo_url} alt=""/>
        {/* <img src="croissant-qZ5lPCPvdXE-unsplash.jpg" alt=""/> */}
        {/* <p>Quantity: {quantity}</p> */}
        <p>${parseFloat(price).toFixed(2)} each</p>
        <p>{description}</p>
    </div>
  );
}

export default FoodIndexItem;