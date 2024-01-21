import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';

export default function Coureselistothm() {
   
   
  return (
    <div>
       <Navbar/>
       <main>
            <section className="shop-main container d-flex pt-4 pt-xl-5">
                <div className="shop-sidebar side-sticky bg-body" id="shopFilter">
                    <div className="aside-header d-flex d-lg-none align-items-center">
                        <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
                        <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
                    </div>
                    <div className="pt-4 pt-lg-0"></div>

                    <div className="accordion" id="brand-filters">

                        <div className="accordion-item mb-4 pb-3">
                            <h5 className="accordion-header" id="accordion-heading-brand">
                                <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-brand" aria-expanded="true" aria-controls="accordion-filter-brand">
                                    Order By
                                    <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                            <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z"/>
                                        </g>
                                    </svg>
                                </button>
                            </h5>
                            <div id="accordion-filter-brand" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-brand" data-bs-parent="#brand-filters">
                                <div className="search-field multi-select accordion-body px-0 pb-0">
                                    <select className="d-none" multiple name="total-numbers-list">
                                        <option value="asc">ASC</option>
                                        <option value="desc">DESC</option>
                                    </select>
                                    
                                    <ul className="multi-select__list list-unstyled">
                                        <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                            <span className="me-auto">ASC</span>
                                        </li>
                                        <li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                            <span className="me-auto">DESC</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion" id="brand-filters">
                            <div className="accordion-item mb-4 pb-3">
                                <h5 className="accordion-header" id="accordion-heading-brand">
                                    <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-brand" aria-expanded="true" aria-controls="accordion-filter-brand">
                                        Group Order
                                        <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                            <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </h5>
                                <div id="accordion-filter-brand" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-brand" data-bs-parent="#brand-filters">
                                    <div class="search-field multi-select accordion-body px-0 pb-0">
                                        <select class="d-none" multiple name="total-numbers-list">
                                            <option value="1">A-F</option>
                                            <option value="2">G-L</option>
                                            <option value="3">M-R</option>
                                            <option value="4">S-X</option>
                                            <option value="5">Y-Z</option>
                                        </select>
                                        <div class="search-field__input-wrapper mb-3">
                                            <input type="text" class="search-field__input form-control form-control-sm border-light border-2" placeholder="Search" />
                                        </div>
                                        <ul class="multi-select__list list-unstyled">
                                            <li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span class="me-auto">A - F</span>
                                                <span class="text-secondary">2</span>
                                            </li>
                                            <li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span class="me-auto">G - L</span>
                                                <span class="text-secondary">7</span>
                                            </li>
                                            <li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span class="me-auto">M - R</span>
                                                <span class="text-secondary">10</span>
                                            </li>
                                            <li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span class="me-auto">S - X</span>
                                                <span class="text-secondary">39</span>
                                            </li>
                                            <li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span class="me-auto">Y - Z</span>
                                                <span class="text-secondary">95</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shop-list flex-grow-1">
				<div class="swiper-container js-swiper-slider slideshow slideshow_small"
					data-settings='{
						"autoplay": {
							"delay": 5000
						},
						"slidesPerView": 1,
						"effect": "fade",
						"loop": true,
						"pagination": {
							"el": ".slideshow-pagination",
							"type": "bullets",
							"clickable": true
						}
					}'>
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="overflow-hidden position-relative h-100" style="background-color: #eee;">
								<div class="slideshow-character position-absolute bottom-0 pos_right-center">
									<img loading="lazy" src="../images/home/demo4/slider1.png" width="246" height="450" alt="Woman Fashion 1" class="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto" />
									<div class="character_markup">
										<p class="font-special text-uppercase animate animate_fade animate_rtl animate_delay-10">Summer</p>
									</div>
								</div>
								<div class="slideshow-text container position-absolute start-50 top-50 translate-middle p-3 p-xl-5">
									<h6 class="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Irem Ison</h6>
									<h2 class="text-uppercase page-title fw-normal mb-0 animate animate_fade animate_btt animate_delay-5"> Irem Ison</h2>
									<h2 class="text-uppercase page-title fw-bold animate animate_fade animate_btt animate_delay-5">Course</h2>
									<a href="#" class="btn-link btn-link_lg text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Irem Ison</a>
								</div>
							</div>
						</div><!-- /.slideshow-item -->

						<div class="swiper-slide">
							<div class="overflow-hidden position-relative h-100" style="background-color: #eee;">
								<div class="slideshow-character position-absolute bottom-0 pos_right-center">
									<img loading="lazy" src="../images/slideshow-character2.png" width="261" height="450" alt="Woman Fashion 2" class="slideshow-character__img animate animate_fade animate_rtl animate_delay-10 w-auto h-auto" />
								</div>
								<div class="slideshow-text container position-absolute start-50 top-50 translate-middle p-3 p-xl-5">
									<h6 class="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Summer 2020</h6>
									<h2 class="text-uppercase page-title fw-bold animate animate_fade animate_btt animate_delay-3">Hello New Irem Ison</h2>
									<h6 class="text-uppercase mb-3 animate animate_fade animate_btt animate_delay-3">Irem Ison</h6>
									<a href="#" class="btn-link btn-link_lg text-uppercase fw-medium animate animate_fade animate_btt animate_delay-3">Discover More</a>
								</div>
							</div>
						</div><!-- /.slideshow-item -->
					</div><!-- /.slideshow-wrapper js-swiper-slider -->

					<div class="p-3 p-xl-5">
						<div class="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-4"></div>
						<!-- /.products-pagination -->
					</div><!-- /.container -->
				</div><!-- /.slideshow -->

				<div class="mb-3 pb-2 pb-xl-3"></div>

				<div class="d-flex justify-content-between mb-0 pb-md-0">
					<div class="breadcrumb mb-0 d-none d-md-block flex-grow-1">
						<a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" >Home</a>
						<span class="breadcrumb-separator menu-link fw-medium ps-1 pe-1">/</span>
						<a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" >Othm courses</a>
					</div><!-- /.breadcrumb -->

					<div class="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
						
						<div class="col-size align-items-center order-1 d-none d-lg-flex">
							<span class="text-uppercase fw-medium me-2">More About OTHM</span>
						</div><!-- /.col-size -->

					</div><!-- /.shop-acs -->
				</div><!-- /.d-flex justify-content-between -->
                <div class="product-single__details-tab">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link nav-link_underscore active" id="tab-level1-tab" data-bs-toggle="tab" href="#tab-level1" role="tab" aria-controls="tab-level1" aria-selected="true">Level 4</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link nav-link_underscore" id="tab-level2-info-tab" data-bs-toggle="tab" href="#tab-level2-info" role="tab" aria-controls="tab-level2-info" aria-selected="false">Level 5</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link nav-link_underscore" id="tab-level3-tab" data-bs-toggle="tab" href="#tab-level3" role="tab" aria-controls="tab-reviews" aria-selected="false">Level 6</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link nav-link_underscore" id="tab-level4-tab" data-bs-toggle="tab" href="#tab-level4" role="tab" aria-controls="tab-reviews" aria-selected="false">Level 7</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tab-level1" role="tabpanel" aria-labelledby="tab-level1-tab">
                            <div class="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div class="product-card-wrapper">
                                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        </div>
                                        
                                        <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div class="pc-labels__right ms-auto">
                                                <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.products-grid row -->
            
                            <nav class="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" class=" d-inline-flex align-items-center">
                                    <svg class="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span class="fw-medium">PREV</span>
                                </a>
                                <ul class="pagination mb-0">
                                    <li class="page-item"><a class=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">2</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">3</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" class=" d-inline-flex align-items-center">
                                    <span class="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                        <div class="tab-pane fade" id="tab-level2-info" role="tabpanel" aria-labelledby="tab-level2-info-tab">
                            <div class="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div class="product-card-wrapper">
                                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        </div>
                                        
                                        <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div class="pc-labels__right ms-auto">
                                                <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.products-grid row -->
            
                            <nav class="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" class=" d-inline-flex align-items-center">
                                    <svg class="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span class="fw-medium">PREV</span>
                                </a>
                                <ul class="pagination mb-0">
                                    <li class="page-item"><a class=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">2</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">3</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" class=" d-inline-flex align-items-center">
                                    <span class="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                        <div class="tab-pane fade" id="tab-level3" role="tabpanel" aria-labelledby="tab-level3-tab">
                            <div class="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div class="product-card-wrapper">
                                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
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
                                        </div>
                                        
                                        <div class="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div class="pc-labels__right ms-auto">
                                                <span class="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.products-grid row -->
            
                            <nav class="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" class=" d-inline-flex align-items-center">
                                    <svg class="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span class="fw-medium">PREV</span>
                                </a>
                                <ul class="pagination mb-0">
                                    <li class="page-item"><a class=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">2</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">3</a></li>
                                    <li class="page-item"><a class=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" class=" d-inline-flex align-items-center">
                                    <span class="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                        <div class="tab-pane fade" id="tab-level4" role="tabpanel" aria-labelledby="tab-level4-tab">
                            <div class="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div class="product-card-wrapper">
                                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div class="pc__img-wrapper" style="border: 2px solid #eee;">
                                            <div class="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                    <div class="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                                    </div><!-- /.pc__img-wrapper -->
                                                </div>
                                                <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                            <a class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div class="pc__info position-relative">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div class="col">
                                                    <a href="../demo/cart.html" style="color: #A32926;" class="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/>
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                           
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img" />
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" class="pc__img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <svg className="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span className="fw-medium">PREV</span>
                                </a>
                                <ul className="pagination mb-0">
                                    <li className="page-item"><a class=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li className="page-item"><a class=" px-1 mx-2" href="#">2</a></li>
                                    <li className="page-item"><a class=" px-1 mx-2" href="#">3</a></li>
                                    <li className="page-item"><a class=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <span className="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
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

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
