<<<<<<< HEAD
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
            <div class="header-mobile header_sticky">
                <div class="container d-flex align-items-center h-100">
                <a class="mobile-nav-activator d-block position-relative" href="#">
                    <svg class="nav-icon" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_nav" /></svg>
                    <button class="btn-close-lg position-absolute top-0 start-0 w-100"></button>
                </a>

                <div class="logo">
                    <a href="/">
                    <img src="../images/logo.png" alt="TMC Institute" class="logo__image d-block" />
                    </a>
                </div>

                <a href="#" class="header-tools__item header-tools__cart ">
                    <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                    <span class="cart-amount d-block position-absolute js-cart-items-count">3</span>
                </a>
                </div>
            
                <nav class="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto">
                <div class="container">
                    <form action="#" method="GET" class="search-field position-relative mt-4 mb-3">
                    <div class="position-relative">
                        <input class="search-field__input w-100 border rounded-1" type="text" name="search-keyword" placeholder="Search products" />
                        <button class="btn-icon search-popup__submit pb-0 me-2" type="submit">
                        <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search" /></svg>
                        </button>
                        <button class="btn-icon btn-close-lg search-popup__reset pb-0 me-2" type="reset"></button>
                    </div>

                    <div class="position-absolute start-0 top-100 m-0 w-100">
                        <div class="search-result"></div>
                    </div>
                    </form>
                </div>

                <div class="container">
                    <div class="overflow-hidden">
                    <ul class="navigation__list list-unstyled position-relative">
                    
                        <li class="navigation__item">
                        <a href="#" class="navigation__link js-nav-right d-flex align-items-center">Programs<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></a>
                        <div class="sub-menu position-absolute top-0 start-100 w-100 d-none">
                            <a href="#" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-3"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>Academic</a>
                            <div class="sub-menu__wrapper">
                            <a href="#" class="navigation__link js-nav-right d-flex align-items-center">Academic<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></a>
                            <div class="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                                <a href="#" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>Academic List</a>
                                <ul class="sub-menu__list list-unstyled">
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Bachelors</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Masters</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Doctorate</a></li>
                                </ul>
                            </div>

                            <a href="#" class="navigation__link js-nav-right d-flex align-items-center">Professional<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>Professional</a>
                            <div class="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                                <a href="#" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>Professional</a>
                                <ul class="sub-menu__list list-unstyled">
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">LGCA</a></li>
                                <li class="sub-menu__item"><a href="othmcourses.html" class="menu-link menu-link_us-s">OTHM</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">GRC & Fincrime</a></li>
                                <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Project Management</a></li>
                                </ul>
                            </div>

                            </div>
                        </div>
                        </li>

                        <li class="navigation__item">
                        <a href="#" class="navigation__link">Study Abroad</a>
                        </li>

                        <li class="navigation__item">
                        <a href="./about.html" class="navigation__link js-nav-right d-flex align-items-center">About us<svg class="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></a>
                        <div class="sub-menu position-absolute top-0 start-100 w-100 d-none">
                            <a href="./about.html" class="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>About us</a>
                            <ul class="list-unstyled">
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Mission</a></li>
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Our Team</a></li>
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Recognition</a></li>
                            <li class="sub-menu__item"><a href="./about.html" class="menu-link menu-link_us-s">Our Partiners</a></li>
                            </ul>
                        </div>
                        </li>

                        <li class="navigation__item">
                        <a href="#" class="navigation__link">Testimonials</a>
                        </li>

                        <li class="navigation__item">
                        <a href="#" class="navigation__link">How to Apply</a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="border-top mt-auto pb-2">
                    <div class="customer-links container mt-4 mb-2 pb-1">
                    <svg class="d-inline-block align-middle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user" /></svg>
                    <span class="d-inline-block ms-2 text-uppercase align-middle fw-medium">My Account</span>
                    </div>

                    <ul class="container social-links list-unstyled d-flex flex-wrap mb-0">
                    <li>
                        <a href="#" class="footer__social-link d-block ps-0">
                        <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="footer__social-link d-block">
                        <svg class="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"/></svg>
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
                
            </div>
            <header id="header" className="header header-fullwidth ">
                <div className="container">
                    <div className="header-desk header-desk_type_1">
                        <div className="logo">
                        <a href="/">
                            <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" width="40px" height="40px" alt="TMC | Institute" className="logo__image d-block" />
                        </a>
                        </div>
                    
                        <nav className="navigation">
                            <ul className="navigation__list list-unstyled d-flex">
                            
                                <li className="navigation__item">
                                    <snap className="navigation__link">
                                        Programs
                                    </snap>
                                    <div className="box-menu" style={{ width: '600px' }}>
                                    
                                        <div className="col pe-4">
                                            <a href="#" className="sub-menu__title">Academic</a>
                                            <ul className="sub-menu__list list-unstyled">
                                                <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                                                <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Bachelors</a></li>
                                                <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Masters</a></li>
                                                <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Doctorate</a></li>
                                            </ul>
                                        </div>
                    
                                        <div className="col pe-4">
                                            <a href="#" className="sub-menu__title">Professional</a>
                                            <ul className="sub-menu__list list-unstyled">
                                                <li className="sub-menu__item"><a href='https://morgans.elearning.lgca.uk/index' className="menu-link menu-link_us-s">LGCA</a></li>
                                                <li className="sub-menu__item"><a onClick={(e)=>handleOthm(e)} className="menu-link menu-link_us-s">OTHM</a></li>
                                                <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">GRC & Fincrime</a></li>
                                                <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Project Management</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li> 
                                <li className="navigation__item">
                                    <a onClick={(e)=>handleStudy(e)}  className="navigation__link">
                                        Study Abroad
                                    </a>
                                </li>

                                <li className="navigation__item">
                                    <a onClick={(e)=>handleAboutus(e)} className="navigation__link">
                                        About us
                                    </a>
                                    <ul className="default-menu list-unstyled">
                                        <li className="sub-menu__item"><a href="" className="menu-link menu-link_us-s">Mission</a></li>
                                        <li className="sub-menu__item"><a href="" className="menu-link menu-link_us-s">Our Team</a></li>
                                        <li className="sub-menu__item"><a href="" className="menu-link menu-link_us-s">Recognition</a></li>
                                        <li className="sub-menu__item"><a href="" className="menu-link menu-link_us-s">Our Partiners</a></li>
                                    </ul>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={(e)=>handleTestimonials(e)} className="navigation__link">
                                        Testimonials
                                    </a>
                                </li>
                            
                                <li className="navigation__item">
                                    <a onClick={(e)=>handleHowtoAppy(e)} className="navigation__link">
                                        How to Apply
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={(e)=>handleContact(e)} className="navigation__link">Contact us</a>
                                </li>
                            </ul>
                        </nav>
                       
                        <div className="header-tools d-flex align-items-center">
                            <a onClick={(e)=>handleCart(e)}  className="header-tools__item header-tools__cart" data-aside="cartDrawer">
                            <AiOutlineShoppingCart/>
                                <span className="mr-2">Cart (0) &nbsp; </span>
                                <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                                
                            </a>
                            <div className="header-tools__item hover-container">
                                <a className="header-tools__item js-open-aside" href="#" data-aside="customerForms">
                                    <span className="mr-2">My Account &nbsp; </span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user" /></svg>
                                </a>
                            </div>
                        </div>
                
                    </div>
                </div>
                
            </header>
        </div>
    );
