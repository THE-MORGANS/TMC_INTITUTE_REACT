import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Privacy() {
  return (
    <div>
      <Navbar/>

      <main>
		<section class="full-width_padding">
			<div class="full-width_border border-2" style={{borderColor: '#f5e6e0'}}>
				<div class="shop-banner position-relative ">
					<div class="background-img" style={{backgroundColor: '#f5e6e0'}}>
						<img loading="lazy" src="../images/shop/shop_banner_2.png" width="1759" height="220px" alt="Pattern" class="slideshow-bg__img object-fit-cover" />
					</div>
	
					<div class="shop-banner__content container position-absolute start-50 top-50 translate-middle">
						<h2 class="text-uppercase text-center fw-bold mb-3 mb-xl-4 mb-xl-5">Privacy Policy</h2>
					  
					</div>
				</div>
			</div>
		</section>
	
        <div class="mb-4 pb-lg-3"></div>
		

		<section class="container mw-930 lh-30">
		<h3 class="section-title text-uppercase fw-bold mb-0">Welcome to TMC Institute Privacy Policy</h3>
		<div class="mb-5 pb-4"></div>
        <p>
			TMC Institute (THE MORGANS), is committed to protect individuals' personal data in line with the requirements of the General Data Protection Regulation (the GDPR), the Data Protection Act 2018 and other relevant legislation and regulation (collectively "the Data Protection Law"). TMC Institute's commitment applies to all individuals whose personal data it may process. This privacy notice will inform you as to how we look after your personal data we collect from you, both when you visit our website and where we carry out services for you. This privacy notice tells you about your privacy rights and how the Data Protection Law protects you. "Personal Data" means any information relating to an identified or identifiable natural person.
		</p>
        <h3 class="section-title text-uppercase fw-bold mb-0">TMC Institute - Who We Are</h3>
		<p>TMC Institute (UK & Africa) subsidiary of THE MORGANS is a non-profit global learning and development platform that provides training, 
            coaching, professional qualifications and a networking and business development community to professionals 
            and prospective students in the world. As the Controller, the TMC Institute determines the purpose and means 
            of processing individuals' personal data.</p>
		<h3 class="section-title text-uppercase fw-bold mb-0">Personal Data That We May Collect</h3>
		
	
	    </section>
    
    </main>
      
      <Footer/>
    </div>
  
  );
}

export default Privacy;

if(document.getElementById('privacy')){
  ReactDOM.render(<Privacy/>, document.getElementById('privacy'))
  }
  
