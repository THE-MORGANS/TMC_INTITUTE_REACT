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
          
        (
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
      <style>
        {`
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
        `}
      </style>

      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              {/* Replace the image source with your actual path */}
              <img
                loading="lazy"
                src="../images/home/slider1.jpg"
                width="1863"
                height="700"
                alt=""
                className="slideshow-bg__img object-fit-cover object-position-right"
              />
              {/* Text overlay */}
              <div className="slideshow-text container text-white w-75">
                <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium">
                  Never Stop Learning
                </h4>
                <h2 className="h1 fw-normal mb-0">
                  TMC INSTITUTE
                </h2>
                <p className="fs-6 mb-4 pb-2">
                  We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                </p>
                <form action="" method="GET" className="header-search search-field bg-body" style={{ border: '2px solid #A32926', borderRadius: '10px' }}>
                  {/* ... Your form content goes here */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              {/* Replace the image source with your actual path */}
              <img
                loading="lazy"
                src="../images/home/demo9/slider2.jpg"
                width="1863"
                height="700"
                alt=""
                className="slideshow-bg__img object-fit-cover object-position-right"
              />
              {/* Text overlay */}
              <div className="slideshow-text container text-white w-75">
                <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium">
                  Never Stop Learning
                </h4>
                <h2 className="h1 fw-normal mb-0">
                  TMC INSTITUTE
                </h2>
                <p className="fs-6 mb-4 pb-2">
                  We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                </p>
                <form action="" method="GET" className="header-search search-field bg-body" style={{ border: '2px solid #A32926', borderRadius: '10px' }}>
                  {/* ... Your form content goes here */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              {/* Replace the image source with your actual path */}
              <img
                loading="lazy"
                src="../images/home/demo9/slider3.jpg"
                width="1863"
                height="700"
                alt=""
                className="slideshow-bg__img object-fit-cover object-position-right"
              />
              {/* Text overlay */}
              <div className="slideshow-text container text-white w-75">
                <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium">
                  Never Stop Learning
                </h4>
                <h2 className="h1 fw-normal mb-0">
                  TMC INSTITUTE
                </h2>
                <p className="fs-6 mb-4 pb-2">
                  We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                </p>
                <form action="" method="GET" className="header-search search-field bg-body" style={{ border: '2px solid #A32926', borderRadius: '10px' }}>
                  {/* ... Your form content goes here */}
                </form>
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