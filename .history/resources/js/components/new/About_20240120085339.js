import React from 'react'
import ReactDom from 'react-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function About() {
    return (
        <div className="">
            <Navbar/>
     
            <main>
                <div className="mb-4 pb-4"></div>
                <section className="about-us container">
                    <div className="mw-930">
                        <h2 className="page-title">ABOUT TMC Institute</h2>
                    </div>
                    <div className="about-us__content pb-5 mb-5">
                        <p className="mb-5">
                        <img loading="lazy" className="w-100 h-auto d-block" src="../images/about/about-1.png" width="1410" height="550" alt="" />
                        </p>
                        <div className="mw-930">
                        <h3 className="mb-4">OUR STORY</h3>
                        <p className="fs-6 fw-medium mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="mb-4">Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>
                        <div className="row mb-3">
                            <div className="col-md-6">
                            <h5 className="mb-3">Our Mission</h5>
                            <p className="mb-3">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="col-md-6">
                            <h5 className="mb-3">Our Vision</h5>
                            <p className="mb-3">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        </div>
                        <div className="mw-930 d-lg-flex align-items-lg-center">
                        <div className="image-wrapper col-lg-6">
                            <img className="h-auto" loading="lazy" src="../images/about/about-1.jpg" width="450" height="500" alt="" />
                        </div>
                        <div className="content-wrapper col-lg-6 px-lg-4">
                            <h5 className="mb-3">The Company</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="service-promotion horizontal container mw-930 pt-0 mb-md-4 pb-md-4 mb-xl-5">
                    <div className="row">
                        <div className="col-md-6 text-center mb-5 mb-md-0">
                        <div className="service-promotion__icon mb-4">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_shipping" /></svg>
                        </div>
                        <h3 className="service-promotion__title fs-6 text-uppercase">Fast And Free Delivery</h3>
                        <p className="service-promotion__content text-secondary">Free delivery for all orders over $140</p>
                        </div>

                        <div className="col-md-6 text-center mb-5 mb-md-0">
                        <div className="service-promotion__icon mb-4">
                            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_headphone" /></svg>
                        </div>
                        <h3 className="service-promotion__title fs-6 text-uppercase">24/7 Customer Support</h3>
                        <p className="service-promotion__content text-secondary">Friendly 24/7 customer support</p>
                        </div>
                    </div>
                </section>

                <section className="brands-carousel container mw-930">
                    <h5 className="mb-3 mb-xl-5">Company Partners</h5>
                    <div className="position-relative">
                        <div class="swiper-container js-swiper-slider"
                            data-settings='{
                                "autoplay": {
                                    "delay": 5000
                                },
                                "slidesPerView": 5,
                                "slidesPerGroup": 1,
                                "effect": "none",
                                "loop": true,
                                "breakpoints": {
                                    "320": {
                                        "slidesPerView": 2,
                                        "slidesPerGroup": 2,
                                        "spaceBetween": 14
                                    },
                                    "768": {
                                        "slidesPerView": 3,
                                        "slidesPerGroup": 3,
                                        "spaceBetween": 24
                                    },
                                    "992": {
                                        "slidesPerView": 4,
                                        "slidesPerGroup": 1,
                                        "spaceBetween": 30,
                                        "pagination": false
                                    },
                                    "1200": {
                                        "slidesPerView": 5,
                                        "slidesPerGroup": 1,
                                        "spaceBetween": 30,
                                        "pagination": false
                                    }
                                }
                            }'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand1.png" width="120" height="20" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand2.png" width="87" height="20" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand3.png" width="132" height="22" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand4.png" width="72" height="21" alt="" />
                                </div>
                                <div class="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand5.png" width="123" height="31" alt="" />
                                </div>
                                <div class="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand6.png" width="137" height="22" alt="" />
                                </div>
                                <div class="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand7.png" width="94" height="21" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>

            <Footer/>
        </div>
    );
}

if(document.getElementById("aboutrent")){
    ReactDom.render(<About/>, document.getElementById("aboutrent"));
    }
