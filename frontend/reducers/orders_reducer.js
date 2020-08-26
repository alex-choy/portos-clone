import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS,
  REMOVE_ORDER,
} from '../actions/order_actions';

const _defaultState = {};

const ordersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = {...state};
  switch(action.type) {
    case RECEIVE_ORDER:
      newState[action.order.id] = action.order;
      return newState;
    case RECEIVE_ORDERS:
      return action.orders;
    case REMOVE_ORDER:
      delete newState[action.orderId];
      return newState;
    default: 
      return state;
  }
};

export default ordersReducer;