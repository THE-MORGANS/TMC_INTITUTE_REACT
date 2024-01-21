import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <header id="header" class="header header-fullwidth ">
        <div class="container">
          <div class="header-desk header-desk_type_1">
            <div class="logo">
              <a href="/">
                <img src="{{ asset('images/logo.png')}}" width="40px" height="40px" alt="TMC | Institute" class="logo__image d-block" />
              </a>
            </div>
           
            <nav class="navigation">
                <ul class="navigation__list list-unstyled d-flex">
                
                    <li class="navigation__item">
                    <a href="./index.html" class="navigation__link">Programs</a>
                    <div class="box-menu" style="width: 600px;">
                    
                        <div class="col pe-4">
                        <a href="#" class="sub-menu__title">Academic</a>
                        <ul class="sub-menu__list list-unstyled">
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Bachelors</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Masters</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Masters</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Doctorate</a></li>
                        </ul>
                        </div>
    
                        <div class="col pe-4">
                        <a href="#" class="sub-menu__title">Professional</a>
                        <ul class="sub-menu__list list-unstyled">
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">LGCA</a></li>
                            <li class="sub-menu__item"><a href="othmcourses.html" class="menu-link menu-link_us-s">OTHM</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">GRC & Fincrime</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Project Management</a></li>
                        </ul>
                        </div>
                    </div>
                    </li>
                    <li class="navigation__item">
                    <a href="./study_abroad.html" class="navigation__link">Study Abroad</a>
                    </li>
                    <li class="navigation__item">
                    <a href="./about.html" class="navigation__link">About us</a>
                    <ul class="default-menu list-unstyled">
                        <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Mission</a></li>
                        <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Our Team</a></li>
                        <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Recognition</a></li>
                        <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Our Partiners</a></li>
                    </ul>
                    </li>
                    <li class="navigation__item">
                    <a href="#" class="navigation__link">Testimonials</a>
                    </li>
                
                    <li class="navigation__item">
                    <a href="#" class="navigation__link">How to Apply</a>
                    </li>
                </ul>
            </nav>
          
            <div class="header-tools d-flex align-items-center">
              <a href="./cart.html" class="header-tools__item header-tools__cart" data-aside="cartDrawer">
                  <span class="mr-2">Cart (0) &nbsp; </span>
                  <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                 
                </a>
            <div class="header-tools__item hover-container">
              <a class="header-tools__item js-open-aside" href="#" data-aside="customerForms">
                  <span class="mr-2">My Account &nbsp; </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user" /></svg>
              </a>
            </div>
    
          </div>
    
          </div>
        </div>
      </header>
    );
}
export default Navbar;
if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}