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
        {/* Web Fixed Footer  */}
        <footer className="footer footer_type_1">
            <div className="footer-middle container">
                <div className="row row-cols-lg-5 row-cols-2">
                    <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
                    <div className="logo">
                        <a href="https://uomo-html.flexkitux.com/">
                        <img src="../images/logo.png" alt="TMC Institute" className="logo__image d-block" />
                        </a>
                    </div>
                    <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                        <li>
                        <a href="https://facebook.com/" className="footer__social-link d-block">
                            <svg claclassNamess="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/" className="footer__social-link d-block">
                            <svg className="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://instagram.com/" className="footer__social-link d-block">
                            <svg className="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://pinterest.com/" className="footer__social-link d-block">
                            <svg className="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
                        </a>
                        </li>
                    </ul>
                    <p className="footer-address">
                        TMC Institute is a registered<br/> trademark of TMC
                    </p>
                    </div>

                    <div className="footer-column footer-menu mb-4 mb-lg-0">
                    <h6 className="sub-menu__title text-uppercase">courses</h6>
                    <ul className="sub-menu__list list-unstyled">
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Cooperate governance</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Financial crime prevention</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Insurance courses</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Risk management</a></li>
                    </ul>
                    </div>

                    <div className="footer-column footer-menu mb-4 mb-lg-0">
                    <h6 className="sub-menu__title text-uppercase">Community</h6>
                    <ul className="sub-menu__list list-unstyled">
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Learners</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Parteners</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Developers</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Transactions</a></li>
                    </ul>
                    </div>

                    <div className="footer-column footer-menu mb-4 mb-lg-0">
                    <h6 className="sub-menu__title text-uppercase">Quick Links</h6>
                    <ul className="sub-menu__list list-unstyled">
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">TMC</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">SNATIKA</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">LGCA</a></li>
                        <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Admissions</a></li>
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

        <!-------------- Mobile Fixed Footer -------------->
        <footer class="footer-mobile container w-100 px-5 d-md-none bg-body">
            <div class="row text-center">
            <div class="col-4">
                <a href="./index.html" class="footer-mobile__link d-flex flex-column align-items-center">
                <svg class="d-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_home" /></svg>
                <span>Home</span>
                </a>
            </div><!-- /.col-3 -->

            <div class="col-4">
                <a href="./courses.html" class="footer-mobile__link d-flex flex-column align-items-center">
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path><path d="M8 6h9v2H8z"></path></svg>
                <span>Cosurses</span>
                </a>
            </div><!-- /.col-3 -->

            <div class="col-4">
                <a href="/" class="footer-mobile__link d-flex flex-column align-items-center">
                <div class="position-relative">
                    <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                
                    <span class="wishlist-amount d-block position-absolute js-wishlist-count">3</span>
                </div>
                <span>Cart</span>
                </a>
            </div><!-- /.col-3 -->
            </div><!-- /.row -->
        </footer>
        <!-- /.footer-mobile container position-fixed d-md-none bottom-0 -->



    </div>
  )
}




