import React from 'react';
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { LOGIN_MODAL } from './session_modal';
import { Link } from 'react-router-dom'; 
const mSTP = (state) => ({
  formType: "signup",
  sessionErrors: state.errors.session,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <Link 
      to="/#"
      className="other-form-link"  
      onClick={() => dispatch(openModal(LOGIN_MODAL))}
    >
      Login
    </Link>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);