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
                <div class="full-width_border border-2" style="border-color: #eee">
                    <div class="shop-banner position-relative ">
                        <div class="background-img" style="background-color: #eee;">
                            <img loading="lazy" style=" border-radius: 20px;" src="../images/home/colleage-level2.png" width="1759" height="420" alt="Pattern" class="slideshow-bg__img object-fit-cover" />
                        </div>
                    
                        <div class=" cols-lg-6">
                            <div class="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                                <div class="breadcrumb mb-0  flex-grow-1">
                                    <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" >Home</a>
                                    <span class="breadcrumb-separator menu-link fw-medium ps-1 pe-1">|</span>
                                    <a href="#" class="menu-link menu-link_us-s text-uppercase fw-medium" style="color: #A32926;">Courses</a>
                                </div>
                                <h2 class="text-uppercase fw-bold " style="color:#0A033C">TMC Institute Courses<br> For All Standards</h2>
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