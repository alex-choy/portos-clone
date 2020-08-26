import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import orderErrorsReducer from './order_errors_reducer';

const errorsReducer = combineReducers({
  orders: orderErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;