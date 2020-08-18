import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser, logout } = this.props;
    let currentUserName = (currentUser ? currentUser.username : "");  
    // if(currentUser) {
    //   greetingInfo = 
    //   <div>
    //     <h2>Hello {currentUser.username}!</h2><button onClick={logout}>Logout</button>
    //   </div>
    // } else {
    //   greetingInfo = 
    //   <div>
    //     <Link to='/signup'>Signup</Link> <br/>
    //     <Link to='/login'>Login</Link>
    //   </div>
    // }
    return (
      <div>
        <Link to="/#">Hello {currentUserName}!</Link>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
}

export default Greeting;