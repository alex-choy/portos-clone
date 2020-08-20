import { connect } from 'react-redux';
import FoodShow from './food_show';
import { getFoodItem } from '../../actions/food_item_actions';

const mSTP = (state, ownProps) => ({
  foodItem: state.entities.foodItems[ownProps.match.params.foodId]
});

const mDTP = (dispatch) => ({
  getFoodItem: (foodId) => dispatch(getFoodItem(foodId))
});

export default connect(mSTP, mDTP)(FoodShow)