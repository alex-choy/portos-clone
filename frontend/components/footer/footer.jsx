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
        </footer>
      </div>
    );
  }
};

export default Footer;