// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
      <main>
        <div class="mb-4 pb-4"></div>
          <section class="contact-us container">
            <div class="mw-930">
              <h2 class="page-title">CONTACT US</h2>
            </div>
          </section>
          <section className="google-map mb-5">
              {/* <div id="map" className="google-map__wrapper"></div> */}
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.57299537867544!2d3.3447428988822976!3d6.5961101179910315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922431bb3a15%3A0xc7b0fa06a5f9ff0b!2s2nd%20Floor%2C%201%20Adeola%20Adeoye%20St%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705794687497!5m2!1sen!2sng"
                  width="100"
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
  
