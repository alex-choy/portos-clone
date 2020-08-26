import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import foodItemsReducer from './food_items_reducer';
import categoriesReducer from './categories_reducer';
import ordersReducer from './orders_reducer';
import orderedFoodItemsReducer from './ordered_food_items_reducer';

const entitiesReducer = combineReducers({
  categories: categoriesReducer,
  foodItems: foodItemsReducer,
  orderedFoodItems: orderedFoodItemsReducer,
  orders: ordersReducer,
  users: usersReducer
});

export default entitiesReducer;