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

  const imgStyle = {
    width: '100%', // Ensure the image takes up 100% of the container width
    height: '100%', // Ensure the image takes up 100% of the container height
    objectFit: 'cover', // Adjust the object-fit property as needed
    objectPosition: 'right', // Adjust the object-position property as needed
  };
    return ( 
      <div>
       <Navbar />
        <main class="bg-grey-faf9f8">
          
        <section
          className="swiper-container js-swiper-slider slideshow full-width_padding-0 slideshow-md"
          data-settings={{
            autoplay: {
              delay: 5000,
            },
            slidesPerView: 1,
            effect: 'fade',
            loop: true,
            pagination: {
              el: '.slideshow-pagination',
              type: 'bullets',
              clickable: true,
            },
          }}
        >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              <img
                loading="lazy"
                src="{{ asset('images/home/slider1.jpg') }}" 
                width="1863"
                height="700"
                alt=""
                className="slideshow-bg__img object-fit-cover object-position-right"
              />
            </div>

            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={{ zIndex: 2 }}>
              <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{ fontWeight: 500, color: '#A32926' }}>
                Never Stop Learning
              </h4>
              <h2 style={{ color: '#37226C' }} className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                TMC INSTITUTE
              </h2>
              <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
              </p>
              <form action="" method="GET" className="header-search search-field bg-body" style={{ border: '2px solid #A32926', borderRadius: '10px' }}>
                  <div className="hover-container position-relative">
                      <div className="js-hover__open">
                        <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly="" />
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
                  <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..." />

                  <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                    <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                    <p className=" pt-1 p-1">Search</p> 
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