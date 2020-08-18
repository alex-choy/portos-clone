import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./account";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  handleModal: () => ownProps.handleModal()
});

export default connect(mSTP, mDTP)(Greeting);
