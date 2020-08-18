import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from "../../actions/modal_actions";
import { SIGNUP_MODAL } from '../modal/modal';
import { Link } from 'react-router-dom';

const mSTP = (state) => ({
  formType: "login",
  sessionErrors: state.errors.session,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <Link to="/#" onClick={() => dispatch(openModal(SIGNUP_MODAL))}>
      Signup
    </Link>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);