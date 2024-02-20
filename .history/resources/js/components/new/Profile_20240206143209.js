
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiExternalLink} from 'react-icons/fi';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import Navbar from './Navbar';
import Footer from './Footer';

function Profile() {
  let url = window.location.origin;
  const handlehome = ()=>{
    window.location.href = ` ${url}`;
  }
 
  return (
    <div>
      {/* <Navbar/> */}
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
        <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
          <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
        </div>
        <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
          <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="breadcumb-content text-center">
            <h1 className="breadcumb-title">Profile</h1>
            <ul className="breadcumb-menu">
              <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
              <li>User Profile</li>
            </ul>
          </div>
        </div>
      </div>

      


      
      <Footer/>
    </div>
  
  );
}

export default Profile;

if(document.getElementById('profile')){
  ReactDOM.render(<Profile/>, document.getElementById('profile'))
}
  
