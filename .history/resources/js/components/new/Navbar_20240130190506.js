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
                        <a href="index.html">
                            <img src="assets/img/logo.svg" alt="Edura"/>
                        </a>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children">
                                        <a href="#">Multipage</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="index.html">Home University</a>
                                            </li>
                                            <li><a href="home-2.html">Home Online Education</a></li>
                                            <li><a href="home-3.html">Home University Admission</a></li>
                                            <li><a href="home-4.html">Home Digital Education</a></li>
                                            <li><a href="home-5.html">Home Academy <span className="new-label">New</span></a></li>
                                            <li><a href="home-6.html">Home Online Training <span className="new-label">New</span></a></li>
                                            <li><a href="home-7.html">Home Online Mentors <span className="new-label">New</span></a></li>
                                            <li><a href="home-8.html">Home Online Courses <span className="new-label">New</span></a></li>
                                            <li><a href="home-9.html">Home Kindergarten <span className="new-label">New</span></a></li>
                                            <li><a href="home-10.html">Home University <span className="new-label">New</span></a></li>
                                            <li><a href="home-11.html">Online Education <span className="new-label">New</span></a></li>
                                            <li><a href="home-12.html">Online Instructor <span className="new-label">New</span></a></li>
                                            <li><a href="home-13.html">Skill Development <span className="new-label">New</span></a></li>
                                            <li><a href="home-14.html">Home Trainer <span className="new-label">New</span></a></li>
                                            <li><a href="home-15.html">Home Admission <span className="new-label">New</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Onepage</a>
                                        <ul className="sub-menu">
                                            <li><a href="home1-onepage.html">University Onepage</a></li>
                                            <li><a href="home2-onepage.html">Online Education Onepage</a></li>
                                            <li><a href="home3-onepage.html">University Admission Onepage</a></li>
                                            <li><a href="home4-onepage.html">Digital Education Onepage</a></li>
                                            <li><a href="home5-onepage.html">Academy Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home6-onepage.html">Online Training Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home7-onepage.html">Online Mentors Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home8-onepage.html">Online Courses Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home9-onepage.html">Kindergarten Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home10-onepage.html">University Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home11-onepage.html">Online Education Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home12-onepage.html">Online Instructor Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home13-onepage.html">Skill Development Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home14-onepage.html">Trainer Onepage <span className="new-label">New</span></a></li>
                                            <li><a href="home15-onepage.html">Admission Onepage <span className="new-label">New</span></a></li>
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
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="event.html">Events</a></li>
                                    <li><a href="event-details.html">Event Details</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="error.html">Error Page</a></li>
                                </ul>
                            </li><li className="menu-item-has-children"><a href="#">Blog</a><ul className="sub-menu"><li><a href="blog.html">Blog</a></li><li><a href="blog-details.html">Blog Details</a></li></ul></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div> 

            <header class="th-header header-layout1">
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
            </header>
        </div>
    );
}

