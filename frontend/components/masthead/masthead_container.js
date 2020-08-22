import { connect } from 'react-redux';
import Masthead from './masthead';
import { openSessionModal } from '../../actions/modal_actions';
import { LOGIN_MODAL } from '../session_forms/popup_modal';


const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  getLoginModal: () => dispatch(openSessionModal(LOGIN_MODAL))
})

export default connect(mSTP, mDTP)(Masthead);