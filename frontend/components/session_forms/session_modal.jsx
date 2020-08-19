import React from 'react';
import { closeSessionModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";

const Modal = (props) => {
  const { modal, closeSessionModal } = props;
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
    default: 
      return null;
  }

  return (
    <div className="modal-background" onClick={closeSessionModal}>
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
  closeSessionModal: () => dispatch(closeSessionModal())
});

export default connect(mSTP, mDTP)(Modal);