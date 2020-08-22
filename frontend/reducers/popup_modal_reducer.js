// import OPEN_MODAL and CLOSE_MODAL
import {
  OPEN_SESSION_MODAL,
  OPEN_ORDER_ITEM_MODAL,
  CLOSE_MODAL,
} from "../actions/modal_actions";
const _defaultState = null;

const popupModalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_SESSION_MODAL:
      return action.modal;
    case OPEN_ORDER_ITEM_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return _defaultState;
    default:
      return state;
  }
};

export default popupModalReducer;
