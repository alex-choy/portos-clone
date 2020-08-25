import {
  SET_ORDER_ITEM_MODAL_ID,
  OPEN_ORDER_ITEM_MODAL,
} from "../actions/modal_actions";
import { ADD_ITEM_TO_CART } from '../actions/shopping_cart_actions';

const currentFoodIdReducer = (oldState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SET_ORDER_ITEM_MODAL_ID:
      return action.foodId
    case ADD_ITEM_TO_CART:
      return oldState;
    case OPEN_ORDER_ITEM_MODAL:
      return oldState;
    default:
      return null;
  }
}

export default currentFoodIdReducer;