import { connect } from "react-redux";
import { closeOrderModal } from "../../actions/modal_actions";
import OrderModal from './order_modal';

const mSTP = (state) => ({
  modal: state.ui.modal.homeOrderModal,
});

const mDTP = (dispatch) => ({
  closeOrderModal: () => dispatch(closeOrderModal())
});

export default connect(mSTP, mDTP)(OrderModal);