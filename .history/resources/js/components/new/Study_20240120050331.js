import React from 'react'; 
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Study() {
  return( 
    <div>
      <Navbar />

      <main className="bg-grey-faf9f8">
        <section className="full-width_padding">
            <div className="full-width_border border-2" style={{borderColor: '#f5e6e0'}}>
                <div className="shop-banner position-relative ">
                    <div className="background-img" style={{backgroundColor: '#f5e6e0'}}>
                        <img loading="lazy" src="../images/shop/shop_banner_2.png" width="1759" height="220px" alt="Pattern" class="slideshow-bg__img object-fit-cover" />
                    </div>

                    <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                        <h2 className="text-uppercase text-center fw-bold mb-3 mb-xl-4 mb-xl-5">Study Abroad</h2>
                      
                    </div>
                </div>
            </div>
        </section>
        <div class="mb-4 pb-lg-3"></div>

        <section class="contact-us container" style={{backgroundColor:  '#EDE9F2', borderRadius:'20px'}}>
          <div class="p-4">
            <div class="row mb-5">
              <div class="col-lg-7">
                <p class="mb-3">We are your strategic, Study Abroad Buddy with tons of experience and reach to boot!</p>
                <p class="mb-3">
                  At TMC Institute, we boast strongly of our Study abroad program; Its structure, and our advisers.
                </p>
                <p class="mb-3">
                  This is because our advisers have been helping students take their first steps towards building a successful future with international education since 2019 with loads of successful relocations and referrals.
                </p>
                <p class="mb-3">
                  As the official, in-country representatives for a ton of international education partners, we will help you every step of the way, from helping you decide what you would prefer to study to help you sort out your application and admissions process and also assisting in the application process for your visa.
                </p>
                <p class="mb-3">
                  At TMC Institute, we make sure that all your career pathway needs such as your program selection, study location, accommodation, course fees, visa requirements and future career options are fulﬁlled in accordance with your preferences.
                </p>
                <p class="mb-3">
                  The success of our students oftentimes reﬂect on our intentional dedication to guiding them through the most appropriate path out of numerous available options.
                </p>
                <p class="mb-3"></p>
                <div class="text-left mt-2">
                    <a href="#" class="btn btn-primary mb-xl-4 mr-2 " style={{borderRadius: '10px'}}>Get Started</a>
                    &nbsp;&nbsp;
                    <a href="#" class="btn btn-outline-primary mb-xl-4" style={{borderRadius: '10px'}}>Arden University</a>
                </div>

              </div>
              <div class="col-lg-5">
                <img src="../images/home/colleage-level.jpg" class="w-80 h-auto d-block" />
                
              </div>
            </div>
            
          </div>
        </section>

        <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

    <section class="contact-us container" >
      <!-- <section class="contact-us container"> -->
        <!-- mw-930" -->
        <div class="p-4">
          <div class="row mb-5">
            <div class="col-lg-6">
              <img src="../images/home/study-abroad_img.jpg" class="w-80 h-auto d-block" >
              
            </div>
            <div class="col-lg-6  justify-content-between">
              <!-- <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div> -->
              <p style="  color:#C93A3E" class="section-title text-left ">
                WHAT OUR STUDY ABROAD CAN DO FOR YOU ?
              </p>
              <p class="mb-2">
                Without much ado, we would like to take you through a series of services we offer via our Study Abroad program. Which are;
              </p>
              <p style="  color:#C93A3E" class="section-title text-left ">
                Education search
              </p>
              <p class="mb-2">
                Without much ado, we would like to take you through a series of services we offer via our Study Abroad program. Which are;
              </p>
              <p>
                We provide you with a catalogue of international universities and educational institutions for you to browse through and do your preliminary findings on what they have to offer.
              </p>
              <p>
                In the event that you are looking to register for your first online course, or you are neck-deep in changing study mode, we are right here for you.
              </p>
              <p>
                We also understand that returning to studies after a break is never an easy task and finding the right course that leads to the right job is even a harder task, so we proffer our assistance in the form of our time, experience and extensive reach to help make the process easier for you with a selection of our job-ready online courses.
              </p>
              <p>When you enroll for your online courses through TMC Institute we will ensure that you are supported to be ready to start your studies We provide access to enrollment for online courses from registered university providers. BROWSE OUR ONLINE COURSES »</p>

            </div>
            
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
