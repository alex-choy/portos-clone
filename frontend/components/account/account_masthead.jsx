import React from 'react';
import { Link } from 'react-router-dom';
import { SHOPPING_CART } from '../order_page/order_page';

class AccountMasthead extends React.Component {

  componentDidUpdate() {
    localStorage.removeItem(SHOPPING_CART);
  }

  render() {
    const { currentUser, logout } = this.props;
    let currentUserName = (currentUser ? currentUser.username : "");  
    
    const accountSection = (this.props.currentUser ?
      <div>
        <div className="nav-button nav-login">
          <span>Hello {currentUserName}!</span>
          <div className="nav-drp-logout">
            <Link to="/account">Account</Link>
            <hr/>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
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