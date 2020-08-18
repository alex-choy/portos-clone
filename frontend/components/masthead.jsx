import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, NavItem, Dropdown} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

class Masthead extends React.Component {


  render() {
    return (
      <div className="nav-wrapper">
        <Navbar bg="primary" variant="dark" className="nav">
          <Link to="/#" className="nav-link">Menu</Link>
          <Link to="/#" className="nav-link">Bake At Home</Link>
          <Link to="/" className="nav-link"><b>PoroSnaxx</b></Link>
          <Link to="/#" className="nav-link">Locations</Link>
          <Link to="/#" className="nav-link">Our Story</Link>
        </Navbar>
      </div>
    );
  }
}

export default Masthead;