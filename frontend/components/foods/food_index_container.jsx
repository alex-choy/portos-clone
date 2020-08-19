import { connect } from 'redux';
import FoodIndex from './food_index';
import { getFoodItems } from '../../actions/food_item_actions';

const mSTP = (state) => ({
  foodItems: Object.values(state.entities.foodItems)
});

const mDTP = (dispatch) => ({
  getFoodItems: dispatch(() => getFoodItems())
});

export default connect(mSTP, mDTP)(FoodIndex);