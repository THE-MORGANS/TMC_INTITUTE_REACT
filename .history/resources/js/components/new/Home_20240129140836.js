
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { HiOutlineSearch } from "react-icons/hi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Study from './Study';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import HowtoApply from './HowtoApply';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import { AES, enc } from 'crypto-js';
// https://github.com/brainfoolong/cryptojs-aes-php
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import { Markup } from 'interweave';
import CurrencyFormat from 'react-currency-format';


export default function Home() {
  let url = window.location.origin;
  const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
 // const [data, Setdata] = useState(allcourse.length > 0?allcourse:[]);
  const [cookie, Setcookie] = useState(true)
  const [showned, setShowned] = useState('')
  const [local, Setlocal] = useState(localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''});
   
    
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

    let url2 = ` ${window.location.origin}`;
    const handleterms = ()=>{
         window.location.href = ` ${url2}terms`
     } 
 
     const handleViewcourses = ()=>{
         window.location.href = ` ${url2}/listcourses`
     }

    const handledetailscourses = ()=>{
        window.location.href = ` ${url2}/coursesdetails`
    }

    return ( 
      <div>
       <Navbar />
        <main class="bg-grey-faf9f8">
          
          {/* Slider */}
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
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
             
                    <p className="text-white fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5 h3">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px', width: '1000px',  margin: 'auto' }}>
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
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
                    <p className="text-white h3 fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
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
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
                    <p className="h3 text-white fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
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
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
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
          {/* <div className="slideshow-pagination position-left-center"></div> */}
          <div class="container">
            <div class="slideshow-pagination d-flex align-items-center position-absolute bottom-0 left-50 mb-5"></div>
          
          </div>
          </section>

          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

          <section className="grid-banner container">
            <div className="row">
              <h2 style={{color:'#A32926', fontWeight: '500'}} className="section-title text-center fw-normal mb-1 mb-md-1 pb-xl-1 mb-xl-4">
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
              <h2 style={{color: '#37226C' }} className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">Courses</h2>
              <p   className="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3">
                We are the leading and specialist provider of specialized corporate training including Governance, Risk & Compliance, Financial Crime, and Leadership training focused on cultivating the right attitude and skills in your teams.
              </p>
             

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
                          <a  onClick={(e)=>handledetailscourses(e)}  className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-2.png"  alt="" />
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Two</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                            Standard 2 builds on the foundations of Standard 1 and includes requirements...
                          </a></h6>
                          <a  onClick={(e)=>handledetailscourses(e)}  className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-3.png"  alt="" />
                          </center>
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Three</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                          Standard 4 of the Aged Care Quality Standards focuses on services and supports...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-4.png"  alt="" />
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Four</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                            Standard 4 of the Aged Care Quality Standards focuses on services and supports...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-5.png"  alt="" />
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Five</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                            Standard 5 Learning Resources. Learning Resources ensure that the school has the...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
         
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-6.png"  alt="" />
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Six</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                          Standard 6 requires an organisation to have a system to resolve complaints...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-7.png"  alt="" />
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Seven</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                          Standard 7 requires an organisation to have a system to resolve complaints...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="mb-xl-2 mt-xl-4" >
                          <center>
                            <img src="../images/home/standard-8.png"  alt="" />
                          </center>
                          
                        </div>
                        <div className="pc__info position-relative text-center ">
                          <p className="pc__category text-center" style={{color: '#37226C'}}>Standard Eight</p>
                          <h6 className="pc__title text-center mb-2"><a href="">
                          Standard 8 requires an organisation to have a system to resolve complaints...
                          </a></h6>
                          <a  href="#" className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
        
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <a  onClick={(e)=>handleViewcourses(e)}  className="mt-xl-4 mb-xl-4 btn btn-primary" style={{bordeRadius: '10px'}}>View More Courses</a>
                  </div>
              </div>
          </section>

            <div className="mb-1 pb-4 mb-xl-4 pb-xl-4"></div>
            <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

            <section className="contact-us container" style={{backgroundColor:  '#EDE9F2', borderRadius:'20px'}}>
              <div className="p-4">
                <div className="row mb-5">
                  <div className="col-lg-4">
                    <p className="mb-4">College Level</p>
                    <h2 style={{fontWeight:'900'}} className="section-title text-left ">Don’t waste time in COVID-19 pandemic. Develop your skills.</h2>
                    
                    <p className="mb-4">
                      High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized
                      meaning for high-definition, generally any video.
                    </p>
                    <div className="text-left mt-2">
                      <a href="#" className="btn btn-primary js-open-aside mb-xl-4 " style={{bordeRadius: '10px'}} >Register Now</a>

                    </div>
                  </div>
                  <div className="col-lg-8">
                    <img src="../images/home/colleage-level.jpg" className="w-80 h-auto d-block" />
                    
                  </div>
                </div>
              </div>
            </section>

            <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
            {/* testimonials */}
            <section className="testimonials bg-white">
              <div className="container">
                <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">Testimonials</h2>

                <div className="position-relative">
                  <div className="swiper-container js-swiper-slider"
                    data-settings='{
                      "autoplay": {
                        "delay": 5000
                      },
                      "slidesPerView": 1,
                      "slidesPerGroup": 1,
                      "effect": "none",
                      "loop": true,
                      "pagination": {
                        "el": ".testimonial-pagination",
                        "type": "bullets",
                        "clickable": true
                      },
                      "navigation": {
                        "nextEl": ".testimonial-carousel__next",
                        "prevEl": ".testimonial-carousel__prev"
                      }
                    }'>
                    <div className="swiper-wrapper testimonials__wrapper">
                      <div className="swiper-slide testimonials__item mb-4 text-center">
                        <div className="w-740 mx-auto">
                          <h5 className="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                          <p className="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                          <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                            <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide testimonials__item mb-4 text-center">
                        <div className="w-740 mx-auto">
                          <h5 className="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                          <p className="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                          <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                            <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide testimonials__item mb-4 text-center">
                        <div className="w-740 mx-auto">
                          <h5 className="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                          <p className="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                          <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                            <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide testimonials__item mb-4 text-center">
                        <div className="w-740 mx-auto">
                          <h5 className="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                          <p className="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                          <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                            <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="products-carousel__prev testimonial-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
                  </div>
                  <div className="products-carousel__next testimonial-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
                  </div>
              
                  <div className="testimonial-pagination type2 mt-4 d-flex align-items-center justify-content-center"></div>
                  
                </div>
                <div className="mt-1 pt-4 mt-xl-5 pt-xl-5"></div>
              </div>
            </section>

            <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

            <section className="contact-us container" >
              <div className="p-4">
                <div className="row mb-5">
                  <div className="col-lg-6">
                    <img src="../images/home/study-abroad.png" class="w-80 h-auto d-block" />
                  </div>
                  <div className="col-lg-6  justify-content-between">
                    <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                    <h2 style={{fontWeight:'900', color:'#37226C'}} className="section-title text-left mb-4 mb-xl-5">
                      Stydy Abroad Part
                    </h2>
                    
                    <p className="mb-4 mb-xl-5">
                      High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.
                    </p>
                    <div className="text-left mt-2">
                      <a href="#" className="btn btn-primary js-open-aside mb-xl-4 " style={{borderRadius: '10px'}}>Career Information</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

            <section className="contact-us container" style={{backgroundColor:  '#37226C',  padding:'10px'}}>
                <div className="p-3 text-center">
                  <div className="row mb-5">
                    <div className="col-xl-4  d-none d-lg-block">
                      <img src="../images/home/sub-1.png" className="w-50 h-auto d-block mt-xl-5" />
                    </div>
                    <div className=" col-xl-4">
                      <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                      <h2 style={{fontWeight:'900', color:'#fff'}} className="section-title text-left mb-4 mb-xl-3">
                        Subcribe to Get Update For Every New Courses
                      </h2>
                      
                      <p className="mb-4 mb-xl-5 text-color" style={{color:'#fff'}}>
                        20k+ students daily learn with TMC Institute. Subscribe for new courses.
                      </p>
                      <div className="text-left mt-2">
                        <form action="" className="footer-newsletter__form position-relative bg-body">
                        <input
                            className="form-control border-white"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            style={{
                              backgroundImage: `url("data:image/png;base64,")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '70px',
                              backgroundPosition: '97% center',
                              cursor: 'auto',
                            }}
                            data-temp-mail-org="1"
                          />
                          <input className="btn btn-link  fw-medium text-white position-absolute top-0 end-0 h-100 " type="submit" value="Subcribe" />
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-4  d-none d-lg-block">
                      <img src="../images/home/sub-2.png" className="w-50 h-auto d-block mt-xl-5" />
                    </div>
                  </div>
                </div>
            </section>

            <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>


        </main>

      <Footer />
        
      </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}