import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../actions/shopping_cart_actions";

const { RECEIVE_ALL_CATEGORIES } = require("../actions/category_actions");
const { OPEN_ORDER_ITEM_MODAL, SET_ORDER_ITEM_MODAL_ID, CLOSE_MODAL } = require('../actions/modal_actions');
const _defaultState = {};
const categoriesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories
    case OPEN_ORDER_ITEM_MODAL:
      return oldState;
    case SET_ORDER_ITEM_MODAL_ID:
      return oldState;
    case CLOSE_MODAL:
      return oldState;
    case ADD_ITEM_TO_CART:
      return oldState;
    case REMOVE_ITEM_FROM_CART:
      return oldState;
    default:
      return _defaultState;
  }
};

export default categoriesReducer;