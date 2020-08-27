import { connect } from 'react-redux';
import Account from './account';

const mSTP = (state) => ({
  orders: state.entities.orders
});

const mDTP = (dispatch) => ({
  receiveOrders: (userId) => dispatch(receiveOrders(userId)),
});

export default connect(mSTP, mDTP)(Account);