<<<<<<< HEAD
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
=======
import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
export default function ListCouses() {
    let url = window.location.origin;
    let uniarr = Object.values(unique)

    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [orderbystat, setorderbystat] = useState('')
    const [categories, setcategories] = useState('')
    const [search, setsearch] = useState('')
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage
       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost)

       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
    //    console.log(Post)

    const handlemouse =(num, word)=>{
     setorderbystat(word)
      Sethover(num)
      let formData = new FormData();
      formData.append('categories', word)
      formData.append('page', 1)
      let urltwo = `${url}/categories`;
      axios.post(urltwo, formData).then(res=>{
         if(res.data){
          Setdata(res.data.data)
          Setlast(res.data.last_page)
         }
        })
    }

    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });


    const handleNext = (data)=>{
        if(orderbystat == ''){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/coursesdata`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'ASC' || orderbystat == 'DESC'){
            let Answer = data.selected + 1;
           let formData = new FormData();
           formData.append('orderby', orderbystat)
           formData.append('page', Answer)
           let urltwo = `${url}/arrangment`;
           axios.post(urltwo, formData).then(res=>{
              if(res.data){
               Setdata(res.data.data)
               Setlast(res.data.last_page)
              }
             })
        }else if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabet`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categories`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }

       }

       const handleArrange =(e)=>{
    setorderbystat(e.target.dataset.name)
    let formData = new FormData();
    formData.append('orderby', e.target.dataset.name)
    formData.append('page', 1)
    let urltwo = `${url}/arrangment`;
    axios.post(urltwo, formData).then(res=>{
       if(res.data){
        Setdata(res.data.data)
        Setlast(res.data.last_page)
       }
      })
       }

       const handleSearch=(e)=>{
        e.preventDefault();
        if(search.length > 0){
            let formData = new FormData();
            formData.append('items', search)
            let urltwo = `${url}/searchcourse`;
            axios.post(urltwo, formData).then(res=>{
                console.log(res)
               if(res.data){
                Setdata(res.data)

               }
              })
        }

       }

       const handleCart = (id)=>{
        let cart = data.find((item)=>item.id == id)
         let Awnser =  Cart.map(item=>item.id != id)
         let ans =   Awnser.includes(false)
       if(ans == false){
         SetCart([
             ...Cart,
             cart
         ])
         let AddCart = [...Cart, cart]
         localStorage.setItem('Cart', JSON.stringify(AddCart))
           let stringdata =  JSON.stringify(AddCart)
         let formData = new FormData();
         formData.append("cartitems", stringdata)
           let urltwo = `${url}/addcart`;
           axios.post(urltwo, formData).then(res=>{

             })
       }

     }

     const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    // let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
    useEffect(()=>{
        const interval =  setInterval(()=>{
         var storage = !!localStorage.getItem('Cart')
         if(storage == true){
          let cart =   JSON.parse(localStorage.getItem('Cart'));
          SetCart(cart)

         }

        },1000)
        return () => clearInterval(interval);
     },[])



   const handlePag =(data)=>{
    let Answer = data.selected + 1;
    setCurrentPage(Answer)
   }

   const handleAlphabetical = (e)=>{
     let letter = e.target.dataset.name
     setorderbystat(letter)
    let Answer = 1;
    // alphabet
    let formData = new FormData();
    formData.append('letter', letter)
    formData.append('page', Answer)
    let urltwo = `${url}/alphabet`;
    axios.post(urltwo, formData).then(res=>{
       if(res.data){
        Setdata(res.data.data)
        Setlast(res.data.last_page)
       }
      })
   }

   let symbol = currencysymbol.currency.symbol
   let moneyname = currencysymbol.currency.name
   let converted = JSON.parse(currencyex)
   let convertnaira = converted.result.NGN

  function moneyTalks(converted, price){
   if(converted){
    if(moneyname != 'NGN'){
        return Math.round(price / convertnaira) ;
    }else{
        return Math.round(price);
    }
   }
   else{
    if(moneyname != 'NGN'){
        return Math.round(price / convertnaira) ;
    }else{
        return Math.round(price) ;

    }

   }
  }

  const handleLink =(word, id)=>{
    let formData = new FormData();
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json')
    formData.append("id", id)
    apiClient.get('/sanctum/csrf-cookie').then( ()=> {
        let urltwo = 'api/encrypt';
           apiClient.post(urltwo, formData, myHeader).then(res=>{
             if(res.data){
                window.location.href =`${url}/courseinfo/${word}/${res.data}`;
             }
            })
        })

 }
const [overon, setoveron] = useState(1000)
 const handleOver = (index)=>{
    setoveron(index)
 }

 const handleLeave = ()=>{
    setoveron(1000)
 }

  return (
    <div id="wrapper" className="horizontal">
      <Navbar/>
      <div className="container">
      {/* <!-- Spacer --> */}
            <div className="page-spacer"></div>
                  {/* <!-- Spacer --> */}
                  <div className="lg:flex lg:space-x-10">
                  <div className="lg:w-3/12 space-y-4 lg:block hidden">

{/* <div>
    <h4 className="font-semibold text-base mb-2"> Categories </h4>
    <select className="selectpicker default shadow-sm rounded" data-selected-text-format="count" data-size="7"
        title="All Categories">
        <option> Web Development </option>
        <option> Mobile App </option>
        <option> Business </option>
        <option> IT Software </option>
        <option> Desings </option>
        <option> Marketing </option>
        <option> Life Style </option>
        <option> Photography </option>
        <option> Health Fitness </option>
        <option> Ecommerce </option>
        <option> Food cooking </option>
        <option> Teaching academy </option>
    </select>
</div> */}

<div>
    <div className="font-semibold text-base mb-2 text-left">Order By</div>
    <form className="space-y-1">
        <div className="radio">
            <input id="radio-1"  name="steve" data-name="ASC" onChange={(e)=>handleArrange(e)} type="radio" />
            <label for="radio-1"><span className="radio-label"></span> ASC
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-2" name="steve" data-name="DESC" onChange={(e)=>handleArrange(e)}  type="radio"/>
            <label for="radio-2"><span className="radio-label"></span> DESC
            </label>
        </div>
        <br/>
    </form>
</div>

<div>
    <div className="font-semibold text-base mb-2 text-left">Group Order</div>
    <form className="space-y-1">
        <div className="radio">
            <input id="radio-3"  name="alpha" data-name="a,b,c,d,e,f" onChange={(e)=>handleAlphabetical(e)} type="radio" />
            <label for="radio-3"><span className="radio-label"></span> A-F
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-4" name="alpha" data-name="g,h,i,j,k,l" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-4"><span className="radio-label"></span> G-L
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-5" name="alpha" data-name="m,n,o,p,q,r" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-5"><span className="radio-label"></span> M-R
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-6" name="alpha" data-name="s,t,u,v,w,x" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-6"><span className="radio-label"></span> S-X
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-7" name="alpha" data-name="y,z" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-7"><span className="radio-label"></span> Y-Z
            </label>
        </div>
    </form>
</div>

<div>



</div>




</div>
<div className="w-full md:space-y-10 space-y-5">
<div>

{/* <!-- title --> */}
<div className="mb-2">

    <div className="text-xl font-semibold">  TMC Institute Courses  </div>


    {/* <div className="text-sm mt-2">  Choose from 130,000 online video courses with new additions published every month </div> */}
</div>

<section className="w-full flex flex-row items-center justify-center  space-x-1">
    <span className='w-10/12 md:w-1/2 lg:w-2/5'>
        <input type="text" className="w-full  rounded-sm border"   onChange={(e)=>setsearch(e.target.value)}  value={search} />
        </span><span className='md:w-1/6 lg:w-1/12'>
            <button className="py-2 grid place-content-center outline-none border-none bg-blue-500 text-white rounded-r-lg"  onClick={(e)=>handleSearch(e)}>search</button>
        </span>
</section>
<div className="w-full">
            <span className="w-1/5 float-right">
            <ReactPaginate
          style={{ margin:"3px" }}
                  previousLabel={'<'}
                  nextLabel={'>'}
                    pageCount={numberofpages}
                   // breakLabel={"..."}
                    //marginPagesDisplayed={2}
                  //  pageRangeDisplayed={1}
                    onPageChange={handlePag}
                    containerClassName={'inline-flex items-center justify-center m-auto space-x-3'}
                    pageClassName={'m-2 hidden'}
                    pageLinkClassName={'py-1 px-1 text-md text-center rounded-lg bg-[#A32926] text-white hidden'}
                    previousClassName={'py-1 px-1 text-md text-center rounded-l-lg bg-[#A32926] text-white text-lg h-8 w-8 grid place-content-center'}
                    nextClassName={'py-1 px-1 text-md text-center rounded-r-lg bg-[#A32926] text-white text-lg  h-8 w-8 grid place-content-center'}
                  />
            </span>
        </div>
{/* <!-- nav --> */}
<nav className="cd-secondary-nav border-b md:m-0 -mx-4 nav-small">
    <ul className="space-x-1 overflow-x-scroll sm:overflow-x-scroll sm:space-x-1 md:overflow-x-scroll md:space-x-1 lg:overflow-x-hidden lg:space-x-2">
        {Post.map((item, index)=>{
          return<li className={hover == index?"active tip relative":"tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
              <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
               <span className={overon == index?"top-[-45px] h-32 absolute text-white text-xs bg-[#A32926]  grid place-content-center   sm:top-[-45px] sm:h-32 sm:absolute sm:text-xs sm:bg-[#A32926]  sm:grid sm:place-content-center  sm:text-white sm:z-30    md:grid md:place-content-center md:top-[-45px]  md:absolute md:text-xs md:bg-[#A32926]  md:text-white md:z-30  lg:mt-[-10px]  lg:grid lg:place-content-center lg:top-[-25px] lg:absolute lg:text-xs lg:bg-[#A32926]  lg:text-white lg:z-30":'hidden'} >{item.substr(0, 30)}</span>
          </li>
        })}
        {/* <li className="active"><a href="#" className="lg:px-2">   Python </a></li> */}

    </ul>
</nav>



</div>


<div>



</div>

<div>



{/* <!-- course list --> */}
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
{data.map((item, index)=>{
    return <a  className="uk-link-reset" key={index}>
    <div className="card uk-transition-toggle">
        <div className="card-media h-40" onClick={()=>handleLink('TMC', item.id)}>
            <div className="card-media-overly"></div>
            <img src={item.picture} alt="" className=""/>
            <span className="icon-play"></span>
         {item.purchased?<div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
         purchased</div>:""}
        </div>
        <div className="card-body p-4">
            <div className="font-semibold line-clamp-2 cursor-pointer" onClick={()=>handleLink('TMC', item.id)}>{item.coursename}
            </div>
            { item.purchased?'':username?
                                     <div className="flex space-x-2 items-center text-sm pt-3">
                               <div className="flex flex-row items-center" onClick={()=>handleCart(item.id)}>    {getBtnText(item.id) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                                         <AiOutlineShopping  className={getBtnText(item.id)} /> </div>
                            <div>·</div>
                            <div> {item.lesson} lectures </div>
                        </div>:""
                        }

            <div className="pt-1 flex items-center justify-between">
                {/* <div className="text-sm font-semibold"> Jesse Stevens  </div> */}
                {/* <div className="text-lg font-semibold"><Naira>{item.price}</Naira></div> */}
                  <div className='text-lg font-semibold'> <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> </div>
            </div>
        </div>
    </div>
</a>

})}






</div>

{/* <!-- Pagination --> */}
<div className="flex justify-center mt-9 space-x-2 text-base font-semibold text-gray-400 items-center">

<ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                    pageCount={last}
                    breakLabel={"..."}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={handleNext}
                    containerClassName={'inline-flex items-center justify-center m-auto '}
                    pageClassName={'m-2'}
                    pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
                    previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                    nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                  />
</div>

</div>

</div>

                  </div>

      </div>
        </div>
  )
}


if(document.getElementById('listcourses')){
ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}
>>>>>>> 05c22c9b8edf9775407bfc6ae0eeb5fb662143f4
