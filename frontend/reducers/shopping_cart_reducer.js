import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_LOCAL_SHOPPING_CART,
} from "../actions/shopping_cart_actions";

const shoppingCartReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = state.slice();

  switch(action.type) {
    case ADD_ITEM_TO_CART:
      const { foodId } = action.foodInfo;
      const cartItemIdx = newState.findIndex((foodInfo => foodInfo.foodId === foodId));
      if(cartItemIdx >= 0) {
        newState[cartItemIdx] = action.foodInfo;
      } else {
        newState.push(action.foodInfo);
      }
      return newState;
    case REMOVE_ITEM_FROM_CART: 
      const foodItemIdx = state.findIndex(foodItem => foodItem.foodId === action.foodId);
      newState.splice(foodItemIdx, 1);
      return newState;
    case GET_LOCAL_SHOPPING_CART:
      return action.shoppingCart;
    default: 
      return state;
  }
}

export default shoppingCartReducer;