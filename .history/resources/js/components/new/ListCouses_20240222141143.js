import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

function ListCouses() {
    let url = window.location.origin;
    let uniarr = Object.values(unique)

    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [orderbystat, setorderbystat] = useState('')
    const [categories, setcategories] = useState('')
    const [search, setsearch] = useState('')
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage
       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost)

       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
    // Logic to paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
    });

    const handleLink =(word, id)=>{
        console.log(`Clicked on course with id ${id}`);
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
               apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(res.data){
                    window.location.href =`${url}/courseinfo/${word}/${res.data}`;
                 }
                })
        })
    }


  
    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'icon-btn '
        }else{
            return 'icon-btn  text-[#A32926]'
        }
    }
    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
   // let other =  Object.values(othersmoneys.result);
    let converted = JSON.parse(currencyex) 
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
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }

    const reviewStarStyle = {
        width: '20px',
        height: '20px',
    };

    const pcTitleStyle = {
        marginRight: '20px',
    };

  return (
    <div>
        <Navbar />
        
        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
                <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">Courses</h1>
                <ul className="breadcumb-menu">
                    <li><a onClick={handlehome} style={{cursor:'pointer'}}>Home</a></li>
                    <li>Courses</li>
                </ul>
                </div>
            </div>
        </div>

        <section class="space-top space-extra-bottom">
            <div class="container">
                <div class="th-sort-bar">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-auto">
                            <span class="course-result-count">We found <span class="text-theme">1{numberOfData} courses</span> available for you</span>
                        </div>
                        
                    </div>
                </div>

                <div class="tab-content" id="nav-tabContent">
                
                     <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                        <div class="row gy-4 mb-30">
                        {currentPosts.map(item => (
                            <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                                
                                <div class="course-box2 style2">
                                    <div class="course-img">
                                        <img style={{ width: '350px', height: '250px' }} src={item.picture} alt={item.coursename} /> 
                                        {/* <span class="tag"> { item.price}</span> */}
                                        
                                        <span class="tag">
                                            <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                                        </span>
                                    </div>
                                    <div class="course-content">
                                        <div class="course-author">
                                           
                                            <div className="course-rating">
                                                <div className="star-rating" role="img" aria-label={`Rated ${item.rating || 0} out of 5`}>
                                                    <span style={{ width: `${((item.rating || 0) / 5) * 100}%` }}>
                                                        Rated <strong className="rating">{item.rating || 0}</strong> out of 5
                                                    </span>
                                                </div>
                                            </div>
                                        </div> 
                                        <h4 class="course-title">
                                            <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer' }}> {item.coursename} </a>
                                        </h4>
                                        <div class="course-meta">
                                            <div class="author-info">
                                            <span>
                                                <i className="fal fa-file"></i>{' '}
                                                {item.lesson !== null ? item.lesson : '0'} Lesson
                                            </span>
                                            {' '}
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
                                            {/* <CurrencyFormat value={moneyTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />  */}
                                        </div>
                                    </div> 
                                </div>
                                
                            </div>
                        ))}
                        </div>
                    </div>
                    
                </div>

               
                {/* Pagination */}
                <div class="th-pagination text-center pt-20">
                    <ul >
                    {Array.from({ length: Math.ceil(data.length / postsPerPage) }).map((_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                
            </div>
        </section>

       


        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}
