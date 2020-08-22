import { SET_ORDER_ITEM_MODAL_ID } from '../actions/modal_actions';

const currentFoodIdReducer = (oldState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SET_ORDER_ITEM_MODAL_ID:
      return action.foodId
    default:
      return null;
  }
}

export default currentFoodIdReducer;