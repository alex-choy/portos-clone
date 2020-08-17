import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


const store = configureStore();

// TESTING BEGIN
import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;
window.getState = store.getState;
window.dispatch = store.dispatch;
// TESTING END


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>REACT WORKS</h1>, root);
});