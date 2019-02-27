import React from 'react';

const RestaurantInfo = (props) => {
  const {restaurants} = props;
  return (
    <div className="restaurant-info">
    {
        restaurants.map((el, i) => (
        <div className="restaurant-list" key={i}>
        <h1 className="restaurant-header">{el.dba}</h1>
        <h2>Grade: {el.grade}</h2>
        <h2>Grade Date: {parseFloat(el.grade_date)} </h2>
        <h2>{el.inspection_type}</h2>
        <h2>{el.action}</h2>
        <p>{el.violation_description} </p>
        </div>
      ))}
    </div>
  )
}
export default RestaurantInfo;
