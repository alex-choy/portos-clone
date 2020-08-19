import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openSessionModal, closeSessionModal } from "../../actions/modal_actions";
import { SIGNUP_MODAL } from './session_modal';
import { Link } from 'react-router-dom';

const mSTP = (state) => ({
  formType: "login",
  sessionErrors: state.errors.session,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <Link 
      to="/#"
      className="other-form-link" 
      onClick={() => dispatch(openSessionModal(SIGNUP_MODAL))}
    >
      Signup
    </Link>
  ),
  closeSessionModal: () => dispatch(closeSessionModal())
});

export default connect(mSTP, mDTP)(SessionForm);