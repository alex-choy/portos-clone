import { connect } from 'react-redux';
import OrderShow from './order_show';
import { getOrder } from '../../actions/order_actions';
import { fetchOrderedFoodItems } from '../../actions/ordered_food_items';
import { getFoodItems } from '../../actions/food_item_actions';

const mSTP = (state, ownProps) => ({
  order: state.entities.orders[ownProps.match.params.orderId], // Only 1 order shows up in the orderState 
  orderedFoodItems: Object.values(state.entities.orderedFoodItems),
  foodItems: state.entities.foodItems
});

const mDTP = (dispatch) => ({
  getOrder: (orderId) => dispatch(getOrder(orderId)),
  fetchOrderedFoodItems: (orderId) => dispatch(fetchOrderedFoodItems(orderId)),
  getFoodItems: () => dispatch(getFoodItems())
});

export default connect(mSTP, mDTP)(OrderShow);