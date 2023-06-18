import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__aboutus flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">AutoCAD LT is one of the most popular interior design programs today, used by decorators, architects, engineers, construction professionals</p>
        <button type = "button" className="custom__button">Know More</button>
      </div>

      <div className="app_aboutus-overlay flex__center">
        <img src={images.chef} className="chef"/>
      </div>
    </div>
  </div>
);

export default Chef;
