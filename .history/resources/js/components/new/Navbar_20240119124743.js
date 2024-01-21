import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Study from './Study';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';


export default function Navbar() {
   
    return (
        <BrowserRouter>
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
                                    <snap className="navigation__link">
                                        Programs
                                    </snap>
                                <div className="box-menu" style={{ width: '600px' }}>
                                
                                    <div className="col pe-4">
                                        <a href="#" className="sub-menu__title">Academic</a>
                                        <ul className="sub-menu__list list-unstyled">
                                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Bachelors</a></li>
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
                                    <Link to="/study" className="navigation__link">
                                        Study Abroad
                                    </Link>
                                </li>
                                <li className="navigation__item">
                                    <Link to="/aboutus" className="navigation__link">
                                        About us
                                    </Link>
                                    <ul className="default-menu list-unstyled">
                                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Mission</a></li>
                                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Our Team</a></li>
                                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Recognition</a></li>
                                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Our Partiners</a></li>
                                    </ul>
                                </li>
                                <li className="navigation__item">
                                    <Link to="/testimonials" className="navigation__link">
                                        Testimonials
                                    </Link>
                                </li>
                            
                                <li className="navigation__item">
                                    <Link to="/howtoApply" className="navigation__link">
                                        How to Apply
                                    </Link>
                                </li>
                                <li className="navigation__item">
                                    {/* <Link to="/contact" className="navigation__link">Contact us</Link> */}
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
                <Routes>
                    <Route path="/study" component={Study} />
                    <Route path="/aboutus" component={About} />
                    <Route path="/testimonials" component={Testimonials} />
                    <Route path="/howtoApply" component={HowtoApply} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </header>
            
        </BrowserRouter>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}