import { connect } from 'react-redux';
import VideoOverlay from './video_overlay';

const mSTP = (state) => ({
  isClosed: state.ui.modal.homeOrderModal
});

export default connect(mSTP, null)(VideoOverlay);