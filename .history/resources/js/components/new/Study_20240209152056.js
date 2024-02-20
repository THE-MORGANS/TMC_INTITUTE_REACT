import React from 'react'; 
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Study() {
  let url = ` ${window.location.origin}`;
  const handlehome = ()=>{
      window.location.href = ` ${url}`;
  }

  const handlelistcourses = ()=>{
      window.location.href = ` ${url}/listcourses`;
  }
  const handleAboutus = (e)=>{
      e.preventDefault(); 
      window.location.href =`${url}/about-us`
  }
  return( 
    <div>
      <Navbar /> 
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.png" data-overlay="title" data-opacity="8">
          <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
          <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
              <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
          </div>
          <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
              <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
          </div>
          <div className="container">
              <div className="breadcumb-content text-center">
              <h1 className="breadcumb-title">Study Abroad</h1>
              <ul className="breadcumb-menu">
                  <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                  <li>Study Abroad</li>
              </ul>
              </div>
          </div>
      </div>

      <div class="video-area-1 overflow-hidden space">
            <div class="shape-mockup video-shape1 jump-reverse d-lg-block d-none" data-right="-35%" data-top="-40%">
                <img src="assets/img/normal/video-1_shape1.png" alt="img"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 order-lg-2">
                        <div class="ms-lg-3 mb-lg-0 mb-5">
                            <div class="video-wrap mb-30">
                                <img src="assets/img/team/team-details.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 order-lg-1">
                        <div class="title-area mb-40">
                            <span class="sub-title">
                                <i class="fal fa-book me-2"></i>
                                  Study Abroad Program
                            </span>
                            <h2 class="sec-title">Study Abroad Program</h2>
                            <p>
                            We are your strategic, Study Abroad Buddy with tons of experience and reach to boot!
                            <br/>
                            At TMC Institute, we boast strongly of our Study abroad program; Its structure, and our advisers.
                            <br/>
                            This is because our advisers have been helping students take their first steps towards building a successful future with international education since 2019 with loads of successful relocations and referrals.
                            <br/>
                            As the official, in-country representatives for a ton of international education partners, we will help you every step of the way, from helping you decide what you would prefer to study to help you sort out your application and admissions process and also assisting in the application process for your visa.
                            <br/>
                            At TMC Institute, we make sure that all your career pathway needs such as your program selection, study location, accommodation, course fees, visa requirements and future career options are fulﬁlled in accordance with your preferences.
                            <br/>
                            The success of our students oftentimes reﬂect on our intentional dedication to guiding them through the most appropriate path out of numerous available options.
                            </p>
                           
                            <div class="btn-group">
                                <a class="th-btn" href="course.html">
                                  Get Started <i class="fa fa-arrow-right me"></i>
                                </a>
                                &nbsp;&nbsp;
                                <a class="th-btn" href="course.html">
                                  Arden University <i class="fa fa-arrow-right me"></i>
                                </a>
                            </div>
                        </div>
                        <div class="student-count style2">
                            <h5 class="title">
                                <span class="text-theme">
                                    <span class="counter-number">56</span>
                                    k+
                                </span>
                                Enrolled Students
                            </h5>
                            <img src="assets/img/normal/student-group_2_1.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="overflow-hidden position-relative space" id="about-sec">
            <div class="about-4-bg-shape1 shape-mockup jump d-md-block d-none" data-right="3%" data-top="15%">
                <img src="assets/img/normal/about_4_shape1.png" alt="shapes"/>
            </div>
            <div class="about-4-bg-shape2 shape-mockup jump-reverse d-md-block d-none" data-right="20%" data-bottom="10%">
                <img src="assets/img/normal/about_4_shape2.png" alt="shapes"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="mb-5 mb-xl-0">
                            <img src="assets/img/normal/about_4_1.png" alt="img"/>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="ms-xl-5">
                            <div class="title-area mb-30">
                                <span class="sub-title">
                                    <i class="fal fa-book me-1"></i>
                                    More On Study Abroad
                                </span>
                                <h2 class="sec-title">WHAT OUR STUDY ABROAD CAN DO FOR YOU ?</h2>
                            </div>
                            <p class="mt-n2 mb-20">
                            Without much ado, we would like to take you through a series of services we offer via our Study Abroad program. 
                            Which are;
                            </p>
                            <p>
                              We provide you with a catalogue of international universities and educational institutions for you to browse through and do your preliminary findings on what they have to offer.
                             
                              In the event that you are looking to register for your first online course, or you are neck-deep in changing study mode, we are right here for you.
                              <br/>
                              We also understand that returning to studies after a break is never an easy task and finding the right course that leads to the right job is even a harder task, so we proffer our assistance in the form of our time, experience and extensive reach to help make the process easier for you with a selection of our job-ready online courses.

                              When you enroll for your online courses through TMC Institute we will ensure that you are supported to be ready to start your studies We provide access to enrollment for online courses from registered university providers.
                            </p>
                            <a onClick={(e)=>handlelistcourses(e)} class="th-btn">
                              BROWSE OUR ONLINE COURSES <i class="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="overflow-hidden position-relative space" id="about-sec">
            <div class="about-4-bg-shape1 shape-mockup jump d-md-block d-none" data-right="3%" data-top="15%">
                <img src="assets/img/normal/about_4_shape1.png" alt="shapes"/>
            </div>
            <div class="about-4-bg-shape2 shape-mockup jump-reverse d-md-block d-none" data-right="20%" data-bottom="10%">
                <img src="assets/img/normal/about_4_shape2.png" alt="shapes"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        
                        <div class="mb-30 mb-xl-0">
                            <div class="title-area mb-30">
                                <span class="sub-title">
                                    <i class="fal fa-book me-1"></i>
                                    More On Study Abroad
                                </span>
                                <h2 class="sec-title">Career and study advice</h2>
                            </div>
                            <p class="mt-n2 mb-20 text-justify" style={{ textAlign: 'justify' }}>
                              As one of the pioneers of the new and renewed Study Abroad Program in West Africa, we’ll guide you through the various study abroad programmes and help you choose what and where to study based on your needs, preferences and circumstances. As part of our Career and Study advice, TMC Institute also renders Career Advisory Services. Asides from providing accurate guidance and counselling to students across the globe when it comes to their careers, TMC Institute has been successful in helping our students achieve their short and long-term goals.
                            </p>
                            <p class="mt-n2 mb-20 text-justify" style={{ textAlign: 'justify' }}>
                              As a result of our understanding of the changing nature of the world we live in today and the evolving impact of technological innovation and legislative requirements, we take a global view when advising students on the right career pathway for their career by ensuring SMART Pathways (Specific, Measurable, Achievable, Relevant and Timely). AT TMC Institute Study Abroad program, we through our student advisers and our all-inclusive structure, ensure that our pathways produce outcomes that are specific to each student’s goals.
                            </p>
                            <p class="mt-n2 mb-20 text-justify" style={{ textAlign: 'justify' }}>
                              Our services include a range of activities such as developing career pathways, skills assessment, professional development and of course, mentorship. We undertake stepwise procedure while giving career advice to our students; after listening to the student, we take into consideration all the related circumstances of the student including but not limited to; student goal, choice of study, previous qualification and experiences, financial situation and student academic capacity. Our experienced and highly knowledgeable counsellors aim to provide the best guidance to the students for their education pathways by looking out for various recognised institutions.
                            </p>
                            <p class="mt-n2 mb-20 text-justify" style={{ textAlign: 'justify' }}>
                            Here, we make sure that all the needs are fulfilled such as the course selection, study campus location accommodation, course fees, visa requirements and future career options in accordance with each student’s needs, preferences and circumstances. The success our students have achieved reflects our dedication to guiding them through the most appropriate path out of numerous available options. We are excited to be a partner in developing and shaping students to be global citizens. For more information about TMC Institute Career Advisory Services, please contact one of our friendly teams!
                            </p>
                            <a onClick={(e)=>handlelistcourses(e)} class="th-btn">
                              BROWSE OUR ONLINE COURSES <i class="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                        <div class="mb-5 mb-xl-0" style={{ textAlign: 'justify' }}>
                            <div class="title-area mb-30">
                                <h2 class="sec-title">Application and Admissions Processing and Support.</h2>
                                <h5>Application and Admissions Processing and Support.</h5>
                            </div>
                            
                            <p class="mt-n2 mb-20" style={{ textAlign: 'justify' }}>
                            Technical information which included the IP Address used by the third party to connect the computer to the internet, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
                            </p>
                            <p class="mt-n2 mb-20" style={{ textAlign: 'justify' }}>
                            Our access to the admissions department at our partner universities and educational institutions ensures that our students get a quicker and far more streamlined application process than other programs.

                            In rendering our support towards Admissions Processing, we generally acknowledge that to study in a country, you will need to apply for admission to an institution in that country and also for a student visa from the Country’s Government.
                            </p>

                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="ms-xl-5">
                            <div class="title-area mb-30">
                                <span class="sub-title">
                                    <i class="fal fa-book me-1"></i>
                                    More On Study Abroad
                                </span>
                                <h2 class="sec-title">WHAT OUR STUDY ABROAD CAN DO FOR YOU ?</h2>
                            </div>
                            <p class="mt-n2 mb-20">
                            Without much ado, we would like to take you through a series of services we offer via our Study Abroad program. 
                            Which are;
                            </p>
                            <p>
                              We provide you with a catalogue of international universities and educational institutions for you to browse through and do your preliminary findings on what they have to offer.
                             
                              In the event that you are looking to register for your first online course, or you are neck-deep in changing study mode, we are right here for you.
                              <br/>
                              We also understand that returning to studies after a break is never an easy task and finding the right course that leads to the right job is even a harder task, so we proffer our assistance in the form of our time, experience and extensive reach to help make the process easier for you with a selection of our job-ready online courses.

                              When you enroll for your online courses through TMC Institute we will ensure that you are supported to be ready to start your studies We provide access to enrollment for online courses from registered university providers.
                            </p>
                            <a onClick={(e)=>handlelistcourses(e)} class="th-btn">
                              BROWSE OUR ONLINE COURSES <i class="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <main className="bg-grey-faf9f8">
        
        <div class="mb-4 pb-lg-3"></div>

        

        <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

         <section class="contact-us container" >
            <div class="p-4">
              <div class="row mb-5">
                  <div class="col-lg-6  justify-content-between">
                      <p style={{color:'#C93A3E'}} class="h4 text-left ">
                          Career and study advice
                      </p>
                      <p>
                          As one of the pioneers of the new and renewed Study Abroad Program in West Africa, we’ll guide you through 
                          the various study abroad programmes and help you choose what and where to study based on your needs, 
                          preferences and circumstances. As part of our Career and Study advice, TMC Institute also renders Career 
                          Advisory Services. Asides from providing accurate guidance and counselling to students across the globe 
                          when it comes to their careers, TMC Institute has been successful in helping our students achieve their
                          short and long-term goals.
                      </p>
                      <p>
                          As a result of our understanding of the changing nature of the world we live in today and the evolving impact of 
                          technological innovation and legislative requirements, we take a global view when advising students on the right 
                          career pathway for their career by ensuring SMART Pathways (Specific, Measurable, Achievable, Relevant and Timely). 
                          AT TMC Institute Study Abroad program, we through our student advisers and our all-inclusive structure, ensure that 
                          our pathways produce outcomes that are specific to each student’s goals.
                      </p>
                      <p>
                          Our services include a range of activities such as developing career pathways, skills assessment, professional development 
                          and of course, mentorship. We undertake stepwise procedure while giving career advice to our students; after listening to the 
                          student, we take into consideration all the related circumstances of the student including but not limited to; student goal, 
                          choice of study, previous qualification and experiences, financial situation and student academic capacity. Our experienced and 
                          highly knowledgeable counsellors aim to provide the best guidance to the students for their education pathways by looking out 
                          for various recognised institutions.                                                 
                      </p>
                      <p>
                          Here, we make sure that all the needs are fulfilled such as the course selection, study campus location accommodation, course fees, 
                          visa requirements and future career options in accordance with each student’s needs, preferences and circumstances. The success
                          our students have achieved reflects our dedication to guiding them through the most appropriate path out of numerous available 
                          options. We are excited to be a partner in developing and shaping students to be global citizens. For more information about TMC Institute Career Advisory Services, please contact one of our friendly teams!
                      </p>
                      <p>
                        We also understand that returning to studies after a break is never an easy task and finding the right course that leads to the right job is even a harder task, so we proffer our assistance in the form of our time, experience and extensive reach to help make the process easier for you with a selection of our job-ready online courses.
                      </p>
                      <p>When you enroll for your online courses through TMC Institute we will ensure that you are supported to be ready to start your studies We provide access to enrollment for online courses from registered university providers. BROWSE OUR ONLINE COURSES »</p>
        
                  </div>

                <div class="col-lg-6  justify-content-between">
                  <p style={{color:'#C93A3E'}} class="h4 text-left ">
                      Application and Admissions Processing and Support.
                  </p>
                  <p >
                      Technical information which included the IP Address used by the third party to connect the computer to the internet, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
                  </p>
                  <p>
                      Our access to the admissions department at our partner universities and educational institutions ensures that our students get a quicker and far more streamlined application process than other programs.
                  </p>
                  <p  class="mb-3">
                      In rendering our support towards Admissions Processing, we generally acknowledge that to study in a country, you will need to apply for admission to an institution in that country and also for a student visa from the Country’s Government.
                  </p>
                  <p style={{color:'#C93A3E'}} class="h4 text-left ">
                      Here are a number of steps you must go through:
                  </p>
                  <ol class="mb-3 ">
                      <li>Deciding on your preferred course and institution.</li>
                      <li>Submitting your application to the institution.</li>
                      <li>Receiving and accepting a Letter of Offer.</li>
                      <li>Receiving your electronic Confirmation of Enrolment (eCoE).,</li>
                      <li>Applying for your student visa</li>
                  </ol>
                  <p style={{color:'#C93A3E'}} class="h4 text-left ">
                      Pre-departure assistance
                  </p>
                  <p class="mb-3">As the wholesome institution that we are, we go the extra mile to ensure your comfort. This extends to how seamlessly and swiftly you settle in. So, we make sure to help you organise everything from accommodation to airport pickups and orientation in your new home. </p>
                  
                  <p style={{color:'#C93A3E'}} class="h4 text-left ">
                      The Benefits Of A Global Education
                  </p>
                  <div id="faq_accordion_2" class="faq-accordion accordion mb-5">
                      <div class="accordion-item">
                        <h5 class="accordion-header" id="faq-accordion-heading-2-2">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-2-2" aria-expanded="false" aria-controls="faq-accordion-collapse-2-2">
                              The Benefits Of A Global Education
                            <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
                          </button>
                        </h5>
                        <div id="faq-accordion-collapse-2-2" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-2-2" data-bs-parent="#faq_accordion_2">
                          <div class="accordion-body">
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">
                                  Better employment opportunities
                              </p>
                              <p>This is an extremely valid reason to consider getting global education. This is because whether you choose to stay abroad after your studies or you choose to return to your home country, studying abroad contributes significantly to having a more global mindset, which is highly favoured by employers as it directly converts in work done. </p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Education at top-tier institutions</p>
                              <p>More often than not, the best isn’t always at our doorstep or fingertips. Hence the need to explore and put ourselves out there. This is why we encourage students to seek global certification through our study abroad program. As it provides them access to the best institutions for their chosen field of study across the globe. Hence, students don't have to limit themselves to their home country, as they can choose and apply based on their long-term goals.</p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">A route to immigration</p>
                              <p>Now although some people choose to return home after studying abroad, a lot of them can’t deny the freedom that having the opportunity to stay in their new found country. Many countries have reduced immigration requirements if you have chosen to start off by studying there.</p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Build international connections</p>
                              <p>Studying at an international institution provides students with the fantastic opportunity to make friends across the globe, not to mention encounter new cultures, languages and experiences. .</p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Frequently asked questions about studying abroad</p>
                              <p>If you don't find the answer to your question below, please don't hesitate to get in touch with us. Our skilled study advisers are here to assist you in any and every way they can.</p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Can you help students from anywhere in the world?</p>
                              <p>Yes, we can. Our advisers can assist you from any location. Counselling sessions are done via Zoom, Meet or a digital platform that works for you; as well as over the phone. All paperwork is received via a secure portal so advice and assistance can be offered to anyone without the need to come to our physical offices. </p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Do you have a special agreement with the institutions?</p>
                              <p>Yes, we do. In most cases we will have a contract which allows us to represent the institution. This means that the institution will have given us the specialised training to our study advisers so we have direct access to the admissions team.</p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Do I need to do a foundation/pre-university year or can I go direct to the first year?</p>
                              <p>
                                  This will depend on your grades. However, in most cases, you should be able to enter the first year if you have attained high grades and have studied for at least twelve years. It also depends on your country and your institution of choice. So please discuss more with your study adviser.
                              </p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">How long will my visa last?</p>
                              <p>
                                  Your visa will generally be valid for the duration of your course. However, it will depend largely on the type of visa you applied for. It may be possible to move to a post-study visa, depending on your course and country you study in. Please speak to your study adviser for more details.
                              </p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">How long will my visa take once I have applied?</p>
                              <p>
                                  It will depend on the country and the type of visa you’ve applied for. There are also fast track visa application services for most countries. Speak to your study adviser to find out more.
                              </p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Can I work while I study?</p>
                              <p>
                                  It will depend on your visa and country. In most cases, you will be able to work around 20hours per week and full-time during breaks.
                              </p>
                              <p style={{color:'#C93A3E'}} class="h6 text-left ">Can I get my tuition deposit back if I decide not to go to the university I applied to or if I get a visa rejection?</p>
                              <p>This will depend on the institutions refund policy. In most cases you should be able to apply for a refund of your deposit if you have not yet arrived at the institution.</p>
                          </div>
                        </div>
                      </div>

                    </div>
                </div>
              </div>
            </div>
          </section>

          <section class="contact-us container">
            <h2 class="section-title text-uppercase fw-bold mb-5 text-center">CONTACT US</h2>
              <div class="row">
                  <div class="col-lg-7">
                      <div class="mw-930">
                          <div class="contact-us__form">
                              <form name="contact-us-form" class="needs-validation" novalidate>
                                  <h3>Get In Touch</h3>
                                  <p class="mb-3" style={{color: 'red'}} >Please complete all fields</p>
                                  <div class="row">
                                      <div class="col">
                                          <div class="form-floating my-4">
                                              <input type="text" class="form-control" id="contact_us_name" placeholder="First Name *" required/>
                                              <label for="contact_us_name">First Name <span style={{color: 'red'}} >*</span></label>
                                          </div>
                                      </div>
                                      <div class="col">
                                          <div class="form-floating my-4">
                                              <input type="text" class="form-control" id="contact_us_name" placeholder="Last Name *" required/>
                                              <label for="contact_us_name">Last Name <span style={{color: 'red'}}  >*</span></label>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="row">
                                      <div class="col">
                                          <div class="form-floating my-4">
                                              <input type="text" class="form-control" id="contact_us_name" placeholder="Educational Background *" required/>
                                              <label for="contact_us_name">Educational Background <span style={{color: 'red'}}  >*</span></label>
                                          </div>
                                      </div>
                                      <div class="col">
                                          <div class="form-floating my-4">
                                              <input type="text" class="form-control" id="contact_us_name" placeholder="School Of Choice *" required />
                                              <label for="contact_us_name">School Of Choice <span style={{color: 'red'}}  >*</span></label>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="row">
                                      <div class="col">
                                          <div class="form-floating my-4">
                                              <input type="text" class="form-control" id="contact_us_name" placeholder="Phone Number *" required />
                                              <label for="contact_us_name">Phone Number <span style={{color: 'red'}}  >*</span></label>
                                          </div>
                                      </div>
                                      <div class="col">
                                          <div class="form-floating my-4">
                                              <input type="text" class="form-control" id="contact_us_name" placeholder="Email address *" required />
                                              <label for="contact_us_name">Email address <span style={{color: 'red'}}  >*</span></label>
                                          </div>
                                      </div>
                                  </div>
                                
                                  <div class="my-4">
                                  <textarea class="form-control form-control_gray" placeholder="Address" cols="30" rows="8" required></textarea>
                                  </div>

                                  <div class="my-4">
                                  <button type="submit" class="btn btn-primary">Submit</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                </div>
                <div class="col-lg-5">
                      <h4 class="mb-2">Phone</h4>
                      <p class="mb-1" >+23417001770, 09153414314, +44-7466588324</p>
                      <h4 class="mb-2">Email</h4>
                      <p class="mb-2" >enquiries@tmcinstitute.com</p>
                      <h4> Locations</h4>
                      <p>
                          Nigeria: 2nd Floor 1, Adeola Adeoye Street Off Toyin Street ikeja, Lagos Nigeria.</p>
                      <p>
                          United Kingdom: 24 Holborn Viaduct London EC1A 2BN United Kingdom
                      </p>

                </div>
              </div>
          </section>



        </main>

      <Footer />
    </div>
   
  );
}


if(document.getElementById('study')){
  ReactDOM.render(<Study/>, document.getElementById('study'));
}
