import * as FoodItemAPIUtil from '../utils/food_items_api_util';

export const RECEIVE_FOOD_ITEMS = "RECEIVE_FOOD_ITEMS";
export const RECEIVE_FOOD_ITEM = "RECEIVE_FOOD_ITEM";

// regular action creators
const receiveFoodItems = (foodItems) => ({
  type: RECEIVE_FOOD_ITEMS,
  foodItems
});

const receiveFoodItem = (foodItem) => ({
  type: RECEIVE_FOOD_ITEM,
  foodItem
});


// thunk action creators

export const getFoodItems = () => (dispatch) => (
  FoodItemAPIUtil.requestFoodItems()
    .then((foodItems) => dispatch(receiveFoodItems(foodItems)))
);

// how do we deal with looking for invalid foods?
export const getFoodItem = (foodId) => (dispatch) => (
  FoodItemAPIUtil.requestFoodItem(foodId)
    .then((foodItem) => dispatch(receiveFoodItem(foodItem)))
);