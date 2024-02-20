

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiExternalLink} from 'react-icons/fi';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';


export default function Navbar() {
    let url = ` ${window.location.origin}`;
    const [Cart, SetCart] = useState([]);
    const [poundsnaira, setPoundsnaira] = useState(0)
 
    useEffect(()=>{
        let urlthree = `${url}/allcurrency`;
        axios.get(urlthree).then(res=>{
            if(res.data){
                let info = res.data
            info.map((item)=>{
            console.log(item.currencyname, item.foreignrate,
                item.nairarate)

                if(item.currencyname === 'Pound sterling'){
                    setPoundsnaira(item.nairarate)
                }
            })

            }
        })


        if(Cart.length == 0){
            SetCart(cart === null || cart.length == 0?[]:cart)
        }
    },[])

    let symbol = currencysymbol.currency.symbol

     let converted = JSON.parse(currencyex)
         let convertnaira = converted.result.NGN
         let moneyname = currencysymbol.currency.name
         let other =  Object.values(othersmoneys.result);
         let poundtonaira = poundton.result.NGN
     
     
     const onedollar = 615

     function addedall (){
        const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

        return sum?sum:0;
       }

     function gettotal(){
      const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
    //let ans =   parseInt(sum?sum:0)
    //return  Math.round(sum);
    if(currencysymbol.currency.code != 'NGN'){
        let ans =   parseInt(sum?sum:0)
        let quest = ans + (onedollar/convertnaira);
         return Math.round(quest);
      }else{
        let ans =   parseInt(sum?sum:0)
        return ans;
      }

     }

     const handleClick = (id)=>{
        let add = Cart.filter((item)=>item.id != id)
        SetCart(add)
        localStorage.setItem('Cart', JSON.stringify(add))
        let stringdata =  JSON.stringify(add)
        let formData = new FormData();
        formData.append("cartitems", stringdata)
        let urltwo = `${url}/addcart`;
        axios.post(urltwo, formData).then(res=>{

        })
    }



// const handleHome =()=>{
//    window.location.href = `${url}`;
// }

const handleLink =(e)=>{
    e.preventDefault();
    window.location.href =`${url}/shoppingcart`
}

const handleMycourse = ()=>{
    window.location.href =`${url}/usercourses`;
}
let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]

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

 const handleLogout =()=>{
         localStorage.clear();
         SetCart([])
         setTimeout(()=>{
              window.location.href = `${url}/Logout`;
         Setdrop(false)
         },1000)
 }

 function moneyTalks(converted, price, coursetype, currency_name){
    // console.log(converted, price);
    // console.log(poundtonaira,coursetype, currency_name)
    if(coursetype == 'OTHM'){
        if(currency_name == moneyname){
             return price;

            }else if (moneyname == 'Nigerian Naira'){
                return Math.round(price * poundsnaira);
            }else if(currency_name != moneyname){
                return Math.round(price * other[0]);
            }

    }else{
        if(converted){
            return Math.round(price);
           }
           else{
            if(currencysymbol.currency.code != 'NGN'){
                return Math.round(price / convertnaira);
            }else{
                return  Math.round(price) ;
            }

           }
    }
   }
   
   const handleIcon =()=>{
    if(username){
        window.location.href = `${url}/newdashboard`;
    }else{
        window.location.href = `${url}`
    }
   }


   
 
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
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
    const handlesignup = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/signup`
    }
    const handlecompanyregister = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/companyregister`
    }
    
    const handleAcc = ()=>{
        window.location.href = `${url}/profile`
    }
    const handleCheckout = ()=>{
        window.location.href = `${url}/profile`
    }

    return ( 
        <div>
            <div className="preloader">
                <div className="preloader-inner">
                    {/* <span className="loader"></span> */}
                    <img width="90" height="30" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="TMC Institute"/>

                </div>
            </div>
          
           
            <div className="sidemenu-wrapper d-none d-lg-block">
                <div className="sidemenu-content">
                    <button className="closeButton sideMenuCls">
                        <i className="far fa-times"></i>
                    </button>
                    <div className="widget woocommerce widget_shopping_cart">
                        <h3 className="widget_title">Login </h3>
                        <div className="widget_shopping_cart_content">
                          
                            <p className="woocommerce-mini-cart__buttons buttons">
                                <a onClick={(e)=>handlesignup(e)} className="th-btn checkout wc-forward" >
                                    <FaUserAlt/> Individual
                                </a>{" "}
                                <a  onClick={(e)=>handlecompanyregister(e)} className="th-btn checkout wc-forward">
                                    <BsBuilding/> Corporate
                                </a>
                            </p>
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
                        <a onClick={handlehome}>
                            <img width="70" style={{cursor:'pointer'}} height="10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                        <li class="menu-item-has-children">
                                <a href="">Programs</a>
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
                                            <li><a onClick={(e)=>handleHowtoAppy(e)}>LGCA</a></li>
                                            <li><a onClick={(e)=>handleOthm(e)}>OTHM </a></li>
                                            <li><a href="">GRC & Fincrime</a></li>
                                            <li><a href=''>Project Management</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="">Study Abroad</a></li>
                            <li class="menu-item-has-children">
                                <a onClick={(e)=>handleAboutus(e)} >About us</a>
                                <ul class="sub-menu">
                                    <li><a href="">Mission</a></li>
                                    <li><a href="">Our Team</a></li>
                                    <li><a href="">Recognition</a></li>
                                    <li><a href="">Our Partiners</a></li>
                                </ul>
                            </li>
                            <li><a onClick={(e)=>handleHowtoAppy(e)}>How to Apply</a></li>
                            <li><a onClick={(e)=>handleContact(e)}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div> 

            <header class="th-header header-layout6">
            <div class="header-top">
                <div class="container">
                    <div class="row justify-content-center justify-content-md-between align-items-center gy-2">
                        <div class="col-auto d-none d-md-block">
                            <div class="header-links">
                                <ul>
                                    <li>
                                        <i class="far fa-phone"></i>
                                        <a href="tel:+1044123456789">+1 (044) 123 456 789</a>
                                    </li>
                                    <li class="d-none d-xl-inline-block">
                                        <i class="far fa-location-dot"></i>
                                        27 Division St, New York, USA
                                    </li>
                                    <li>
                                        <i class="far fa-envelope"></i>
                                        <a href="mailto:info@edura.com">info@edura.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="header-links">
                                <ul>
                                    <li class="d-none d-lg-inline-block">
                                        <div class="dropdown-link">
                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                <li>
                                                    <a href="#">German</a>
                                                    <a href="#">French</a>
                                                    <a href="#">Italian</a>
                                                    <a href="#">Latvian</a>
                                                    <a href="#">Spanish</a>
                                                    <a href="#">Greek</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="header-social">
                                            <span class="social-title">Follow Us:</span>
                                            <a href="https://www.facebook.com/">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.twitter.com/">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="https://www.instagram.com/">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky-wrapper">
                <div class="sticky-active">
                    <div class="menu-area" data-bg-src="img/update1/bg/pattern_bg_2.png">
                        <div class="container">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-auto">
                                    <div class="header-logo">
                                        <a href="index.html">
                                            <img src="img/logo.svg" alt="Edura">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <nav class="main-menu d-none d-lg-inline-block">
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
                                                                    <li>
                                                                        <a href="home-2.html">Home Online Education</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-3.html">Home University Admission</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-4.html">Home Digital Education</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-5.html">
                                                                            Home Academy <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-6.html">
                                                                            Home Online Training <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-7.html">
                                                                            Home Online Mentors <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-8.html">
                                                                            Home Online Courses <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-9.html">
                                                                            Home Kindergarten <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-10.html">
                                                                            Home University <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-11.html">
                                                                            Online Education <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-12.html">
                                                                            Online Instructor <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-13.html">
                                                                            Skill Development <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-14.html">
                                                                            Home Trainer <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home-15.html">
                                                                            Home Admission <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item-has-children">
                                                                <a href="#">Onepage</a>
                                                                <ul class="sub-menu">
                                                                    <li>
                                                                        <a href="home1-onepage.html">University Onepage</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home2-onepage.html">Online Education Onepage</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home3-onepage.html">University Admission Onepage</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home4-onepage.html">Digital Education Onepage</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home5-onepage.html">
                                                                            Academy Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home6-onepage.html">
                                                                            Online Training Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home7-onepage.html">
                                                                            Online Mentors Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home8-onepage.html">
                                                                            Online Courses Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home9-onepage.html">
                                                                            Kindergarten Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home10-onepage.html">
                                                                            University Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home11-onepage.html">
                                                                            Online Education Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home12-onepage.html">
                                                                            Online Instructor Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home13-onepage.html">
                                                                            Skill Development Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home14-onepage.html">
                                                                            Trainer Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home15-onepage.html">
                                                                            Admission Onepage <span class="new-label">New</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item-has-children">
                                                                <a href="#">RTL</a>
                                                                <ul class="sub-menu">
                                                                    <li>
                                                                        <a href="home1-rtl.html">University RTL</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home2-rtl.html">Online Education RTL</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home3-rtl.html">University Admission RTL</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="home4-rtl.html">Digital Education RTL</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Courses</a>
                                                        <ul class="sub-menu">
                                                            <li>
                                                                <a href="course.html">Courses With Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-2.html">Courses Without Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-3.html">Courses Videos</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-details.html">Course Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Teachers</a>
                                                        <ul class="sub-menu">
                                                            <li>
                                                                <a href="team.html">Instructors</a>
                                                            </li>
                                                            <li>
                                                                <a href="team-details.html">Instructors Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Pages</a>
                                                        <ul class="sub-menu">
                                                            <li>
                                                                <a href="about.html">About Us</a>
                                                            </li>
                                                            <li class="menu-item-has-children">
                                                                <a href="#">Shop</a>
                                                                <ul class="sub-menu">
                                                                    <li>
                                                                        <a href="shop.html">Shop</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-details.html">Shop Details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="cart.html">Cart Page</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="checkout.html">Checkout</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="wishlist.html">Wishlist</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="event.html">Events</a>
                                                            </li>
                                                            <li>
                                                                <a href="event-details.html">Event Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="gallery.html">Gallery</a>
                                                            </li>
                                                            <li>
                                                                <a href="error.html">Error Page</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Blog</a>
                                                        <ul class="sub-menu">
                                                            <li>
                                                                <a href="blog.html">Blog</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html">Blog Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <button type="button" class="th-menu-toggle d-inline-block d-lg-none">
                                                <i class="far fa-bars"></i>
                                            </button>
                                        </div>
                                        <div class="col-auto d-none d-xl-block">
                                            <div class="header-button">
                                                <button type="button" class="simple-icon me-3 searchBoxToggler">
                                                    <i class="far fa-search"></i>
                                                </button>
                                                <a href="contact.html" class="th-btn style3">
                                                    Apply Now<i class="fas fa-arrow-right ms-2"></i>
                                                </a>
                                                <a href="#" class="simple-icon style2 ms-3 sideMenuToggler">
                                                    <i class="fa-sharp fa-solid fa-grid"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="logo-shape"></div>
                    </div>
                </div>
            </div>
        </header>

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
                                        <li class="d-none d-lg-inline-block">
                                        <div class="dropdown-link">
                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                <li>
                                                    <a href="#">German</a>
                                                    <a href="#">French</a>
                                                    <a href="#">Italian</a>
                                                    <a href="#">Latvian</a>
                                                    <a href="#">Spanish</a>
                                                    <a href="#">Greek</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                        {username ?
                                            <>
                                             <li class="d-none d-lg-inline-block">
                                                <div class="dropdown-link">
                                                    <a
                                                        class="dropdown-toggle"
                                                        href="#"
                                                        role="button"
                                                        id="dropdownMenuLink1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        >
                                                            <img width="20" height="20" style={{borderRadius:'20'}}  src={username?additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" />

                                                            Welcome, {username},  <span> {usersemail} </span></a > 
                                                    <ul
                                                        class="dropdown-menu"
                                                        aria-labelledby="dropdownMenuLink1"
                                                    >
                                                        <li>
                                                            <a className="capitalize cursor-pointer" onClick={handleAcc}>
                                                                My Account
                                                            </a>
                                                            <a  className="capitalize cursor-pointer" onClick={handleMycourse}>
                                                                My Courses
                                                            </a>
                                                            <a onClick={handleLogout}>
                                                                Log Out
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </li>
                                                {/* <li class="d-none d-lg-inline-block">
                                                    <a href="" class="sideMenuToggler"></a>
                                                </li> */}
                                            </>
                                            :
                                            <>
                                                <li class="d-none d-lg-inline-block">
                                                    <FaUserAlt/><a onClick={(e)=>handlesignup(e)} class="sideMenuToggler" >Individual</a>
                                                </li>
                                                <li class="d-none d-lg-inline-block">
                                                    <BsBuilding/><a onClick={(e)=>handlecompanyregister(e)} class="sideMenuToggler">Coroperate</a>
                                                </li>
                                            </>
                                        }

                                        
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
                                        <a onClick={handlehome} style={{cursor:'pointer'}}><img width="70" height="10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="TMC Institute"/></a>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="row">
                                        <div class="col-auto">
                                            <nav class="main-menu d-none d-lg-inline-block">
                                                <ul>
                                                    <li class="menu-item-has-children">
                                                        <a href="">Programs</a>
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
                                                                    <li><a onClick={(e)=>handleOthm(e)}>OTHM </a></li>
                                                                    <li><a href="">GRC & Fincrime</a></li>
                                                                    <li><a href=''>Project Management</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="">Study Abroad</a></li>
                                                    <li class="menu-item-has-children">
                                                        <a onClick={(e)=>handleAboutus(e)} >About us</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="">Mission</a></li>
                                                            <li><a href="">Our Team</a></li>
                                                            <li><a href="">Recognition</a></li>
                                                            <li><a href="">Our Partiners</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a onClick={(e)=>handleHowtoAppy(e)}>How to Apply</a></li>

                                                    <li><a onClick={(e)=>handleContact(e)}>Contact</a></li>
                                                </ul>
                                            </nav>
                                            <button type="button" class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>
                                        </div>
                                        <div class="col-auto d-none d-xl-block">
                                            <div class="header-button">
                                                <button type="button" class="icon-btn searchBoxToggler"><i class="far fa-search"></i></button> 
                                               
                                                 {
                                                    username? <a onClick={(e)=>handleCheckout(e)} className="icon-btn ">
                                                        <i className="far fa-shopping-cart"></i> <span className="badge">{Cart.length}</span>
                                                        </a> :''
                                                }

                                                {/* <a href="contact.html" class="th-btn ml-25">Contact Us <i class="fas fa-arrow-right ms-1"></i></a> */}
                                               
                                                <a onClick={(e)=>handlesignup(e)} className="th-btn wc-forward" >
                                                    <FaUserAlt/> Individual {username}
                                                </a>{" "}
                                                <a  onClick={(e)=>handlecompanyregister(e)} className="th-btn checkout wc-forward">
                                                    <BsBuilding/> Corporate
                                                </a>
                            
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

