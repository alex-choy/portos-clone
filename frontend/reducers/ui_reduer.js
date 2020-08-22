import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import currentFoodIdReducer from './current_food_id_reducer';

const uiReducer = combineReducers({
  modal: modalsReducer,
  currentFoodId: currentFoodIdReducer,
});

export default uiReducer;