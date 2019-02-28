import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1 className="about-header"> Why do restaurant grades matter?</h1>
        <article className="about-article">
      <p className="about-p"> New York is one of the world's premier culinary
      centers. There are over 24,000 restaurants in the 5 boroughs, with everything
      from Mexican to Moroccan. Therefore, given the plethora of dining options,
      it is critically important to monitor their quality in order to ensure
      they are complying with health and safety standards. The New York City
      Department of Health and Mental Hygiene carries out this critical task.
      </p>
      <p className="about-p">This application makes it easy for New Yorkers to
      search for any one of the 24,000 available restaurants, both by name and
      phone number. Furthermore, you can search by zipcode to examine the general
      quality and the inspection history of the restaurants in that specified area.
      </p>
        </article>
    </div>
  )
}
export default About;
