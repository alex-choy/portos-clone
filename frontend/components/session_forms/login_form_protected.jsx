import React from 'react';
import LoginFormContainer from './login_form_container';

const LoginFormProtected = (props) => {
  return (
    <div className="protected-login">
      <h4>Sign in to access this feature!</h4>
      <LoginFormContainer />
    </div>
  )
  
};

export default LoginFormProtected;