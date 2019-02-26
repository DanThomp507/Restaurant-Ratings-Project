import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav className="nav">
  <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
  <Link to="/form" style={{ textDecoration: 'none', color: 'black' }}>Search for a restaurant</Link>
  <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>Why do restaurant grades matter? </Link>
  </nav>
)
