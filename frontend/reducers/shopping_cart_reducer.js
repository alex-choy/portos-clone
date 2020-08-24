import { ADD_ITEM_TO_CART } from '../actions/shopping_cart_actions';

const shoppingCartReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {...state};

  switch(action.type) {
    case ADD_ITEM_TO_CART:
      const { foodId, quantity } = action.foodInfo;
      newState[foodId] = { quantity: quantity };
      return newState;
    default: 
      return state;
  }
}

export default shoppingCartReducer;