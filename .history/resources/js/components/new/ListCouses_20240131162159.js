import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';

function ListCouses() {
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);

    const handlemouse =(num, word)=>{
        setorderbystat(word)
        Sethover(num)
        let formData = new FormData();
        formData.append('categories', word)
        formData.append('page', 1)
        let urltwo = `${url}/categories`;
        axios.post(urltwo, formData).then(res=>{
        if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
        }
        })
    }

    const handleNext = (data)=>{
        if(orderbystat == ''){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/coursesdata`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'ASC' || orderbystat == 'DESC'){
            let Answer = data.selected + 1;
           let formData = new FormData();
           formData.append('orderby', orderbystat)
           formData.append('page', Answer)
           let urltwo = `${url}/arrangment`;
           axios.post(urltwo, formData).then(res=>{
              if(res.data){
               Setdata(res.data.data)
               Setlast(res.data.last_page)
              }
             })
        }else if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabet`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categories`;
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
        let urltwo = `${url}/arrangment`;
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
        let urltwo = `${url}/searchcourse`;
        axios.post(urltwo, formData).then(res=>{
            console.log(res)
           if(res.data){
            Setdata(res.data)
           }
        })
    }
   }
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
        let formData = new FormData();
        formData.append("cartitems", stringdata)
        let urltwo = `${url}/addcart`;
        axios.post(urltwo, formData).then(res=>{

            })
    }
 }

 const getBtnText =(id)=>{
    let cart = Cart.find((item)=>item.id == id);
    if(cart){
      return 'text-2xl text-green-400'
    }else{
        return 'text-2xl text-[#A32926]'
    }
}
// let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
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
   
    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
    });
   
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
                        <div className="col-md-auto">
                            <div className="nav" role="tablist">
                                <a
                                href="#"
                                className="active"
                                id="tab-course-grid"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-grid"
                                role="tab"
                                aria-controls="tab-grid"
                                aria-selected="true"
                                >
                                <i className="fa-solid fa-grid-2"></i> Grid
                                </a>{' '}
                                <a
                                href="#"
                                id="tab-course-list"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-list"
                                role="tab"
                                aria-controls="tab-grid"
                                aria-selected="false"
                                >
                                <i className="fas fa-list"></i> List
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                        <div class="row gy-4 mb-30">
                        {data.map((item, index)=>{
                            return <a  className="uk-link-reset" key={index}>
                                <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                                    <div class="course-box2 style2">
                                        <div class="course-img">
                                            <img src="assets/img/update1/course/course_1_1.jpg" alt="course"/> <span class="tag">Free</span>
                                        </div>
                                        <div class="course-content">
                                            <div class="course-author">
                                                    <div class="author-info">
                                                    <img src="assets/img/update1/course/author.jpg" alt="author"/> 
                                                    <a href="course.html" class="author-name">Kevin Perry</a>
                                                </div>
                                                <div class="course-rating">
                                                    <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                        <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                    </div>(4.00)
                                                </div>
                                            </div> 
                                            <h3 class="course-title">
                                                <a href="course-details.html">Learn React JS Tutorial For Beginners</a>
                                            </h3>
                                            <div class="course-meta">
                                                <span><i class="fal fa-file"></i>Lesson 8</span> 
                                                <span><i class="fal fa-user"></i>Students 50</span> <span><i class="fal fa-eye"></i>View: 12K</span>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </a>
                        })}
                        </div>
                    </div>
                    <div class="tab-pane fade active show" id="tab-list" role="tabpanel" aria-labelledby="tab-course-list">
                        <div class="row gy-4 mb-30">
                        {data.map((item, index)=>{
                            return   <a  className="uk-link-reset" key={index}>
                                    <div class="col-12">
                                        <div class="course-grid">
                                            <div class="course-img">
                                                <img src="assets/img/course/course_2_1.png" alt="img"/> <span class="tag"><i class="fas fa-clock"></i> 03 WEEKS</span>
                                            </div>
                                            <div class="course-content">
                                                <div class="d-flex justify-content-between">
                                                    <div class="course-rating">
                                                        <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                            <span style={{width:'79%'}}>Rated <strong class="rating">4.00</strong> out of 5</span>
                                                        </div>(4.7)
                                                    </div>
                                                    <div class="offer-tag">Free</div>
                                                </div>
                                                <h3 class="course-title">
                                                    <a href="course-details.html">Education Software and PHP and JS System Script</a>
                                                </h3>
                                                <p class="course-text">We are committed to making a positive impact on education globally. Through our initiatives, we aim to bridge educational gaps, improve learning outcomes.</p>
                                                <div class="course-meta style2">
                                                    <span><i class="fal fa-file"></i>Lesson 8</span> 
                                                    <span><i class="fal fa-user"></i>Students 60+</span> <span><i class="fal fa-chart-simple"></i>Beginner</span>
                                                </div>
                                                <div class="course-author">
                                                    <div class="author-info">
                                                        <img src="assets/img/course/author.png" alt="author"/> 
                                                        <a href="course.html" class="author-name">Max Alexix</a>
                                                    </div>
                                                    <a href="course-details.html" class="link-btn">View Details<i class="fas fa-arrow-right ms-2"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                         })}
                        </div>
                    </div>
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
