import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { LOGIN_MODAL } from '../components/shared_components/popup_modal';
import { openSessionModal } from '../actions/modal_actions';
import LoginFormProtected from "../components/session_forms/login_form_protected";
// custom routes
// render only if a user is not logged in (login page for now)
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={ props => 
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact, openSessionModal }) => {
  // if(!loggedIn) {
  //   <Redirect to="/" />
  //   openSessionModal();
  //   return null;
  // } else {
  //   return (
  //     <Route
  //       path={path}
  //       exact={exact}
  //       render={(props) => <Component {...props} />}
  //     />
  //   );
  // }
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <LoginFormProtected />
      }
    />
  );
};

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
  openSessionModal: () => dispatch(openSessionModal(LOGIN_MODAL))
});

export const AuthRoute = withRouter(
  connect(mSTP, null)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mSTP, mDTP)(Protected)
);