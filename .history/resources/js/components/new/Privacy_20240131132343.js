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
				<div className="col-xxl-9 col-lg-10">
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
					<p className="mb-20">
						The TMC Institute processes different personal data for different reasons. These may include: Personal data for contact, 
						service provision and other purposes: These may include, name, position, participant's telephone number, details of person 
						authorizing attendance (e.g., employer of the participant in a seminar), academic and professional qualifications, date of 
						birth, professional membership number, etc. Information necessary to make payments: This may include bank account details 
						and other relevant details. Compliance with statutory obligation: The TMC Institute may process personal data where obliged 
						to do so under the law (e.g., employment records, company records, tax reporting obligations, AML Laws)
					</p>
					<p  className="mb-20">
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
					<h3 className="h3 mt-n2">Time Of Collection Of Personal Data</h3>
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

					<div className="checklist">
						<ul>
							<li>
								Manage the day-to-day tasks relating to the business relationship with you or a Client Entity (e.g. communication, payments, invoicing, support).
							</li>
							<li>
								Analyse, market, and improve its services as well as develop new services that may be of interest to you or a Client Entity
							</li>
							<li>
								For physical security and IT security purposes. 
							</li>
							<li>For insurance coverage purposes.</li>
							<li>In compliance with its legal obligations including accounting and tax.</li>
							<li>To be able to identify the individuals acting for a Client Entity or engaged by a Client Entity in a task which requires that the TMC Institute communicates with such individuals.</li>
							<li>To defend or uphold its legal rights.</li>
							<li>To comply with any order of a responsible court or other authority.</li>
							<li>In relation to any services that may be offered to the TMC Institute by any person or other entity including for example legal services, tax services, public services.</li>
							<li> For research purposes regarding the effectiveness of website services, marketing, advertising, and sales efforts/</li>
							<li>To keep you or a Client Entity informed in relation to its services and products. </li>
							<li>For direct marketing purposes in promoting the TMC Institute legitimate interest. In such a case you may opt-out of direct marketing as provided further below.</li>
							<li>For recruitment, employment, payroll, and other related purposes of the TMC Institute.</li>
							<li>For organising an event or conference and providing relevant information to participants.</li>
							<li> For purposes that are similar or connected to the above or for any other purpose that you or a Client Entity will provide personal data to us</li>
						</ul>
					</div>

					</div>
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
  
