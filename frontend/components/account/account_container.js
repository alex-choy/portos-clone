import { connect } from 'react-redux';
import Account from './account';
import { getOrders } from '../../actions/order_actions';

const mSTP = (state) => ({
  orders: Object.values(state.entities.orders),
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  getOrders: (userId) => dispatch(getOrders(userId)),
});

export default connect(mSTP, mDTP)(Account);