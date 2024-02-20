import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';

export default function Navbar() {
    let url = ` ${window.location.origin}`;
   
 
     const handleTestimonials = ()=>{
         window.location.href = ` ${url}/testimonials`
     }
 
     const handleAboutus = (e)=>{
         e.preventDefault(); 
         window.location.href =`${url}/about-us`
    }
    const handleStudy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/studyabroad`
    }
    const handleHowtoAppy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/howtoApply`
    }
    const handleContact = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/contactus`
    }
    const handleOthm = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/othmcourses`
    }
    const handleLgca = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/lgca`
    }
    const handleCart= (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/cart`
    }
    return ( 
        <div>
            <div className="preloader">
                <button className="th-btn style3 preloaderCls">Cancel Preloader</button>
                <div className="preloader-inner"><span className="loader"></span></div>
            </div>
            <div className="sidemenu-wrapper d-none d-lg-block">
                <div className="sidemenu-content">
                    <button className="closeButton sideMenuCls">
                        <i className="far fa-times"></i></button><div className="widget woocommerce widget_shopping_cart">
                            <h3 className="widget_title">Shopping cart</h3><div className="widget_shopping_cart_content">
                                <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a href="#" className="remove remove_from_cart_button">
                                        <i className="far fa-times"></i>
                                    </a> 
                                    <a href="#">
                                    <img src="assets/img/product/product_thumb_1_1.jpg" alt="Cart Image"/>Plastic Book Bags</a> 
                                    <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>940.00</span></span>
                                </li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#" className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_2.jpg" alt="Cart Image"/>The Genie Mind</a> <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>899.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#" className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_3.jpg" alt="Cart Image"/>The Energy Book</a> <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>756.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#" className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_4.jpg" alt="Cart Image"/>Pencil Bag</a> <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>723.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#" className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_5.jpg" alt="Cart Image"/>Sharpner</a> <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>1080.00</span></span></li>
                            </ul>
                            <p className="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>4398.00</span></p>
                            <p className="woocommerce-mini-cart__buttons buttons"><a href="cart.html" className="th-btn wc-forward">View cart</a> <a href="checkout.html" className="th-btn checkout wc-forward">Checkout</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-search-box d-none d-lg-block">
                <button className="searchClose"><i className="fal fa-times"></i></button>
                <form action="#">
                    <input type="text" placeholder="What are you looking for?"/> 
                    <button type="submit">
                    <i className="fal fa-search"></i></button>
                </form>
            </div>
            <div className="th-menu-wrapper">
                <div className="th-menu-area text-center"><button className="th-menu-toggle"><i className="fal fa-times"></i></button>
                    <div className="mobile-logo">
                        <a href="">
                            <img src="assets/img/logo.svg" alt="Edura"/>
                        </a>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children">
                                        <a href="#">Multipage</a>
                                        <ul className="sub-menu">
                                            <li><a href="home-2.html">Home Online Education</a></li>
                                            <li><a href="home-3.html">Home University Admission</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Onepage</a>
                                        <ul className="sub-menu">
                                            <li><a href="home1-onepage.html">University Onepage</a></li>
                                            <li><a href="home2-onepage.html">Online Education Onepage</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">RTL</a>
                                        <ul className="sub-menu">
                                            <li><a href="home1-rtl.html">University RTL</a></li>
                                            <li><a href="home2-rtl.html">Online Education RTL</a></li>
                                            <li><a href="home3-rtl.html">University Admission RTL</a></li>
                                            <li><a href="home4-rtl.html">Digital Education RTL</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Courses</a>
                                <ul className="sub-menu">
                                    <li><a href="course.html">Courses With Sidebar</a></li>
                                    <li><a href="course-2.html">Courses Without Sidebar</a></li>
                                    <li><a href="course-3.html">Courses Videos</a></li>
                                    <li><a href="course-details.html">Course Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Teachers</a>
                                <ul className="sub-menu">
                                    <li><a href="team.html">Instructors</a></li>
                                    <li><a href="team-details.html">Instructors Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">Blog</a><ul className="sub-menu"><li><a href="blog.html">Blog</a></li><li><a href="blog-details.html">Blog Details</a></li></ul></li>
                            <li><a onClick={(e)=>handleLinks(e)}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div> 

            <header className="th-header header-layout1">
                <div class="header-top">
                    <div class="container">
                        <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                            <div class="col-auto d-none d-lg-block">
                                <div class="header-links">
                                    <ul>
                                        <li><i class="far fa-phone"></i><a href="tel:+11156456825">+111 (564) 568 25</a></li>
                                        <li class="d-none d-xl-inline-block"><i class="far fa-envelope"></i><a href="mailto:info@Edura.com">info@edura.com</a></li>
                                        <li><i class="far fa-clock"></i>Mon - Sat: 8:00 - 15:00</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-auto">
                                <div class="header-links header-right">
                                    <ul>
                                        <li>
                                            <div class="header-social"><span class="social-title">Follow Us:</span> <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a> <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a> <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a> <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a> <a href="https://www.instagram.com/"><i class="fab fa-skype"></i></a>
                                            </div>
                                        </li>
                                        <li class="d-none d-lg-inline-block"><i class="far fa-user"></i><a href="contact.html">Login / Register</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="sticky-wrapper">
                    <div class="menu-area">
                        <div class="container">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-auto">
                                    <div class="header-logo">
                                        <a href=""><img width="70" height="10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="TMC Institute"/></a>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="row">
                                        <div class="col-auto">
                                            <nav class="main-menu d-none d-lg-inline-block">
                                                <ul>
                                                    <li class="menu-item-has-children">
                                                        <a href="">Home</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item-has-children">
                                                                <a href="#">Academic</a>
                                                                <ul class="sub-menu">
                                                                    <li><a href="">Diploma & Certificate</a></li>
                                                                    <li><a href="">Bachelors</a></li>
                                                                    <li><a href="">Masters</a></li>
                                                                    <li><a href="">Doctorate</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item-has-children">
                                                                <a href="#">Professional</a>
                                                                <ul class="sub-menu">
                                                                    <li><a href="">LGCA</a></li>
                                                                    <li><a href="">OTHM </a></li>
                                                                    <li><a href="">GRC & Fincrime</a></li>
                                                                    <li><a href=''>Project Management</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="">Study Abroad</a></li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">About us</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="course.html">Mission</a></li>
                                                            <li><a href="course-2.html">Our Team</a></li>
                                                            <li><a href="course-3.html">Recognition</a></li>
                                                            <li><a href="course-details.html">Our Partiners</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="">How to Apply</a></li>

                                                    <li><a onClick={(e)=>handleLinks(e)}>Contact</a></li>
                                                </ul>
                                            </nav>
                                            <button type="button" class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>
                                        </div>
                                        <div class="col-auto d-none d-xl-block">
                                            <div class="header-button">
                                                <button type="button" class="icon-btn searchBoxToggler"><i class="far fa-search"></i></button> 
                                                <a href="wishlist.html" class="icon-btn"><i class="far fa-heart"></i> <span class="badge">3</span> </a>
                                                <button type="button" class="icon-btn sideMenuToggler"><i class="far fa-shopping-cart"></i> <span class="badge">5</span></button> 
                                                <a href="contact.html" class="th-btn ml-25">Contact Us <i class="fas fa-arrow-right ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </header>
        </div>
    );
}

