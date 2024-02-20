import React from 'react'
import ReactDom from 'react-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function About() {
    let url = ` ${window.location.origin}/`;
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
    return (
        <div className="">
            <Navbar/>
            <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
                <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
                <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
                    <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
                </div>
                <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
                    <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="breadcumb-content text-center">
                    <h1 className="breadcumb-title">About Us</h1>
                    <ul className="breadcumb-menu">
                        <li><a onClick={handlehome}>Home</a></li>
                        <li>About Us</li>
                    </ul>
                    </div>
                </div>
            </div>

            <section class="overflow-hidden space">
                <div class="container">
                    <div class="title-area text-center">
                    <span class="sub-title"><i class="fal fa-book me-2"></i> What We Do</span>
                    <h2 class="sec-title">Online Education Tailored to You</h2>
                    </div>
                    <div class="row gy-4 justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="service-card style3">
                        <div class="service-card-content">
                            <div class="service-card-icon">
                            <img src="assets/img/icon/service-icon-3-1.svg" alt="Icon"/>
                            </div>
                            <h3 class="box-title">Learn From Anywhere</h3>
                            <p class="service-card-text">Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource leveling platforms</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-card style3">
                        <div class="service-card-content">
                            <div class="service-card-icon">
                            <img src="assets/img/icon/service-icon-3-2.svg" alt="Icon"/>
                            </div>
                            <h3 class="box-title">Expert Instructor</h3>
                            <p class="service-card-text">Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource leveling platforms</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-card style3">
                        <div class="service-card-content">
                            <div class="service-card-icon">
                            <img src="assets/img/icon/service-icon-3-3.svg" alt="Icon"/>
                            </div>
                            <h3 class="box-title">24/7 Live Support</h3>
                            <p class="service-card-text">Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource leveling platforms</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>



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
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand5.png" width="123" height="31" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand6.png" width="137" height="22" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand7.png" width="94" height="21" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="mb-5 pb-xl-5"></div>

            </main>

            <Footer/>
        </div>
    );
}

if(document.getElementById("aboutrent")){
    ReactDom.render(<About/>, document.getElementById("aboutrent"));
    }
