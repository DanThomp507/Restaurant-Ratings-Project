import React from 'react';

const Form = () => {
  return (
    <div className="search-form">
      <h1 className="search"> Look up your restaurant's inspection history</h1>
      <input type="search"
             placeholder="Enter a Restaurant Name"
             className="form">
      </input>
      <button>Find a restaurant</button>
    </div>
  )
}
export default Form;
