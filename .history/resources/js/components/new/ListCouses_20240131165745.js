import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';

function ListCouses() {
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);

  
   
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
                        {data.map(item => (
                            <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                                <a onClick={()=>handleLink('TMC', item.id)}>
                                <div class="course-box2 style2">
                                    <div class="course-img">
                                        <img style={{ width: '350px', height: '250px' }} src={item.picture} alt={item.coursename} /> <span class="tag">Free</span>
                                    </div>
                                    <div class="course-content">
                                        <div class="course-author">
                                                <div class="author-info">
                                                <img src="assets/img/update1/course/author.jpg" alt="author"/> 
                                                <a onClick={()=>handleLink('TMC', item.id)} class="author-name">Kevin Perry</a>
                                            </div>
                                            <div class="course-rating">
                                                <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                    <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                </div>(4.00)
                                            </div>
                                        </div> 
                                        <h4 class="course-title">
                                            <a onClick={()=>handleLink('TMC', item.id)}> {item.coursename.substring(0, 30)+'...'} </a>
                                        </h4>
                                        <div class="course-meta">
                                            <span><i class="fal fa-file"></i>{item.lesson} lectures </span> 
                                            <span><i class="fal fa-user"></i>Students 50</span> 
                                            <button type="button" >
                                                <i className="far fa-shopping-cart"></i> <span className="badge">5</span>
                                            </button> {' '}
                                        </div>
                                    </div> 
                                </div>
                                </a>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div class="tab-pane fade active show" id="tab-list" role="tabpanel" aria-labelledby="tab-course-list">
                        <div class="row gy-4 mb-30">
                        {data.map(course => (
                            <div class="col-12">
                                <div class="course-grid">
                                    <div class="course-img">
                                        <img src="assets/img/course/course_2_1.png" alt="img"/> <span class="tag"><i class="fas fa-clock"></i> 03 WEEKS</span>
                                    </div>
                                    <div class="course-content">
                                        <div class="d-flex justify-content-between">
                                            <div class="course-rating">
                                                <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                    <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                </div>(4.7)
                                            </div>
                                            <div class="offer-tag">Free</div>
                                        </div>
                                        <h3 class="course-title">
                                            <a href="course-details.html">Education Software and PHP and JS System Script</a>
                                        </h3>
                                        <p class="course-text">We are committed to making a positive impact on education globally. Through our initiatives, we aim to bridge educational gaps, improve learning outcomes.</p>
                                        <div class="course-meta style2">
                                            <span><i class="fal fa-file"></i>Lesson 8</span> 
                                            <span><i class="fal fa-user"></i>Students 60+</span> <span><i class="fal fa-chart-simple"></i>Beginner</span>
                                        </div>
                                        <div class="course-author">
                                            <div class="author-info">
                                                <img src="assets/img/course/author.png" alt="author"/> 
                                                <a href="course.html" class="author-name">Max Alexix</a>
                                            </div>
                                            <a href="course-details.html" class="link-btn">View Details<i class="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         ))}
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
