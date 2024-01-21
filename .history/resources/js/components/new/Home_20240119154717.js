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
          <section class="grid-banner container">
            <div class="row">
              <h2 style="color: #37226C; " class="section-title text-center fw-normal mb-1 mb-md-1 pb-xl-1 mb-xl-4">
                High quality video, audio & popular classes
              </h2>
              <p   class="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3" >
                TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow
                every year, capitalizing on our in-depth knowledge of the needs of organizations and financial institutions.
              </p>
            </div>
          </section>

        </main>
        
        </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}