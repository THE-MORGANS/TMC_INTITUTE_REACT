import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Study from './Study';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import HowtoApply from './HowtoApply';
import Cart from './Cart';


export default function Navbar() {
   
    return ( 
      <div>
       <Nav

        <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <main class="bg-grey-faf9f8">
          <h4>How far u</h4>
        </main>
        
        </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Navbar />, document.getElementById('dash'));
}