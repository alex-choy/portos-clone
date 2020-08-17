import * as SessionAPIUtil from '../utils/sesssion_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// ACTION CREATORS
const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER, 
  user
});

// errors is an array
const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});


// THUNK ACTION CREATORS
export const signup = (user) => (dispatch) => (
  SessionAPIUtil.signup(user)
    .then((user) => {
      dispatch(receiveCurrentUser(user));
    },
     err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const login = (user) => (dispatch) => (
  SessionAPIUtil.login(user)
    .then((user) => {
      dispatch(receiveCurrentUser(user));
    },
     err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const login = () => (dispatch) => (
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);