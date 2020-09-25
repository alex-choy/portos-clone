import React from 'react';
import { Link } from 'react-router-dom';
import AccountContainer from '../account/account_masthead_container';

class Masthead extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-wrapper cf">
        <nav className="nav">
          <AccountContainer />
          <div className="center-nav">
            <Link to="/menu" className="nav-link">
              MENU
            </Link>
            <Link to="/" className="nav-link nav-link-logo">
              POROSNAX
            </Link>
            <div className="about nav-link ">
              ABOUT
              {/* 
              <div className="about-links">
                <a href="https://github.com/alex-choy" className="about-link" target="_blank">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexchoy179/" className="about-link"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
            </div> */}
            </div>
            {/* <Link to="/#" className="nav-link">OUR STORY</Link> */}
          </div>
          <Link to="/order" className="nav-button nav-pickup">
            In-Car Pickup
          </Link>
        </nav>
      </div>
    );
  }
}

export default Masthead;