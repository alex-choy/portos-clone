import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
  formType: "login",
  sessionErrors: state.errors.session,
  currentUserId: state.session.id,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);