import React from 'react';
import { Link } from "react-router-dom";

class DemoUser extends React.Component {
  constructor(props) {
    super(props);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  loginDemoUser(e) {
    e.preventDefault();
    this.props.processForm({
      username: 'GuestUser',
      password: 'GuestUser',
    })
  }

  render() {
    return (
      <button onClick={this.loginDemoUser} className="demo-btn">
        Demo Login
      </button>
    );
  }
};

export default DemoUser;