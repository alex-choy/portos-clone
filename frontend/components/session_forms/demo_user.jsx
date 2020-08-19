import React from 'react';
import { Link } from "react-router-dom";

class DemoUser extends React.Component {
  constructor(props) {
    super(props);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  loginDemoUser() {
    this.props.processForm({
      username: 'DemoUser',
      password: 'DemoUser',
    })
  }

  render() {
    return (
      <div className="demo-user">
        Don't want to create an account?
        <br />
        Use our 
        <Link to="/#" onClick={this.loginDemoUser} className="other-form-link">
          Demo User
        </Link>
      </div>
    );
  }
};

export default DemoUser;