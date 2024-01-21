import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Study from './Study';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact'; 
import HowtoApply from './HowtoApply';
import Cart from './Cart';


export default function Navbar() {
    return ( 
        <BrowserRouter>
            <div class="header-mobile header_sticky">
                <div class="container d-flex align-items-center h-100">
                <a class="mobile-nav-activator d-block position-relative" href="#">
                    <svg class="nav-icon" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_nav" /></svg>
                    <button class="btn-close-lg position-absolute top-0 start-0 w-100"></button>
                </a>

                <div class="logo">
                    <a href="/">
                    <img src="../images/logo.png" alt="TMC Institute" class="logo__image d-block" />
                    </a>
                </div>

                <a href="#" class="header-tools__item header-tools__cart ">
                    <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                    <span class="cart-amount d-block position-absolute js-cart-items-count">3</span>
                </a>
                </div>
            
                <nav class="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto">
                <div class="container">
                    <form action="#" method="GET" class="search-field position-relative mt-4 mb-3">
                    <div class="position-relative">
                        <input class="search-field__input w-100 border rounded-1" type="text" name="search-keyword" placeholder="Search products" />
                        <button class="btn-icon search-popup__submit pb-0 me-2" type="submit">
                        <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search" /></svg>
                        </button>
                        <button class="btn-icon btn-close-lg search-popup__reset pb-0 me-2" type="reset"></button>
                    </div>

                    <div class="position-absolute start-0 top-100 m-0 w-100">
                        <div class="search-result"></div>
                    </div>
                    </form>
                </div>

                <div class="container">
                    <div class="overflow-hidden">
                    <ul class="navigation__list list-unstyled position-relative">
                    
                        <li class="navigation__item">
                        <a href="#" class="navigation__link js-nav-right d-flex align-items-center">Programs<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></a>
                        <div class="sub-menu position-absolute top-0 start-100 w-100 d-none">
                            <a href="#" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-3"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>Academic</a>
                            <div class="sub-menu__wrapper">
                            <a href="#" class="navigation__link js-nav-right d-flex align-items-center">Academic<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></a>
                            <div class="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                                <a href="#" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>Academic List</a>
                                <ul class="sub-menu__list list-unstyled">
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Bachelors</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Masters</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Doctorate</a></li>
                                </ul>
                            </div>

                            <a href="#" class="navigation__link js-nav-right d-flex align-items-center">Professional<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>Professional</a>
                            <div class="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                                <a href="#" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>Professional</a>
                                <ul class="sub-menu__list list-unstyled">
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">LGCA</a></li>
                                <li class="sub-menu__item"><a href="othmcourses.html" class="menu-link menu-link_us-s">OTHM</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">GRC & Fincrime</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Project Management</a></li>
                                </ul>
                            </div>

                            </div>
                        </div>
                        </li>

                        <li class="navigation__item">
                        <a href="#" class="navigation__link">Study Abroad</a>
                        </li>

                        <li class="navigation__item">
                        <a href="./about.html" class="navigation__link js-nav-right d-flex align-items-center">About us<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></a>
                        <div class="sub-menu position-absolute top-0 start-100 w-100 d-none">
                            <a href="./about.html" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>About us</a>
                            <ul class="list-unstyled">
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Mission</a></li>
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Our Team</a></li>
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Recognition</a></li>
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Our Partiners</a></li>
                            </ul>
                        </div>
                        </li>

                        <li class="navigation__item">
                        <a href="#" class="navigation__link">Testimonials</a>
                        </li>

                        <li class="navigation__item">
                        <a href="#" class="navigation__link">How to Apply</a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="border-top mt-auto pb-2">
                    <div class="customer-links container mt-4 mb-2 pb-1">
                    <svg class="d-inline-block align-middle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user" /></svg>
                    <span class="d-inline-block ms-2 text-uppercase align-middle fw-medium">My Account</span>
                    </div>

                    <ul class="container social-links list-unstyled d-flex flex-wrap mb-0">
                    <li>
                        <a href="#" class="footer__social-link d-block ps-0">
                        <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"/></svg>
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
                
            </div>
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
                                    <Link to="/studyabroad" className="navigation__link">
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
                                    <Link to="/contact" className="navigation__link">Contact us</Link>
                                </li>
                            </ul>
                        </nav>
                       
                        <div className="header-tools d-flex align-items-center">
                            <Link to="/cart" className="header-tools__item header-tools__cart" data-aside="cartDrawer">
                                <span className="mr-2">Cart (0) &nbsp; </span>
                                <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                                
                            </Link>
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
                    <Route path="/studyabroad" element={<Study} />
                    <Route path="/aboutus" element={About} />
                    <Route path="/testimonials" element={Testimonials} />
                    <Route path="/howtoApply" element={HowtoApply} />
                    <Route path="/contact" element={Contact} />
                    <Route path="/cart" element={Cart} />
                </Routes>
            </header>
        </BrowserRouter>
    );
}

