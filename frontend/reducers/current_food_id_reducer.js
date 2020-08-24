import { SET_ORDER_ITEM_MODAL_ID } from '../actions/modal_actions';
import { ADD_ITEM_TO_CART } from '../actions/shopping_cart_actions';

const currentFoodIdReducer = (oldState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SET_ORDER_ITEM_MODAL_ID:
      return action.foodId
    case ADD_ITEM_TO_CART:
      return oldState;
    default:
      return null;
  }
}

export default currentFoodIdReducer;