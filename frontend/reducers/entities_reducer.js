import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import foodItemsReducer from './food_items_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  foodItems: foodItemsReducer,
  categories: categoriesReducer
});

export default entitiesReducer;