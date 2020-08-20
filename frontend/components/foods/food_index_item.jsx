import React from 'react';
import { Link } from 'react-router-dom';

const FoodIndexItem = (props) => {
  const { id, name, price, description, image_url, photo_url } = props.foodItem;
  return (
    <Link to={`/menu/${id}`} className="food-card">
        <h2>{name.toUpperCase()}</h2>
        <h5>{image_url}</h5>
        <img src={photo_url} alt=""/>
        {/* <img src="croissant-qZ5lPCPvdXE-unsplash.jpg" alt=""/> */}
        {/* <p>Quantity: {quantity}</p> */}
        <p>${parseFloat(price).toFixed(2)} each</p>
        <p>{description}</p>
    </Link>
  );
}

export default FoodIndexItem;