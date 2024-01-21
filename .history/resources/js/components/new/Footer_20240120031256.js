import React from 'react'
import ReactDOM from 'react-dom'

export default function Footer() {
    let url = ` ${window.location.origin}/`;
   const handleterms = ()=>{
        window.location.href = ` ${url}terms`;
    }

    const handlepri = ()=>{
        window.location.href = ` ${url}privacy`;
    }

    const handleabout = ()=>{
        window.location.href =`${url}about-us`;
    }
  return (
    <div>
        <footer className="footer footer_type_1">
            <div className="footer-middle container">
            <div className="row row-cols-lg-5 row-cols-2">
                <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
                <div className="logo">
                    <a href="https://uomo-html.flexkitux.com/">
                    <img src="../images/logo.png" alt="Uomo" className="logo__image d-block" />
                    </a>
                </div>
                <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                    <li>
                    <a href="https://facebook.com/" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
                    </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
                    </a>
                    </li>
                    <li>
                    <a href="https://instagram.com/" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
                    </a>
                    </li>
                    <li>
                    <a href="https://pinterest.com/" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
                    </a>
                    </li>
                </ul>
                <p class="footer-address">
                    TMC Institute is a registered<br/> trademark of TMC
                </p>
                </div>

                <div class="footer-column footer-menu mb-4 mb-lg-0">
                <h6 class="sub-menu__title text-uppercase">courses</h6>
                <ul class="sub-menu__list list-unstyled">
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Cooperate governance</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Financial crime prevention</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Insurance courses</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Risk management</a></li>
                </ul>
                </div>

                <div class="footer-column footer-menu mb-4 mb-lg-0">
                <h6 class="sub-menu__title text-uppercase">Community</h6>
                <ul class="sub-menu__list list-unstyled">
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Learners</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Parteners</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Developers</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Transactions</a></li>
                </ul>
                </div>

                <div class="footer-column footer-menu mb-4 mb-lg-0">
                <h6 class="sub-menu__title text-uppercase">Quick Links</h6>
                <ul class="sub-menu__list list-unstyled">
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">TMC</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">SNATIKA</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">LGCA</a></li>
                    <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Admissions</a></li>
                </ul>
                </div>

                <div className="footer-column footer-menu mb-4 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase">More</h6>
                <ul className="sub-menu__list list-unstyled">
                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Press</a></li>
                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Investors</a></li>
                    <li className="sub-menu__item"><a href="terms.html" className="menu-link menu-link_us-s">Terms</a></li>
                    <li className="sub-menu__item"><a href="privacy.html" className="menu-link menu-link_us-s">Privacy</a></li>
                </ul>
                </div>

            </div>
            </div>

            <div className="footer-bottom container">
            <div className="d-block d-md-flex align-items-center">
                <span className="footer-copyright me-auto">©2023 TMC Institute</span>
                
            </div>
            </div>
        </footer>
    </div>
  )
}




