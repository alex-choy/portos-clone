import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS,
  REMOVE_ORDER,
  ORDER_ERRORS
} from '../actions/order_actions';

const _defaultState = {};

const ordersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = {...state};
  switch(action.type) {
    case RECEIVE_ORDER:
      return action.order;
    case RECEIVE_ORDERS:
      return action.orders;
    case REMOVE_ORDER:
      delete newState[action.orderId];
      return newState; 
    case ORDER_ERRORS:
      return _defaultState;
    default: 
      return state;
  }
};

export default ordersReducer;