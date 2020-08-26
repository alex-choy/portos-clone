import { connect } from 'react-redux';
import { fetchOrderedFoodItems } from '../../actions/ordered_food_items';
import Confirmation from './confirmation';

const mSTP = (state) => ({
  order: state.entities.orders[Object.keys(state.entities.orders)[0]],
  orderedFoodItems: Object.values(state.entities.orderedFoodItems), 
  foodItems: state.entities.foodItems
});

const mDTP = (dispatch) => ({
  fetchOrderedFoodItems: (orderId) => dispatch(fetchOrderedFoodItems(orderId)),
}); 

export default connect(mSTP, mDTP)(Confirmation);