=======
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
    let url = window.location.origin;
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
     let subtotal =  Cart.map((item)=>{

         if(moneyname == 'Nigerian Naira' && item.coursetype == 'OTHM'){
            return Math.round(item.price * poundsnaira);
         }else{
            if(currencysymbol.currency.code != 'NGN'){
                let price =  parseInt(item.price?item.price:0) /convertnaira
                return  Math.round(price)
              }else{
                  return  parseInt(item.price?item.price:0);
              }
         }

     }


     )
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

   const handleStudy = ()=>{
    window.location.href = `${url}/studyabroad`
   }

   const handleOthm = ()=>{
    // if(username){
    window.location.href = `${url}/othmcourses`
    // }else{
    //     window.location.href = `${url}`
    // }
   }
   const handleLgca = ()=>{
    // if(username){
    window.location.href = `${url}/listcourses`
    // }else{
    //     window.location.href = `${url}`
    // }

   }

   const handleAcc = ()=>{
    window.location.href = `${url}/profile`
   }

   const handleLinks = (e)=>{
    let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
          }
 const handleLG =()=>{
    window.location.href = `https://morgans.elearning.lgca.uk/index`
 }


 const handleterms = ()=>{
    window.location.href = ` ${url}/terms`;
}

const handlepri = ()=>{
    window.location.href = ` ${url}/privacy`;
}

