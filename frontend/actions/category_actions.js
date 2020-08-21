import * as CategoryAPIUtil from '../utils/categories_api_util';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";

const fetchAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});



export const getAllCategories = () => (dispatch) => (
  CategoryAPIUtil.requestAllCategories()
    .then((categories) => dispatch(fetchAllCategories(categories)))
);