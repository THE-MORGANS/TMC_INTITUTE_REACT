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
                                        </div><div class="course-rating"><div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:79%">Rated <strong class="rating">4.00</strong> out of 5</span></div>(4.00)</div></div><h3 class="course-title"><a href="course-details.html">Learn React JS Tutorial For Beginners</a></h3><div class="course-meta"><span><i class="fal fa-file"></i>Lesson 8</span> <span><i class="fal fa-user"></i>Students 50</span> <span><i class="fal fa-eye"></i>View: 12K</span></div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>

        <main>
            <section class="full-width_padding">
                <div class="full-width_border border-2" style={{borderColor: '#eee'}}>
                    <div class="shop-banner position-relative ">
                        <div class="background-img" style={{backgroundColor: '#eee'}}>
                            <img loading="lazy" style={{borderRadius: '20px'}} src="../images/home/colleage-level2.png" width="1759" height="420" alt="Pattern" class="slideshow-bg__img object-fit-cover" />
                        </div>
                    
                        <div class=" cols-lg-6">
                            <div class="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                                <div class="breadcrumb mb-0  flex-grow-1">
                                    <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" >Home</a>
                                    <span class="breadcrumb-separator menu-link fw-medium ps-1 pe-1">|</span>
                                    <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" style={{color: '#A32926'}}>Courses</a>
                                </div>
                                <h2 class="text-uppercase fw-bold " style={{color:'#0A033C'}}>TMC Institute Courses<br/> For All Standards</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mb-1 pb-lg-0"></div>

            <section class="shop-main container" >
                <div class="mb-3 pb-xl-3"></div>
                <div class="align-items-center mb-4 pb-md-2">
                    <div class="shop-acs d-flex align-items-center flex-grow-1 pe-1">
                        <fieldset class="multi-select d-none d-lg-block">
                            
                            <div class="position-relative hover-container">
                                <div class="">
                                    <span class="fw-medium text-uppercase ">All Courses</span>
                                </div>
                            </div>
                        </fieldset>

                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

                        <fieldset class="multi-select d-none d-md-block px-1">
                            
                            <div class="position-relative hover-container">
                                <div class="js-hover__open">
                                    <span class=" fw-medium text-uppercase js-no-update">Kindergarten</span>
                                </div>
                            </div>
                        </fieldset>
                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

                        <div class="position-relative hover-container d-none d-lg-block px-1">
                            <div class="js-hover__open">
                                <span class=" fw-medium text-uppercase js-no-update">High School</span>
                            </div>
                        </div>
                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

                        <div class="position-relative hover-container d-none d-lg-block px-1">
                            <div class="js-hover__open">
                                <span class=" fw-medium text-uppercase js-no-update">College</span>
                            </div>
                        </div>

                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>
                        <div class="position-relative hover-container d-none d-lg-block px-1">
                            <div class="js-hover__open">
                                <span class=" fw-medium text-uppercase js-no-update">Computer</span>
                            </div>
                        </div>
                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>
                        <div class="position-relative hover-container d-none d-lg-block px-1">
                            <div class="js-hover__open">
                                <span class=" fw-medium text-uppercase js-no-update">science</span>
                            </div>
                        </div>
                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

                        <div class="position-relative hover-container d-none d-lg-block px-1">
                            <div class="js-hover__open">
                                <span class=" fw-medium text-uppercase js-no-update">Engineering</span>
                            </div>
                        </div>
                        <div class="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>
                        <div class="position-relative hover-container d-none d-lg-block px-1">
                            <div class="js-hover__open">
                                <span class=" fw-medium text-uppercase js-no-update">More Courses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop-main container p-3" style={{backgroundColor: '#eee'}}>
                <p class=" fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4 h3">Standard Courses</p>
                <div class="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4" id="products-grid" >
                    <div class="product-card-wrapper">
                        <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                            <div class="pc__img-wrapper">
                                <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="./coursedetails.html">
                                                <img loading="lazy" src="../images/courses/course-1.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="./coursedetails.html"><img loading="lazy" src="../images/courses/course-1.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                    </div>
                                    <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                    <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                </div>
								 <a href="./cart.html" class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                            </div>

                            <div class="pc__info position-relative">
								<div class="row">
									<div class="col">
										<p class="pc__category">Enterprise Risk Management Principles</p>
										<h6 class="pc__title"><a href="#">Regulatory Risk Management</a></h6>
									</div>
									<div class="col">
										<a href="./cart.html" style={{color: '#A32926'}} class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent btn btn-round btn-hover-red  text-uppercase me-2" title="Add To Cart">
											<svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<use href="#icon_cart" />
											</svg>
										</a>
									</div>
								</div>                                
                                <div class="product-card__price d-flex">
                                    <span class="money price price-old">$129</span>
                                    <span class="money price price-sale">$6950.00</span>
                                </div>
                                
                                <div class="product-card__review d-flex align-items-center">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                    <span class="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                </div>
                                <a href="./cart.html" style={{color: '#A32926'}} class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent btn btn-round btn-hover-red text-uppercase me-2" >
                                    <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use href="#icon_cart" />
                                    </svg>
                                </a>
                            </div>

                            <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                <div class="pc-labels__right ms-auto">
                                    <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card-wrapper">
                        <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                            <div class="pc__img-wrapper">
                                <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="#"><img loading="lazy" src="../images/courses/course-2.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#"><img loading="lazy" src="../images/courses/course-2.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                    </div>
                                    <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                    <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                </div>
                                <button class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                            </div>

                            <div class="pc__info position-relative">
                                <p class="pc__category">Risk Assessment Techniques</p>
                                <h6 class="pc__title"><a href="#">Regulatory Risk Management Training</a></h6>
                                <div class="product-card__price d-flex">
                                    <span class="money price price-old">$129</span>
                                    <span class="money price price-sale">$695.00</span>
                                </div>
                                <div class="product-card__review d-flex align-items-center">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                    <span class="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                </div>
								<a href="../demo/cart.html" style={{color: '#A32926'}} class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                    <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use href="#icon_cart" />
                                    </svg>
                                </a>

                            </div>
                            <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                <div class="pc-labels__right ms-auto">
                                    <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card-wrapper">
                        <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                            <div class="pc__img-wrapper">
                                <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="#"><img loading="lazy" src="../images/courses/course-3.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#"><img loading="lazy" src="../images/courses/course-3.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                    </div>
                                    <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                    <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                </div>
                                <button class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                            </div>

                            <div class="pc__info position-relative">
                                <p class="pc__category">Operational Risk for Auditors and Supervisors</p>
                                <h6 class="pc__title"><a href="#">Regulatory Risk Management Training</a></h6>
                                <div class="product-card__price d-flex">
                                    <span class="money price price-old">$129</span>
                                    <span class="money price price-sale">$99</span>
                                </div>
                                <div class="product-card__review d-flex align-items-center">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                    <span class="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                </div>
								<a href="" style={{color: '#A32926'}} class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                    <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use href="#icon_cart" />
                                    </svg>
                                </a>
                            </div>
                            <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                <div class="pc-labels__right ms-auto">
                                    <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card-wrapper">
                        <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                            <div class="pc__img-wrapper">
                                <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="#"><img loading="lazy" src="../images/courses/course-4.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#"><img loading="lazy" src="../images/courses/course-4.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img" /></a>
                                        </div>
                                    </div>
                                    <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                    <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                </div>
                                <button class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                            </div>

                            <div class="pc__info position-relative">
                                <p class="pc__category">Essentials of Risk Management</p>
                                <h6 class="pc__title"><a href="#">Regulatory Risk Management Training</a></h6>
                                <div class="product-card__price d-flex">
                                    <span class="money price price-old">$129</span>
                                    <span class="money price price-sale">$99</span>
                                </div>
                                <div class="product-card__review d-flex align-items-center">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                    <span class="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                </div>
								<a href="" style={{color: '#A32926'}} class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                    <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use href="#icon_cart" />
                                    </svg>
                                </a>
                            </div>
                            <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                <div class="pc-labels__right ms-auto">
                                    <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="mb-1 text-center fw-medium">SHOWING 3 of 497 items</p>
                <div class="mb-2 pb-xl-2"></div>

                <p class=" fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4 h3">Other Courses by TMC Institute</p>
                
                <div class="d-flex justify-content-between mb-4 pb-md-2">
                    <div class="breadcrumb mb-0  d-md-block flex-grow-1">
                        <form action="" class="footer-newsletter__form position-relative bg-body">
                            <input class="form-control border-white" type="email" name="email" placeholder="Search Class, Course" style={{borderRadius:'20px', backgroundRepeat: 'no-repeat', backgroundSize: '20px', backgroundPosition: '97% center', cursor: 'auto'}} data-temp-mail-org="0" />
                            <input style={{backgroundColor: '#A32926'}} class="btn-link fw-medium text-white position-absolute top-0 end-0 h-100" type="submit" value="&nbsp;Search"/>
                        </form>
                    </div>
    
                    <div class="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                        
                        <select class="shop-acs__select form-select w-auto border-0 order-1 order-md-0" 
                        aria-label="Sort Items" name="total-number">
                            <option selected> <span style={{color: '#5D5A6F !important'}}>Sort by:</span>  Latest</option>
                            <option value="1">Featured</option>
                            <option value="2">Best selling</option>
                            <option value="3">Alphabetically, A-Z</option>
                            <option value="4">Alphabetically, Z-A</option>
                            <option value="5">Price, low to high</option>
                            <option value="6">Price, high to low</option>
                            <option value="7">Date, old to new</option>
                            <option value="8">Date, new to old</option>
                        </select>
                        <div class="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0"></div>
                    </div>
                </div>

                <div class="products-grid row row-cols-1 row-cols-md-3 row-cols-lg-2 row-cols-xl-2" id="products-grid" >
                   
                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius:'20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}} loading="lazy" class="h-auto" src="../images/courses/course-5.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                                <div class=" d-flex  justify-content-between">
                                    <h3 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="./coursedetails.html" class="h4">The Three Musketeers</a>
                                    </h3>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="pc__info position-relative">
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color:'#A32926'}}>$40.00</p>
                                 </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}} loading="lazy" class="h-auto" src="../images/courses/course-6.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="./coursedetails.html" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color:'#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}} loading="lazy" class="h-auto" src="../images/courses/course-7.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-8.png" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-9.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-10.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-11.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-12.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-13.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div class="product-card-wrapper " >
                        <div class="blog-list__item" style={{backgroundColor: '#fff', padding:'20px', borderRadius: '20px'}}>
                            <div class="blog-list__item-image">
                              <img style={{borderRadius: '10px'}}  loading="lazy" class="h-auto" src="../images/courses/course-14.jpeg" width="680" height="493" alt="" />
                            </div>
                            <div class="blog-list__item-detail">
                              <div class="pc__info position-relative">
                                <div class=" d-flex  justify-content-between  ">
                                    <h4 class="pc__title mb-xxl-2 " style={pcTitleStyle}>
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="#" style={{color: '#A32926'}} class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" style={reviewStarStyle}  viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" style={reviewStarStyle} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style={{color: '#A32926'}}>$40.00</p>
                                 </div>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </section>

            <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
    
            <section class="contact-us container" style={{backgroundColor:'#37226C', bordeRradius:'20px'}}>
                <div class="p-3 text-center">
                    <div class="row mb-5">
                        <div class="col-xl-4 d-none d-lg-block">
                            <img src="../images/home/sub-1.png" class="w-50 h-auto d-block mt-xl-5" />
                        
                        </div>
                        <div class=" col-xl-4">
                            <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                            <h2 style={{ fontWeight:'900', color:'#fff'}} class="section-title text-left mb-4 mb-xl-3">
                                Subcribe to Get Update For Every New Courses
                            </h2>
                            
                            <p class="mb-4 mb-xl-5" style={{color:'#777'}}>
                                20k+ students daily learn with TMC Institute. Subscribe for new courses.
                            </p>
                            <div class="text-left mt-2">
                                <form action="" class="footer-newsletter__form position-relative bg-body">
                                    <input class="form-control border-white" type="email" name="email" placeholder="Enter your email" 
                                        style={{
                                            backgroundImage: 'url("data:image/png;base64,") !important',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '70px',
                                            backgroundPosition: '97% center',
                                            cursor: 'auto'
                                        }}
                                        
                                        data-temp-mail-org="1" />
                                    <input class="btn btn-link  fw-medium text-white position-absolute top-0 end-0 h-100 " type="submit" value="Subcribe" />
                                </form>
                    
                            </div>
                        </div>
                        <div class="col-xl-4 d-none d-lg-block">
                            <img src="../images/home/sub-2.png" class="w-50 h-auto d-block mt-xl-5" />
                        </div>
                    
                    </div>
                </div>
            </section>

            <div class="mb-5 pb-xl-5"></div>
        </main>


        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}
