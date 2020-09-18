import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="left-footer">
            <h2>&copy;PoroSnax</h2>
          </div>
          <div className="right-footer">
            <a href="https://github.com/alex-choy">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/alexchoy179/">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
};

export default Footer;