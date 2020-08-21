import { connect } from 'react-redux';
import OrderPage from './order_page';
import {
  getCategories,
  getCategoriesAndFoodItems,
} from "../../actions/category_actions";
import { getFoodItems } from '../../actions/food_item_actions';

const mSTP = (state) => ({
  foodItems: state.entities.foodItems,
  categories: state.entities.categories
});

const mDTP = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getFoodItems: () => dispatch(getFoodItems()),
  getCategoriesAndFoodItems: () => dispatch(getCategoriesAndFoodItems()),
});

export default connect(mSTP, mDTP)(OrderPage);