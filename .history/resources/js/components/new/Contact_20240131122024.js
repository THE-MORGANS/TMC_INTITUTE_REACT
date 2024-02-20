// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar/>

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
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li><a href="index.html">Home</a></li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space" id="contact-sec">
        <div className="container">
          <div className="map-sec">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.57299537867544!2d3.3447428988822976!3d6.5961101179910315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922431bb3a15%3A0xc7b0fa06a5f9ff0b!2s2nd%20Floor%2C%201%20Adeola%20Adeoye%20St%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705794687497!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 mb-30 mb-xl-0">
              <div className="me-xxl-5 mt-60">
                <div className="title-area mb-25">
                  <h2 className="border-title h3">Have Any Questions?</h2>
                </div>
                <p className="mt-n2 mb-25">
                  Have an inquiry or some feedback for us? Fill out the form below to contact our team.
                </p>
                <div className="contact-feature">
                  <div className="contact-feature-icon"><i className="fal fa-location-dot"></i></div>
                  <div className="media-body">
                    <p className="contact-feature_label">Our Address</p>
                    <p className="contact-feature_label">Office in United Kingdom</p>
                    <a href="" className="contact-feature_link mb-20">
                      4 Holborn Viaduct London EC1A 2BN United Kingdom
                    </a>
                    <p className="contact-feature_label">Office in Nigeria</p>
                    <a href="" className="contact-feature_link">
                      2nd Floor 1, Adeola Adeoye Street Off Toyin Street ikeja, Lagos Nigeria.
                    </a>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon"><i className="fal fa-phone"></i></div>
                  <div className="media-body">
                    <p className="contact-feature_label">Phone Number</p>
                    <a href="tel:+011456586986" className="contact-feature_link">
                      United Kingdom: <span>(+44) 7466588324</span>
                    </a>
                    <a href="tel:+011456586986" className="contact-feature_link">
                      Phone: <span>(+234) 17001770, (+234) 9153414314,</span>
                    </a>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon"><i className="fal fa-clock"></i></div>
                  <div className="media-body">
                    <p className="contact-feature_label">Hours of Operation</p>
                    <span className="contact-feature_link">Monday - Friday: 09:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="contact-form-wrap" data-bg-src="assets/img/bg/contact_bg_1.png">
                <span className="sub-title">Contact With Us!</span>
                <h2 className="border-title">Get in Touch</h2>
                <p className="mt-n1 mb-30 sec-text">
                  Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <form action="http://themeholy.com/html/edura/demo/mail.php" method="POST" className="contact-form ajax-contact">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control style-white" name="name" id="name" placeholder="Your Name*" />
                        <i className="fal fa-user"></i>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control style-white" name="email" id="email" placeholder="Email Address*" />
                        <i className="fal fa-envelope"></i>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select name="subject" id="subject" className="single-select nice-select form-select style-white">
                          <option value="" disabled="disabled" selected="selected" hidden>
                            Select Subject*
                          </option>
                          <option value="Web Design">Web Design</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Engine Diagnostics">Engine Diagnostics</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" className="form-control style-white" name="number" id="number" placeholder="Phone Number*" />
                        <i className="fal fa-phone"></i>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" id="message" cols="30" rows="3" className="form-control style-white" placeholder="Write Your Message*"></textarea>
                        <i className="fal fa-pen"></i>
                      </div>
                    </div>
                    <div className="form-btn col-12 mt-10">
                      <button className="th-btn">
                        Send Message
                        <i className="fas fa-long-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
