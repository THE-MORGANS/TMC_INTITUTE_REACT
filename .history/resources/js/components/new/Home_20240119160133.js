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
   
    return ( 
      <div>
       <Navbar />

        <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <main class="bg-grey-faf9f8">
          
        <section className="swiper-container js-swiper-slider slideshow full-width_padding-0 slideshow-md"
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
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="overflow-hidden position-relative h-100">
                  <div className="slideshow-bg">
                    <img loading="lazy" src="" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right" />
                  </div>

                  <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
            
                    <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>
                    <h2 style="color:#37226C; z-index: 2;" className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                      TMC INSTITUTE
                    </h2>
                      <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                          We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                      </p>
                      <form action="" method="GET" class=" header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
                        <div class="hover-container position-relative">
                          <div class="js-hover__open">
                            <input class="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                          </div>
                          <div class="header-search__category-list js-hidden-content mt-2">
                            <ul class="search-suggestion list-unstyled">
                              <li class="search-suggestion__item js-search-select">Courses</li>
                              <li class="search-suggestion__item js-search-select">Computer Science</li>
                              <li class="search-suggestion__item js-search-select">SLT</li>
                              <li class="search-suggestion__item js-search-select">Mass comm</li>
                            </ul>
                          </div>
                        </div>
                        <input class="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                        <button class="btn btn-primary header-search__btn d-flex"  type="submit">
                          <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  <p class=" pt-1 p-1">Search</p> 
                        </button>
                      </form>
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