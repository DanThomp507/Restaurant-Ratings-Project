import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav>
  <Link to="/">Home</Link>
  <Link to="/restaurantList">List of Restaurants</Link>
  <Link to="/form">Search for a restaurant</Link>
  </nav>
)
