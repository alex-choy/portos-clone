import { RECEIVE_FOOD_ITEM, RECEIVE_FOOD_ITEMS } from '../actions/food_item_actions';

const _defaultState = {};

const foodItemsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  const newState = {...oldState};
  switch(action.type) {
    case RECEIVE_FOOD_ITEM:
      newState[action.foodItem.id] = action.foodItem;
      return newState;
    case RECEIVE_FOOD_ITEMS:
      return action.foodItems;
    default: 
      return oldState;
  }
}

export default foodItemsReducer;