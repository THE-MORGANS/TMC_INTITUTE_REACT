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
                    <a href="" className="contact-feature_link">
                      4 Holborn Viaduct London EC1A 2BN United Kingdom
                    </a>
                    <p className="contact-feature_label">Office in Nigeria</p>
                    <a href="" className="contact-feature_link">
                      4 Holborn Viaduct London EC1A 2BN United Kingdom
                    </a>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon"><i className="fal fa-phone"></i></div>
                  <div className="media-body">
                    <p className="contact-feature_label">Phone Number</p>
                    <a href="tel:+011456586986" className="contact-feature_link">
                      Mobile: <span>(+65) - 48596 - 5789</span>
                    </a>
                    <a href="tel:+011456586986" className="contact-feature_link">
                      Phone: <span>(+00) - 12543 - 4165</span>
                    </a>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon"><i className="fal fa-clock"></i></div>
                  <div className="media-body">
                    <p className="contact-feature_label">Hours of Operation</p>
                    <span className="contact-feature_link">Monday - Friday: 09:00 - 20:00</span>
                    <span className="contact-feature_link">Sunday & Saturday: 10:30 - 22:00</span>
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

      <main>
        <div class="mb-4 pb-4"></div>
          <section class="contact-us container">
            <div class="mw-930">
              <h2 class="page-title">CONTACT US</h2>
            </div>
          </section>
          <section className="google-map mb-5">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.57299537867544!2d3.3447428988822976!3d6.5961101179910315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922431bb3a15%3A0xc7b0fa06a5f9ff0b!2s2nd%20Floor%2C%201%20Adeola%20Adeoye%20St%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705794687497!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </section>


          <section class="contact-us container">
            <div class="mw-930">
              <div class="row mb-5">
                <div class="col-lg-6">
                  <h3 class="mb-4">Office in United Kingdom</h3>
                  <p class="mb-4">24 Holborn Viaduct London EC1A 2BN <br/>United Kingdom</p>
                  <p class="mb-4">sale@uomo.com<br/>+44-7466588324</p>
                </div>
                <div class="col-lg-6">
                  <h3 class="mb-4">Office in Nigeria</h3>
                  <p class="mb-4">2nd Floor 1, Adeola Adeoye Street Off Toyin Street ikeja,<br/> Lagos Nigeria.</p>
                  <p class="mb-4">sale@uomo.com<br/>+23417001770, 09153414314,</p>
                </div>
              </div>
              <div class="contact-us__form">
                <form name="contact-us-form" class="needs-validation" novalidate>
                  <h3 class="mb-5">Get In Touch</h3>
                  <div class="form-floating my-4">
                  <input type="text" class="form-control" id="contact_us_name" placeholder="Name *" required /> 
                  <label for="contact_us_name">Name *</label>
                  </div>
                  <div class="form-floating my-4">
                  <input type="email" class="form-control" id="contact_us_email" placeholder="Email address *" required />
                  <label for="contact_us_name">Email address *</label>
                  </div>
                  <div class="my-4">
                  <textarea class="form-control form-control_gray" placeholder="Your Message" cols="30" rows="8" required></textarea>
                  </div>
                  <div class="my-4">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div class="mb-5 pb-xl-5"></div>
        
      </main>

      <Footer/>
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
