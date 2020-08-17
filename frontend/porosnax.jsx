import React from 'react';
import ReactDOM from 'react-dom';

// TESTING BEGIN
import { signup, login, logout } from './utils/sesssion_api_util';
window.signup = signup;
window.login = login;
window.logout = logout;
// TESTING END


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>REACT WORKS</h1>, root);
});