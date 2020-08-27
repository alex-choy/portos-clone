import React from 'react';
import { Link } from 'react-router-dom';

const OrderShowItem = (props) => {
  const { imgUrl, foodId, name, quantity, price } = props;
  return (<section className="order-item-receipt no-top-border">
    <section className="left-order-item">
      <img src={imgUrl} alt="" />
      <section className="order-item-text">
        <Link to={`/menu/${foodId}`} className="food-link">{name}</Link>
        <span>Quantity: {quantity}</span>
      </section>
    </section>
    <span className="price">
      ${(parseFloat(price) * quantity).toFixed(2)}
    </span>

  </section>);
};

export default OrderShowItem;