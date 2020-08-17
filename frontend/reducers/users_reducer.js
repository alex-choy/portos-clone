import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _defaultState = {};

const usersReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  const newState = {...oldState};

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return oldState;
  }
}

export default usersReducer;