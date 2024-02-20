
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
                                    <a href="contact.html" class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
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
                                <a href="contact.html" class="th-btn style3">Get Started<i class="fas fa-arrow-right ms-2"></i></a>
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
          </div>
        </div>
        {/* {featured.map((item) => (
                       <div key={item.id}className="col-6 col-md-4 col-lg-3">
                          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                            <div className="mb-xl-2 mt-xl-4" >
                              <center>
                                <img
                                  src={item.picture}
                                  alt={item.coursename}
                                  style={{ width: '300px', height: '200px' }}
                                />
                              </center>
                              
                            </div>
                            <div className="pc__info position-relative text-center ">
                              <p className="pc__category text-center" style={{color: '#37226C'}}>{item.coursename}</p>
                              <h6 className="pc__title text-center mb-2"><a href="">
                                {item.coursename.substring(0, 35)+'...'} 
                              </a></h6>
                              <a  onClick={(e)=>handledetailscourses(e)}  className="mt-xl-4 mb-xl-4 btn btn-outline-primary" style={{borderRadius: '10px'}}>Class Details</a>
            
                            </div>
                          </div>
                    
                      </div>
        ))} */}
        <Footer /> 
        
      </div>
    );
}

if (document.getElementById('dash')) {
    ReactDOM.render(<Home />, document.getElementById('dash'));
}