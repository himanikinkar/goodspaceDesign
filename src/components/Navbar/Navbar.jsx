import React from 'react';
import { MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images.js';
import './Navbar.css';

const Navbar = () => (
  <nav className = "app__navbar">
    <div className="app__navbar-logo">
      <img src = {images.logo2} alt = "app-logo"/>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Feedback</a></li>
      <li className="p__opensans"><a href="#contact">Contacts</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="/" className="p__opensans">Book Consultancy </a>
    </div>
  </nav>
  
);

export default Navbar;
