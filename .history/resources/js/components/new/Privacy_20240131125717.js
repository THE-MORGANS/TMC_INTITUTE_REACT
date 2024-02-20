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
						(collectively "the Data Protection Law"). TMC Institute's commitment applies to all individuals whose personal data it may process. This privacy notice will inform you as to how we look after your personal data we collect from you, both when you visit our website and where we carry out services for you. This privacy notice tells you about your privacy rights and how the Data Protection Law protects you. "Personal Data" means any information relating to an identified or identifiable natural person.
					</p>
					<p className="mb-40">
						Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
						Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and
						fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet
						tend to repeat that predefined chunks as necessary, making this the first true dummy
						generator on the Internet. It uses a dictionary of over 200 Latin words, combined
						Lorem Ipsum looks reasonable.Grursus mal suada faci lisis Lorem ipsum dolarorit more
						ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that
						dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum
						generators on the Internet tend to repeat that predefined chunks as necessary,
						making this the first true dummy generator on the Internet.
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
  
