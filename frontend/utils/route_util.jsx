import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
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

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
  connect(mSTP, null)(Auth)
);
