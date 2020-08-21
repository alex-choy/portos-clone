const { RECEIVE_ALL_CATEGORIES } = require("../actions/category_actions");


const _defaultState = {};

const categoriesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories
    default:
      return oldState;
  }
};

export default categoriesReducer;