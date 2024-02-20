
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { HiOutlineSearch } from "react-icons/hi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Study from './Study';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import HowtoApply from './HowtoApply';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import { AES, enc } from 'crypto-js';
// https://github.com/brainfoolong/cryptojs-aes-php
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import { Markup } from 'interweave';
import CurrencyFormat from 'react-currency-format';


export default function Home() {
  let url = window.location.origin;
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [data, Setdata] = useState(allcourse.length > 0?allcourse:[]);
    const [cookie, Setcookie] = useState(true)
    const [showned, setShowned] = useState('')
    const [local, Setlocal] = useState(localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''});
    // const encrypt= AES.encrypt(JSON.stringify('stephen software'), 'MYKEY4DEMO').toString();
    // console.log(encrypt);
    const handleCart = (id)=>{
        let cart = data.find((item)=>item.id == id)
         let Awnser =  Cart.map(item=>item.id != id)
         let ans =   Awnser.includes(false)
       if(ans == false){
         SetCart([
             ...Cart,
             cart
         ])
         let AddCart = [...Cart, cart]
         localStorage.setItem('Cart', JSON.stringify(AddCart))
           let stringdata =  JSON.stringify(AddCart)
           console.log(stringdata)
         let formData = new FormData();
         formData.append("cartitems", stringdata)
           let urltwo = `${url}/addcart`;
           axios.post(urltwo, formData).then(res=>{

             })
       }

     }
     let currencycode = currencysymbol.currency.code


    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
    useEffect(()=>{
        let data = localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''}
        if(data.date  == new Date().toLocaleDateString()){
            Setcookie(false)
        }else if(data.date != new Date().toLocaleDateString()){
          Setcookie(true)
        }


        const interval =  setInterval(()=>{
         var storage = !!localStorage.getItem('Cart')
         if(storage == true){
          let cart =   JSON.parse(localStorage.getItem('Cart'));
          SetCart(cart)

         }

        },1000)
        return () => clearInterval(interval);
     },[])
     const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

     const handleLink =(cousetype, id)=>{
         let formData = new FormData();
         let myHeader = new Headers();
         myHeader.append('Content-Type', 'application/json')
         formData.append("id", id)
         apiClient.get('/sanctum/csrf-cookie').then( ()=> {
             let urltwo = 'api/encrypt';
            let ans = apiClient.post(urltwo, formData, myHeader).then(res=>{
                 setShowned(res.data);
                  if(res.data){
            window.location.href =`${url}/courseinfo/${cousetype}/${res.data}`;
                    }else{
                        window.location.href =`${url}`;
                    }

           })
         })
     }
    //stephen

     const handleView=()=>{
       window.location.href= `${url}/listcourses`;
     }

    function moneyTalks(converted, price){
        let naira = JSON.parse(currencyex);
        // currencysymbol, currencyex

          let answer = naira.result.NGN


        if(converted){
         return Math.round(price/ answer);
        }
        else{
         if(currencycode != 'NGN'){
             return Math.round(price / answer)
         }else{
             return Math.round(price/ answer);

         }

        }
    }

    const handleCookie =(e)=>{
        if(e.target.innerText == 'Yes'){
        // let object = localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{}
        local['status'] = e.target.innerText;
        local['date'] = new Date().toLocaleDateString();
         localStorage.setItem('cookie', JSON.stringify(local));
         setTimeout(()=>{
           Setcookie(false)
         },1000)
        }else if(e.target.innerText == 'No'){
          let data = {status:'', date:''}
          localStorage.setItem('cookie', JSON.stringify(data));
          setTimeout(()=>{
            Setcookie(false)
          },1000)
        }
    }
    
    const slideshowStyle = {
      position: 'relative',
      width: '1863px', // Adjust based on your image width
      height: '700px', // Adjust based on your image height
    };

    const overlayStyle = {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(36, 16, 16, 0.5)', // Adjust the color and transparency as needed
      zIndex: '1',
    };

    const textStyle = {
      color: 'white',
      zIndex:2,
    };

    let url2 = ` ${window.location.origin}`;
    const handleterms = ()=>{
         window.location.href = ` ${url2}terms`
     } 
 
     const handleViewcourses = ()=>{
         window.location.href = ` ${url2}/listcourses`
     }

    const handledetailscourses = ()=>{
        window.location.href = ` ${url2}/coursesdetails`
    }

    return ( 
      <div>
       <Navbar />
        <main class="bg-grey-faf9f8">
          
          {/* Slider */}
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
            
            {`
              .slideshow-bg {
                position: relative;
                width: 1863px; 
                height: 700px; 
              }
              .slideshow-bg::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(36, 16, 16, 0.2);
                z-index: 1;
              }
              .slideshow-text {
                color: white;
              }
            `}
            
            
          </style>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider1.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
             
                    <p className="text-white fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5 h3">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px', width: '1000px',  margin: 'auto' }}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>
                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        

                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider2.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
                    <p className="text-white h3 fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>

            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider3.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
                    <p className="h3 text-white fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>

              </div>
            </div>
           
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg" style={slideshowStyle}>
                  <img loading="lazy" src="../images/home/slider4.jpg" width="1863" height="700" alt="" 
                  className="slideshow-bg__img object-fit-cover object-position-right"/>
                </div>
              
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle text-white text-center w-75" style={textStyle} >
                  
                  <h4 className="text-yellow-bg-rounded text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3" style={{fontWeight: '500px', color:'#A32926', zindex: 2}}> Never Stop Learning</h4>
                  <h2 style={{color:'#37226C'}} class="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white ">
                   TMC INSTITUTE
                  </h2>
                    <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                        We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                    </p>
                    <form action="" method="GET" class=" header-search search-field bg-body" style={{border: '2px solid #A32926', borderRadius: '10px'}}>
                      <div className="hover-container position-relative">
                        <div className="js-hover__open">
                          <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text" name="search-category" placeholder="Courses " readonly=""/>
                        </div>
                        <div className="header-search__category-list js-hidden-content mt-2">
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">Courses</li>
                            <li className="search-suggestion__item js-search-select">Computer Science</li>
                            <li className="search-suggestion__item js-search-select">SLT</li>
                            <li className="search-suggestion__item js-search-select">Mass comm</li>
                          </ul>
                        </div>
                      </div>
                      <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Popular courses..."/>

                      <button className="btn btn-primary header-search__btn d-flex"  type="submit">
                        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>  
                        <p className=" pt-1 p-1">Search</p> 
                      </button>
                    </form>
                </div>
              </div>
            </div>

          </div>
          {/* <div className="slideshow-pagination position-left-center"></div> */}
          <div class="container">
            <div class="slideshow-pagination d-flex align-items-center position-absolute bottom-0 left-50 mb-5"></div>
          
          </div>
          </section>

          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

          <section className="grid-banner container">
            <div className="row">
              <h2 style={{color:'#A32926', fontWeight: '500'}} className="section-title text-center fw-normal mb-1 mb-md-1 pb-xl-1 mb-xl-4">
                High quality video, audio & popular classes
              </h2>
              <p   className="fs-6  text-center fw-small mb-1 mb-md-3 pb-xl-3 mb-xl-4  align-content-center m-3" >
                TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow
                every year, capitalizing on our in-depth knowledge of the needs of organizations and financial institutions.
              </p>
            </div>
            
            <div className="row">
              <div className="col-md-12">
                <div className="grid-banner__item position-relative">
                  <img loading="lazy" className="w-100 h-auto" src="../images/home/home-1.png"  width="1060" height="550" alt="" />
                
                </div>
                <div className="pb-4 pt-1"></div>
              </div>
              <div className="col-md-4 d-flex align-items-center" >
                <a href="#" className="btn btn-primary mb-xl-4 bg-white no-border" style={{borderRadius: '10px'}}>
                  <img loading="lazy"  src="../images/home/audio.png" width="40" height="40" alt="" />
                  <span className="ml-2 h4 " >Audio Classes</span>
                </a>
              </div>
              <div className="col-md-4 d-flex align-items-center" >
                <a href="#" className="btn btn-primary mb-xl-4 bg-white no-border" style={{borderRadius: '10px'}}>
                  <img loading="lazy"  src="../images/home/live.png" width="40" height="40" alt="" />
                  <span className="ml-2 h4 " >Live Classes</span>
                </a>
              </div>
              <div className="col-md-4 d-flex align-items-center" >
                <a href="#" className="btn btn-primary mb-xl-4 bg-white no-border" style={{borderRadius: '10px'}}>
                  <img loading="lazy"  src="../images/home/record.png" width="40" height="40" alt="" />
                  <span className="ml-2 h4 " >Recorded Classes</span>
                </a>
              </div>
            </div>
          </section>

        </main>

      <Footer />
        
      </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}