const handleabout = ()=>{
    window.location.href =`${url}/about-us`;
}

  return (
    <header className="backdrop-filter backdrop-blur-2xl uk-sticky uk-sticky-fixed uk-active bg-white text-black" uk-sticky="cls-inactive: is-transparent border-b">
    <div className="header_inner">
        <div className="left-side">


            <div id="logo" onClick={handleIcon}>
                <a >
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt=""/>
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" className="logo_inverse" alt=""/>
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" className="logo_mobile" alt=""/>
                </a>
            </div>


            <div className="triger" uk-toggle="target: .header_menu ; cls: is-visible">
              <GiHamburgerMenu/>
            </div>


            <nav className="header_menu">
                <ul>
                    <li className='cursor-pointer'>
                        <a className='cursor-pointer'  onClick={(e)=>handleStudy(e)}>Study Abroad</a>
                    </li>

                   <li className='cursor-pointer'> <a className='cursor-pointer' onClick={handleLgca}> TMC Courses</a></li>
                    <li className='cursor-pointer flex flex-row items-center'> <a className='cursor-pointer flex flex-row items-center' onClick={handleLG}> LGCA <FiExternalLink className='hidden sm:hidden md:text-black md:block md:text-sm lg:text-black lg:block  lg:text-sm' onClick={handleLG}/> </a> </li>
                <li className='cursor-pointer'> <a className='cursor-pointer' onClick={handleOthm}> OTHM  </a></li>
                <li className='cursor-pointer block sm:block md:hidden lg:hidden'> <a className='cursor-pointer block sm:block md:hidden lg:hidden' onClick={handleabout} > About us  </a></li>
                <li className='cursor-pointer block sm:block md:hidden lg:hidden'> <a className='cursor-pointer block sm:block md:hidden lg:hidden' onClick={handleterms} > Terms  </a></li>
                <li className='cursor-pointer block sm:block md:hidden lg:hidden'> <a className='cursor-pointer block sm:block md:hidden lg:hidden' onClick={handlepri} > Privacy  </a></li>


                </ul>
            </nav>

            <div className="overly" uk-toggle="target: .header_menu ; cls: is-visible"></div>

        </div>
        <div className="right-side">


        {username? <a  className="header_widgets cursor-pointer">
                <AiOutlineShoppingCart/>
            <span> {Cart.length} </span>
            </a>:''}

            {Cart.length > 0?username?
                        <div uk-drop="mode: click" className="dropdown_cart">
                        <div className="cart-headline cursor-pointer"> My Cart
                            <a  className="checkout cursor-pointer" onClick={(e)=>handleLink(e)}>Checkout</a>
                        </div>
                        <ul className="dropdown_cart_scrollbar   overflow-x-scroll items-center" >
                           {Cart.map((item, index)=>{
                            // console.log(item)
                             return <li key={index}>
                                 <div className="cart_avatar">
                                     <img src={item.picture} alt=""/>
                                 </div>
                                 <div className="cart_text  text-sm">
                                     <h4>{item.coursename} </h4>
                                 </div>
                                 <div className="cart_price">
                                     <div className='text-xs font-semibold'><CurrencyFormat value={moneyTalks(item.converted, item.price, item.coursetype, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /></div>
                                     <a href="#"  className="type bg-white cursor-pointer" onClick={()=>handleClick(item.id)}> Remove</a>
                                 </div>
                             </li>
                           })}


                        </ul>

                        <div className="cart_footer">
                            <p> Subtotal :<CurrencyFormat value={addedall()} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                            </p>
                            <h1> Total:<strong><CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix={symbol} /></strong> </h1>
                        </div>
                    </div>



           :"":""}





            <a href="#">
                <img src={username?additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" />
            </a>
            {username?     <div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">
                <ul>
                    <li className="list-none">
                        <a href="#" className="user">
                            <div className="user_avatar">
                                <img src={additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} alt="image"/>
                            </div>
                            <div className="user_name">
                                <div>{username} </div>
                                <span> {usersemail} </span>
                            </div>
                        </a>
                    </li>
                    <li className="list-none">
                        <a className="capitalize cursor-pointer" onClick={handleAcc}>
                             My Account
                        </a>
                    </li>
                    <li className="list-none">
                        <a  className="capitalize cursor-pointer" onClick={handleMycourse}>
                        My Courses
                        </a>
                    </li>
                    <li className="list-none  cursor-pointer">
                        <a onClick={handleLogout}>
                            Log Out
                        </a>
                    </li>
                </ul>
            </div>:<div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">
                    <ul>
                    <li className="list-none cursor-pointer">
                        <a data-name='signup' onClick={(e)=>handleLinks(e)}>
                        <FaUserAlt/> Individual
                        </a>
                    </li>
                    <li className="list-none cursor-pointer">
                        <a data-name='companyregister' onClick={(e)=>handleLinks(e)}>
                       <BsBuilding/> Corporate
                        </a>
                    </li>
                    </ul>
                 </div>

                 }
        </div>
    </div>
</header>

  )
>>>>>>> 05c22c9b8edf9775407bfc6ae0eeb5fb662143f4
}

