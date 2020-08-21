import React from 'react';
import { Link } from 'react-router-dom';

class AccountMasthead extends React.Component {

  render() {
    const { currentUser, logout } = this.props;
    let currentUserName = (currentUser ? currentUser.username : "");  
    
    const accountSection = (this.props.currentUser ?
      <div>
        <div className="nav-button nav-login" to="/#">Hello {currentUserName}!</div>
        <button onClick={logout}>Logout</button>
      </div>   
      :
      <button className="nav-button nav-login" onClick={this.props.handleModal}>
        Login/Signup
      </button>
    );
    return (
      <div className="nav-login-wrapper">
        {accountSection}
      </div>
    );
  }
}

export default AccountMasthead;