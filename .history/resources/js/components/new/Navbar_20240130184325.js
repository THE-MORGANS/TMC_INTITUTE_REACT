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
            <div class="preloader">
        <button class="th-btn style3 preloaderCls">Cancel Preloader</button>
        <div class="preloader-inner"><span class="loader"></span></div>
    </div>
    <div class="sidemenu-wrapper d-none d-lg-block">
        <div class="sidemenu-content">
            <button class="closeButton sideMenuCls">
                <i class="far fa-times"></i></button><div class="widget woocommerce widget_shopping_cart">
                    <h3 class="widget_title">Shopping cart</h3><div class="widget_shopping_cart_content">
                        <ul class="woocommerce-mini-cart cart_list product_list_widget">
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                            <a href="#" class="remove remove_from_cart_button">
                                <i class="far fa-times"></i>
                            </a> 
                            <a href="#">
                            <img src="assets/img/product/product_thumb_1_1.jpg" alt="Cart Image">Plastic Book Bags</a> 
                            <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>940.00</span></span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_2.jpg" alt="Cart Image">The Genie Mind</a> <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>899.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_3.jpg" alt="Cart Image">The Energy Book</a> <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>756.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_4.jpg" alt="Cart Image">Pencil Bag</a> <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>723.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img src="assets/img/product/product_thumb_1_5.jpg" alt="Cart Image">Sharpner</a> <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>1080.00</span></span></li>
                    </ul>
                    <p class="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>4398.00</span></p>
                    <p class="woocommerce-mini-cart__buttons buttons"><a href="cart.html" class="th-btn wc-forward">View cart</a> <a href="checkout.html" class="th-btn checkout wc-forward">Checkout</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-search-box d-none d-lg-block">
        <button class="searchClose"><i class="fal fa-times"></i></button>
        <form action="#">
            <input type="text" placeholder="What are you looking for?"/> 
            <button type="submit">
            <i class="fal fa-search"></i></button>
        </form>
    </div>
    <div class="th-menu-wrapper">
        <div class="th-menu-area text-center"><button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <a href="index.html">
                    <img src="assets/img/logo.svg" alt="Edura"/>
                </a>
            </div>
            <div class="th-mobile-menu">
                <ul>
                    <li class="menu-item-has-children">
                        <a href="index.html">Home</a>
                        <ul class="sub-menu">
                            <li class="menu-item-has-children">
                                <a href="#">Multipage</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="index.html">Home University</a>
                                    </li>
                                    <li><a href="home-2.html">Home Online Education</a></li>
                                    <li><a href="home-3.html">Home University Admission</a></li>
                                    <li><a href="home-4.html">Home Digital Education</a></li>
                                    <li><a href="home-5.html">Home Academy <span class="new-label">New</span></a></li>
                                    <li><a href="home-6.html">Home Online Training <span class="new-label">New</span></a></li>
                                    <li><a href="home-7.html">Home Online Mentors <span class="new-label">New</span></a></li>
                                    <li><a href="home-8.html">Home Online Courses <span class="new-label">New</span></a></li>
                                    <li><a href="home-9.html">Home Kindergarten <span class="new-label">New</span></a></li>
                                    <li><a href="home-10.html">Home University <span class="new-label">New</span></a></li>
                                    <li><a href="home-11.html">Online Education <span class="new-label">New</span></a></li>
                                    <li><a href="home-12.html">Online Instructor <span class="new-label">New</span></a></li>
                                    <li><a href="home-13.html">Skill Development <span class="new-label">New</span></a></li>
                                    <li><a href="home-14.html">Home Trainer <span class="new-label">New</span></a></li>
                                    <li><a href="home-15.html">Home Admission <span class="new-label">New</span></a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#">Onepage</a>
                                <ul class="sub-menu">
                                    <li><a href="home1-onepage.html">University Onepage</a></li>
                                    <li><a href="home2-onepage.html">Online Education Onepage</a></li>
                                    <li><a href="home3-onepage.html">University Admission Onepage</a></li>
                                    <li><a href="home4-onepage.html">Digital Education Onepage</a></li>
                                    <li><a href="home5-onepage.html">Academy Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home6-onepage.html">Online Training Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home7-onepage.html">Online Mentors Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home8-onepage.html">Online Courses Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home9-onepage.html">Kindergarten Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home10-onepage.html">University Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home11-onepage.html">Online Education Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home12-onepage.html">Online Instructor Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home13-onepage.html">Skill Development Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home14-onepage.html">Trainer Onepage <span class="new-label">New</span></a></li>
                                    <li><a href="home15-onepage.html">Admission Onepage <span class="new-label">New</span></a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#">RTL</a>
                                <ul class="sub-menu">
                                    <li><a href="home1-rtl.html">University RTL</a></li>
                                    <li><a href="home2-rtl.html">Online Education RTL</a></li>
                                    <li><a href="home3-rtl.html">University Admission RTL</a></li>
                                    <li><a href="home4-rtl.html">Digital Education RTL</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Courses</a>
                        <ul class="sub-menu">
                            <li><a href="course.html">Courses With Sidebar</a></li>
                            <li><a href="course-2.html">Courses Without Sidebar</a></li>
                            <li><a href="course-3.html">Courses Videos</a></li>
                            <li><a href="course-details.html">Course Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Teachers</a>
                        <ul class="sub-menu">
                            <li><a href="team.html">Instructors</a></li>
                            <li><a href="team-details.html">Instructors Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li class="menu-item-has-children">
                                <a href="#">Shop</a>
                                <ul class="sub-menu">
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
                    </li><li class="menu-item-has-children"><a href="#">Blog</a><ul class="sub-menu"><li><a href="blog.html">Blog</a></li><li><a href="blog-details.html">Blog Details</a></li></ul></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
        </div>
    );
}

