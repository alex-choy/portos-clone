const { GET_ORDERED_FOOD_ITEMS } = require("../actions/ordered_food_items");

const _defaultState = {};

const orderedFoodItemsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case GET_ORDERED_FOOD_ITEMS:
      return action.orderedFoodItems;
    default:
      return state;
  }
}

export default orderedFoodItemsReducer;