import React from 'react';
import { Link} from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome"> Restaurant Ratings App</h1>
      <p>Find any New York City restaurant's health and safety grade</p>
      <button className="button-display"><Link to="/form">Find a Restaurant</Link></button>
      <img className="welcome-image"
           src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           alt=""
            />
    </div>
  )
}
export default Welcome;
