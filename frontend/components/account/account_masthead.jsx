import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SHOPPING_CART } from '../order_page/order_page';

class AccountMasthead extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate() {
    localStorage.removeItem(SHOPPING_CART);
  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.history.push("/"));
  }

  render() {
    const { currentUser } = this.props;
    let currentUserName = (currentUser ? currentUser.username : "");  
    
    const accountSection = (this.props.currentUser ?
      <div>
        <div className="nav-button nav-login">
          <span>Hello {currentUserName}!</span>
          <div className="nav-drp-logout">
            <Link to="/account">Account</Link>
            <hr/>
            <button onClick={this.handleLogout}>Logout</button>
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

export default withRouter(AccountMasthead);