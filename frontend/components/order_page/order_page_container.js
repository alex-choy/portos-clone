import { connect } from "react-redux";
import OrderPage from "./order_page";
import { getCategoriesAndFoodItems } from "../../actions/category_actions";
import {
  openOrderItemModal,
  setOrderItemModalId,
} from "../../actions/modal_actions";
import { getLocalShoppingCart } from "../../actions/shopping_cart_actions";

const mSTP = (state) => ({
  foodItems: state.entities.foodItems,
  categories: state.entities.categories,
});

const mDTP = (dispatch) => ({
  getCategoriesAndFoodItems: () => dispatch(getCategoriesAndFoodItems()),
  setOrderItemModalId: (foodId) => dispatch(setOrderItemModalId(foodId)),
  openOrderItemModal: () => dispatch(openOrderItemModal()),
  getLocalShoppingCart: (shoppingCart) =>
    dispatch(getLocalShoppingCart(shoppingCart)),
});

export default connect(mSTP, mDTP)(OrderPage);
