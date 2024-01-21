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
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="overflow-hidden position-relative h-100">
                  <div class="slideshow-bg">
                    <img loading="lazy" src="../images/home/demo9/slider1.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right" />
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