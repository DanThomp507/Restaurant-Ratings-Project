import React from 'react';

export default (props) => {
  const { restaurants } = props;
  return (
    <div>
      {restaurants.map(el => (
        <div className="restaurant-list" key={el.id}>
        <h1>Restaurant Name: {el.dba}</h1>
        <h2>Cuisine: {el.cuisine_description}</h2>
        <h2>Grade: {el.grade}</h2>
        <h2>Graded Date: {el.grade_date}</h2>
        </div>
      ))}
    </div>
  )
}
