
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
          return 'icon-btn sideMenuToggler'
        }else{
            return 'icon-btn sideMenuToggler text-[#A32926]'
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

    const handlelistcourses = ()=>{
      window.location.href = ` ${url}/listcourses`;
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
    const handleAboutus = (e)=>{
         e.preventDefault(); 
         window.location.href =`${url}/about-us`
    }


    return ( 
      <div>
        <Navbar />
        
        <div class="th-hero-wrapper hero-1" id="hero">
          <div class="hero-slider-1 th-carousel" data-fade="true" data-slide-show="1" data-md-slide-show="1" data-dots="true">
            <div class="th-hero-slide">
                <div class="th-hero-bg" data-overlay="title" data-opacity="8" data-bg-src="assets/img/hero/hero_bg_1_1.jpg"></div>
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                          <div class="col-md-6">
                            <div class="hero-style1">
                              <span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>35% OFF</span> LEARN FROM TODAY</span>
                                <h1 class="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">Education Is Create Better <span class="text-theme">Future.</span></h1>
                                <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent.</p>
                                <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.8s">
                                    <a href="" class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-lg-end text-center"><div class="hero-img1"><img src="assets/img/hero/hero_thumb_1_1.jpg" alt="hero"/></div></div>
                    </div>
                </div>
                <div class="hero-shape shape1">
                    <img src="assets/img/hero/shape_1_1.png" alt="shape"/>
                </div>
                <div class="hero-shape shape2"><img src="assets/img/hero/shape_1_2.png" alt="shape"/></div>
                <div class="hero-shape shape3"></div>
                <div class="hero-shape shape4 shape-mockup jump-reverse" data-right="3%" data-bottom="7%"><img src="assets/img/hero/shape_1_3.png" alt="shape"/></div>
                <div class="hero-shape shape5 shape-mockup jump-reverse" data-left="0" data-bottom="0"><img src="assets/img/hero/shape_1_4.png" alt="shape"/></div>
            </div>
            <div class="th-hero-slide">
                <div class="th-hero-bg" data-overlay="title" data-opacity="8" data-bg-src="assets/img/hero/hero_bg_1_2.jpg"></div>
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-6">
                          <div class="hero-style1">
                            <span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>35% OFF</span> LEARN FROM TODAY</span>
                            <h1 class="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">Edura Leads To A Brighter <span class="text-theme">Future.</span></h1>
                            <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">Education can be thought of as the transmission of a societys values and accumulated knowledge. In this sense, it is equivalent.</p>
                            <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.8s">
                                <a href="" class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 text-lg-end text-center"><div class="hero-img1"><img src="assets/img/hero/hero_thumb_1_2.jpg" alt="hero"/></div></div>
                    </div>
                </div>
                <div class="hero-shape shape1">
                    <img src="assets/img/hero/shape_1_1.png" alt="shape"/>
                </div>
                <div class="hero-shape shape2">
                    <img src="assets/img/hero/shape_1_2.png" alt="shape"/>
                </div>
                <div class="hero-shape shape3"></div>
                <div class="hero-shape shape4 shape-mockup jump-reverse" data-right="3%" data-bottom="7%">
                    <img src="assets/img/hero/shape_1_3.png" alt="shape"/>
                </div>
                <div class="hero-shape shape5 shape-mockup jump-reverse" data-left="0" data-bottom="0">
                    <img src="assets/img/hero/shape_1_4.png" alt="shape"/>
                </div>
            </div>
            <div class="th-hero-slide">
                <div class="th-hero-bg" data-overlay="title" data-opacity="8" data-bg-src="assets/img/hero/hero_bg_1_3.jpg"></div>
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-6">
                            <div class="hero-style1">
                                <span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>35% OFF</span> LEARN FROM TODAY</span>
                                <h1 class="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">The Worlds Best Online Education <span class="text-theme">Institute.</span></h1>
                                <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent.</p>
                                <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.8s">
                                    <a href="" class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-lg-end text-center">
                            <div class="hero-img1">
                                <img src="assets/img/hero/hero_thumb_1_3.jpg" alt="hero"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-shape shape1">
                    <img src="assets/img/hero/shape_1_1.png" alt="shape"/>
                </div>
                <div class="hero-shape shape2">
                    <img src="assets/img/hero/shape_1_2.png" alt="shape"/>
                </div>
                <div class="hero-shape shape3"></div>
                <div class="hero-shape shape4 shape-mockup jump-reverse" data-right="3%" data-bottom="7%">
                    <img src="assets/img/hero/shape_1_3.png" alt="shape"/>
                </div>
                <div class="hero-shape shape5 shape-mockup jump-reverse" data-left="0" data-bottom="0">
                    <img src="assets/img/hero/shape_1_4.png" alt="shape"/>
                </div>
            </div>
          </div>

         

          <div className="space overflow-hidden" id="about-sec">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="img-box1 mb-40 mb-xl-0">
                    <div className="img1">
                      <img className="tilt-active" src="assets/img/normal/about_1_1.png" alt="About" />
                    </div>
                    <div className="about-grid" data-bg-src="assets/img/normal/about_1_3.png">
                      <h3 className="about-grid_year">
                        <span className="counter-number">10</span>k<span className="text-theme">+</span>
                      </h3>
                      <p className="about-grid_text">Students Active Our Courses</p>
                    </div>
                    <div className="img2">
                      <img className="tilt-active" src="assets/img/normal/about_1_2.png" alt="About" />
                    </div>
                    <div className="shape-mockup about-shape1 jump" data-left="-67px" data-bottom="0">
                      <img src="assets/img/normal/about_1_shape1.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="title-area mb-30">
                    <span className="sub-title">
                      <i className="fal fa-book me-2"></i> About Our University
                    </span>
                    <h2 className="sec-title">Welcome to TMC Institue</h2>
                  </div>
                  <p className="mt-n2 mb-25">
                    TMC Institute was established in 2016 and has been operating regionally and internationally since its inception. As a member of The Morgans Consortium, the institute has excelled over the years in training and developing talents. We assist organizations in identifying knowledge gaps and tailor relevant training and courses to bridge and improve efficiency and productivity across various sectors.
                  </p>
                  <p className="mb-30">
                  We are the leading and specialized provider of corporate training, including Governance, Risk & Compliance, Financial Crime Prevention, and Leadership training. Our focus is on cultivating the right attitude and skills in your teams. To date, TMC Institute has successfully delivered training courses throughout the region, with a growing list of clients every year. We capitalize on ...
                  </p>
                  <div className="row align-items-center">
                    <div className="col-md-auto">
                      <div className="about-grid_img mb-30 mb-md-0">
                        <img src="assets/img/normal/about_1_4.png" alt="img" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="checklist">
                        <ul>
                          <li>Get access to 4,000+ of our top courses</li>
                          <li>Popular topics to learn now</li>
                          <li>Find the right instructor for you</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="btn-group mt-40">
                    <a onClick={(e)=>handleAboutus(e)} className="th-btn">
                      About More<i className="fa-regular fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="space" data-bg-src="assets/img/bg/course_bg_1.png" id="course-sec">
            <div class="container">
                <div class="mb-20 text-center text-md-start">
                  <div class="row align-items-center justify-content-between">
                    <div class="col-md-8">
                      <div class="title-area mb-md-0">
                        <span class="sub-title"><i class="fal fa-book me-2"></i> Featured Courses</span>
                        <h2 class="sec-title">Our Featured Courses</h2>
                      </div>
                    </div>
                    <div class="col-md-auto"><a onClick={handlelistcourses}  style={{cursor:'pointer'}} class="th-btn">View All Courses<i class="fa-solid fa-arrow-right ms-2"></i></a></div>
                  </div>
                </div>

                <div class="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
                  {featured.map((item) => (
                    <div className="col-md-6 col-lg-4">
                      <div className="course-box">
                        <div className="course-img">
                          <img src={item.picture} alt={item.coursename} style={{ width: '327px', height: '250px' }} />
                          <span className="tag">
                            <i className="fas fa-clock"></i>{item.duration}
                          </span>
                        </div>
                        <div className="course-content">
                          <h3 className="course-title">
                            <a onClick={()=>handleLink(item.coursetype, item.id)}>
                            {item.coursename.substring(0, 30)+'...'} 
                            </a>
                          </h3>
                          <div className="course-meta">
                            <span>
                              <i className="fal fa-file"></i>{item.lesson} lectures 
                            </span>{' '}
                            <span>
                              <i className="fal fa-user"></i>Students 60+
                            </span>{' '}
                            
                          </div>
                          <div className="course-author">
                            <div className="author-info">
                              <button type="button" className={getBtnText(item.id)}>
                                <i className="far fa-shopping-cart"></i> <span className="badge">5</span>
                              </button> {' '}
                              <a onClick={()=>handleLink(item.coursetype, item.id)} className="author-name">
                              {item.instructor == null ? "" : `By ${item.instructor}`}
                              {/* {username && (
                                  <div className="font-semibold ">
                                    {item.instructor == null ? "" : `By ${item.instructor}`}
                                  </div>
                                )} */}
                              </a>
                            </div>
                            <div className="offer-tag">
                              {item.currency_name}{item.price}
                              {/* <CurrencyFormat value={moneyTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />  */}

                            </div>
                            {/* <div className='text-lg font-semibold'>   <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={currencysymbol.currency.symbol} /></div> */}

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
            </div>
          </section>


          <section class="space" data-bg-src="assets/img/bg/course_bg_1.png" id="course-sec">
            <div class="container">
                <div class="mb-35 text-center text-md-start">
                  <div class="row align-items-center justify-content-between">
                    <div class="col-md-8">
                      <div class="title-area mb-md-0">
                        <span class="sub-title"><i class="fal fa-book me-2"></i> Popular Courses</span>
                        <h2 class="sec-title">Our Popular Courses</h2>
                      </div>
                    </div>
                    <div class="col-md-auto"><a onClick={handlelistcourses} style={{cursor:'pointer'}} class="th-btn">View All Courses<i class="fa-solid fa-arrow-right ms-2"></i></a></div>
                  </div>
                </div>

                <div class="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
                  {popular.map((item) => (
                    <div className="col-md-6 col-lg-4">
                      <div className="course-box">
                        <div className="course-img">
                          <img  src={item.picture} alt={item.coursename} style={{ width: '327px', height: '250px' }} />
                          <span className="tag">
                            <i className="fas fa-clock"></i> 03 WEEKS
                          </span>
                        </div>
                        <div className="course-content">
                          <div className="course-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 4.00 out of 5"
                            >
                              <span style={{ width: '79%' }}>
                                Rated <strong className="rating">4.00</strong> out of 5
                              </span>
                            </div>
                            (4.7)
                          </div>
                          <h3 className="course-title">
                            <a onClick={()=>handleLink(item.coursetype, item.id)}>
                            {item.coursename+'...'}
                            </a>
                          </h3>
                          <div className="course-meta">
                            <span>
                              <i className="fal fa-file"></i>{item.lesson} lectures
                            </span>{' '}
                            <span>
                              <i className="fal fa-user"></i>Students 60+
                            </span>{' '}
                          </div>
                          <div className="course-author">
                            <div className="author-info">
                              <button type="button" className={getBtnText(item.id)}>
                                <i className="far fa-shopping-cart"></i> <span className="badge">5</span>
                              </button> {' '}
                              <a onClick={()=>handleLink(item.coursetype, item.id)} className="author-name">
                              {item.instructor == null ? "" : `By ${item.instructor}`}
                              </a>
                            </div>
                            <div className="offer-tag">
                            {/* <CurrencyFormat value={moneyTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />  */}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </section>

          <div class="cta-area-1" data-bg-src="assets/img/bg/cta-bg1.png">
              <div class="container">
                  <div class="row align-items-center justify-content-between">
                      <div class="col-lg-8"><div class="cta-wrap title-area mb-0">
                          <div class="cta-icon">
                              <img src="assets/img/normal/cta-icon1.png" alt="icon"/>
                          </div>
                          <div class="cta-content">
                              <h2 class="cta-title sec-title">Get Online Courses</h2>
                              <p class="cta-text">Met consectetur adipiscing sed eiustempore dolore</p>
                          </div>
                          <a href="about.html" class="th-btn style8">Join With Us<i class="fas fa-arrow-right ms-1"></i></a>
                      </div>
                  </div>
              </div>
            </div>
            <div class="cta-img-1" data-overlay="title" data-opacity="8">
                <img src="assets/img/normal/cta_1_1.png" alt="Image"/> 
                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" class="play-btn style2 popup-video">
                    <i class="fa-sharp fa-solid fa-play"></i>
                </a>
            </div>
          </div>

          <div className="why-area-1 space overflow-hidden">
            <div className="shape-mockup why-shape-1 jump" data-top="10%" data-left="7%">
              <img src="assets/img/normal/about_1_shape1.png" alt="img" />
            </div>
            <div className="shape-mockup why-shape-2" data-bg-src="assets/img/normal/wcu_1_shape1.png"></div>
            <div className="shape-mockup why-shape-3 jump-reverse" data-bottom="25%" data-right="-3%">
              <img src="assets/img/normal/wcu_1_shape2.png" alt="img" />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="wcu-img-1">
                    <div className="img1">
                      <img src="assets/img/normal/wcu_1_1.png" alt="img" />
                    </div>
                    <div className="student-count jump-reverse">
                      <h5 className="title">
                        <span className="text-theme">
                          <span className="counter-number">10</span>k+
                        </span>
                        Active Students
                      </h5>
                      <img src="assets/img/normal/student-group_1_1.png" alt="img" />
                    </div>
                    <div className="text-end">
                      <a className="th-btn mt-30" href="">
                        Get Started <i className="far fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="wcu-wrap1">
                    <div className="title-area mb-25">
                      <span className="sub-title">
                        <i className="fal fa-book me-2"></i> WHY CHOOSE US
                      </span>
                      <h2 className="sec-title">
                        Thousands Of Experts Around The World Ready To Help.
                      </h2>
                      <p className="sec-text mt-20">
                        Synergistically visualize alternative content before cross
                        functional core Rapidiously administrate standardized value
                        via focused benefits. Rapidiously redefine highly efficient
                        niche markets with plug-and-play materials professionally
                        seize client-centric solutions.
                      </p>
                    </div>
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <div className="wcu-box">
                          <div className="wcu-box_icon">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="wcu-box_details">
                            <h3 className="box-title">World Class Trainers</h3>
                            <p className="wcu-box_text">
                              Seamlessly envisioneer tactical data through services.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wcu-box">
                          <div className="wcu-box_icon">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="wcu-box_details">
                            <h3 className="box-title">Easy Learning</h3>
                            <p className="wcu-box_text">
                              Seamlessly envisioneer tactical data through services.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wcu-box">
                          <div className="wcu-box_icon">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="wcu-box_details">
                            <h3 className="box-title">Flexible</h3>
                            <p className="wcu-box_text">
                              Seamlessly envisioneer tactical data through services.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wcu-box">
                          <div className="wcu-box_icon">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="wcu-box_details">
                            <h3 className="box-title">Affordable Price</h3>
                            <p className="wcu-box_text">
                              Seamlessly envisioneer tactical data through services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="counter-area-1 bg-theme" data-bg-src="assets/img/bg/counter-bg_1.png">
              <div className="row justify-content-between">
                <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                    <h2 className="counter-card_number">
                      <span className="counter-number">3.9</span>k
                      <span className="fw-normal">+</span>
                    </h2>
                    <p className="counter-card_text">
                      <strong>Successfully</strong> Trained
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                    <h2 className="counter-card_number">
                      <span className="counter-number">15.8</span>k
                      <span className="fw-normal">+</span>
                    </h2>
                    <p className="counter-card_text">
                      <strong>Classes</strong> Completed
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                    <h2 className="counter-card_number">
                      <span className="counter-number">97.5</span>k
                      <span className="fw-normal">+</span>
                    </h2>
                    <p className="counter-card_text">
                      <strong>Satisfaction</strong> Rate
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                    <h2 className="counter-card_number">
                      <span className="counter-number">100.2</span>k
                      <span className="fw-normal">+</span>
                    </h2>
                    <p className="counter-card_text">
                      <strong>Students</strong> Community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="cta-area-2 position-relative space-bottom">
            <div className="cta-bg-img" data-bg-src="assets/img/bg/cta-bg2.png"></div>
            <div className="cta-bg-img2" data-bg-src="assets/img/bg/cta-bg2-shape.png"></div>
            <div className="shape-mockup cta-shape1 jump d-md-block d-none" data-left="-2%" data-bottom="-7%">
              <img src="assets/img/normal/cta_2_shape1.png" alt="img" />
            </div>
            <div className="shape-mockup cta-shape2 jump-reverse d-md-block d-none" data-right="-1%" data-top="-3%">
              <img src="assets/img/normal/cta_2_shape2.png" alt="img" />
            </div>
            <div className="shape-mockup cta-shape3 spin d-md-block d-none" data-right="20%" data-top="30%">
              <img src="assets/img/normal/cta_2_shape3.png" alt="img" />
            </div>
            <div className="container text-center">
              <div className="cta-wrap2">
                <div className="title-area text-center mb-35">
                  <span className="sub-title"><i className="fal fa-book me-2"></i>Are You Ready For This Offer</span>
                  <h2 className="sec-title text-white">40% Offer First <span className="text-theme2">100 Student’s</span> For Featured<br /><span className="fw-normal">Topics by Education Category</span></h2>
                  <p className="cta-text">Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                </div>
                <div className="btn-group justify-content-center">
                  <a href="about.html" className="th-btn style3">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                  <a href="" className="th-btn style2">Become A Teacher<i className="fas fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
          </section>

          <div className="space-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="title-area mb-lg-0 text-lg-start text-center">
                    <span className="sub-title"><i className="fal fa-book me-2"></i> Our Trusted Partners</span>
                    <h2 className="sec-title mb-0">We Have More Than <span className="text-theme"><span className="counter-number">4263</span>+</span> Global Partners</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="client-wrap text-lg-end text-center">
                    <div className="row gy-40">
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_1.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_2.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_3.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_4.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_5.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_6.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_7.png" alt="img" /></a></div>
                      <div className="col-3"><a href="blog.html" className="client-thumb"><img src="assets/img/client/cilent_1_8.png" alt="img" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="cta-area-3 space-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-30 mb-lg-0">
                  <div className="cta-card" data-bg-src="assets/img/bg/cta-bg_3_1.png">
                    <div className="title-area mb-40">
                      <span className="sub-title text-white"><i className="fal fa-book me-2"></i>Popular Courses</span>
                      <h4 className="sec-title text-white">Get The Best Courses &<br />Upgrade Your Skills</h4>
                    </div>
                    <a onClick={handlelistcourses} className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-card" data-bg-src="assets/img/bg/cta-bg_3_2.png">
                    <div className="title-area mb-40">
                      <span className="sub-title text-white"><i className="fal fa-book me-2"></i>Popular Courses</span>
                      <h4 className="sec-title text-white">Engaging Courses for<br />Intellectual Exploration</h4>
                    </div>
                    <a onClick={handlelistcourses} className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </section>



        </div>


        <Footer /> 
        
      </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}