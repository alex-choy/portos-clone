import { RECEIVE_ORDERS, REMOVE_ORDER } from "../actions/order_actions";

const { GET_ORDERED_FOOD_ITEMS } = require("../actions/ordered_food_items");

const _defaultState = {};

const orderedFoodItemsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case GET_ORDERED_FOOD_ITEMS:
      return action.orderedFoodItems;
    case REMOVE_ORDER:
      return _defaultState;
    case RECEIVE_ORDERS:
      return _defaultState;
    default:
      return state;
  }
}

export default orderedFoodItemsReducer;