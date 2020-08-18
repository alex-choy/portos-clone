import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser, logout } = this.props;
    let currentUserName = (currentUser ? currentUser.username : "");  
    
    const accountSection = (this.props.currentUser ?
      <div>
        <Link className="nav-link" to="/#">Hello {currentUserName}!</Link>
        <button onClick={logout}>Logout</button>
      </div>   
      :
      <Link className="nav-link" to="/#" onClick={this.props.handleModal} className="nav-link">
        Login/Signup
      </Link>
    );
    return (
      <div>
        {accountSection}
      </div>
    );
  }
}

export default Greeting;