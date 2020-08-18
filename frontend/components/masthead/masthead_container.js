import { connect } from 'react-redux';
import Masthead from './masthead';
import { openModal } from '../../actions/modal_actions';
import { LOGIN_MODAL } from '../modal/modal';


const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  getLoginModal: () => dispatch(openModal(LOGIN_MODAL))
})

export default connect(mSTP, mDTP)(Masthead);