import { SHOPPING_CART } from "../components/order_page/order_page";

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const GET_LOCAL_SHOPPING_CART = "GET_LOCAL_SHOPPING_CART";

export const addItemToCart = (foodInfo) => ({
  type: ADD_ITEM_TO_CART,
  foodInfo // { foodId: 5, quantity: 20}
});

export const removeItemFromCart = (foodId) => ({
  type: REMOVE_ITEM_FROM_CART,
  foodId
});

export const getLocalShoppingCart = () => {
  console.log(localStorage.getItem(SHOPPING_CART));
  return {
    type: GET_LOCAL_SHOPPING_CART,
    shoppingCart: JSON.parse(localStorage.getItem(SHOPPING_CART))
}};