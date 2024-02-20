
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock, AiOutlineShopping} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import CurrencyFormat from 'react-currency-format';

export default function Coureselistothm() {
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [orderbystat, setorderbystat] = useState('')
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [search, setsearch] = useState('')
    const [poundsnaira, setPoundsnaira] = useState(0)
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage

       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost).reverse()


       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
       const handlemouse =(num, word)=>{

        setorderbystat(word)
        Sethover(num)
        let formData = new FormData();
        formData.append('categories', word)
        formData.append('page', 1)
        let urltwo = `${url}/categoriesothm`;
        axios.post(urltwo, formData).then(res=>{
           if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
           }
          })
       }
       const handlePag =(data)=>{
        let Answer = data.selected + 1;
        setCurrentPage(Answer)
       }

       const handleCart = (coursename, obj)=>{
        let cart = data.find((item)=>item.coursename == coursename)
         let Awnser =  Cart.map(item=>item.coursename != coursename)
         let ans =   Awnser.includes(false)
       if(ans == false){
         SetCart([
             ...Cart,
             cart
         ])
         let AddCart = [...Cart, cart]
         localStorage.setItem('Cart', JSON.stringify(AddCart))
           let stringdata =  JSON.stringify(AddCart)
         let formData = new FormData();
         formData.append("cartitems", stringdata)
           let urltwo = `${url}/addcart`;
           axios.post(urltwo, formData).then(res=>{

             })
       }

     }

     const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

     const getBtnText =(coursename)=>{
        let cart = Cart.find((item)=>item.coursename == coursename);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    // currency->name

    let poundtonaira = poundton.result.NGN



    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
    let converted = JSON.parse(currencyex)
    let convertnaira = converted.result.NGN
     let other =  Object.values(othersmoneys.result);

    // let poundton =  poundton.result.NGN
    // function moneyTalks(currency_name, price){
    //     // console.log(currency_name, price, moneyname, convertnaira)
    // }

    function moneyTalks(currency_name, price){

        // console.log(currency_name)
        // console.log(currencyex, currencysymbol)
        if(currency_name == moneyname){
                   return price;

        }else if (moneyname == 'Nigerian Naira'){
            return Math.round(price * poundsnaira);
        }else if(currency_name != moneyname){
            return Math.round(price * other[0]) ;


        }
       }

       const handleAlphabetical = (e)=>{
        let letter = e.target.dataset.name
        setorderbystat(letter)
       let Answer = 1;
       // alphabet
       let formData = new FormData();
       formData.append('letter', letter)
       formData.append('page', Answer)
       let urltwo = `${url}/alphabetothm`;
       axios.post(urltwo, formData).then(res=>{
          if(res.data){
           Setdata(res.data.data)
           Setlast(res.data.last_page)
          }
         })
      }

      const handleNext = (data)=>{
        if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabetothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'Level 7' || orderbystat == 'Level 6' || orderbystat == 'Level 5' || orderbystat == 'Level 4'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categoriesothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/othmcheck`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }
      }


      const handleArrange =(e)=>{
        setorderbystat(e.target.dataset.name)
        let formData = new FormData();
        formData.append('orderby', e.target.dataset.name)
        formData.append('page', 1)
        let urltwo = `${url}/arrangmentothm`;
        axios.post(urltwo, formData).then(res=>{

           if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
           }
          })
           }


           const handleSearch=(e)=>{
            e.preventDefault();
            if(search.length > 0){
                let formData = new FormData();
                formData.append('items', search)
                let urltwo = `${url}/searchcourseothm`;
                axios.post(urltwo, formData).then(res=>{
                    console.log(res)
                   if(res.data){
                    Setdata(res.data)

                   }
                  })
            }

           }
           const handleLink = (id)=>{
            let formData = new FormData();
            let myHeader = new Headers();
            myHeader.append('Content-Type', 'application/json')
            formData.append("id", id)
            apiClient.get('/sanctum/csrf-cookie').then( ()=> {
                let urltwo = 'api/encrypt';
                   apiClient.post(urltwo, formData, myHeader).then(res=>{
                     if(res.data){
                     window.location.href =`${url}/courseinfo/OTHM/${res.data}`;

                     }

                    })
                })

           }

     const [overon, setoveron] = useState(1000)
 const handleOver = (index)=>{
    setoveron(index)
 }

 const handleLeave = ()=>{
    setoveron(1000)
 }

//  let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
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
    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }

    },1000)
    return () => clearInterval(interval);
 },[])
    const [read, Setread] = useState(true)
   const handleRead =()=>{
    Setread(true)
   }

    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
   
   
   
  return (
    <div>
       <Navbar/>

        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
            <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
            </div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
            <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
            </div>
            <div className="container">
            <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">OTHM Courses </h1>
                <ul className="breadcumb-menu">
                <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                <li> OTHM Courses </li>
                </ul>
            </div>
            </div>
        </div>

        <section class="space-top space-extra2-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 order-lg-1">
                        <aside class="sidebar-area sidebar-shop">
                            <div class="widget widget_search">
                                <div class="search-form">
                                    <input type="text" placeholder="Search Product..." onChange={(e)=>setsearch(e.target.value)} value={search}/>
                                    <button onClick={(e)=>handleSearch(e)}>
                                        <i class="far fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="widget widget_categories style2">
                                <h3 class="widget_title">Categories</h3>
                                <ul>
                                    <li>
                                        <input id="beginnercheck" name="beginnercheck" type="checkbox" checked="checked"/>
                                        <label for="beginnercheck">
                                            Beginner<span class="checkmark"></span>
                                        </label>
                                        <ul class="sub-cat">
                                            <li>
                                                <input id="designcheck" name="designcheck" type="checkbox" checked="checked"/>
                                                <label for="designcheck">
                                                    Design<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="devcheck" name="devcheck" type="checkbox"/>
                                                <label for="devcheck">
                                                    Development<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="photocheck" name="photocheck" type="checkbox"/>
                                                <label for="photocheck">
                                                    Photography<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="musiccheck" name="musiccheck" type="checkbox"/>
                                                <label for="musiccheck">
                                                    Music<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="cookingcheck" name="cookingcheck" type="checkbox"/>
                                                <label for="cookingcheck">
                                                    Cooking<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="financecheck" name="financecheck" type="checkbox"/>
                                                <label for="financecheck">
                                                    Finance<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="healthcheck" name="healthcheck" type="checkbox"/>
                                                <label for="healthcheck">
                                                    Health<span class="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="teccheck" name="teccheck" type="checkbox"/>
                                                <label for="teccheck">
                                                    Technology<span class="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <input id="reviewcheck" name="reviewcheck" type="checkbox"/>
                                        <label for="reviewcheck">
                                            Intermediate<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="reviewcheck" name="reviewcheck" type="checkbox"/>
                                        <label for="reviewcheck">
                                            Experts<span class="checkmark"></span>
                                        </label>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div class="widget widget_price_filter style2">
                                <h4 class="widget_title">Price Level</h4>
                                <ul>
                                    <li>
                                        <input id="freecheck" name="freecheck" type="checkbox" checked="checked"/>
                                        <label for="freecheck">
                                            Free<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="paidcheck" name="paidcheck" type="checkbox"/>
                                        <label for="paidcheck">
                                            Paid<span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="widget widget_time_duration style2">
                                <h4 class="widget_title">Time Duration</h4>
                                <ul>
                                    <li>
                                        <input id="timecheck1" name="timecheck1" type="checkbox"/>
                                        <label for="timecheck1">
                                            6+hours (15)<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="timecheck2" name="timecheck2" type="checkbox"/>
                                        <label for="timecheck2">
                                            6+hours (15)<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="timecheck3" name="timecheck3" type="checkbox"/>
                                        <label for="timecheck3">
                                            6+hours (15)<span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="widget widget_instructor style2">
                                <h4 class="widget_title">Our Instructor</h4>
                                <ul>
                                    <li>
                                        <input id="instructor1" name="instructor1" type="checkbox"/>
                                        <label for="instructor1">
                                            David Smith<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="instructor2" name="instructor2" type="checkbox"/>
                                        <label for="instructor2">
                                            Alex Jender<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="instructor3" name="instructor3" type="checkbox"/>
                                        <label for="instructor3">
                                            Lillian Wasla<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="instructor4" name="instructor4" type="checkbox"/>
                                        <label for="instructor4">
                                            Kiara Desuza<span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="instructor5" name="instructor5" type="checkbox"/>
                                        <label for="instructor5">
                                            Liam Anton<span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div class="col-xl-9 col-lg-8 order-lg-2">
                        <div class="th-sort-bar course-sort-bar">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-md">
                                    <p class="woocommerce-result-count">
                                        Showing <span class="text-theme">12 courses</span>
                                        Of 16 Result
                                    </p>
                                </div>
                                <div class="col-md-auto">
                                    <div class="nav" role="tablist">
                                        <a class="active" href="#" id="tab-shop-list" data-bs-toggle="tab" data-bs-target="#tab-list" role="tab" aria-controls="tab-grid" aria-selected="false">
                                            <i class="fa-solid fa-grid-2 me-2"></i>
                                            Grid
                                        </a>
                                        <a href="#" id="tab-shop-grid" data-bs-toggle="tab" data-bs-target="#tab-grid" role="tab" aria-controls="tab-grid" aria-selected="true">
                                            <i class="fa-solid fa-list me-2"></i>
                                            List
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="tab-grid" role="tabpanel" aria-labelledby="tab-shop-grid">
                                <div class="row gy-30">
                                    <div class="col-12">
                                        <div class="course-grid">
                                            <div class="course-img">
                                                <img src="assets/img/course/course_2_1.png" alt="img"/>
                                                <span class="tag">
                                                    <i class="fas fa-clock"></i>
                                                    03 WEEKS
                                                </span>
                                            </div>
                                            <div class="course-content">
                                                <div class="d-flex justify-content-between">
                                                    <div class="course-rating">
                                                        <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                            <span style={{width:'79%'}}>
                                                                Rated <strong class="rating">4.00</strong>
                                                                out of 5
                                                            </span>
                                                        </div>
                                                        (4.7)
                                                    </div>
                                                    <div class="offer-tag">Free</div>
                                                </div>
                                                <h3 class="course-title">
                                                    <a href="course-details.html">Education Software and PHP and JS System Script</a>
                                                </h3>
                                                <p class="course-text">We are committed to making a positive impact on education globally. Through our initiatives, we aim to bridge educational gaps, improve learning outcomes.</p>
                                                <div class="course-meta style2">
                                                    <span>
                                                        <i class="fal fa-file"></i>
                                                        Lesson 8
                                                    </span>
                                                    <span>
                                                        <i class="fal fa-user"></i>
                                                        Students 60+
                                                    </span>
                                                    <span>
                                                        <i class="fal fa-chart-simple"></i>
                                                        Beginner
                                                    </span>
                                                </div>
                                                <div class="course-author">
                                                    <div class="author-info">
                                                        <img src="assets/img/course/author.png" alt="author"/>
                                                        <a href="course.html" class="author-name">Max Alexix</a>
                                                    </div>
                                                    <a href="course-details.html" class="link-btn">
                                                        View Details<i class="fas fa-arrow-right ms-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="tab-pane fade active show" id="tab-list" role="tabpanel" aria-labelledby="tab-shop-list">
                                

                            <div class="course-single-bottom">
                                <ul class="nav course-tab" id="courseTab" role="tablist">
                                    
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true">
                                         
                                            Overview
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false">
                                           
                                            Curriculam
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">
                                            
                                            Instructor
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
                                        
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="productTabContent">
                                    <div class="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                        <div class="course-description">
                                            <h5 class="h5">Description</h5>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                        <div class="course-curriculam">
                                            <h5 class="h5">The Course Curriculam</h5>
                                            <p class="mb-30">Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary, making this the first true dummy generator on the Internet.</p>
                                           
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                        <div class="course-instructor">
                                            <div class="course-author-box">
                                                <div class="auhtor-img">
                                                    <img src="assets/img/team/team_2_1.jpg" alt="Author Image"/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        <div class="course-Reviews">
                                            <div class="th-comments-wrap">
                                                <p>review</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <div class="row gy-30">
                                    {Post.map((item, index)=>{
                                        return<li className={hover == index?"active tip":"tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
                                            <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
                                            <span className={overon == index?"top-[-18px] absolute w-100 text-sm bg-[#A32926]  text-white":'hidden'} >{item.substr(0, 30)}</span>
                                        </li>
                                    })}
                                    {data.map((item, index)=>{
                                        return  <div class="col-md-6 col-xl-4">
                                            <div class="course-box style2">
                                                <div class="course-img">
                                                    <img src="assets/img/course/course_1_5.png" alt="img"/>
                                                    <span class="tag">
                                                        <i class="fas fa-clock"></i>
                                                        03 WEEKS
                                                    </span>
                                                </div>
                                                <div class="course-content">
                                                    <div class="course-rating">
                                                        <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                            <span style={{width:'79%'}}>
                                                                Rated <strong class="rating">4.00</strong>
                                                                out of 5
                                                            </span>
                                                        </div>
                                                        (4.7)
                                                    </div>
                                                    <h3 class="course-title">
                                                        <a href="course-details.html">The Complete HTML & CSS Bootcamp 2023 Edition</a>
                                                    </h3>
                                                    <div class="course-meta">
                                                        <span>
                                                            <i class="fal fa-file"></i>
                                                            Lesson 8
                                                        </span>
                                                        <span>
                                                            <i class="fal fa-user"></i>
                                                            Students 60+
                                                        </span>
                                                        <span>
                                                            <i class="fal fa-chart-simple"></i>
                                                            Beginner
                                                        </span>
                                                    </div>
                                                    <div class="course-author">
                                                        <div class="author-info">
                                                            <img src="assets/img/course/author.png" alt="author"/>
                                                            <a href="course.html" class="author-name">Max Alexix</a>
                                                        </div>
                                                        <div class="offer-tag">Free</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div class="th-pagination text-center pt-50">
                                <ul>
                                    <li>
                                        <a href="blog.html">01</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">02</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">03</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            <i class="far fa-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

       <main>
       <div className="container">
            {/* <!-- Spacer --> */}
            <div className="page-spacer"></div>
            {/* <!-- Spacer --> */}
            <div className="lg:flex lg:space-x-10">
                <div className="lg:w-3/12 space-y-4 lg:block hidden">
                    <div>
                        <div className="font-semibold text-base mb-2 text-left">Order By</div>
                        <form className="space-y-1">
                            <div className="radio">
                                <input id="radio-1"  name="steve" data-name="ASC" onChange={(e)=>handleArrange(e)} type="radio" />
                                <label for="radio-1"><span className="radio-label"></span> ASC
                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="radio-2" name="steve" data-name="DESC" onChange={(e)=>handleArrange(e)}  type="radio"/>
                                <label for="radio-2"><span className="radio-label"></span> DESC
                                </label>
                            </div>
                            <br/>
                        </form>
                    </div>
                    <div>
                        <div className="font-semibold text-base mb-2 text-left">Group Order</div>
                        <form className="space-y-1">
                            <div className="radio">
                                <input id="radio-3"  name="alpha" data-name="a,b,c,d,e,f" onChange={(e)=>handleAlphabetical(e)} type="radio" />
                                <label for="radio-3"><span className="radio-label"></span> A-F
                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="radio-4" name="alpha" data-name="g,h,i,j,k,l" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
                                <label for="radio-4"><span className="radio-label"></span> G-L
                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="radio-5" name="alpha" data-name="m,n,o,p,q,r" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
                                <label for="radio-5"><span className="radio-label"></span> M-R
                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="radio-6" name="alpha" data-name="s,t,u,v,w,x" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
                                <label for="radio-6"><span className="radio-label"></span> S-X
                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="radio-7" name="alpha" data-name="y,z" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
                                <label for="radio-7"><span className="radio-label"></span> Y-Z
                                </label>
                            </div>
                        </form>
                    </div>
                    <div> </div>
                </div>
                <div className="w-full md:space-y-10 space-y-5">
                    <div className="flex flex-col">
                        <section className='w-full'>
                            <span className=' w-1/3 float-right font-extrabold   capitalize text-[#A32926]  cursor-pointer relative' onClick={handleRead}>
                            <span className="animate-ping absolute inline-flex h-8 w-8 text-sm sm:text-base md:text-lg lg:text-2xl rounded-full bg-sky-400 opacity-75 border"></span>
                                more about OTHM</span>
                        </section>
                        {/* <!-- title --> */}
                        <div className="mb-2">
                            <div className="text-xl font-semibold"> OTHM Courses  </div>
                        </div>

                        <section className="w-full flex flex-row items-center justify-center  space-x-1">
                            <span className='w-10/12 md:w-1/2 lg:w-2/5'>
                                <input type="text" className="w-full  rounded-sm border"    onChange={(e)=>setsearch(e.target.value)} value={search}/>
                            </span>
                            <span className='md:w-1/6 lg:w-1/12'>
                                <button className="py-2 grid place-content-center outline-none border-none bg-blue-500 text-white rounded-r-lg"  onClick={(e)=>handleSearch(e)}>search</button>
                            </span>
                        </section>
                        <div className="w-full">
                            <span className="w-1/5 float-right">
                                    <ReactPaginate
                                style={{ margin:"3px" }}
                                        previousLabel={'<'}
                                        nextLabel={'>'}
                                            pageCount={numberofpages}
                                        // breakLabel={"..."}
                                            //marginPagesDisplayed={2}
                                        //  pageRangeDisplayed={1}
                                            onPageChange={handlePag}
                                            containerClassName={'inline-flex items-center justify-center m-auto space-x-3'}
                                            pageClassName={'m-2 hidden'}
                                            pageLinkClassName={'py-1 px-1 text-md text-center rounded-lg bg-[#A32926] text-white hidden'}
                                            previousClassName={'py-1 px-1 text-md text-center rounded-l-lg bg-[#A32926] text-white text-lg h-8 w-8 grid place-content-center'}
                                            nextClassName={'py-1 px-1 text-md text-center rounded-r-lg bg-[#A32926] text-white text-lg  h-8 w-8 grid place-content-center'}
                                        />
                            </span>
                        </div>
                        {/* <!-- nav --> */}
                        <nav className="cd-secondary-nav border-b md:m-0 -mx-4 nav-small">
                            <ul className=" space-x-2">
                                {Post.map((item, index)=>{
                                return<li className={hover == index?"active tip":"tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
                                    <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
                                    <span className={overon == index?"top-[-18px] absolute w-100 text-sm bg-[#A32926]  text-white":'hidden'} >{item.substr(0, 30)}</span>
                                </li>
                                })}
                                {/* <li className="active"><a href="#" className="lg:px-2">   Python </a></li> */}

                            </ul>
                        </nav>

                    </div>
                <div>
            </div>

                    <div>
                        {/* <!-- course list --> */}
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {data.map((item, index)=>{
                            // console.log(item.purchased)
                            return <a  className="uk-link-reset" key={index}>
                            <div className="card uk-transition-toggle">
                                <div className="card-media h-40" onClick={()=>handleLink(item.id)}>
                                    <div className="card-media-overly"></div>
                                    <img src={item.picture} alt="" className=""/>
                                    <span className="icon-play"></span>
                            {item.purchased?<div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
                                purchased</div>:""}
                                </div>
                                <div className="card-body p-4">
                                    <div className="font-semibold line-clamp-2 cursor-pointer" onClick={()=>handleLink(item.id)}>{item.coursename}
                                    </div>
                                    {/* { item.purchased?'': */}

                                    { item.purchased?'':username?<div className="flex space-x-2 items-center text-sm pt-3">
                                                    <div className="flex flex-row items-center" onClick={()=>handleCart(item.coursename,  item)}>    {getBtnText(item.coursename) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                                                                <AiOutlineShopping  className={getBtnText(item.coursename)} /> </div>
                                                    <div>·</div>
                                                    <div> {item.lesson} lectures </div>
                                                </div>:""}


                                    <div className="pt-1 flex items-center justify-between">
                                    <div className='text-lg font-semibold'><CurrencyFormat value={moneyTalks(item.currency_name, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} /></div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        })}






                        </div>
                        {/* <!-- Pagination --> */}
                        <div className="flex justify-center mt-9 space-x-2 text-base font-semibold text-gray-400 items-center">
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                pageCount={last}
                                breakLabel={"..."}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={1}
                                onPageChange={handleNext}
                                containerClassName={'inline-flex items-center justify-center m-auto '}
                                pageClassName={'m-2'}
                                pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
                                previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                                nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>


        <Footer />
    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
