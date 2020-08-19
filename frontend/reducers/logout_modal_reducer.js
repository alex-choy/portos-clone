import { OPEN_LOGOUT_MODAL, CLOSE_LOGOUT_MODAL } from '../actions/modal_actions';
const _defaultState = null;

const logoutModalReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case OPEN_LOGOUT_MODAL:
      return action.modal;
    case CLOSE_LOGOUT_MODAL:
      return _defaultState;
    default:
      return oldState;
  };
};

export default logoutModalReducer;