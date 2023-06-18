import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import {images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu app__bg app__wrapper section__padding" id="menu">
    <div className="app__specialMenu-title">
    <SubHeading title="Service is what life is all about"/>
    <h1 className="headtext__cormorant">Services</h1>
  </div>
  <div className="app__container">
    <div className="app__box">
      <div className="imgbox">
        <img src={images.ext} />
      </div>
      <div className="app__box overlay">
        <div className="text">Details</div>
      </div>
    </div>
    <div className="app__box">
      <div className="imgbox">
        <img src={images.ext} />
      </div>
      <div className="app__box overlay">
        <div className="text">Details</div>
      </div>
    </div>
    <div className="app__box">
      <div className="imgbox">
        <img src={images.ext} />
      </div>
      <div className="app__box overlay">
        <div className="text">Details</div>
      </div>
    </div>
    </div>
  </div>
);

export default SpecialMenu;
