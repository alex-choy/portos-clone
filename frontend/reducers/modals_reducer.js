import { combineReducers } from 'redux';
import sessionModalReducer from './session_modal_reducer';
import logoutModalReducer from './logout_modal_reducer';
import homepageOrderModalReducer from './hompage_order_modal_reducer';

const modalsReducer = combineReducers({
  sessionModal: sessionModalReducer,
  logoutModal: logoutModalReducer,
  homeOrderModal: homepageOrderModalReducer,
});

export default modalsReducer;