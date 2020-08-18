// import OPEN_MODAL and CLOSE_MODAL
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
const _defaultState = null;

const modalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return _defaultState;
    default:
      return state;
  }
};

export default modalReducer;