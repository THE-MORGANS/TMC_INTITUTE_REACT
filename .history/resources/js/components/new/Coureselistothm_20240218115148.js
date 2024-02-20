
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
    const [read, Setread] = useState(false)
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
                                <div class="row gy-30">
                                {Post.map((item, index)=>{
                                    return <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
                                    <span className={overon == index?"top-[-18px] absolute w-100 text-sm bg-[#A32926]  text-white":'hidden'} >{item.substr(0, 30)}</span>
                               
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
            <section className="shop-main container d-flex pt-4 pt-xl-5">
                <div className="shop-sidebar side-sticky bg-body" id="shopFilter">
                    <div className="aside-header d-flex d-lg-none align-items-center">
                        <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
                        <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
                    </div>
                    <div className="pt-4 pt-lg-0"></div>

                    <div className="accordion" id="brand-filters1">

                        <div className="accordion-item mb-4 pb-3">
                            <h5 className="accordion-header" id="accordion-heading-brand1">
                                <span className="accordion-button p-0 border-0 fs-5 text-uppercase">
                                    Order By
                                    {/* <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                            <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z"/>
                                        </g>
                                    </svg> */}
                                </span>
                            </h5>
                            <div id="accordion-filter-brand1" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-brand1" data-bs-parent="#brand-filters1">
                                <div className="search-field multi-select accordion-body px-0 pb-0">
                                    <select className="d-none" multiple name="total-numbers-list">
                                        <option value="asc">ASC</option>
                                        <option value="desc">DESC</option>
                                    </select>
                                   
                                    <ul className="multi-select__list list-unstyled">
                                        <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                            <span className="me-auto">ASC</span>
                                        </li>
                                        <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                            <span className="me-auto">DESC</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion" id="brand-filters">
                            <div className="accordion-item mb-4 pb-3">
                                <h5 className="accordion-header" id="accordion-heading-brand2">
                                    <span className="accordion-button p-0 border-0 fs-5 text-uppercase">
                                        Group Order
                                        {/* <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                            <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z"/>
                                            </g>
                                        </svg> */}
                                    </span>
                                </h5>
                                <div id="accordion-filter-brand2" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-brand" data-bs-parent="#brand-filters">
                                    <div className="search-field multi-select accordion-body px-0 pb-0">
                                        <select className="d-none" multiple name="total-numbers-list">
                                            <option value="1">A-F</option>
                                            <option value="2">G-L</option>
                                            <option value="3">M-R</option>
                                            <option value="4">S-X</option>
                                            <option value="5">Y-Z</option>
                                        </select>
                                        <div className="search-field__input-wrapper mb-3">
                                            <input type="text" className="search-field__input form-control form-control-sm border-light border-2" placeholder="Search" />
                                        </div>
                                        <ul className="multi-select__list list-unstyled">
                                            <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span className="me-auto">A - F</span>
                                                <span className="text-secondary">2</span>
                                            </li>
                                            <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span className="me-auto">G - L</span>
                                                <span className="text-secondary">7</span>
                                            </li>
                                            <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span className="me-auto">M - R</span>
                                                <span className="text-secondary">10</span>
                                            </li>
                                            <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span className="me-auto">S - X</span>
                                                <span className="text-secondary">39</span>
                                            </li>
                                            <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                                                <span className="me-auto">Y - Z</span>
                                                <span className="text-secondary">95</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-list flex-grow-1">
				<div className="swiper-container js-swiper-slider slideshow slideshow_small"
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
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="overflow-hidden position-relative h-100" style={{backgroundColor: '#eee'}}>
								<div className="slideshow-character position-absolute bottom-0 pos_right-center">
									<img loading="lazy" src="../images/home/demo4/slider1.png" width="246" height="450" alt="Woman Fashion 1" className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto" />
									<div className="character_markup">
										<p className="font-special text-uppercase animate animate_fade animate_rtl animate_delay-10">Summer</p>
									</div>
								</div>
								<div className="slideshow-text container position-absolute start-50 top-50 translate-middle p-3 p-xl-5">
									<h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Irem Ison</h6>
									<h2 className="text-uppercase page-title fw-normal mb-0 animate animate_fade animate_btt animate_delay-5"> Irem Ison</h2>
									<h2 className="text-uppercase page-title fw-bold animate animate_fade animate_btt animate_delay-5">Course</h2>
									<a href="#" className="btn-link btn-link_lg text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Irem Ison</a>
								</div>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="overflow-hidden position-relative h-100" style={{backgroundColor: '#eee'}}>
								<div className="slideshow-character position-absolute bottom-0 pos_right-center">
									<img loading="lazy" src="../images/slideshow-character2.png" width="261" height="450" alt="Woman Fashion 2" className="slideshow-character__img animate animate_fade animate_rtl animate_delay-10 w-auto h-auto" />
								</div>
								<div className="slideshow-text container position-absolute start-50 top-50 translate-middle p-3 p-xl-5">
									<h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">Summer 2020</h6>
									<h2 className="text-uppercase page-title fw-bold animate animate_fade animate_btt animate_delay-3">Hello New Irem Ison</h2>
									<h6 className="text-uppercase mb-3 animate animate_fade animate_btt animate_delay-3">Irem Ison</h6>
									<a href="#" className="btn-link btn-link_lg text-uppercase fw-medium animate animate_fade animate_btt animate_delay-3">Discover More</a>
								</div>
							</div>
						</div>
					</div>

					<div className="p-3 p-xl-5">
						<div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-4"></div>
						
					</div>
				</div>

				<div className="mb-3 pb-2 pb-xl-3"></div>

				<div className="d-flex justify-content-between mb-0 pb-md-0">
					<div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
						<a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium" >Home</a>
						<span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">/</span>
						<a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium" >Othm courses</a>
					</div>
					<div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
						<div className="col-size align-items-center order-1 d-none d-lg-flex">
							<span className="text-uppercase fw-medium me-2">More About OTHM</span>
						</div>
					</div>
				</div>
                <div className="product-single__details-tab">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link nav-link_underscore active" id="tab-level1-tab" data-bs-toggle="tab" href="#tab-level1" role="tab" aria-controls="tab-level1" aria-selected="true">Level 4</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link nav-link_underscore" id="tab-level2-info-tab" data-bs-toggle="tab" href="#tab-level2-info" role="tab" aria-controls="tab-level2-info" aria-selected="false">Level 5</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link nav-link_underscore" id="tab-level3-tab" data-bs-toggle="tab" href="#tab-level3" role="tab" aria-controls="tab-reviews" aria-selected="false">Level 6</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link nav-link_underscore" id="tab-level4-tab" data-bs-toggle="tab" href="#tab-level4" role="tab" aria-controls="tab-reviews" aria-selected="false">Level 7</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-level1" role="tabpanel" aria-labelledby="tab-level1-tab">
                            <div className="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/>
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html"><img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
            
                            <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <svg className="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span className="fw-medium">PREV</span>
                                </a>
                                <ul className="pagination mb-0">
                                    <li className="page-item"><a className=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">2</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">3</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <span className="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                        <div className="tab-pane fade" id="tab-level2-info" role="tabpanel" aria-labelledby="tab-level2-info-tab">
                            <div className="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <svg className="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span className="fw-medium">PREV</span>
                                </a>
                                <ul className="pagination mb-0">
                                    <li className="page-item"><a className=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">2</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">3</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <span className="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                        
                        <div className="tab-pane fade" id="tab-level3" role="tabpanel" aria-labelledby="tab-level3-tab">
                            <div className="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div className="product-card-wrapper">
                                        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                            <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                                <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                    <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
                                                                    <a href="./coursedetails.html">
                                                                        <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/></a>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <a href="./coursedetails.html">
                                                                        <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                                            
                                                                </div>
                                                                        
                                                                <span className="pc__img-prev">
                                                                <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                                    
                                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                                    </div>
                                                    <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                                </div>
                
                                                    <div className="pc__info position-relative">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                            </div>
                                                            <div className="col">
                                                                <a href="../demo/cart.html" style={{color: '#A32926'}}  className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                                    <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <use href="#icon_cart" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            
                                                        </div>
                                                    
                                                        <div className="product-card__price d-flex">
                                                            <span className="money price price-old">$129</span>
                                                            <span className="money price price-sale">$695.00</span>
                                                        </div>
                                                        
                                                        <div className="product-card__review d-flex align-items-center">
                                                            <div className="reviews-group d-flex">
                                                                <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                                <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                                <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                                <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                                <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                            </div>
                                                            <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                                        </div>
                                                    </div>
                                            
                                            <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                                <div className="pc-labels__right ms-auto">
                                                    <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-card-wrapper">
                                        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                            <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                                <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <a href="./coursedetails.html">
                                                                <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <a href="./coursedetails.html">
                                                                <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                    <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                                </div>
                                                <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                            </div>
                
                                            <div className="pc__info position-relative">
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                    </div>
                                                    <div className="col">
                                                        <a href="../demo/cart.html" style={{color: '#A32926'}}  className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                            <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <use href="#icon_cart" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    
                                                </div>
                                            
                                                <div className="product-card__price d-flex">
                                                    <span className="money price price-old">$129</span>
                                                    <span className="money price price-sale">$695.00</span>
                                                </div>
                                                
                                                <div className="product-card__review d-flex align-items-center">
                                                    <div className="reviews-group d-flex">
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    </div>
                                                    <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                                </div>
                                            </div>
                                            
                                            <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                                <div className="pc-labels__right ms-auto">
                                                    <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-card-wrapper">
                                        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                            <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                                <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <a href="./coursedetails.html">
                                                                <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <a href="./coursedetails.html">
                                                                <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                        </div>
                                                    </div>
                                                    <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                    <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                                </div>
                                                <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                            </div>
                
                                            <div className="pc__info position-relative">
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                    </div>
                                                    <div className="col">
                                                        <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                            <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <use href="#icon_cart" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    
                                                </div>
                                            
                                                <div className="product-card__price d-flex">
                                                    <span className="money price price-old">$129</span>
                                                    <span className="money price price-sale">$695.00</span>
                                                </div>
                                                
                                                <div className="product-card__review d-flex align-items-center">
                                                    <div className="reviews-group d-flex">
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                        <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    </div>
                                                    <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                                </div>
                                            </div>
                                            
                                            <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                                <div className="pc-labels__right ms-auto">
                                                    <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          
            
                            <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <svg className="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span className="fw-medium">PREV</span>
                                </a>
                                <ul className="pagination mb-0">
                                    <li className="page-item"><a className=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">2</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">3</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <span className="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                        </div>
                        
                        <div className="tab-pane fade" id="tab-level4" role="tabpanel" aria-labelledby="tab-level4-tab">
                            <div className="products-grid row row-cols-2 row-cols-md-3" id="products-grid" >
                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" /></a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color:'#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/>
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                           
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="product-card-wrapper">
                                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                        <div className="pc__img-wrapper" style={{border: '2px solid #eee'}}>
                                            <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}' >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" />
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="./coursedetails.html">
                                                            <img loading="lazy" src="../images/home/OTHM_img.png" width="258" height="250" alt="Cropped Faux leather Jacket" className="pc__img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <span className="pc__img-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></span>
                                                <span className="pc__img-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></span>
                                            </div>
                                            <a className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium "  title="Add To Cart">Add To Cart</a>
                                        </div>
            
                                        <div className="pc__info position-relative">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="pc__title"><a href="#">Advanced Diploma in Project Management</a></h6>
                                                </div>
                                                <div className="col">
                                                    <a href="../demo/cart.html" style={{color: '#A32926'}} className="btn-round pc__btn-wl position-absolute top-0 end-0 bg-transparent  js-add-wishlist btn btn-round btn-hover-red  text-uppercase me-2" data-aside="cartDrawer" title="Add To Cart">
                                                        <svg  width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <use href="#icon_cart" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                           
                                            <div className="product-card__price d-flex">
                                                <span className="money price price-old">$129</span>
                                                <span className="money price price-sale">$695.00</span>
                                            </div>
                                            
                                            <div className="product-card__review d-flex align-items-center">
                                                <div className="reviews-group d-flex">
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><use href="#icon_star" /></svg>
                                                </div>
                                                <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                            <div className="pc-labels__right ms-auto">
                                                <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <svg className="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
                                    <span className="fw-medium">PREV</span>
                                </a>
                                <ul className="pagination mb-0">
                                    <li className="page-item"><a className=" px-1 mx-2 btn-link_active" href="#">1</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">2</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">3</a></li>
                                    <li className="page-item"><a className=" px-1 mx-2" href="#">4</a></li>
                                </ul>
                                <a href="#" className=" d-inline-flex align-items-center">
                                    <span className="fw-medium me-1">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
                                </a>
                            </nav>
                        </div>
                    

                </div>

				</div>
			</div>
            </section>
        </main>


        <Footer />
    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
