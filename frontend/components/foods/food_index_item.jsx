import React from 'react';
import { Link } from 'react-router-dom';

const FoodIndexItem = (props) => {
  const { id, name, price, description, photo_url } = props.foodItem;
  return (
    <Link to={`/menu/${id}`} className="food-card">
        <img src={photo_url} alt=""/>
        <h2>{name.toUpperCase()}</h2>
    </Link>
  );
}

export default FoodIndexItem;