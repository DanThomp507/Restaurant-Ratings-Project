import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav className="nav">
  <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
  <Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>Search for a restaurant</Link>
  <Link to="/map" style={{ textDecoration: 'none', color: 'white' }}>Map the City</Link>
  <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About Find Dining </Link>
  </nav>
)
