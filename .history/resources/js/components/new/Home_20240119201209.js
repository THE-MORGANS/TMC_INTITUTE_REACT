import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Study from './Study';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import HowtoApply from './HowtoApply';
import Cart from './Cart';
import Navbar from './Navbar';


export default function Home() {
    const slideshowStyle = {
      position: 'relative',
      width: '1863px', // Adjust based on your image width
      height: '700px', // Adjust based on your image height
    };

    const overlayStyle = {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(36, 16, 16, 0.5)', // Adjust the color and transparency as needed
      zIndex: '1',
    };

    const textStyle = {
      color: 'white',
      zIndex:2,
    };

    return ( 
      <div>
       <Navbar />
        <main class="bg-grey-faf9f8">
          
         

          <section class="swiper-container js-swiper-slider slideshow full-width_padding-0 slideshow-md"
            data-settings='{
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": 1,
              "effect": "fade",
              "loop": true,
              "pagination": {
                "el": ".slideshow-pagination",
                "type": "bullets",
                "clickable": true
              }
            }'>
          <style>
            
            {`
              .slideshow-bg {
                position: relative;
                width: 1863px; 
                height: 700px; 
              }
              .slideshow-bg::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(36, 16, 16, 0.2);
                z-index: 1;
              }
              .slideshow-text {
                color: white;
              }
            `}
            
            
          </style>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider1.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C', zindex: 2}} className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    TMC INSTITUTE
                  </h2>
                    <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider2.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C', zindex: 2}} className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    TMC INSTITUTE
                  </h2>
                    <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>

            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider3.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C', zindex: 2}} className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    TMC INSTITUTE
                  </h2>
                    <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>
           
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider4.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C', zindex: 2}} className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    TMC INSTITUTE
                  </h2>
                    <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>

          </div>
          <div className="slideshow-pagination position-left-center"></div>
          </section>

          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

          <section className="grid-banner container">
            <div className="row">
              <h2 style={{color: '#37226C' }} className="section-title text-center fw-normal mb-1 mb-md-1 pb-xl-1 mb-xl-4">
                High quality video, audio & popular classes
              </h2>
              <p   className="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3" >
                TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow
                every year, capitalizing on our in-depth knowledge of the needs of organizations and financial institutions.
              </p>
            </div>
            
            <div className="row">
              <div className="col-md-12">
                <div className="grid-banner__item position-relative">
                  <img loading="lazy" className="w-100 h-auto" src="../images/home/home-1.png"  width="1060" height="550" alt="" />
                
                </div>
                <div className="pb-4 pt-1"></div>
              </div>
              <div className="col-md-4 d-flex align-items-center" >
                <a href="#" className="btn btn-primary mb-xl-4 bg-white no-border" style={{borderRadius: '10px'}}>
                  <img loading="lazy"  src="../images/home/audio.png" width="40" height="40" alt="" />
                  <span className="ml-2 h4 " >Audio Classes</span>
                </a>
              </div>
              <div className="col-md-4 d-flex align-items-center" >
                <a href="#" className="btn btn-primary mb-xl-4 bg-white no-border" style={{borderRadius: '10px'}}>
                  <img loading="lazy"  src="../images/home/live.png" width="40" height="40" alt="" />
                  <span className="ml-2 h4 " >Live Classes</span>
                </a>
              </div>
              <div className="col-md-4 d-flex align-items-center" >
                <a href="#" className="btn btn-primary mb-xl-4 bg-white no-border" style={{borderRadius: '10px'}}>
                  <img loading="lazy"  src="../images/home/record.png" width="40" height="40" alt="" />
                  <span className="ml-2 h4 " >Recorded Classes</span>
                </a>
              </div>
            </div>
          </section>

          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

          <section className="products-carousel container">
              <h2 style={{color: '#37226C' }} className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">Courses Categories</h2>
              <p   className="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3">
                We are the leading and specialist provider of specialized corporate training including Governance, Risk & Compliance, Financial Crime, and Leadership training focused on cultivating the right attitude and skills in your teams.
              </p>
              <ul className="nav nav-tabs mb-3 mb-xl-5 text-uppercase justify-content-center" id="collections-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link nav-link_underscore active" id="collections-tab-1-trigger" data-bs-toggle="tab" href="#collections-tab-1" role="tab" aria-controls="collections-tab-1" aria-selected="true">First Level</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link nav-link_underscore" id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true">Second Level</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link nav-link_underscore" id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true">Third Level</a>
                </li>
              </ul>

              <div className="tab-content pt-2 container" id="collections-tab-content">
                <div className="tab-pane fade show active" id="collections-tab-1" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
                  <div className="row ">
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-1.png"  alt=""/>
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard One</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                            Standard 1 is a foundation Standard that reflects 7 important concepts...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
        
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </section>

        </main>
        
        </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}