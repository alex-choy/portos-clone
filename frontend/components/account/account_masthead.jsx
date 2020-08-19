import React from 'react';
import { Link } from 'react-router-dom';

class AccountMasthead extends React.Component {

  render() {
    const { currentUser, logout } = this.props;
    let currentUserName = (currentUser ? currentUser.username : "");  
    
    const accountSection = (this.props.currentUser ?
      <div>
        <Link className="nav-button nav-login" to="/#">Hello {currentUserName}!</Link>
        <button onClick={logout}>Logout</button>
      </div>   
      :
      <Link className="nav-button nav-login" to="/#" onClick={this.props.handleModal}>
        Login/Signup
      </Link>
    );
    return (
      <div className="nav-login-wrapper">
        {accountSection}
      </div>
    );
  }
}

export default AccountMasthead;