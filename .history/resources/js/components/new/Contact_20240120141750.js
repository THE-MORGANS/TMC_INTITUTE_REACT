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
            <div id="map" className="google-map__wrapper"></div>
          </section>

          <section class="contact-us container">
			<div class="mw-930">
				<div class="row mb-5">
				<div class="col-lg-6">
					<h3 class="mb-4">Store in London</h3>
					<p class="mb-4">1418 River Drive, Suite 35 Cottonhall, CA 9622<br/>United Kingdom</p>
					<p class="mb-4">sale@uomo.com<br/>+44 20 7123 4567</p>
				</div>
				<div class="col-lg-6">
					<h3 class="mb-4">Store in Istanbul</h3>
					<p class="mb-4">1418 River Drive, Suite 35 Cottonhall, CA 9622<br/>Turky</p>
					<p class="mb-4">sale@uomo.com<br/>+90 212 555 1212</p>
				</div>
				</div>

        
      </main>

      <Footer/>
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
