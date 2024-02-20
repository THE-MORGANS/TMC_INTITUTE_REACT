
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
    let datas = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
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

    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
    let converted = JSON.parse(currencyex)
    //let other =  Object.values(othersmoneys.result);
    let convertnaira = converted.result.NGN

    function moneyTalks(converted, price){
      if(converted){
       if(moneyname != 'NGN'){
           return Math.round(price / convertnaira) ;
       }else{
           return Math.round(price);
       }
      }
      else{
       if(moneyname != 'NGN'){
           return Math.round(price / convertnaira) ;
       }else{
           return Math.round(price) ;
   
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
                              <span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>Never Stop Learning</span> </span>
                                <h1 class="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">TMC <span class="text-theme">INSTITUTE.</span></h1>
                                <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, 
                                Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                                </p>
                                <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.8s">
                                    <a  onClick={handlelistcourses} class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
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
                              <span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>Never Stop Learning</span> </span>
                                <h1 class="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">TMC <span class="text-theme">INSTITUTE.</span></h1>
                                <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, 
                                Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                                </p>
                                <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.8s">
                                    <a  onClick={handlelistcourses} class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
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
                              <span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>Never Stop Learning</span> </span>
                                <h1 class="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">TMC <span class="text-theme">INSTITUTE.</span></h1>
                                <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">
                                We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, 
                                Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
                                </p>
                                <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.8s">
                                    <a  onClick={handlelistcourses} class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
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
                      <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer' }}>
                      
                        <div className="course-box">
                          <div className="course-img">
                            <img src={item.picture} alt={item.coursename} style={{ width: '327px', height: '250px' }} />
                            <span className="tag">
                              <CurrencyFormat value={moneyTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                            </span>
                          </div>
                          
                          <div className="course-content">
                            <div class="course-rating">
                                <div className="star-rating" role="img" aria-label={`Rated ${item.rating} out of 5`}>
                                    <span style={{ width: `${(item.rating / 5) * 100}%` }}>
                                        Rated <strong className="rating">{item.rating}</strong> out of 5</span>
                                </div>({item.rating == null?0:item.rating})
                            </div>
                            <h4 className="course-title">
                              <a onClick={()=>handleLink(item.coursetype, item.id)}>
                              {item.coursename} 
                              </a>
                            </h4>
                            <div class="course-meta">
                                <div class="author-info">
                                    {/* <img src="assets/img/update1/course/author.jpg" alt="author"/>  */}
                                    <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} class="author-name" style={{ cursor: 'pointer' }}>
                                        {item.instructor == null ? "" : `${item.instructor}`}
                                    </a>
                                </div>
                                
                                {
                                    (
                                    username ? 
                                    <a  onClick={()=>handleCart(item.id)}  class="th-btn style6 mt-10" style={{cursor:'pointer'}}>
                                    {getBtnText(item.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} 
                                    </a> 
                                    
                                    : null
                                    )
                                }
                            </div>
                            <div class="course-meta">
                              <div className="author-info">
                                <span>
                                    <i className="fal fa-file"></i>
                                    {item.lesson !== null ? `${item.lesson} Lesson: '0 Lesson'} lectures
                                </span>
                                {' '}
                              {
                                (
                                  username ? 
                                  <a  onClick={()=>handleCart(item.id)}  class="th-btn style6 mt-10" style={{cursor:'pointer'}}>
                                  {getBtnText(item.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} 
                                  </a> 
                                
                                  : null
                                )
                              }

                                {/* <a onClick={()=>handleLink(item.coursetype, item.id)} className="author-name">
                                {item.instructor == null ? "" : `By ${item.instructor}`}
                                </a> */}
                              </div>
                            </div>

                          </div>
                        </div>
                      </a>
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
                              <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                            </span>
                          </div>
                          <div className="course-content">
                          <div class="course-rating">
                              <div className="star-rating" role="img" aria-label={`Rated ${item.rating} out of 5`}>
                                  <span style={{ width: `${(item.rating / 5) * 100}%` }}>
                                      Rated <strong className="rating">{item.rating}</strong> out of 5</span>
                              </div>({item.rating == null?0:item.rating})
                          </div>
                            <h3 className="course-title">
                              <a onClick={()=>handleLink(item.coursetype, item.id)}>
                              {item.coursename} 
                              </a>
                            </h3>
                            <div className="course-meta">
                              <span>
                                <i className="fal fa-file"></i>{item.lesson} lectures
                              </span>{' '}
                           
                            </div>
                            <div className="course-author">
                              <div className="author-info">
                              {/* {usercourse?
                                 <a onClick={()=>handleLearn(single.id)}  class="th-btn style6 mt-35 mb-2">Start Learning</a>
                                :username?"":
                                <a onClick={handleEnrolCom}  class="th-btn mt-4">Enrol as a Company</a>
                            } */}
                              {
                                (
                                  username ? 
                                  <a  onClick={()=>handleCart(item.id)}  class="th-btn style6 mt-10" style={{cursor:'pointer'}}>
                                  {getBtnText(item.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} 
                                  </a> 
                                
                                  : null
                                )
                              }
                               
                              </div>
                              <div className="offer-tag">{item.duration}</div>
                            </div>
                          </div>
                        </div> 
                     

                    </div>
                  ))}
                </div>
            </div>
          </section>
{/* 

          <section class="testi-area-3 bg-smoke overflow-hidden space">
            <div class="shape-mockup testi2-bg-shape2 spin d-xl-block d-none" data-right="0" data-bottom="5%">
                <img src="assets/img/testimonial/testi-bg-shape_1_2.png" alt="img"/>
            </div>
            <div class="shape-mockup testi2-bg-shape2 spin d-xl-block d-none" data-left="0" data-top="30%">
                <img src="assets/img/testimonial/testi-bg-shape_1_2.png" alt="img"/>
            </div>
            <div class="shape-mockup testi2-bg-shape3 jump d-lg-block d-none" data-left="5%" data-top="45%">
                <img src="assets/img/testimonial/testi-bg-shape_2_1.png" alt="img"/>
            </div>
            <div class="container">
                <div class="title-area text-lg-start text-center">
                    <span class="sub-title">
                        <i class="fal fa-book me-2"></i>
                        Our Students Testimonials
                    </span>
                    <h2 class="sec-title">Students Say’s About Us!</h2>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row slider-shadow th-carousel testi-slider-3" data-slide-show="3" data-ml-slide-show="2" data-lg-slide-show="2" data-md-slide-show="1" data-arrows="true" data-xl-arrows="true" data-ml-arrows="true">
                    <div class="col-lg-6">
                        <div class="testi-box style2">
                            <div class="testi-box_review">
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                (4.7)
                            </div>
                            <div class="testi-box-bg-shape">
                                <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4"/>
                                </svg>
                            </div>
                            <div class="testi-box_content">
                                <p class="testi-box_text">“Quickly maximize visionary solutions after mission critical action item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                            </div>
                            <div class="testi-box_bottom">
                                <div class="testi-box_img">
                                    <img src="assets/img/testimonial/testi_3_1.jpg" alt="Avater"/>
                                </div>
                                <div class="testi-box-author-details">
                                    <h3 class="testi-box_name">Zara Head Milan</h3>
                                    <span class="testi-box_desig">IT Student</span>
                                </div>
                                <div class="testi-box_quote">
                                    <img src="assets/img/icon/testi-quote2.svg" alt="quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="testi-box style2">
                            <div class="testi-box_review">
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                (4.7)
                            </div>
                            <div class="testi-box-bg-shape">
                                <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4"/>
                                </svg>
                            </div>
                            <div class="testi-box_content">
                                <p class="testi-box_text">They were able to provide me with a range of options for my roof replacement, item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning.</p>
                            </div>
                            <div class="testi-box_bottom">
                                <div class="testi-box_img">
                                    <img src="assets/img/testimonial/testi_3_2.jpg" alt="Avater"/>
                                </div>
                                <div class="testi-box-author-details">
                                    <h3 class="testi-box_name">David H. Smith</h3>
                                    <span class="testi-box_desig">Regular Student</span>
                                </div>
                                <div class="testi-box_quote">
                                    <img src="assets/img/icon/testi-quote2.svg" alt="quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="testi-box style2">
                            <div class="testi-box_review">
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                (4.7)
                            </div>
                            <div class="testi-box-bg-shape">
                                <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4"/>
                                </svg>
                            </div>
                            <div class="testi-box_content">
                                <p class="testi-box_text">They worked tirelessly to complete the job on time and the final result item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                            </div>
                            <div class="testi-box_bottom">
                                <div class="testi-box_img">
                                    <img src="assets/img/testimonial/testi_3_3.jpg" alt="Avater"/>
                                </div>
                                <div class="testi-box-author-details">
                                    <h3 class="testi-box_name">Anadi Juila</h3>
                                    <span class="testi-box_desig">IT Student</span>
                                </div>
                                <div class="testi-box_quote">
                                    <img src="assets/img/icon/testi-quote2.svg" alt="quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="testi-box style2">
                            <div class="testi-box_review">
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                (4.7)
                            </div>
                            <div class="testi-box-bg-shape">
                                <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4"/>
                                </svg>
                            </div>
                            <div class="testi-box_content">
                                <p class="testi-box_text">“Quickly maximize visionary solutions after mission critical action item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                            </div>
                            <div class="testi-box_bottom">
                                <div class="testi-box_img">
                                    <img src="assets/img/testimonial/testi_3_1.jpg" alt="Avater"/>
                                </div>
                                <div class="testi-box-author-details">
                                    <h3 class="testi-box_name">Zara Head Milan</h3>
                                    <span class="testi-box_desig">Regular Student</span>
                                </div>
                                <div class="testi-box_quote">
                                    <img src="assets/img/icon/testi-quote2.svg" alt="quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="testi-box style2">
                            <div class="testi-box_review">
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                (4.7)
                            </div>
                            <div class="testi-box-bg-shape">
                                <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4"/>
                                </svg>
                            </div>
                            <div class="testi-box_content">
                                <p class="testi-box_text">They were able to provide me with a range of options for my roof replacement, item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning.</p>
                            </div>
                            <div class="testi-box_bottom">
                                <div class="testi-box_img">
                                    <img src="assets/img/testimonial/testi_3_2.jpg" alt="Avater"/>
                                </div>
                                <div class="testi-box-author-details">
                                    <h3 class="testi-box_name">David H. Smith</h3>
                                    <span class="testi-box_desig">IT Student</span>
                                </div>
                                <div class="testi-box_quote">
                                    <img src="assets/img/icon/testi-quote2.svg" alt="quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="testi-box style2">
                            <div class="testi-box_review">
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                <i class="fa-solid fa-star-sharp"></i>
                                (4.7)
                            </div>
                            <div class="testi-box-bg-shape">
                                <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4"/>
                                </svg>
                            </div>
                            <div class="testi-box_content">
                                <p class="testi-box_text">They worked tirelessly to complete the job on time and the final result item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                            </div>
                            <div class="testi-box_bottom">
                                <div class="testi-box_img">
                                    <img src="assets/img/testimonial/testi_3_3.jpg" alt="Avater"/>
                                </div>
                                <div class="testi-box-author-details">
                                    <h3 class="testi-box_name">Anadi Juila</h3>
                                    <span class="testi-box_desig">Regular Student</span>
                                </div>
                                <div class="testi-box_quote">
                                    <img src="assets/img/icon/testi-quote2.svg" alt="quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section> */}

        <div class="cta-area-1" data-bg-src="assets/img/bg/cta-bg1.png">
              <div class="container">
                  <div class="row align-items-center justify-content-between">
                      <div class="col-lg-12"><div class="cta-wrap title-area mb-0">
                          <div class="cta-icon">
                              <img src="assets/img/normal/cta-icon1.png" alt="icon"/>
                          </div>
                          <div class="cta-content">
                              <h2 class="cta-title sec-title">Get Online Courses</h2>
                              <p class="cta-text">Met consectetur adipiscing sed eiustempore dolore</p>
                          </div>
                          <a onClick={(e)=>handleAboutus(e)}  class="th-btn style8">Join With Us<i class="fas fa-arrow-right ms-1"></i></a>
                      </div>
                  </div>
              </div>
            </div>
          </div>

       

         



        </div>


        <Footer /> 
        
      </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}