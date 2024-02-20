import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import {MdOutlineCancel} from 'react-icons/md';
import {AiOutlinePlus, AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import {FiPlus} from 'react-icons/fi';
import { useSpeechSynthesis } from 'react-speech-kit';

function Cart() {
  
 
 

 

 

  return (
      <div>
        {/* <Navbar /> */}
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
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

        <Footer />
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  