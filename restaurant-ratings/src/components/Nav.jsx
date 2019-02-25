import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav className="nav">
  <Link to="/">Home</Link>
  <Link to="/form">Search for a restaurant</Link>
  <Link to="/about">Why do restaurant grades matter? </Link>
  </nav>
)
