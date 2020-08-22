import React from 'react';
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openSessionModal, closeModal } from "../../actions/modal_actions";
import { LOGIN_MODAL } from './popup_modal';
import { Link } from 'react-router-dom'; 
const mSTP = (state) => ({
  formType: "signup",
  sessionErrors: state.errors.session,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button 
      className="other-form-link"  
      onClick={() => dispatch(openSessionModal(LOGIN_MODAL))}
    >
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);