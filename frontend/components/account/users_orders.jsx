import React from 'react';
import UserOrderItem from './user_order_item';

const UsersOrders = ({ orders }) => {
  const usersOrders = orders.map(order => {
    const { id, pickup_time: pickupTime, updated_at: updatedAt } = order;
    return (
      <UserOrderItem
        key={id}
        id={id}
        pickupTime={pickupTime}
        updatedAt={updatedAt}
      />
    );
  })

  return usersOrders;
}

export default UsersOrders;