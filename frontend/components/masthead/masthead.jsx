import React from 'react';
import { Link } from 'react-router-dom';
import AccountContainer from '../account/account_masthead_container';

class Masthead extends React.Component { 
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.props.getLoginModal();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav">
          <AccountContainer handleModal={this.handleModal} />
          <div className="center-nav">
            <Link to="/menu" className="nav-link">MENU</Link>
            {/* <Link to="/#" className="nav-link">TAKE AND BAKE</Link> */}
            <Link to="/" className="nav-link nav-link-logo">POROSNAXX</Link>
            <Link to="/#" className="nav-link">LOCATIONS</Link>
            {/* <Link to="/#" className="nav-link">OUR STORY</Link> */}
          </div>
          <Link to="/#" className="nav-button nav-pickup">In-Car Pickup</Link>
        </nav>
      </div>
    );
  }
}

export default Masthead;