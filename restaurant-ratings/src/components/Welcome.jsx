import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome">Find Dining</h1>
      <p className="welcome-p">See if your favorite New York restaurants make the grade</p>
      <button className="button-display"><Link to="/form"
      style={{ textDecoration: 'none', color: 'white' }}>
      Find a Restaurant
      </Link></button>
    </div>
  )
}
export default Welcome;
