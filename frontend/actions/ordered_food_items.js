export const GET_ORDERED_FOOD_ITEMS = "GET_ORDERED_FOOD_ITEMS";

import * as OrderedFoodItemsAPIUtil from '../utils/ordered_food_items_api_utils';

const getOrderedFoodItems = (orderedFoodItems) => ({
  type: GET_ORDERED_FOOD_ITEMS,
  orderedFoodItems
});


export const fetchOrderedFoodItems = (orderId) => (dispatch) => (
  OrderedFoodItemsAPIUtil.requestOrderedFoodItems(orderId)
    .then((orderedFoodItems) => dispatch(getOrderedFoodItems(orderedFoodItems)))
);