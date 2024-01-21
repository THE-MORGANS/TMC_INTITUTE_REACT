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
  .slideshow-bg {
    position: relative;
    width: 1863px; /* Adjust based on your image width */
    height: 700px; /* Adjust based on your image height */
  }
  
  .slideshow-bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(36, 16, 16, 0.5); /* Adjust the color and transparency as needed */
    z-index: 1;
  }
  .slideshow-text {
    color: white;
  }
  
  
</style>
<div class="swiper-wrapper">
  <div class="swiper-slide">
    <div class="overflow-hidden position-relative h-100">
      <div class="slideshow-bg">
        <img loading="lazy" src="../images/home/demo9/slider1.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right">
      </div>
      <!-- <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center" style="z-index: 2;">
        <h5 class="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white" style="z-index: 2;">Never Stop Learning</h5>
        <h2 class="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5 text-white" style="z-index: 2;">TMC INSTITUTE</h2>
        <p class="animate animate_fade animate_btt animate_delay-6 text-white" style="z-index: 2;">We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance,<br> Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.</p>
        <a href="#" class="btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy Now</a>
      </div> -->
      <!-- <div class="col-lg-6"> -->
      <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
        
        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>
        <h2 style="color:#37226C; z-index: 2;" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
          TMC INSTITUTE
        </h2>
          <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
              We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
          </p>
          <form action="" method="GET" class=" header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
            <div class="hover-container position-relative">
              <div class="js-hover__open">
                <input class="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly="">
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
            <input class="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses...">

            <button class="btn btn-primary header-search__btn d-flex"  type="submit">
              <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  <p class=" pt-1 p-1">Search</p> 
            </button>
          </form>
      </div>

    </div>
  </div>
  
  
  <div class="swiper-slide">
    <div class="overflow-hidden position-relative h-100">
      <div class="slideshow-bg">
        <img loading="lazy" src="../images/home/demo9/slider2.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right"/>
      </div>
      <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
       
        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>

        <h2 style="color:#37226C" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
          TMC INSTITUTE
        </h2>
          <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
              We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
          </p>
          <form action="" method="GET" class="header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
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
 
  <div class="swiper-slide">
    <div class="overflow-hidden position-relative h-100">
      <div class="slideshow-bg">
        <img loading="lazy" src="../images/home/demo9/slider3.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right"/>
      </div>
      <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>

        <h2 style="color:#37226C" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
          TMC INSTITUTE
        </h2>
          <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
              We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
          </p>
          <form action="" method="GET" class="header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
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
  <div class="swiper-slide">
    <div class="overflow-hidden position-relative h-100">
      <div class="slideshow-bg">
        <img loading="lazy" src="../images/home/demo9/slider4.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right" />
      </div>
      <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>

        <h2 style="color:#37226C" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
          TMC INSTITUTE
        </h2>
          <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
              We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
          </p>
          <form action="" method="GET" class="header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
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
  </div><!-- /.slideshow-item -->
</div><!-- /.slideshow-wrapper js-swiper-slider -->

<div class="slideshow-pagination position-left-center"></div>
<!-- /.products-pagination -->
</section>

        </main>
        
        </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}