import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {

    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
}

// in case no props are passed from App.js:
Navbar.defaultProps = {
  title:'GitHub Finder',
  icon: 'fab fa-github'
}
// these will be overridden by passed props!


// eine Art type-checking, gibt warning aber compiled trotzdem
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
