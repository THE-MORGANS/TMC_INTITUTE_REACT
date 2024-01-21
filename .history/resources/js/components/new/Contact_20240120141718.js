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
            <div id="map" class="google-map__wrapper"></div>
          </section>

        
      </main>

      <Footer/>
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
