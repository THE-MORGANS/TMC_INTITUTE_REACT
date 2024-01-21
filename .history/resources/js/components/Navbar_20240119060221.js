import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <header id="header" className="header header-fullwidth ">
        <div className="container">
          <div className="header-desk header-desk_type_1">
            <div className="logo">
              <a href="/">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" width="40px" height="40px" alt="TMC | Institute" className="logo__image d-block" />
              </a>
            </div>
           
            <nav className="navigation">
                <ul className="navigation__list list-unstyled d-flex">
                
                    <li className="navigation__item">
                    <Link to="/" className="navigation__link">Programs</Link>
                    <div className="box-menu" style={{ width: '600px' }}>
                    
                        <div className="col pe-4">
                        <a href="#" className="sub-menu__title">Academic</a>
                        <ul className="sub-menu__list list-unstyled">
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Bachelors</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Masters</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Masters</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Doctorate</a></li>
                        </ul>
                        </div>
    
                        <div className="col pe-4">
                        <a href="#" className="sub-menu__title">Professional</a>
                        <ul className="sub-menu__list list-unstyled">
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">LGCA</a></li>
                            <li className="sub-menu__item"><a href="othmcourses.html" className="menu-link menu-link_us-s">OTHM</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">GRC & Fincrime</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Project Management</a></li>
                        </ul>
                        </div>
                    </div>
                    </li>
                    <li className="navigation__item">
                    <a href="./study_abroad.html" className="navigation__link">Study Abroad</a>
                    </li>
                    <li className="navigation__item">
                    <a href="./about.html" className="navigation__link">About us</a>
                    <ul className="default-menu list-unstyled">
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Mission</a></li>
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Our Team</a></li>
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Recognition</a></li>
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Our Partiners</a></li>
                    </ul>
                    </li>
                    <li className="navigation__item">
                    <a href="#" className="navigation__link">Testimonials</a>
                    </li>
                
                    <li className="navigation__item">
                    <a href="#" className="navigation__link">How to Apply</a>
                    </li>
                </ul>
            </nav>
          
            <div className="header-tools d-flex align-items-center">
              <a href="./cart.html" className="header-tools__item header-tools__cart" data-aside="cartDrawer">
                  <span className="mr-2">Cart (0) &nbsp; </span>
                  <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                 
                </a>
            <div className="header-tools__item hover-container">
              <a className="header-tools__item js-open-aside" href="#" data-aside="customerForms">
                  <span className="mr-2">My Account &nbsp; </span>
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