import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const _defaultSession = [];

const sessionErrorsReducer = (oldState = _defaultSession, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _defaultSession;
    default:
      return _defaultSession;
  }
};

export default sessionErrorsReducer;