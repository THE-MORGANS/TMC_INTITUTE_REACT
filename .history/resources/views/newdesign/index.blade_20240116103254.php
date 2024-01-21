@extends('newdesign.layout.newindex')
@section('content')
<div id="newdash">
   
    @extends('newdesign.layout.header')
        <!------------ End Header Type 2 ------------>
        <main class="bg-grey-faf9f8">
            <section class="swiper-container js-swiper-slider slideshow full-width_padding-0 slideshow-md"
        
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
                <style>
                    .slideshow-bg {
                    position: relative;
                    width: 1863px; /* Adjust based on your image width */
                    height: 700px; /* Adjust based on your image height */
                    }
                    
                    .slideshow-bg::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(36, 16, 16, 0.5); /* Adjust the color and transparency as needed */
                    z-index: 1;
                    }
                    .slideshow-text {
                    color: white;
                    }
                    
                    
                </style>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                    <div class="overflow-hidden position-relative h-100">
                        <div class="slideshow-bg">
                        <img loading="lazy" src="../images/home/demo9/slider1.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right">
                        </div>
                        <!-- <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center" style="z-index: 2;">
                        <h5 class="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white" style="z-index: 2;">Never Stop Learning</h5>
                        <h2 class="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5 text-white" style="z-index: 2;">TMC INSTITUTE</h2>
                        <p class="animate animate_fade animate_btt animate_delay-6 text-white" style="z-index: 2;">We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance,<br> Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.</p>
                        <a href="#" class="btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy Now</a>
                        </div> -->
                        <!-- <div class="col-lg-6"> -->
                        <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
                        
                        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>
                        <h2 style="color:#37226C; z-index: 2;" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                            TMC INSTITUTE
                        </h2>
                            <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                            </p>
                            <form action="" method="GET" class=" header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
                            <div class="hover-container position-relative">
                                <div class="js-hover__open">
                                <input class="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly="">
                                </div>
                                <div class="header-search__category-list js-hidden-content mt-2">
                                <ul class="search-suggestion list-unstyled">
                                    <li class="search-suggestion__item js-search-select">Courses</li>
                                    <li class="search-suggestion__item js-search-select">Computer Science</li>
                                    <li class="search-suggestion__item js-search-select">SLT</li>
                                    <li class="search-suggestion__item js-search-select">Mass comm</li>
                                </ul>
                                </div>
                            </div>
                            <input class="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses...">
            
                            <button class="btn btn-primary header-search__btn d-flex"  type="submit">
                                <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  <p class=" pt-1 p-1">Search</p> 
                            </button>
                            </form>
                        </div>
            
                    </div>
                    </div>
                    
                    <!-- /.slideshow-item -->
                    <div class="swiper-slide">
                    <div class="overflow-hidden position-relative h-100">
                        <div class="slideshow-bg">
                        <img loading="lazy" src="../images/home/demo9/slider2.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right">
                        </div>
                        <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
                        
                        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>
            
                        <h2 style="color:#37226C" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                            TMC INSTITUTE
                        </h2>
                            <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                            </p>
                            <form action="" method="GET" class="header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
                            <div class="hover-container position-relative">
                                <div class="js-hover__open">
                                <input class="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly="">
                                </div>
                                <div class="header-search__category-list js-hidden-content mt-2">
                                <ul class="search-suggestion list-unstyled">
                                    <li class="search-suggestion__item js-search-select">Courses</li>
                                    <li class="search-suggestion__item js-search-select">Computer Science</li>
                                    <li class="search-suggestion__item js-search-select">SLT</li>
                                    <li class="search-suggestion__item js-search-select">Mass comm</li>
                                </ul>
                                </div>
                            </div>
                            <input class="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses...">
            
                            <button class="btn btn-primary header-search__btn d-flex"  type="submit">
                                <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  <p class=" pt-1 p-1">Search</p> 
                            </button>
                            </form>
                        </div>
                    </div>
                    </div>
                    <!-- /.slideshow-item -->
                    <div class="swiper-slide">
                    <div class="overflow-hidden position-relative h-100">
                        <div class="slideshow-bg">
                        <img loading="lazy" src="../images/home/demo9/slider3.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right">
                        </div>
                        <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
                        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>
            
                        <h2 style="color:#37226C" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                            TMC INSTITUTE
                        </h2>
                            <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                            </p>
                            <form action="" method="GET" class="header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
                            <div class="hover-container position-relative">
                                <div class="js-hover__open">
                                <input class="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly="">
                                </div>
                                <div class="header-search__category-list js-hidden-content mt-2">
                                <ul class="search-suggestion list-unstyled">
                                    <li class="search-suggestion__item js-search-select">Courses</li>
                                    <li class="search-suggestion__item js-search-select">Computer Science</li>
                                    <li class="search-suggestion__item js-search-select">SLT</li>
                                    <li class="search-suggestion__item js-search-select">Mass comm</li>
                                </ul>
                                </div>
                            </div>
                            <input class="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses...">
            
                            <button class="btn btn-primary header-search__btn d-flex"  type="submit">
                                <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  <p class=" pt-1 p-1">Search</p> 
                            </button>
                            </form>
                        </div>
                    </div>
                    </div><!-- /.slideshow-item -->
                    <div class="swiper-slide">
                    <div class="overflow-hidden position-relative h-100">
                        <div class="slideshow-bg">
                        <img loading="lazy" src="../images/home/demo9/slider4.jpg" width="1863" height="700" alt="" class="slideshow-bg__img object-fit-cover object-position-right">
                        </div>
                        <div class="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style="z-index: 2;">
                        <h4 class="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style="font-weight: 500px; color:#A32926; z-index: 2;"> Never Stop Learning</h4>
            
                        <h2 style="color:#37226C" class="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                            TMC INSTITUTE
                        </h2>
                            <p class="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                            </p>
                            <form action="" method="GET" class="header-search search-field bg-body" style="border: 2px solid #A32926; border-radius: 10px;">
                            <div class="hover-container position-relative">
                                <div class="js-hover__open">
                                <input class="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly="">
                                </div>
                                <div class="header-search__category-list js-hidden-content mt-2">
                                <ul class="search-suggestion list-unstyled">
                                    <li class="search-suggestion__item js-search-select">Courses</li>
                                    <li class="search-suggestion__item js-search-select">Computer Science</li>
                                    <li class="search-suggestion__item js-search-select">SLT</li>
                                    <li class="search-suggestion__item js-search-select">Mass comm</li>
                                </ul>
                                </div>
                            </div>
                            <input class="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses...">
            
                            <button class="btn btn-primary header-search__btn d-flex"  type="submit">
                                <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  <p class=" pt-1 p-1">Search</p> 
                            </button>
                            </form>
                        </div>
                    </div>
                    </div><!-- /.slideshow-item -->
                </div><!-- /.slideshow-wrapper js-swiper-slider -->
            
                <div class="slideshow-pagination position-left-center"></div>
                <!-- /.products-pagination -->
            </section>
            <!-- /.slideshow -->
       
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
      
          <section class="grid-banner container">
            <div class="row">
              <h2 style="color: #37226C; " class="section-title text-center fw-normal mb-1 mb-md-1 pb-xl-1 mb-xl-4">
                High quality video, audio & popular classes
              </h2>
              <p   class="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3" >
                TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow
                 every year, capitalizing on our in-depth knowledge of the needs of organizations and financial institutions.
              </p>
            </div>
            <style>
              .no-border {
                border-color: transparent;
              }
            </style>
            <div class="row">
              <div class="col-md-12">
                <div class="grid-banner__item position-relative">
                  <img loading="lazy" class="w-100 h-auto" src="../images/home/home-1.png"  width="1060" height="550" alt="" />
                 
                </div>
                <div class="pb-4 pt-1"></div>
              </div><!-- /.col-md-6 -->
              <div class="col-md-4 d-flex align-items-center" >
                <a href="#" class="btn btn-primary mb-xl-4 bg-white no-border" style="border-radius: 10px; ">
                  <img loading="lazy"  src="../images/home/audio.png" width="40" height="40" alt="">
                  <span class="ml-2 h4 " >Audio Classes</span>
                </a>
              </div>
              <div class="col-md-4 d-flex align-items-center" >
                <a href="#" class="btn btn-primary mb-xl-4 bg-white no-border" style="border-radius: 10px; ">
                  <img loading="lazy"  src="../images/home/live.png" width="40" height="40" alt="">
                  <span class="ml-2 h4 " >Live Classes</span>
                </a>
              </div>
              <div class="col-md-4 d-flex align-items-center" >
                <a href="#" class="btn btn-primary mb-xl-4 bg-white no-border" style="border-radius: 10px; ">
                  <img loading="lazy"  src="../images/home/record.png" width="40" height="40" alt="">
                  <span class="ml-2 h4 " >Recorded Classes</span>
                </a>
              </div>
            </div><!-- /.row -->
          </section>
      
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
      
          <section class="products-carousel container">
            <h2 style="color: #37226C; " class="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">Courses Categories</h2>
            <p   class="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3">
              We are the leading and specialist provider of specialized corporate training including Governance, Risk & Compliance, Financial Crime, and Leadership training focused on cultivating the right attitude and skills in your teams.
            </p>
            <ul class="nav nav-tabs mb-3 mb-xl-5 text-uppercase justify-content-center" id="collections-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link nav-link_underscore active" id="collections-tab-1-trigger" data-bs-toggle="tab" href="#collections-tab-1" role="tab" aria-controls="collections-tab-1" aria-selected="true">First Level</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link nav-link_underscore" id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true">Second Level</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link nav-link_underscore" id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true">Third Level</a>
              </li>
            </ul>
      
            <div class="tab-content pt-2 container" id="collections-tab-content">
              <div class="tab-pane fade show active" id="collections-tab-1" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
                <div class="row ">
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-1.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard One</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 1 is a foundation Standard that reflects 7 important concepts...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-2.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Two</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 2 builds on the foundations of Standard 1 and includes requirements...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-3.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Three</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-4.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Four</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 4 of the Aged Care Quality Standards focuses on services and supports...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-5.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Five</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 5 Learning Resources. Learning Resources ensure that the school has the...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-6.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Six</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 6 requires an organisation to have a system to resolve complaints...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-7.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Seven</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 7 Blood Management mandates that leaders of health service organisations...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-8.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard Eight</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 8 Course from NCERT Solutions help students to understand...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
       
                      </div>
                    </div>
                  </div>
      
      
                </div><!-- /.row -->
                <div class="text-center mt-2">
                  <!-- <a class="btn-link btn-link_lg default-underline text-uppercase fw-medium" href="#">See All Products</a> -->
                  <a  href="./courses.html" class="mt-xl-4 mb-xl-4 btn btn-primary" style="border-radius: 10px;">View More Courses</a>
                </div>
              </div><!-- /.tab-pane fade show-->
      
              <div class="tab-pane fade show " id="collections-tab-2" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
                <div class="row ">
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-1.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard One</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 1 is a foundation Standard that reflects 7 important concepts...
                        </a>
                        </h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">Class Details</a>
                      </div>
                    </div>
                  </div>
                </div><!-- /.row -->
      
                <div class="text-center mt-2">
                   <a  href="./courses.html" class="mt-xl-4 mb-xl-4 btn btn-primary" style="border-radius: 10px;">View More Courses</a>
                </div>
              </div><!-- /.tab-pane fade show-->
      
              <div class="tab-pane fade show " id="collections-tab-3" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
                <div class="row ">
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div class="mb-xl-2 mt-xl-4" >
                        <center>
                          <img src="../images/home/standard-1.png"  alt="">
                        </center>
                        
                      </div>
                      <div class="pc__info position-relative text-center ">
                        <p class="pc__category text-center" style="color: #37226C;">Standard One</p>
                        <h6 class="pc__title text-center mb-2"><a href="">
                          Standard 1 is a foundation Standard that reflects 7 important concepts...
                        </a></h6>
                        <a  href="#" class="mt-xl-4 mb-xl-4 btn btn-outline-primary" style="border-radius: 10px;">View More Courses</a>
       
                      </div>
                    </div>
                  </div>
      
                </div>
                <!-- /.row -->
                
                <div class="text-center mt-2">
                  <a  href="./courses.html" class="mt-xl-4 mb-xl-4 btn btn-primary" style="border-radius: 10px;">View More Courses</a>
               </div>
              </div><!-- /.tab-pane fade show-->
      
            </div><!-- /.tab-content pt-2 -->
          </section><!-- /.products-grid -->
      
          <div class="mb-1 pb-4 mb-xl-4 pb-xl-4"></div>
      
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
      
          <section class="contact-us container" style="background-color:  #EDE9F2; border-radius:20px">
            <!-- <section class="contact-us container"> -->
              <!-- mw-930" -->
              <div class="p-4">
                <div class="row mb-5">
                  <div class="col-lg-4">
                    <p class="mb-4">College Level</p>
                    <h2 style=" font-weight:900" class="section-title text-left ">Don’t waste time in COVID-19 pandemic. Develop your skills.</h2>
                    
                    <p class="mb-4">
                      High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized
                      meaning for high-definition, generally any video.
                    </p>
                    <div class="text-left mt-2">
                      <a href="#" class="btn btn-primary js-open-aside mb-xl-4 " style=" border-radius: 10px;" >Register Now</a>
      
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <img src="../images/home/colleage-level.jpg" class="w-80 h-auto d-block" >
                    
                  </div>
                </div>
                
              </div>
            </section>
      
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
      
          <section class="testimonials bg-white">
            <div class="container">
              <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
              <h2 class="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">Testimonials</h2>
      
              <div class="position-relative">
                <div class="swiper-container js-swiper-slider"
                  data-settings='{
                    "autoplay": {
                      "delay": 5000
                    },
                    "slidesPerView": 1,
                    "slidesPerGroup": 1,
                    "effect": "none",
                    "loop": true,
                    "pagination": {
                      "el": ".testimonial-pagination",
                      "type": "bullets",
                      "clickable": true
                    },
                    "navigation": {
                      "nextEl": ".testimonial-carousel__next",
                      "prevEl": ".testimonial-carousel__prev"
                    }
                  }'>
                  <div class="swiper-wrapper testimonials__wrapper">
                    <div class="swiper-slide testimonials__item mb-4 text-center">
                      <div class="w-740 mx-auto">
                        <h5 class="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                        <p class="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                        <div class="border-circle overflow-hidden w-100px h-100px mx-auto">
                          <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide testimonials__item mb-4 text-center">
                      <div class="w-740 mx-auto">
                        <h5 class="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                        <p class="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                        <div class="border-circle overflow-hidden w-100px h-100px mx-auto">
                          <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide testimonials__item mb-4 text-center">
                      <div class="w-740 mx-auto">
                        <h5 class="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                        <p class="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                        <div class="border-circle overflow-hidden w-100px h-100px mx-auto">
                          <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide testimonials__item mb-4 text-center">
                      <div class="w-740 mx-auto">
                        <h5 class="fw-normal lh-2rem mb-4">“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “</h5>
                        <p class="text-secondary mb-3">Helena Gibbson, 06 April 2023</p>
                        <div class="border-circle overflow-hidden w-100px h-100px mx-auto">
                          <img loading="lazy" src="../images/home/demo4/testimonial_avatar.png" width="100" height="100" alt="" />
                        </div>
                      </div>
                    </div>
                  </div><!-- /.swiper-wrapper -->
                </div><!-- /.swiper-container js-swiper-slider -->
      
                <div class="products-carousel__prev testimonial-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_md" /></svg>
                </div><!-- /.products-carousel__prev -->
                <div class="products-carousel__next testimonial-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_md" /></svg>
                </div><!-- /.products-carousel__next -->
            
                <div class="testimonial-pagination type2 mt-4 d-flex align-items-center justify-content-center"></div>
                <!-- /.products-pagination -->
              </div><!-- /.position-relative -->
      
              <div class="mt-1 pt-4 mt-xl-5 pt-xl-5"></div>
            </div>
          </section>
      
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
      
           <section class="contact-us container" >
            <!-- <section class="contact-us container"> -->
              <!-- mw-930" -->
              <div class="p-4">
                <div class="row mb-5">
                  <div class="col-lg-6">
                    <img src="../images/home/study-abroad.png" class="w-80 h-auto d-block" >
                    
                  </div>
                  <div class="col-lg-6  justify-content-between">
                    <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                    <h2 style=" font-weight:900; color:#37226C" class="section-title text-left mb-4 mb-xl-5">
                      Stydy Abroad Part
                    </h2>
                    
                    <p class="mb-4 mb-xl-5">
                      High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.
                    </p>
                    <div class="text-left mt-2">
                      <a href="#" class="btn btn-primary js-open-aside mb-xl-4 " style=" border-radius: 10px;" >Career Information</a>
      
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </section>
            <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
      
            <section class="contact-us container" style="background-color:  #37226C; border-radius:20px; padding:10px">
              <!-- <section class="contact-us container"> -->
                <!-- mw-930" -->
                <div class="p-3 text-center">
                  <div class="row mb-5">
                    <div class="col-xl-4  d-none d-lg-block">
                      <img src="../images/home/sub-1.png" class="w-50 h-auto d-block mt-xl-5" >
                      
                    </div>
                    <div class=" col-xl-4">
                      <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                      <h2 style=" font-weight:900; color:#fff" class="section-title text-left mb-4 mb-xl-3">
                        Subcribe to Get Update For Every New Courses
                      </h2>
                      
                      <p class="mb-4 mb-xl-5 text-color" style=" color:#fff">
                        20k+ students daily learn with TMC Institute. Subscribe for new courses.
                      </p>
                      <div class="text-left mt-2">
                        <form action="" class="footer-newsletter__form position-relative bg-body">
                          <input class="form-control border-white" type="email" name="email" placeholder="Enter your email" style="background-image: url(&quot;data:image/png;base64,) 
                          !important; background-repeat: no-repeat; background-size: 70px; background-position: 97% center; cursor: auto;" data-temp-mail-org="1">
                          <input class="btn btn-link  fw-medium text-white position-absolute top-0 end-0 h-100 " type="submit" value="Subcribe">
                        </form>
        
                      </div>
                    </div>
                    <div class="col-xl-4  d-none d-lg-block">
                      <img src="../images/home/sub-2.png" class="w-50 h-auto d-block mt-xl-5" >
                      
                    </div>
                    
                  </div>
                  
                </div>
            </section>
      
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        </main>
       
   <!-------------- Footer Type 1 with Top block -------------->
  <footer class="footer footer_type_1">
    
    <div class="footer-middle container">
      <div class="row row-cols-lg-5 row-cols-2">
        <div class="footer-column footer-store-info col-12 mb-4 mb-lg-0">
          <div class="logo">
            <a href="https://uomo-html.flexkitux.com/">
              <img src="../images/logo.png" alt="Uomo" class="logo__image d-block" />
            </a>
          </div><!-- /.logo -->
          <ul class="social-links list-unstyled d-flex flex-wrap mb-0">
            <li>
              <a href="https://facebook.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
              </a>
            </li>
          </ul>
          <p class="footer-address">
            TMC Institute is a registered<br> trademark of TMC
          </p>

          

         
        </div><!-- /.footer-column -->

        <div class="footer-column footer-menu mb-4 mb-lg-0">
          <h6 class="sub-menu__title text-uppercase">courses</h6>
          <ul class="sub-menu__list list-unstyled">
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Cooperate governance</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Financial crime prevention</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Insurance courses</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Risk management</a></li>
          </ul>
        </div><!-- /.footer-column -->

        <div class="footer-column footer-menu mb-4 mb-lg-0">
          <h6 class="sub-menu__title text-uppercase">Community</h6>
          <ul class="sub-menu__list list-unstyled">
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Learners</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Parteners</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Developers</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Transactions</a></li>
          </ul>
        </div><!-- /.footer-column -->

        <div class="footer-column footer-menu mb-4 mb-lg-0">
          <h6 class="sub-menu__title text-uppercase">Quick Links</h6>
          <ul class="sub-menu__list list-unstyled">
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">TMC</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">SNATIKA</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">LGCA</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Admissions</a></li>
          </ul>
        </div><!-- /.footer-column -->

        <div class="footer-column footer-menu mb-4 mb-lg-0">
          <h6 class="sub-menu__title text-uppercase">More</h6>
          <ul class="sub-menu__list list-unstyled">
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Press</a></li>
            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Investors</a></li>
            <li class="sub-menu__item"><a href="terms.html" class="menu-link menu-link_us-s">Terms</a></li>
            <li class="sub-menu__item"><a href="privacy.html" class="menu-link menu-link_us-s">Privacy</a></li>
          </ul>
        </div>

      </div><!-- /.row-cols-5 -->
    </div><!-- /.footer-middle container -->

    <div class="footer-bottom container">
      <div class="d-block d-md-flex align-items-center">
        <span class="footer-copyright me-auto">©2023 TMC Institute</span>
        
      </div><!-- /.d-flex -->
    </div><!-- /.footer-bottom container -->
  </footer>

  <!-------------- Mobile Fixed Footer -------------->
  <footer class="footer-mobile container w-100 px-5 d-md-none bg-body">
    <div class="row text-center">
      <div class="col-4">
        <a href="./index.html" class="footer-mobile__link d-flex flex-column align-items-center">
          <svg class="d-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_home" /></svg>
          <span>Home</span>
        </a>
      </div><!-- /.col-3 -->

      <div class="col-4">
        <a href="./courses.html" class="footer-mobile__link d-flex flex-column align-items-center">
          
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path><path d="M8 6h9v2H8z"></path></svg>
          <span>Cosurses</span>
        </a>
      </div><!-- /.col-3 -->

      <div class="col-4">
        <a href="/" class="footer-mobile__link d-flex flex-column align-items-center">
          <div class="position-relative">
            <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
           
            <span class="wishlist-amount d-block position-absolute js-wishlist-count">3</span>
          </div>
          <span>Cart</span>
        </a>
      </div><!-- /.col-3 -->
    </div><!-- /.row -->
  </footer>
  <!-- /.footer-mobile container position-fixed d-md-none bottom-0 -->

     

</div>
@endsection
 