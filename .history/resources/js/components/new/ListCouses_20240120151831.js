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