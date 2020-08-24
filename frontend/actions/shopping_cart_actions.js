export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export const addItemToCart = (foodInfo) => ({
  type: ADD_ITEM_TO_CART,
  foodInfo // { foodId: 5, quantity: 20}
});

export const removeItemFromCart = (foodId) => ({
  type: REMOVE_ITEM_FROM_CART,
  foodId
});