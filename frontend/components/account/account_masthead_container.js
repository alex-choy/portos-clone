import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openSessionModal } from '../../actions/modal_actions';
import AccountMasthead from "./account_masthead";
import { LOGIN_MODAL } from '../session_forms/session_modal';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  handleModal: () => dispatch(openSessionModal(LOGIN_MODAL)),
});

export default connect(mSTP, mDTP)(AccountMasthead);
