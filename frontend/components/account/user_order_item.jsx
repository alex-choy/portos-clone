import React from 'react';
import { Link } from "react-router-dom";

const UserOrderItem = ({ id, pickupTime, updatedAt}) => {
  
  return (
    <div className="user-order">
      <Link to={`/orders/${id}`} className="order-link">
        <h3>Order #{id}</h3>
      </Link>
      <span className="order-times">
        <p>Picked Up on: {pickupTime}</p>
        <p>Last Updated: {updatedAt}</p>
      </span>
    </div> 
  )
};

export default UserOrderItem;