import React from 'react'
import ReactDom from 'react-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function About() {
    let url = ` ${window.location.origin}`;
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }

    const handlelistcourses = ()=>{
        window.location.href = ` ${url}/listcourses`;
    }
    return (
        <div className="">
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
                    <h1 className="breadcumb-title">About Us</h1>
                    <ul className="breadcumb-menu">
                        <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                        <li>About Us</li>
                    </ul>
                    </div>
                </div>
            </div>

            <section class="overflow-hidden space">
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

            <div className="overflow-hidden overflow-hidden bg-smoke space" id="about-sec" data-bg-src="assets/img/bg/about-5-bg.png">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 mb-50 mb-xl-0">
                        <div className="img-box4">
                        <div className="img1">
                            <img className="tilt-active" src="assets/img/normal/about_5_1.png" alt="About" />
                        </div>
                        <div className="about-grid">
                            <h3 className="about-grid_year"><span className="counter-number">10</span>k+</h3>
                            <p className="about-grid_text">Students Active Our Courses</p>
                        </div>
                        <div class="about-grid" data-bg-src="assets/img/normal/about_1_3.png">
                                <h3 class="about-grid_year">
                                    <span class="counter-number">10</span>
                                    k<span class="text-theme">+</span>
                                </h3>
                                <p c
                        <div className="img2">
                            <img className="tilt-active" src="assets/img/normal/about_5_2.png" alt="About" />
                        </div>
                        <div className="shape1 shape-mockup jump" data-bottom="0" data-left="-46px">
                            <img src="assets/img/normal/about_5_1shape.png" alt="About" />
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-35">
                        <span className="sub-title"><i className="fal fa-book me-2"></i> About Our University</span>
                        <h2 className="sec-title">Welcome to TMC Institute</h2>
                        </div>
                        <p className="mt-n2 mb-25">
                        TMC Institute was established in 2016 and has been operating regionally and internationally since its inception. 
                        As a member of The Morgans Consortium, the institute has excelled over the years in training and developing talents. 
                        We assist organizations in identifying knowledge gaps and tailor relevant training and courses to bridge and improve 
                        efficiency and productivity across various sectors.
                        </p>
                        <p className="mt-n2 mb-25">
                        We are the leading and specialized provider of corporate training, including Governance, Risk & Compliance, Financial Crime 
                        Prevention, and Leadership training. Our focus is on cultivating the right attitude and skills in your teams. To date, TMC 
                        Institute has successfully delivered training courses throughout the region, with a growing list of clients every year. We 
                        capitalize on our in-depth knowledge of the needs of organizations and financial institutions.
                        </p>
                        <p className="mt-n2 mb-25">
                            For over a decade, we have been providing training to a wide range of organizations in the region, with a special emphasis on financial institutions as our primary clientele. Our certified and experienced team possesses an in-depth understanding and knowledge of the region’s financial services. We provide world-class training packed with practical examples and top-notch case studies.
                        </p>
                        <div className="row mb-35 gy-4">
                        <div className="col-lg-6">
                            <div className="about-grid3">
                            <div className="about-grid-icon">
                                <img src="assets/img/icon/about-grid-icon2-1.svg" alt="icon" />
                            </div>
                            <div className="details">
                                <h5>Undergraduate Education</h5>
                                <p>With flexible courses</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-grid3">
                            <div className="icon">
                                <img src="assets/img/icon/about-grid-icon2-2.svg" alt="icon" />
                            </div>
                            <div className="details">
                                <h5>Postgraduate Education</h5>
                                <p>Study flexibly online</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-auto">
                            <div className="about-grid_img mb-30 mb-md-0">
                            <img src="assets/img/normal/about_1_4.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="checklist">
                            <ul>
                                <li>Get access to 4,000+ of our top courses</li>
                                <li>Popular topics to learn now</li>
                                <li>Find the right instructor for you</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                     </div>
                    </div>
                </div>
            </div>

           
            <section className="cta-area-3 space mb-40">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 mb-30 mb-lg-0">
                        <div className="cta-card" data-bg-src="assets/img/bg/cta-bg_3_1.png">
                        <div className="title-area mb-40">
                            <span className="sub-title text-white">
                                <i className="fal fa-book me-2"></i>WE COVER THE FULL GRC (GOVERNANCE & RISK COMPLIANCE) SPECTRUM
                            </span>
                            <p className="sec-title text-white">
                                Our extensive and proficient team of expert consultants and trainers ensures that our clients are available with 
                                experts no matter what aspect of the GRC spectrum it is. Whether you want financial crime prevention, compliance, 
                                risk management, corporate governance, prudential requirements, or just a finance understanding and awareness, our 
                                team has the right specialist to offer you what you need.
                            </p>
                        </div>
                        <a onClick={handlelistcourses} className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-card" data-bg-src="assets/img/bg/cta-bg_3_2.png">
                        <div className="title-area mb-40">
                            <span className="sub-title text-white"><i className="fal fa-book me-2"></i>THE WIDER SCOPE OF COMPLIANCE & OUR SERVICES</span>
                            <p className="sec-title text-white">
                            Compliance, being a discipline, was previously related to ensuring compliance to rules and regulations businesses 
                            face. However, today, compliance is more about the same, including ethics, advice, and culture – contemporary compliance is now at the core of the business. Our compliance trainers not just keep navigating a complex regulatory mechanism but also add an in-depth commercial perspective. They help you conduct the right business in the 
                            right way and help businesses achieve success through such controls and systems in place that ensure effective and timely risk management.
                            </p>
                        </div>
                        <a onClick={handlelistcourses} className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <section class="blog-area-5 overflow-hidden bg-smoke space-bottom"></section> */}


            <div className="cta-area-1 space" data-bg-src="assets/img/bg/cta-bg1.png">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-lg-8">
                        <div className="cta-wrap title-area mb-0">
                        <div className="cta-icon"><img src="assets/img/normal/cta-icon1.png" alt="icon" /></div>
                        <div className="cta-content">
                            <h2 className="cta-title sec-title">Get Online Courses</h2>
                            <p className="cta-text">Met consectetur adipiscing sed eiustempore dolore</p>
                        </div>
                        <a onClick={handlelistcourses}  className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="cta-img-1" data-overlay="title" data-opacity="8">
                    <img src="assets/img/normal/cta_1_1.png" alt="Image" />
                    <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style2 popup-video">
                    <i className="fa-sharp fa-solid fa-play"></i>
                    </a>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

if(document.getElementById("aboutrent")){
    ReactDom.render(<About/>, document.getElementById("aboutrent"));
    }
