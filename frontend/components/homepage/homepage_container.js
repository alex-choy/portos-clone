import { connect } from "react-redux";
import Homepage from "./homepage";
import { openOrderModal } from '../../actions/modal_actions';

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
  openOrderModal: () => dispatch(openOrderModal())
});

export default connect(mSTP, mDTP)(Homepage);