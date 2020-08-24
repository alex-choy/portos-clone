export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

export const addItemToCart = (foodInfo) => ({
  type: ADD_ITEM_TO_CART,
  foodInfo // { foodId: 5, quantity: 20}
});