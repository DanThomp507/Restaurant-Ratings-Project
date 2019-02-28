## Project 2 : Find Dining

With over 24,000 restaurants in New York City, it's a well-known fact that New
Yorkers love to eat out. Part of the dining experience is ensuring that
your destination has the highest health and safety standards. Before entering
a restaurant, it's safe to say that most New Yorkers check its grade (hoping
that it's an A).

I have created a simple application that allows New Yorkers to search
for restaurants and their respective inspection grades (these grades are
carried out on a scale from A to C, A being the highest and most desirable
while C indicates a lesser standard). I have utilized the New York City
Department of Health and Mental Hygiene's Restaurant Inspection Results API
for this application.

Users can search for a particular restaurant by its name and phone number.
The results of this search will display the restaurant's complete inspection
history, showing valuable information such as: grade, if the restaurant has
any violations cited by the NYC DOHMH, and the severity and category
of these violations.

Access Find Dining here: http://find-dining.surge.sh/

## Component Hierarchy


## Link to API
https://data.cityofnewyork.us/resource/9w7m-hzhe

## MVP
My application contains the following:

+ A landing page with a button (which links to a search form)
+ A search form that allows the user to look up their restaurant by name and
phone number
+ The search form also allows the user to conduct more general restaurant
searches by zipcode, borough, and street name
+ A results page that displays the restaurant name, the grade it received,
the year that particular inspection was carried out, the nature/severity of the
violations, and the description of the violations
+ An about page explaining the importance of maintaining health and safety
standards at restaurants across New York and the practicality of the application

## Post-MVP
I plan on adding the following to my application:

+ A map that displays the specified restaurant's location alongside the
inspection history
+ A map page that locates all the restaurants in the API and allows the user
to access certain information
+ A function that only displays the most recent inspection 
+ A button underneath the most recent inspection result that allows the user
to access the complete inspection history

## Code Snippet

```
import React from 'react';

const RestaurantInfo = (props) => {
  const {restaurants} = props;
  return (
    <div className="restaurant-info">
    {
        restaurants.map((el, i) => (
        <div className="restaurant-list" key={i}>
        {el.dba && <h1 className="restaurant-header">{el.dba}</h1>}
        {el.grade && <h2>Grade: {el.grade}</h2>}
        {el.grade_date && <h2>Grade Date: {parseFloat(el.grade_date)}</h2>}
        {el.inspection_type && <h2>Type of Inspection: {el.inspection_type}</h2>}
        {el.action && <h2>{el.action}</h2>}
        {el.violation_description && <h3>{el.violation_description}</h3>}
        </div>
      ))}
    </div>
  )
}
export default RestaurantInfo;
```
This is the component in my app that maps through the API and returns
the specified information, which includes: restaurant name, grade, grade date,
type of inspection, and the violation description. I also make use of conditional
rendering to ensure that if there is no particular data for any one of the
categories, it doesn't render.
