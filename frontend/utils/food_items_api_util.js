export const requestFoodItems = () =>
  $.ajax({
    method: "GET",
    url: "/api/food_items",
  });

export const requestFoodItem = (foodId) =>
  $.ajax({
    method: "GET",
    url: `/api/food_items/${foodId}`,
  });
