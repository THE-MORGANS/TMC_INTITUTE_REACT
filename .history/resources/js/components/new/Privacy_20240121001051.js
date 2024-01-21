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
	
	
	    
    
    </main>
      
      <Footer/>
    </div>
  
  );
}

export default Privacy;

if(document.getElementById('privacy')){
  ReactDOM.render(<Privacy/>, document.getElementById('privacy'))
  }
  
