import React from 'react';

import './AboutUs.css';
import { images} from '../../constants';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app_aboutus-overlay flex__center">
      <img src={images.G} alt="g letter"/>

    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.inchtape} alt="about_tape" className="spoon_img"/>
        <p className="p__opensans">AutoCAD LT is one of the most popular interior design programs today, used by decorators, architects, engineers, construction professionals</p>
        <button type = "button" className="custom button">Know More</button>
      </div>

      
    </div>
  </div>
);

export default AboutUs;
