

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
   // let other =  Object.values(othersmoneys.result);
    //let poundtonaira = poundton.result.NGN
     
     
     const onedollar = 615

     function addedall (){
        const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

        return sum?sum:0;
       }

     function gettotal(){
      const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
    
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
    const handleMission = (e)=>{
        e.preventDefault(); 
        window.location.href =`${url}/mission`
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
    
    const handleCart= (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/shoppingcart`
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
        window.location.href = `${url}/checkout`
    }
    const handlelistcourses=()=>{
        window.location.href= `${url}/listcourses`;
    }
    const handleLG =()=>{
        window.location.href = `https://morgans.elearning.lgca.uk/index`
    }
    const handleGRC =()=>{
        window.location.href = `https://www.grcfincrimeawards.com/`
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
                                            <li><a href="#">Diploma & Certificate</a></li>
                                            <li><a href="#">Bachelors</a></li>
                                            <li><a href="#">Masters</a></li>
                                            <li><a href="#">Doctorate</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Professional</a>
                                        <ul class="sub-menu">
                                            <li><a onClick={handleLG} style={{cursor:'pointer'}}>LGCA</a></li>
                                            <li><a onClick={(e)=>handleOthm(e)}  style={{cursor:'pointer'}}>OTHM </a></li>
                                            <li><a onClick={(e)=>handleGRC(e)} > GRC & Fincrime</a></li>
                                            <li><a href='#'>Project Management</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a onClick={(e)=>handleStudy(e)} style={{cursor:'pointer'}}>Study Abroad</a></li>
                            <li><a onClick={(e)=>handlelistcourses(e)} style={{cursor:'pointer'}}>TMC Courses</a></li>
                            {/* <li class="menu-item-has-children">
                                <a onClick={(e)=>handleAboutus(e)} >About us</a>
                                <ul class="sub-menu">
                                    <li onClick={(e)=>handleMission(e)} style={{cursor:'pointer'}}><a href="">Mission</a></li>
                                    <li onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer'}}><a href="">Our Team</a></li>
                                    <li onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer'}}><a href="">Recognition</a></li>
                                    <li onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer'}}><a href="">Our Partiners</a></li>
                                </ul>
                            </li> */}
                            <li><a onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer'}}>About us</a></li>
                            {/* <li><a onClick={(e)=>handleHowtoAppy(e)} style={{cursor:'pointer'}}>How to Apply</a></li> */}
                            <li><a onClick={(e)=>handleContact(e)}  style={{cursor:'pointer'}}>Contact</a></li>
                            <a  onClick={(e)=>handlesignup(e)}   style={{cursor:'pointer'}} class="th-btn ml-25">Login / Register</a>
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
                                        <li><i class="far fa-phone"></i><a href="tel:+234915-341-4314">+234 (1) 700-1770, +234 (0) 915-341-4314</a></li>
                                        <li class="d-none d-xl-inline-block"><i class="far fa-envelope"></i><a href="mailto:enquiries@tmcinstitute.com">enquiries@tmcinstitute.com</a></li>
                                        <li><i class="far fa-clock"></i>Mon - Sat: 8:00 - 15:00</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-auto">
                                <div class="header-links header-right">
                                    <ul>
                                        <li>
                                            <div class="header-social">
                                                <span class="social-title">Follow Us:</span> 
                                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a> 
                                                {/* <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>  */}
                                                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a> 
                                                <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a> 
                                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                            </div>
                                        </li>
                                        
                                        {username ?
                                            <>
                                             <li class="d-none d-lg-inline-block">
                                                <div class="dropdown-link">
                                                    <a >
                                                            <img width="20" height="20" style={{borderRadius:'20'}}  src={username?additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" />

                                                            {''} Welcome, {username}</a > 
                                                    
                                                    </div>
                                                </li>
                                               
                                            </>
                                            :
                                            <>
                                                <li class="d-none d-lg-inline-block">
                                                <i class="far fa-user"></i> {''}<a onClick={(e)=>handlesignup(e)} style={{cursor:'pointer'}} >Individual</a>
                                                </li>
                                                <li class="d-none d-lg-inline-block">
                                                    <BsBuilding/><a onClick={(e)=>handlecompanyregister(e)} style={{cursor:'pointer'}}>Coroperate</a>
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
                        <div class="container ">
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
                                                                <a href="#">Post Graduate / Under Graduate</a>
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
                                                                    <li><a onClick={handleLG} style={{cursor:'pointer'}}>LGCA</a></li>
                                                                    <li><a onClick={(e)=>handleOthm(e)} style={{cursor:'pointer'}}>OTHM Courses</a></li>
                                                                    <li><a onClick={(e)=>handleGRC(e)} style={{cursor:'pointer'}}> GRC & Fincrime</a></li>
                                                                    <li><a href=''>Project Management</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a onClick={(e)=>handleStudy(e)} style={{cursor:'pointer'}}>Study Abroad</a></li>
                                                    <li><a onClick={(e)=>handlelistcourses(e)} style={{cursor:'pointer'}}>TMC Courses</a></li>

                                                    {/* <li class="menu-item-has-children">
                                                        <a onClick={(e)=>handleAboutus(e)}  style={{cursor:'pointer'}}>About us</a>
                                                        <ul class="sub-menu">
                                                            <li><a onClick={(e)=>handleMission(e)} style={{cursor:'pointer'}}>Mission</a></li>
                                                            <li><a onClick={(e)=>handleMission(e)} style={{cursor:'pointer'}}>Our Team</a></li>
                                                            <li><a onClick={(e)=>handleMission(e)} style={{cursor:'pointer'}}>Recognition</a></li>
                                                            <li><a onClick={(e)=>handleMission(e)} style={{cursor:'pointer'}}>Our Partiners</a></li>
                                                        </ul>
                                                    </li> */}
                                                    {/* <li><a onClick={(e)=>handleHowtoAppy(e)}>How to Apply</a></li> */}
                                                    <li><a onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer'}}>About us</a></li>

                                                    <li><a onClick={(e)=>handleContact(e)}  style={{cursor:'pointer'}}>Contact</a></li>
                                                    
                                                </ul>
                                            </nav>
                                            <button type="button" class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>
                                        </div>
                                        <form class="search-form">
                                            <input type="text" placeholder="Search For Course....">
                                            <button type="submit">
                                                <i class="far fa-search"></i>
                                            </button>
                                        </form>
                                        
                                        {username ?
                                            <>
                                            
                                            </>
                                            :
                                            <>
                                            <div class="col-auto d-none d-xl-block">
                                                <div class="header-button">
                                                    <a onClick={(e)=>handlesignup(e)} style={{cursor:'pointer'}} class="th-btn ml-25">Login/Register</a>
                                                </div>
                                            </div>
                                            </>
                                        }
                                        
                                        {username ?
                                            <>
                                                 <div class="col-auto d-none d-xl-block">
                                                    <div class="header-button">
                                                        <button type="button" class="icon-btn ">
                                                            <i class="far fa-search"></i>
                                                        </button>
                                                        <a onClick={(e) => handleCart(e)} class="icon-btn ">
                                                            <i class="far fa-shopping-cart"></i>
                                                            <span class="badge">{Cart.length}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                            </>
                                        }
                                       
                                        
                                        {username ?
                                            <>
                                            <div class="col-auto d-none d-xl-block d-none d-lg-inline-block">
                                                <div class="category-menu-wrap">
                                                    <a class="menu-expand" href="#">
                                                    <i class="far fa-user"></i> 
                                                    {/* <img width="20" height="20" style={{borderRadius:'20'}}  src={username?additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" /> */}

                                                    {' '} Welcome, {username},  <i class="fa-solid fa-angle-down ms-auto"></i>
                                                    </a>
                                                    <nav class="category-menu">
                                                        <ul>
                                                            <li>
                                                                <a onClick={handleAcc} style={{cursor:'pointer'}}>My Account</a>
                                                            </li>
                                                            <li>
                                                                <a onClick={handleMycourse} style={{cursor:'pointer'}}> My Courses</a>
                                                            </li>
                                                            <li>
                                                                <a onClick={handleLogout} style={{cursor:'pointer'}}> Log Out </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                            </>
                                            :
                                            <>
                                            </>
                                        }
                                        
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

