import { ORDER_ERRORS } from '../actions/order_actions';

const _defaultState = [];
const orderErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ORDER_ERRORS:
      console.log(action.errors);
      return action.errors
    default: 
      return _defaultState
  }
};

export default orderErrorsReducer;