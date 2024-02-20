import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Privacy() {
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
				<h1 className="breadcumb-title">Privacy Policy</h1>
				<ul className="breadcumb-menu">
					<li><a onClick={handlehome}>Home</a></li>
					<li> Privacy Policy </li>
				</ul>
				</div>
			</div>
		</div>

		<section className="space-top space-extra-bottom">
			<div className="container">
				<div className="row">
				<div className="col-xxl-9 col-lg-8">
					<div className="event-details-wrap">
					<div className="event-img">
						<img src="assets/img/event/event_details.png" alt="Event Image" />
					</div>
					<h3 className="h3 mt-n2">Welcome to TMC Institute Privacy Policy</h3>
					<p className="mb-30">
						TMC Institute (THE MORGANS), is committed to protect individuals' personal data in line with the requirements of the General 
						Data Protection Regulation (the GDPR), the Data Protection Act 2018 and other relevant legislation and regulation 
						(collectively "the Data Protection Law"). TMC Institute's commitment applies to all individuals whose personal data 
						it may process. This privacy notice will inform you as to how we look after your personal data we collect from you, 
						both when you visit our website and where we carry out services for you. This privacy notice tells you about your 
						privacy rights and how the Data Protection Law protects you. "Personal Data" means any information relating to an 
						identified or identifiable natural person.
					</p>
					<h3 className="h3 mt-n2">TMC Institute - Who We Are</h3>
					<p className="mb-40">
						TMC Institute (UK & Africa) subsidiary of THE MORGANS is a non-profit global learning and development platform that provides training, 
						coaching, professional qualifications and a networking and business development community to professionals 
						and prospective students in the world. As the Controller, the TMC Institute determines the purpose and means 
						of processing individuals' personal data.
					</p>
					<h3 className="h3 mt-n2">Personal Data That We May Collect</h3>
					<p className="mb-40">
						The TMC Institute processes different personal data for different reasons. These may include: Personal data for contact, 
						service provision and other purposes: These may include, name, position, participant's telephone number, details of person 
						authorizing attendance (e.g., employer of the participant in a seminar), academic and professional qualifications, date of 
						birth, professional membership number, etc. Information necessary to make payments: This may include bank account details 
						and other relevant details. Compliance with statutory obligation: The TMC Institute may process personal data where obliged 
						to do so under the law (e.g., employment records, company records, tax reporting obligations, AML Laws)
					</p>
					<p  className="mb-40">
						Information collected during the registration for an event or conference organised by the TMC Institute: TMC Institute may organise different kind of events or conferences either for promoting and marketing its services to existing and potential clients, for networking purposes, or for finding potential members or professionals interested in its different products or services. In this respect, the TMC Institute may process personal data e.g. name, surname, contact details and if relevant details in regard to academic and/or professional qualifications (including, but not limited to, name of University, subject of study, year of study) for efficient organisation and management of an event or conference. This information 
        				may be used for future contact, only with your consent, in order to market the Entity's services to you or in order to inform you for similar events. 
						This information will be held by the TMC Institute until you choose to unsubscribe/withdraw your consent, in accordance with article 7(3)
						 of the General Data Protection Regulation (Regulation EU 2016/679). Photographs/pictures, presentations, audio and video recording of 
						 peakers and participants and live web streaming of the events or conferences may be taken. They may be reproduced in various media 
						 including the TMC Institute's publications, the TMC Institute website, social networks, TV channels and the press, in connection with 
						 the event or conference as well as for promotional activities of the TMC Institute. If you wish that your image or voice is not recorded 
						 and published, for compelling and legitimate grounds relating to your particular situation, please follow the procedure described below 
						 at paragraph 11 for making a request. We do not collect any Special Categories of Personal Data about you (this includes details about 
						 your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, 
						 information about your health and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
						 </p>
		
					

					<h4 className="h4 mb-25">What You Will Learn?</h4>
					<div className="checklist">
						<ul>
						<li>How to use social media to reach local, national and international audiences</li>
						<li>How to set up and market events, using online tools, so you no longer depend</li>
						<li>How to create and run online shows, adapt your performance techniques and</li>
						<li>Mentoring and troubleshooting and post-training support from Jason</li>
						<li>How to use social media to reach local, national and international audiences</li>
						<li>How to set up and market events, using online tools</li>
						<li>Adapt your performance techniques and manage your audience throughout</li>
						</ul>
					</div>
					<ul className="event-counter counter-list cta-countdown" data-offer-date="10/24/2024">
						<li>
						<div className="day count-number">00</div>
						<span className="count-name">Days</span>
						</li>
						<li>
						<div className="hour count-number">00</div>
						<span className="count-name">Hours</span>
						</li>
						<li>
						<div className="minute count-number">00</div>
						<span className="count-name">Mins</span>
						</li>
						<li>
						<div className="seconds count-number">00</div>
						<span className="count-name">Secs</span>
						</li>
					</ul>
					</div>
				</div>
				<div className="col-xxl-3 col-lg-4">
					<aside className="sidebar-area">
					<div className="widget widget_info">
						<a href="https://calendar.google.com/calendar/" className="th-btn">Add To Calendar</a>
						<a href="contact.html" className="th-btn style4">Ical Export</a>
						<h3 className="widget_title">Event Information</h3>
						<div className="info-list">
						<ul>
							<li><i className="fa-light fa-calendar-days"></i> <strong>Date: </strong><span>December 22, 2023</span></li>
							<li><i className="fa-light fa-clock"></i> <strong>Time: </strong><span>8:00 am - 5:00 pm</span></li>
							<li><i className="fa-light fa-location-dot"></i> <strong>Venue: </strong><span>Sunny Party Center</span></li>
							<li><i className="fa-light fa-map"></i> <strong>Address: </strong><span>256 SDY Oliva St.</span></li>
							<li><i className="fa-light fa-user"></i> <strong>Name: </strong><span>David Smith</span></li>
							<li><i className="fa-light fa-phone"></i> <strong>Phone: </strong><span>(+256) 2152 2156</span></li>
						</ul>
						</div>
					</div>
					<div className="widget widget_banner p-0">
						<div className="widget-map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sth!5e0!3m2!1sen!2sbd!4v1658812932163!5m2!1sen!2sbd"
							allowFullScreen
							loading="lazy"
						></iframe>
						</div>
					</div>
					</aside>
				</div>
				</div>
			</div>
		</section>

      
      <Footer/>
    </div>
  
  );
}

export default Privacy;

if(document.getElementById('privacy')){
  ReactDOM.render(<Privacy/>, document.getElementById('privacy'))
  }
  
