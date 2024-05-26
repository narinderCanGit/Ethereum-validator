import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link className="nav-link" to="/Welcome">Welcome</Link>
    <Link className="nav-link" to="/Validator">Validator search</Link>
  </nav>
);

export default Navbar;