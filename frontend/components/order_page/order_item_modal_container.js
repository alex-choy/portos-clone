import { connect } from 'react-redux';
import { addItemToCart } from '../../actions/shopping_cart_actions';
import OrderItemModal from './order_item_modal';

const mSTP = (state, ownProps) => ({
  foodItem: ownProps.foodItem,
});

const mDTP = (dispatch) => ({
  addItemToCart: (foodInfo) => dispatch(addItemToCart(foodInfo))
});

export default connect(mSTP, mDTP)(OrderItemModal);