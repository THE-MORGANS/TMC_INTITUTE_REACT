import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Shopping() {
  let url = `${window.location.origin}/`;
  
  const handleHome = () => {
    window.location.href = url;
  }

  return (
    <div>
      <Navbar/>
      <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
          <div class="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
          <div class="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px" >
              <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape"/>
          </div>
          <div class="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
              <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape"/>
          </div>
          <div class="container">
              <div class="breadcumb-content text-center">
                  <h1 class="breadcumb-title">Cart Page</h1>
                  <ul class="breadcumb-menu">
                      <li>
                          <a onClick={handleHome} >Home</a>
                      </li>
                      <li>Cart Page</li>
                  </ul>
              </div>
          </div>
      </div>
      

      <Footer/>
    </div>
  );
}

export default Shopping;

if (document.getElementById('shoppingcart')) {
  ReactDOM.render(<Shopping/>, document.getElementById('shoppingcart'));
}
