import { combineReducers } from 'redux';
import popupModalReducer from './popup_modal_reducer';
// import logoutModalReducer from './logout_modal_reducer';
import homepageOrderModalReducer from './hompage_order_modal_reducer';

const modalsReducer = combineReducers({
  popupModal: popupModalReducer,
  // logoutModal: logoutModalReducer,
  homeOrderModal: homepageOrderModalReducer,
});

export default modalsReducer;