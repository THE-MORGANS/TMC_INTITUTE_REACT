import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';

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

            <header className="th-header header-layout6">
            <div class="header-top">
        <div class="container">
          <div
            class="row justify-content-center justify-content-md-between align-items-center gy-2"
          >
            <div class="col-auto d-none d-md-block">
              <div class="header-links">
                <ul>
                  <li>
                    <i class="far fa-phone"></i
                    ><a href="tel:+1044123456789">+1 (044) 123 456 789</a>
                  </li>
                  <li class="d-none d-xl-inline-block">
                    <i class="far fa-location-dot"></i>27 Division St, New York,
                    USA
                  </li>
                  <li>
                    <i class="far fa-envelope"></i
                    ><a href="mailto:info@edura.com">info@edura.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-auto">
              <div class="header-links">
                <ul>
                  <li class="d-none d-lg-inline-block">
                    <div class="dropdown-link">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >Language</a
                      >
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink1"
                      >
                        <li>
                          <a href="#">German</a> <a href="#">French</a>
                          <a href="#">Italian</a> <a href="#">Latvian</a>
                          <a href="#">Spanish</a> <a href="#">Greek</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="header-social">
                      <span class="social-title">Follow Us:</span>
                      <a href="https://www.facebook.com/"
                        ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="https://www.twitter.com/"
                        ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.linkedin.com/"
                        ><i class="fab fa-linkedin-in"></i
                      ></a>
                      <a href="https://www.instagram.com/"
                        ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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

                                                            Welcome, {username}</a
                                                    >
                                                    <ul
                                                        class="dropdown-menu"
                                                        aria-labelledby="dropdownMenuLink1"
                                                    >
                                                        <li>
                                                        <a href="#">German</a> <a href="#">French</a>
                                                        <a href="#">Italian</a> <a href="#">Latvian</a>
                                                        <a href="#">Spanish</a> <a href="#">Greek</a>
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
                                                <a href="button" class="icon-btn "><i class="far fa-shopping-cart"></i> <span class="badge">5</span></a> 
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

