import React from 'react'
import ReactDOM from 'react-dom';
import {BsVectorPen, BsClipboardData} from 'react-icons/bs';
import {BiWebcam} from 'react-icons/bi';
import Footer from './Footer';
import Navbar from './Navbar';

 function Snatika() {
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
          <h1 className="breadcumb-title">Snatika</h1>
          <ul className="breadcumb-menu">
            <li><a onClick={handlehome}>Home</a></li>
            <li> Snatika </li>
          </ul>
          </div>
        </div>
		  </div>

      <div className="why-area-1 space overflow-hidden">
          <div className="shape-mockup why-shape-1 jump" data-top="10%" data-left="7%">
              <img src="assets/img/normal/about_1_shape1.png" alt="img" />
          </div>
          <div className="shape-mockup why-shape-2" data-bg-src="assets/img/normal/wcu_1_shape1.png"></div>
            <div className="shape-mockup why-shape-3 jump-reverse" data-bottom="25%" data-right="-3%">
            <img src="assets/img/normal/wcu_1_shape2.png" alt="img" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                    <div className="wcu-img-1">
                        <div className="img1">
                        <img src="assets/img/normal/wcu_1_1.png" alt="img" />
                        </div>
                        
                        <div className="text-end">
                        {/* <a className="th-btn mt-30" onClick={handlelistcourses}>
                            Get Started <i className="far fa-arrow-right ms-1"></i>
                        </a> */}
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="wcu-wrap1 ">
                        <div className="title-area mb-25">
                        <span className="sub-title">
                            {/* <i className="fal fa-book me-2"></i> About Snatika */}
                        </span>
                        <h2 className="sec-title">
                        About Snatika
                        </h2>
                        <p className="sec-text mt-20 justify-content-center">
                        SNATIKA is an accredited training partner of OTHM - an Awarding Body by the UK Government. OTHM,
                        UK is approved and regulated by Ofqual, UK. Through an academic partnership with the London Graduate School,
                        learners are awarded the MA, MSc or MBA degrees from the University of Chichester, UK.
                        With a team of extremely profound and sought-after expert researchers as well as senior-level practitioners,
                        Snatika boasts of a bespoke, carefully tailored curriculum specially designed to fit into the lives of busy professionals
                        interested in the benefits, privilege and repute of an international degree as well the immense career advancement such
                        certificates bring. Snatika doesn’t just offer a diverse range of Masters Programs for Senior professionals, Snatika gives
                        value to the knowledge gained over the years of experience in the chosen field of all her candidates. Snatika, also in
                        partnership with the London Graduate School, UK, awards her learners a UK masters’ degree. This is because the London
                        Graduate School is a dynamic institution that offers excellent university programs which are designed for students to gain
                        important education and learning opportunities fit for a modern global world. And so, through an academic partnership with
                        the London Graduate School, our learners are awarded the MA, MSc or MBA degree depending on their chosen program. In the
                        same vein, the University of Chichester, a UK state university, located in West Sussex, England is a masters’
                        degree-awarding institution also in partnership with Snatika.
                        The credits earned through SNATIKA’s Level 7 Diploma from OTHM are recognized by the University of Chichester.
                      
                        </p>
                        </div>
                        
                    </div>
                    </div>
                </div>
          </div>
      </div>

      <section class="overflow-hidden  mb-xl-0 px-3 px-md-5">
          <div class="container">
              <div class="title-area text-center">
              <span class="sub-title"><i class="fal fa-book me-2"></i> What We Do</span>
              <h2 class="sec-title">Online Education Tailored to You</h2>
              </div>
              <div class="row gy-4 justify-content-center">
              <div class="col-md-6 col-lg-4">
                  <div class="service-card style3">
                  <div class="service-card-content">
                      <div class="service-card-icon">
                      <img src="assets/img/icon/service-icon-3-1.svg" alt="Icon"/>
                      </div>
                      <h3 class="box-title">TRAINING & DEVELOPING TALENTS</h3>
                      <p class="service-card-text">The institute has over the years has through experience in training and developing talents and helping organizations to identified knowledge gaps.</p>
                  </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="service-card style3">
                  <div class="service-card-content">
                      <div class="service-card-icon">
                      <img src="assets/img/icon/service-icon-3-2.svg" alt="Icon"/>
                      </div>
                      <h3 class="box-title">TRAINING COURSES</h3>
                      <p class="service-card-text">TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow every year</p>
                  </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="service-card style3">
                  <div class="service-card-content">
                      <div class="service-card-icon">
                      <img src="assets/img/icon/service-icon-3-3.svg" alt="Icon"/>
                      </div>
                      <h3 class="box-title">CERTIFIED & EXPERIENCED TEAM</h3>
                      <p class="service-card-text">Our certified and experienced team possesses an in-depth understanding and knowledge of the region’s financial services and provides world-class training packed full of practical examples and top-notch case studies.</p>
                  </div>
                  </div>
              </div>
              </div>
          </div>
      </section>

      <div class="container  mt-xl-5 px-3 px-md-5">      
          <h4 className="h4 mt-n2">WE COVER THE FULL GRC (GOVERNANCE & RISK COMPLIANCE) SPECTRUM</h4>
          <p className="mb-30">
            Our extensive and proficient team of expert consultants and trainers ensures that our clients are available with experts no matter
            what aspect of the GRC spectrum it is. Whether you want financial crime prevention, compliance, risk management, corporate governance,
            prudential requirements, or just a finance understanding and awareness, our team has the right specialist to offer you what you need.
            
          </p>
      </div>

      <div class="container  mb-xl-5 px-3 px-md-5">      
          <h4 className="h4 mt-n2">THE WIDER SCOPE OF COMPLIANCE & OUR SERVICES</h4>
          <p className="mb-30">
            Compliance, being a discipline, was previously related to ensuring compliance to rules and regulations businesses face.
            However, today, compliance is more about the same, including ethics, advice, and culture – contemporary compliance is now at the core of the business.
            Our compliance trainers not just keep navigating a complex regulatory mechanism but also add an in-depth commercial perspective.
            They help you conduct the right business
            in the right way and help businesses achieve success through such controls and systems in place that ensure effective and timely risk management.
           
          </p>
      </div>

      
      <Footer/> 

    </div>
  )
}

export default Snatika;

if(document.getElementById("snatika")){ 
ReactDOM.render(<Snatika/>, document.getElementById('snatika'));
}
