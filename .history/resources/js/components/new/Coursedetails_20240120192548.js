// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Coursedetails() {
    const reviewStarStyle = {
        width: '20px',
        height: '20px',
    };

    const pcTitleStyle = {
        marginRight: '20px',
    };

    const h4 = {
        color:'#37226c',
    };
    const pcInfo = {
        paddingLeft: '10px',
    };
  return (
    <div>
        <Navbar />

      
        <main style={{ backgroundColor: '#F7F5FA' }}>
        
            <section class="shop-main container border-top-1 p-4" style={{backgroundColor: '#EFEBF5', borderRadius:'20px'}}>
                <div class="container">
                    <div class="mb-3 mb-xl-0 pb-0 pb-xl-0"></div>
                    <div class="tab-content pt-2" id="collections-2-tab-content">
                        
                        <div class="tab-pane fade show active" id="collections-tab-6" role="tabpanel" aria-labelledby="collections-tab-6-trigger">
                            <div class="row">
                                <div class="col-md-6 col-lg-8 mb-3 mb-xl-3  ">
                                    <div class=" container ">
                                        <div class="breadcrumb mb-0  flex-grow-1">
                                            <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" >Home</a>
                                            <span class="breadcrumb-separator menu-link fw-medium ps-1 pe-1">|</span>
                                            <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium">Courses</a>
                                            <span class="breadcrumb-separator menu-link fw-medium ps-1 pe-1">|</span>
                                            <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" style={{color: '#A32926'}}>Courses details</a>
                    
                                        </div>
                                    </div>
                                    <div class="product-card product-card_style8 hover-container">
                                        <div class="pc__img-wrapper pc__img-wrapper_wide2">
                                            <img  style={{borderRadius: '10px'}} src="../images/courses/course-11.png" width="544" height="300" alt="" class="pc__img" />
                                        </div>
                                    </div>
                                    <div class=" mb-3 mb-xl-3  "></div>
                                    <p class="fw-bold  h4" style={{color: '#37226C'}}>Enterprise Risk Management Principles | Episode 2</p>
                                    
                                </div>
                                <div class="col-md-6 col-lg-4 ">
                                    

                                    <p class="fw-bold   h4" style={{color: '#37226C'}}>Course Playiists</p>
                                    <div className=" product-card product-card_style8 hover-container">
                                        <div class="product-card-wrapper mb-xl-3"  >
                                            <div className="row p-3 no-gutters" style={{backgroundColor: '#fff', borderRadius:'5px'}}>
                                                <div className="col-md-6">
                                                    <div class="blog-list__item-image col-lg-6" >
                                                        <img style={{borderRadius: '10px'}} loading="lazy"  class="h-auto" src="../images/courses/course-12.jpeg" width="680" height="493" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <div style={pcInfo} class="pc__info position-relative col-lg-6" >
                                                        <div class="mb-3 mb-xl-3 pb-xl-0"></div>
                                                        <h4 class="mb-xxl-2 ">
                                                            <a href="#" style={h4}  class="h4" >Maths - Introduction</a>
                                                        </h4>
                                                        <div class=" h4">
                                                            <p style={{color:'#A32926'}}>1:47</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" product-card product-card_style8 hover-container">
                                        <div class="product-card-wrapper mb-xl-3"  >
                                            <div className="row p-3 no-gutters" style={{backgroundColor: '#fff', borderRadius:'5px'}}>
                                                <div className="col-md-6">
                                                    <div class="blog-list__item-image col-lg-6" >
                                                        <img style={{borderRadius: '10px'}} loading="lazy"  class="h-auto" src="../images/courses/course-3.png" width="680" height="493" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <div style={pcInfo} class="pc__info position-relative col-lg-6" >
                                                        <div class="mb-3 mb-xl-3 pb-xl-0"></div>
                                                        <h4 class="mb-xxl-2 ">
                                                            <a href="#" style={h4}  class="h4" >Maths - Introduction</a>
                                                        </h4>
                                                        <div class=" h4">
                                                            <p style={{color:'#A32926'}}>1:47</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className=" product-card product-card_style8 hover-container">
                                        <div class="product-card-wrapper mb-xl-3"  >
                                            <div className="row p-3 no-gutters" style={{backgroundColor: '#fff', borderRadius:'5px'}}>
                                                <div className="col-md-6">
                                                    <div class="blog-list__item-image col-lg-6" >
                                                        <img style={{borderRadius: '10px'}} loading="lazy"  class="h-auto" src="../images/courses/course-4.png" width="680" height="493" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <div style={pcInfo} class="pc__info position-relative col-lg-6" >
                                                        <div class="mb-3 mb-xl-3 pb-xl-0"></div>
                                                        <h4 class="mb-xxl-2 ">
                                                            <a href="#" style={h4}  class="h4" >Maths - Introduction</a>
                                                        </h4>
                                                        <div class=" h4">
                                                            <p style={{color:'#A32926'}}>1:47</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" product-card product-card_style8 hover-container">
                                        <div class="product-card-wrapper mb-xl-3"  >
                                            <div className="row p-3 no-gutters" style={{backgroundColor: '#fff', borderRadius:'5px'}}>
                                                <div className="col-md-6">
                                                    <div class="blog-list__item-image col-lg-6" >
                                                        <img style={{borderRadius: '10px'}} loading="lazy"  class="h-auto" src="../images/courses/course-8." width="680" height="493" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <div style={pcInfo} class="pc__info position-relative col-lg-6" >
                                                        <div class="mb-3 mb-xl-3 pb-xl-0"></div>
                                                        <h4 class="mb-xxl-2 ">
                                                            <a href="#" style={h4}  class="h4" >Maths - Introduction</a>
                                                        </h4>
                                                        <div class=" h4">
                                                            <p style={{color:'#A32926'}}>1:47</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class=" mb-3 mb-xl-5  "></div>
            <section className="shop-main container border-top-1 p-4">
                <div className="container">
                    <div className="mb-3 mb-xl-0 pb-0 pb-xl-0"></div>
                    <div className="tab-content pt-2" id="collections-2-tab-content">

                    <div className="tab-pane fade show active" id="collections-tab-6" role="tabpanel" aria-labelledby="collections-tab-6-trigger">
                        <div className="row">
                        <div className="col-md-6 col-lg-8 mb-3 mb-xl-3">
                            <div className="mb-3 mb-xl-3"></div>
                            <p className="fw-bold h4" style={{ color: '#37226C' }}>Course Details</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                            <p >
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                            <p class="fw-bold  h4" style={{color: '#37226C'}}>Certification</p>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                            
                            <p class="fw-bold  h4" style={{color: '#37226C'}}>Who this course is for</p>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                            </p>
                            <p class="fw-bold  h4" style={{color: '#37226C'}}>What you'll learn in this course:</p>
						
                            <ul className="custom-list">
                            <li >Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="row bg-white border-radius-10">
                            <div className="mb-3 mb-xl-3"></div>
                            <div className="col">
                                <p className="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Price</p>
                                <p className="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Instructor</p>
                                <p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Ratings</p>
								<p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Durations</p>
								<p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Lessons</p>
								<p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Quizzes</p>
								<p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Certificate</p>
								<p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Language</p>
								<p class="fw-bold h6 mb-4 mb-xl-4 pb-2 pb-xl-2">Access</p>
                            </div>
							
							<div class="col">
                                <p className="fw-bold h4 mb-4" style={{ color: '#A32926' }}>$649.00</p>
                                <p className="fw-bold h4 text-decoration-underline mb-4" style={{ color: '#37226C' }}>Wade Warren</p>
                                <div class="reviews-group d-flex mb-4">
									<svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
									<svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
									<svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
									<svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
									<svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
								</div>
                                <p class="fw-bold h4 mb-4">10 Days</p>
								<p class="fw-bold h4 mb-4">30</p>
								<p class="fw-bold h4 mb-5">5</p>
								<p class="fw-bold h4 mb-4">Yes</p>
								<p class="fw-bold h4 mb-4">English</p>
								<p class="fw-bold h4 mb-4">Lifetime</p>
                            </div>

                            </div>
                            <div className="text-center mt-2 w-100">
                            <a href="" className="w-100 mt-xl-2 mb-xl-4 btn btn-primary" style={{ borderRadius: '10px' }}>Purchase Course</a>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
        </main>


        <Footer />
    </div>
  );
}

export default Coursedetails;

if(document.getElementById('coursedetails')){
    ReactDOM.render(<Coursedetails/>,document.getElementById('coursedetails'));
}