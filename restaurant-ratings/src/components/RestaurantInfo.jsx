import React from 'react';

const RestaurantInfo = (props) => {
  return (
    <div className="restaurant-info">
    {
        props.restaurantData ?
        <div className="restaurant-data">
        <h1>Restaurant Name: {props.restaurantData.dba}</h1>
        <h2>Cuisine: {props.restaurantData.cuisine_description}</h2>
        <h2>Grade: {props.restaurantData.grade}</h2>
        <h2>Graded Date: {props.restaurantData.grade_date}</h2>
        </div>
        :
        <div></div>
      }
    </div>
  )
}
export default RestaurantInfo;
