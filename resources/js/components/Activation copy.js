import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './new/Footer';
import Navbar from './new/Navbar';

export default function Activation() { 
  let url = ` ${window.location.origin}`;
  
  const handleClick =(e)=>{
    e.preventDefault();
    window.location.href = `${url}/login`;
  }

  return ( 
    <div>

      {/* <Navbar/> */}
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
        <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
          <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
        </div>
        <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
          <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="breadcumb-content text-center">
          <h1 className="breadcumb-title"> Thank you for Signing up!</h1>
          
          </div>
        </div>
      </div>
      <div className="space-bottom space-top about-sec bg-bottom-right"
            data-bg-src="assets/img/update1/bg/about_bg_1.jpg"
            id="about-sec"
            >
            <div className="container">
                <div className="row">
                  <div className="col-xxl-7 mb-40 mb-xl-0 ">
                    <div className="title-area mb-35">
                      <span className="sub-title"><i className="fal fa-book me-2"></i> About Us</span>
                      <h2 className="sec-title"> Thank you for Signing up!</h2>
                      <p className="h4 mt-n2"> A confirmation email has been sent to your email address.</p>

                    </div>

                  </div>
                  <div className="col-xxl-4 mb-40 mb-xl-0">
                      <div className="img-box7 tilt-active">
                      <img className="w-100" src={layout} alt="About" />
                      </div>
                  </div>
                
                </div>
            </div>

      </div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="event-details-wrap">
           
            <center>
              <p className="h4 mt-n2"> A confirmation email has been sent to your email address.</p>
              <p className="mb-30">
                <b>Note:</b> If you do not receivce  email few minutes:
              </p>
              <div className="checklist mb-20">
                <ul>
                  <li>
                    Check spam folder
                  </li>
                  <li>Verfy you entered the correct email</li>
                  <li>If it is not resolved, please contact <a href='mailto:tmcinstitute-support@tmcinstitute.com' className="text-[#A32926]">tmcinstitute-support@tmcinstitute.com</a></li>
              
                </ul>
              </div>
              <div className="event-img center w-full sm:w-full   md:w-1/2 md:block  lg:w-1/2  lg:block">
                  <img className="w-80" src={layout} alt="About" />
                  {/* <img src="assets/img/event/event_details.png" alt="Event Image" /> */}

                  {/* <img src={layout} className="center sm:h-24 md:w-full md:h-full lg:h-full lg:w-full"/> */}
              </div>
            </center>
           
            </div>
          </div>
          </div>
        </div>
      </section>


    </div>
  )
}

if(document.getElementById('active')){
ReactDOM.render(<Activation/>, document.getElementById('active'));
}
