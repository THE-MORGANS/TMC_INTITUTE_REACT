// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ListCouses() {
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
                                            <a href="./coursedetails.html"><img loading="lazy" src="../images/courses/course-1.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                        </div><!-- /.pc__img-wrapper -->
                                        <div class="swiper-slide">
                                            <a href="./coursedetails.html"><img loading="lazy" src="../images/courses/course-1.png" width="258" height="313" alt="Cropped Faux leather Jacket" class="pc__img"></a>
                                        </div><!-- /.pc__img-wrapper -->
                                    </div>
                                    <span class="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                    <span class="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                </div>
								<!-- <a class="pc__atc btn anim_appear-bottom fw-medium text-uppercase">Add To Cart</a> -->
                                <a href="./cart.html" class="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
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