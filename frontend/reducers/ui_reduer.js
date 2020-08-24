import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import currentFoodIdReducer from './current_food_id_reducer';
import shoppingCartReducer from './shopping_cart_reducer';

const uiReducer = combineReducers({
  modal: modalsReducer,
  currentFoodId: currentFoodIdReducer,
  shoppingCart: shoppingCartReducer,
});

export default uiReducer;