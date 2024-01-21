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
                                    <div class="product-card product-card_style8 hover-container" >
                                        <div class="product-card-wrapper mb-xl-3"  >
                                            <div class="row p-3" style={{background-color: '#fff', border-radius:20px;">
                                                <div class="blog-list__item-image col-lg-6" >
                                                <img style="border-radius: 10px;" loading="lazy"  class="h-auto" src="../images/courses/course-12.jpeg" width="680" height="493" alt="" />
                                                </div>
                                                
                                                <div class="pc__info position-relative col-lg-6"  style="margin: 0 !important;">
                                                    <div class="mb-3 mb-xl-3 pb-xl-0"></div>
                                                    <h4 class="mb-xxl-2 ">
                                                        <a href="#" class="h4" >Maths - Introduction</a>
                                                    </h4>
                                                    <div class=" h4">
                                                        <p style="color:#A32926">1:47</p>
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
        </main>


        <Footer />
    </div>
  );
}

export default Coursedetails;

if(document.getElementById('coursedetails')){
    ReactDOM.render(<Coursedetails/>,document.getElementById('coursedetails'));
}