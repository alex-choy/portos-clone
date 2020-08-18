// import OPEN_MODAL and CLOSE_MODAL

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