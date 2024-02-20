
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

function Profile() {
  let url = window.location.origin;
  const handlehome = ()=>{
    window.location.href = ` ${url}`;
  }
 
  return (
    <div>
      <p>Use r</p>
      {/* <Navbar/> */}

      
      {/* <Footer/> */}
    </div>
  
  );
}

export default Profile;

if(document.getElementById('profile')){
  ReactDOM.render(<Profile/>, document.getElementById('profile'))
}
  
