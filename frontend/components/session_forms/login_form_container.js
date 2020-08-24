import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openSessionModal, closeModal } from "../../actions/modal_actions";
import { SIGNUP_MODAL } from '../shared_components/popup_modal';
import { Link } from 'react-router-dom';

const mSTP = (state) => ({
  formType: "login",
  sessionErrors: state.errors.session,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button 
      className="other-form-link" 
      onClick={() => dispatch(openSessionModal(SIGNUP_MODAL))}
    >
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);