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
                            <input style={{backgroundColor: '#A32926'}} class="btn-link fw-medium text-white position-absolute top-0 end-0 h-100" type="submit" value="Search"/>
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
                                    <h4 class="pc__title mb-xxl-2 ">
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
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
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
                                    <h4 class="pc__title mb-xxl-2 ">
                                        <a href="#" class="h4">The Three Musketeers</a>
                                    </h4>
                                    <a href="../demo/cart.html" style={{color: '#A32926;" class=" btn-round  bg-transparent  btn btn-round btn-hover-red  text-uppercase " data-aside="cartDrawer" title="Add To Cart">
                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use href="#icon_cart" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="product-card__review d-flex align-items-center mb-xxl-2 ">
                                    <div class="reviews-group d-flex">
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                        <svg class="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                    </div>
                                </div>
                                <div class="blog-list__item-title">
                                    <p style="color:#A32926">$40.00</p>
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

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}