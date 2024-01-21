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



            </section>

        </main>
        
        </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}