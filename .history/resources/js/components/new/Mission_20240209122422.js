import React from 'react'
import ReactDom from 'react-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function Mission() {
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
                    <h1 className="breadcumb-title">Mission</h1>
                    <ul className="breadcumb-menu">
                        <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                        <li>Mission</li>
                    </ul>
                    </div>
                </div>
            </div>

            

            <div className="overflow-hidden overflow-hidden bg-smoke space" id="Mission-sec" data-bg-src="assets/img/bg/Mission-5-bg.png">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 mb-50 mb-xl-0">
                        <div className="img-box4">
                        <div className="img1">
                            <img className="tilt-active" src="assets/img/normal/about_5_1.png" alt="About" />
                        </div>
                        <div className="Mission-grid">
                            <h3 className="Mission-grid_year"><span className="counter-number">10</span>k+</h3>
                            <p className="Mission-grid_text">Students Active Our Courses</p>
                        </div>
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
                            <div className="Mission-grid3">
                            <div className="Mission-grid-icon">
                                <img src="assets/img/icon/about-grid-icon2-1.svg" alt="icon" />
                            </div>
                            <div className="details">
                                <h5>Undergraduate Education</h5>
                                <p>With flexible courses</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Mission-grid3">
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
                            <div className="Mission-grid_img mb-30 mb-md-0">
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

            <div class="overflow-hidden position-relative space bg-smoke" id="team-sec">
            <div class="shape-mockup instructor-bg-shape1 jump d-lg-block d-none" data-left="3%" data-bottom="30%">
                <img src="assets/img/normal/blog-3-bg-shape.png" alt="img"/>
            </div>
            <div class="instructor_bg_shape2 shape-mockup d-xl-block d-none" data-left="-15%" data-top="3%">
                <img src="assets/img/normal/instructor_1_shape1.png" alt="img"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 order-xl-2">
                        <div class="become-instructor-img mb-5 mb-xl-0 ms-xl-5">
                            <img src="assets/img/normal/become-instructor-thumb.png" alt="img"/>
                        </div>
                    </div>
                    <div class="col-xl-6 order-xl-1">
                        <div class="title-area mb-30">
                            <span class="sub-title">
                                <i class="fal fa-book me-1"></i>
                                Mission
                            </span>
                            <h2 class="sec-title">Our Mission</h2>
                        </div>
                        <div class="row gy-4">
                           
                            <div class="col-sm-6">
                                <div class="become-instructor-wrap">
                                    <i class="fa-solid fa-badge-check"></i>
                                    <h4 class="box-title">Record your video</h4>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="become-instructor-wrap">
                                    <i class="fa-solid fa-badge-check"></i>
                                    <h4 class="box-title">Launch your course</h4>
                                </div>
                            </div>
                        </div>
                        <a href="about.html" class="th-btn mt-40">
                            Get Instructor <i class="fa-regular fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
         
           
            <Footer/>
        </div>
    );
}

if(document.getElementById("mission")){
    ReactDom.render(<Mission/>, document.getElementById("mission"));
    }
