
import { CLOSE_ORDER_MODAL, OPEN_ORDER_MODAL } from '../actions/modal_actions';
const _defaultState = null;

const homepageOrderModalReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case OPEN_ORDER_MODAL:
      return action.type;
    case CLOSE_ORDER_MODAL:
      return _defaultState;
    default: 
      return oldState;
  }
}

export default homepageOrderModalReducer;