import React from 'react';


const RestaurantInfo = (props) => {
  const {restaurants} = props;
  return (
    <div className="restaurant-content">
    {
        restaurants.map((el, i) => (
        <div className="restaurant-list" key={i}>
        {el.dba && <h1 className="restaurant-header">{el.dba}</h1>}
        <div className="restaurant-info">
        {el.grade && <h2>Grade: {el.grade}</h2>}
        {el.grade_date && <h2>Grade Date: {parseFloat(el.grade_date)}</h2>}
        {el.inspection_type && <h2>Type of Inspection: {el.inspection_type}</h2>}
        {el.action && <h2>{el.action}</h2>}
        {el.violation_description && <h3>{el.violation_description}</h3>}
        </div>
        </div>
      ))}
    </div>
  )
}
export default RestaurantInfo;
