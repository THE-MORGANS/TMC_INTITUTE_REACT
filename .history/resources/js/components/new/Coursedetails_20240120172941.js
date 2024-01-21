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
            <section className="shop-main container border-top-1 p-4" style={{ backgroundColor: '#EFEBF5', borderRadius: '20px' }}>
                <div className="container">
                <div className="mb-3 mb-xl-0 pb-0 pb-xl-0"></div>
                <div className="tab-content pt-2" id="collections-2-tab-content">

                    <div className="tab-pane fade show active" id="collections-tab-6" role="tabpanel" aria-labelledby="collections-tab-6-trigger">
                    <div className="row">

                        <div className="col-md-6 col-lg-8 mb-3 mb-xl-3">
                        <div className="container">
                            <div className="breadcrumb mb-0 flex-grow-1">
                            <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">Home</a>
                            <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">|</span>
                            <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">Courses</a>
                            <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">|</span>
                            <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium" style={{ color: '#A32926' }}>Courses details</a>
                            </div>
                        </div>
                        <div className="shop-banner__content">
                            <div className="product-card product-card_style8 hover-container">
                            <div className="pc__img-wrapper pc__img-wrapper_wide2">
                                <img style={{ borderRadius: '10px' }} src="../images/courses/course-11.png" width="544" height="300" alt="" className="pc__img" />
                            </div>
                            </div>
                            <div className="mb-3 mb-xl-3"></div>
                            <p className="fw-bold h4" style={{ color: '#37226C' }}>Enterprise Risk Management Principles | Episode 2</p>
                        </div>
                        </div>

                        <style>
                        {`
                            .pc__info {
                            padding-left: 10px;
                            }
                            .h4 {
                            color: #37226C;
                            }
                        `}
                        </style>

                        <div className="col-md-6 col-lg-4">
                        <p className="fw-bold h4" style={{ color: '#37226C' }}>Course Playlists</p>

                        {/* Course 1 */}
                        <div className="product-card product-card_style8 hover-container">
                            <div className="product-card-wrapper mb-xl-3">
                            <div className="row p-3" style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                                <div className="blog-list__item-image col-lg-6">
                                <img style={{ borderRadius: '10px' }} loading="lazy" className="h-auto" src="../images/courses/course-12.jpeg" width="680" height="493" alt="" />
                                </div>

                                <div className="pc__info position-relative col-lg-6" style={{ margin: '0 !important' }}>
                                <div className="mb-3 mb-xl-3 pb-xl-0"></div>
                                <h4 className="mb-xxl-2">
                                    <a href="#" className="h4">Maths - Introduction</a>
                                </h4>
                                <div className="h4">
                                    <p style={{ color: '#A32926' }}>1:47</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Course 2 */}
                        {/* Add similar blocks for other courses as needed */}

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
                            {/* ... Other paragraphs ... */}
                            <p className="fw-bold h4" style={{ color: '#37226C' }}>What you'll learn in this course:</p>
                            <ul className="custom-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            {/* ... More list items ... */}
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="row bg-white border-radius-10">
                            {/* ... Content for the right column ... */}
                            </div>
                            <div className="text-center mt-2 w-100">
                            <a href="./courses.html" className="w-100 mt-xl-2 mb-xl-4 btn btn-primary" style={{ borderRadius: '10px' }}>Purchase Course</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className="mb-1 pb-lg-0"></div>

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
                {/* ... Other paragraphs ... */}
                <p className="fw-bold h4" style={{ color: '#37226C' }}>What you'll learn in this course:</p>
                <ul className="custom-list">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  {/* ... More list items ... */}
                </ul>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="row bg-white border-radius-10">
                  {/* ... Content for the right column ... */}
                </div>
                <div className="text-center mt-2 w-100">
                  <a href="./courses.html" className="w-100 mt-xl-2 mb-xl-4 btn btn-primary" style={{ borderRadius: '10px' }}>Purchase Course</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="mb-1 pb-lg-0"></div>




        </main>


        <Footer />
    </div>
  );
}

export default Coursedetails;

if(document.getElementById('coursedetails')){
    ReactDOM.render(<Coursedetails/>,document.getElementById('coursedetails'));
}