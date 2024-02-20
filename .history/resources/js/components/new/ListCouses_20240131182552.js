import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';

function ListCouses() {
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])

  
    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'icon-btn '
        }else{
            return 'icon-btn  text-[#A32926]'
        }
    }
    // let symbol = currencysymbol.currency.symbol
    // let moneyname = currencysymbol.currency.name
    // let converted = JSON.parse(currencyex)
    // let convertnaira = converted.result.NGN
    // const [symbol, setSymbol] = useState(currencysymbol.currency.symbol);
    // const [moneyName, setMoneyName] = useState(currencysymbol.currency.name);
    // const [converted, setConverted] = useState(JSON.parse(currencyex));
    
   
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
                <h1 className="breadcumb-title">Courses Page 02</h1>
                <ul className="breadcumb-menu">
                    <li><a href="index.html">Home</a></li>
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
                            <span class="course-result-count">We found <span class="text-theme">12 courses</span> available for you</span>
                        </div>
                        
                    </div>
                </div>

                <div class="tab-content" id="nav-tabContent">
                
                     <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                        <div class="row gy-4 mb-30">
                        {data.map(item => (
                            <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                                <a onClick={()=>handleLink('TMC', item.id)}>
                                <div class="course-box2 style2">
                                    <div class="course-img">
                                        <img style={{ width: '350px', height: '250px' }} src={item.picture} alt={item.coursename} /> <span class="tag"> { item.price}</span>
                                    </div>
                                    <div class="course-content">
                                        <div class="course-author">
                                                <div class="author-info">
                                                {/* <img src="assets/img/update1/course/author.jpg" alt="author"/>  */}
                                                <a onClick={()=>handleLink('TMC', item.id)} class="author-name">
                                                    {item.instructor == null ? "" : `By ${item.instructor}`}
                                                </a>
                                            </div>
                                            <div class="course-rating">
                                                <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                    <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                </div>(4.00)
                                            </div>
                                        </div> 
                                        <h4 class="course-title">
                                            <a onClick={()=>handleLink('TMC', item.id)}> {item.coursename.substring(0, 30)+'...'} </a>
                                        </h4>
                                        <div class="course-meta">
                                            <span><i class="fal fa-file"></i>{item.lesson} lectures </span> 
                                            <span><i class="fal fa-user"></i>Students 50</span> 
                                            <a  className={getBtnText(item.id)}  onClick={()=>handleCart(item.id)}>
                                                <i className="far fa-shopping-cart"></i> <span className="badge">5</span>
                                            </a> {' '}
                                            {/* <CurrencyFormat value={moneyTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />  */}
                                        </div>
                                    </div> 
                                </div>
                                </a>
                            </div>
                        ))}
                        </div>
                    </div>
                    
                </div>

                <div class="th-pagination text-center pt-20">
                    <ul>
                        <li><a href="blog.html">01</a></li>
                        <li><a href="blog.html">02</a></li>
                        <li><a href="blog.html">03</a></li><li><a href="blog.html"><i class="far fa-arrow-right"></i></a></li></ul></div>
                
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
