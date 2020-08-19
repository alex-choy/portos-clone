import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import foodItemsReducer from './food_items_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  foodItems: foodItemsReducer
});

export default entitiesReducer;