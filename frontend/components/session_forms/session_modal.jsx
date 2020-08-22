import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import OrderPageContainer from '../order_page/order_page_container';

export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";
export const ORDER_ITEM_MODAL = "ORDER_ITEM_MODAL";

const Modal = (props) => {
  const { modal, closeModal } = props;
  if(!modal) {
    return null;
  } 
  let component;
  switch(modal.sessionModal) {
    case LOGIN_MODAL:
      component = <LoginFormContainer />;
      break;
    case SIGNUP_MODAL:
      component = <SignupFormContainer />;
      break;
    case ORDER_ITEM_MODAL:
      component = <OrderItemModal />;
      break;
    default: 
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mSTP = (state) => ({
  modal: state.ui.modal
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);