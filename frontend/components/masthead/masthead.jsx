import React from 'react';
import { Link } from 'react-router-dom';
import AccountContainer from '../account/account_masthead_container';
import { NavDropdown, NavItem, Dropdown} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

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
            <Link to="/#" className="nav-link">Menu</Link>
            <Link to="/#" className="nav-link">Bake At Home</Link>
            <Link to="/" className="nav-link nav-link-logo">PoroSnaxx</Link>
            <Link to="/#" className="nav-link">Locations</Link>
            <Link to="/#" className="nav-link">Our Story</Link>
          </div>
          <Link to="/#" className="nav-link">In-Car Pickup</Link>
        </nav>
      </div>
    );
  }
}

export default Masthead;