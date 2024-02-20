// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ListCouses() {
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
        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
                <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">Courses Page 02</h1>
                <ul className="breadcumb-menu">
                    <li><a href="index.html">Home</a></li>
                    <li>Courses</li>
                </ul>
                </div>
            </div>
        </div>

        <section class="space-top space-extra-bottom">
            <div class="container">
                <div class="th-sort-bar">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-auto">
                            <span class="course-result-count">We found <span class="text-theme">12 courses</span> available for you</span>
                        </div>
                        <div className="col-md-auto">
                            <div className="nav" role="tablist">
                                <a
                                href="#"
                                className="active"
                                id="tab-course-grid"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-grid"
                                role="tab"
                                aria-controls="tab-grid"
                                aria-selected="true"
                                >
                                <i className="fa-solid fa-grid-2"></i> Grid
                                </a>{' '}
                                <a
                                href="#"
                                id="tab-course-list"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-list"
                                role="tab"
                                aria-controls="tab-grid"
                                aria-selected="false"
                                >
                                <i className="fas fa-list"></i> List
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                        <div class="row gy-4 mb-30">
                            <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                                <div class="course-box2 style2">
                                    <div class="course-img">
                                        <img src="assets/img/update1/course/course_1_1.jpg" alt="course"/> <span class="tag">Free</span>
                                    </div>
                                    <div class="course-content">
                                         <div class="course-author">
                                                <div class="author-info">
                                                <img src="assets/img/update1/course/author.jpg" alt="author"/> 
                                                <a href="course.html" class="author-name">Kevin Perry</a>
                                            </div>
                                            <div class="course-rating">
                                                <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                    <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                </div>(4.00)
                                            </div>
                                        </div> 
                                        <h3 class="course-title">
                                            <a href="course-details.html">Learn React JS Tutorial For Beginners</a>
                                        </h3>
                                        <div class="course-meta">
                                            <span><i class="fal fa-file"></i>Lesson 8</span> 
                                            <span><i class="fal fa-user"></i>Students 50</span> <span><i class="fal fa-eye"></i>View: 12K</span>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                        <div class="row gy-4 mb-30">
                            <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                                <div class="course-box2 style2">
                                    <div class="course-img">
                                        <img src="assets/img/update1/course/course_1_1.jpg" alt="course"/> <span class="tag">Free</span>
                                    </div>
                                    <div class="course-content">
                                         <div class="course-author">
                                                <div class="author-info">
                                                <img src="assets/img/update1/course/author.jpg" alt="author"/> 
                                                <a href="course.html" class="author-name">Kevin Perry</a>
                                            </div>
                                            <div class="course-rating">
                                                <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                    <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                </div>(4.00)
                                            </div>
                                        </div> 
                                        <h3 class="course-title">
                                            <a href="course-details.html">Learn React JS Tutorial For Beginners</a>
                                        </h3>
                                        <div class="course-meta">
                                            <span><i class="fal fa-file"></i>Lesson 8</span> 
                                            <span><i class="fal fa-user"></i>Students 50</span> <span><i class="fal fa-eye"></i>View: 12K</span>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>

       


        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}
