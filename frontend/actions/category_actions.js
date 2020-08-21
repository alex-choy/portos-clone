import * as CategoryAPIUtil from '../utils/categories_api_util';
import { getFoodItems } from './food_item_actions';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";

const fetchCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});



export const getCategories = () => (dispatch) => (
  CategoryAPIUtil.requestCategories()
    .then((categories) => dispatch(fetchCategories(categories)))
);

export const getCategoriesAndFoodItems = () => (dispatch) => (
  dispatch(getFoodItems())
    .then(() => dispatch(getCategories()))
    .then(() => console.log('finished'))
);
         