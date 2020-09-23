import { RECEIVE_FOOD_ITEM, RECEIVE_FOOD_ITEMS } from '../actions/food_item_actions';
import { RECEIVE_ORDERS } from '../actions/order_actions';

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
    case RECEIVE_ORDERS:
      return _defaultState;
    default: 
      return oldState;
  }
}

export default foodItemsReducer;