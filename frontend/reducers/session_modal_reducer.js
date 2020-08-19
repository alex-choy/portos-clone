// import OPEN_MODAL and CLOSE_MODAL
import { OPEN_SESSION_MODAL, CLOSE_SESSION_MODAL } from '../actions/modal_actions';
const _defaultState = null;

const sessionModalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_SESSION_MODAL:
      return action.modal;
    case CLOSE_SESSION_MODAL:
      return _defaultState;
    default:
      return state;
  }
};

export default sessionModalReducer;