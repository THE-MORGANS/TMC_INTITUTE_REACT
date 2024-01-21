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
          
       

        </main>
        
        </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}