export const requestOrders = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/orders`,
  })
);

export const requestOrder = (orderId) => (
  $.ajax({
    method: 'GET',
    url: `/api/orders/${orderId}`,
  })
);

export const createOrder = (shoppingCart, order) => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: {
      shoppingCart,
      order
    }
  })
);

// export const updateOrder = () => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/orders/${orderId}`,
//     data: {

//     }
//   })
// );  

export const deleteOrder = (orderId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/orders/${orderId}`
  })
);


