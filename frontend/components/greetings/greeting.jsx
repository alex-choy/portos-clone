import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser, logout } = this.props;
    let greetingInfo;
    if(currentUser) {
      greetingInfo = 
      <div>
        <h2>Hello {currentUser.username}!</h2><button onClick={logout}>Logout</button>
      </div>
    } else {
      greetingInfo = 
      <div>
        <Link to='/signup'>Signup</Link> <br/>
        <Link to='/login'>Login</Link>
      </div>
    }
    return (
      <div>
        {greetingInfo}
      </div>
    );
  }
}

export default Greeting;