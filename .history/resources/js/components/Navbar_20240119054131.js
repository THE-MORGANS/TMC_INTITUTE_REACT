import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        {{-- <nav class="navigation">
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
              </div><!-- /.box-menu -->
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
              </ul><!-- /.box-menu -->
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">Testimonials</a>
            </li>
          
            <li class="navigation__item">
              <a href="#" class="navigation__link">How to Apply</a>
            </li>
          </ul><!-- /.navigation__list -->
      </nav> --}}
    );
}
export default Navbar;
if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}