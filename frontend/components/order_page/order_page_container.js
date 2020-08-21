import { connect } from 'react-redux';
import OrderPage from './order_page';
import { getCategoriesAndFoodItems } from "../../actions/category_actions";
import { getFoodItems } from '../../actions/food_item_actions';

const mSTP = (state) => ({
  foodItems: state.entities.foodItems,
  categories: state.entities.categories
});

const mDTP = (dispatch) => ({
  getCategoriesAndFoods: () => dispatch(getCategoriesAndFoodItems()),
  // getFoodItems: () => dispatch(getFoodItems())
});

export default connect(mSTP, mDTP)(OrderPage);