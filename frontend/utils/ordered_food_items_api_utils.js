export const requestOrderedFoodItems = (orderId) => (
  $.ajax({
    method: 'GET',
    url: `/api/orders/${orderId}/ordered_food_items`
  })
);