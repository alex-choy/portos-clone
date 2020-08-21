import React from 'react';

const OrderPageItem = (props) => {
  const { name, quantity, price, photo_url, description } = props.foodItem;
  return (
    <div>
      {name}
    </div>
  );
};

export default OrderPageItem;