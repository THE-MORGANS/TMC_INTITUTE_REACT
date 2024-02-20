// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Terms() {
  let url = ` ${window.location.origin}/`;
  const handlehome = ()=>{
      window.location.href = ` ${url}`;
  }
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
          <h1 className="breadcumb-title">Terms and Conditions</h1>
          <ul className="breadcumb-menu">
            <li><a onClick={handlehome}>Home</a></li>
            <li> Terms and Conditions </li>
          </ul>
          </div>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
			<div className="container">
				<div className="row">
				<div className="col-xxl-9 col-lg-12">
					<div className="event-details-wrap">
					<div className="event-img">
						<img src="assets/img/event/event_details.png" alt="Event Image" />
					</div>
					<h3 className="h3 mt-n2">Your use of this is governed by these terms of use</h3>

					<p className="mb-30">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
         	</p>

					<h3 className="h3 mt-n2">TMC Institute - Who We Are</h3>
					<p className="mb-40">
						TMC Institute (UK & Africa) subsidiary of THE MORGANS is a non-profit global learning and development platform that provides training, 
						coaching, professional qualifications and a networking and business development community to professionals 
						and prospective students in the world. As the Controller, the TMC Institute determines the purpose and means 
						of processing individuals' personal data.
					</p>
					<h3 className="h3 mt-n2">Use of the content on this website</h3>
          <p className="mb-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
				
        	<h3 className="h3 mt-n2">How long will It take to get my package</h3> 
          <p className="mb-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
         
					
					<h3 className="h3 mt-n2">Governing Law & Jurisdiction</h3>
					<p className="mb-40">
						Personal data may be collected by the TMC Institute where you or an organisation with which you are related in any capacity (e.g. employee, officer, representative) 
						(the "Client Entity") contact the TMC Institute in relation to any services that it may provide. Your personal data may also come to our possession in case you express 
						any interest to and/or become an employee of the TMC Institute. Your personal data may also be collected through our website when you express an interest for the 
						services of the TMC Institute. personal data may also be processed if you sign up to participate in an event or conference organised by the TMC Institute. 
						Your data may also be collected when an organisation engages the TMC Institute to provide services and you are engaged in the organisation in any capacity that 
						is relevant (for example, director, representative, employee of such entity with which the TMC Institute deals in providing any services.)
					</p>
					<h3 className="h3 mt-n2">Use Of Your Personal Data</h3>
					<p className="mb-40">The TMC Institute will process personal data to Provide its services or enter into discussions for the provision of services to you or a Client Entity.</p>

					
          </div>
        </div>
				</div>
			</div>
		</section>

      <main>
        <div class="mb-5 pb-4"></div>
        <section class="container mw-930 lh-30">
          <h2 class="section-title text-uppercase fw-bold mb-5">Terms & Conditions</h2>
         
          <h6 class="mb-3">Will I receive the same product that see the picture</h6>
          <p class="mb-4 pb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <h6 class="mb-3">Limitation of liability</h6>
          <p class="mb-4 pb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <h6 class="mb-3">Governing Law & Jurisdiction</h6>
          <p class="mb-4 pb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </section>
      </main>

      <Footer/>
    </div>
  
  );
}

export default Terms;

if(document.getElementById('terms')){
  ReactDOM.render(<Terms/>, document.getElementById('terms'))
  }
  
