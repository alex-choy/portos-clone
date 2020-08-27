import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING IMPORTS
// import { getFoodItems, getFoodItem } from './actions/food_item_actions';
// import { getAllCategories } from "./actions/category_actions";
// import { addItemToCart } from './actions/shopping_cart_actions';
// import { fetchOrderedFoodItems } from './actions/ordered_food_items';

document.addEventListener('DOMContentLoaded', () => {
  let store;


  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // TESTING BEGIN
  // window.getFoodItem = getFoodItem;
  // window.getFoodItems = getFoodItems;
  // window.addItemToCart = addItemToCart;
  // window.fetchOrderedFoodItems = fetchOrderedFoodItems;
  window.gS = store.getState;
  // window.dispatch = store.dispatch;

  // window.getAllCategories = getAllCategories;
  // TESTING END



  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});