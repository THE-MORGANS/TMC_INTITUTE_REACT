import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Study from './Study';


export default function Navbar() {

    return (
        <Router>
            <header id="header" class="header header-fullwidth ">
                <div class="container">
                    <div class="header-desk header-desk_type_1">
                        <div class="logo">
                            <a href="/">
                                <img src="../images/logo.png" width="40px" height="40px" alt="Uomo" class="logo__image d-block" />
                            </a>
                        </div>
                        <nav class="navigation">
                            <ul class="navigation__list list-unstyled d-flex">
                                <li>
                                <Link to="/">Home</Link>
                                </li>
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
                                <li>
                                <Link to="/study">About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* <Route path="/" exact component={Study} /> */}
                <Route path="/study" component={Study} />
            </header>
        </Router>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}