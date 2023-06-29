import React from 'react';

import {SubHeading} from '../../components';

// import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__gs1 app__wrapper section__padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="GoodSpace Designs"/>
      <h1 className="app__header-h1">We Improves Your Space </h1>
      <p className="p__opensans" style = {{margin: '2rem 0 ' }}>The Company is promoted by civil engineering professionals, architects & interior designers experienced in the construction & interior Industry </p>
      <button type="button" className="custom__button">Tell us About Your Plan</button>
    </div>
    
    
  </div>
);

export default Header;
