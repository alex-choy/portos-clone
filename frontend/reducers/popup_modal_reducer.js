// import OPEN_MODAL and CLOSE_MODAL
import {
  OPEN_SESSION_MODAL,
  OPEN_ORDER_ITEM_MODAL,
  CLOSE_MODAL,
} from "../actions/modal_actions";
import { ADD_ITEM_TO_CART } from "../actions/shopping_cart_actions";
const _defaultState = null;

const popupModalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_SESSION_MODAL:
      return action.modal;
    case OPEN_ORDER_ITEM_MODAL:
      return action.modal;
    case ADD_ITEM_TO_CART:
      return _defaultState;
    case CLOSE_MODAL:
      return _defaultState;
    default:
      return state;
  }
};

export default popupModalReducer;
