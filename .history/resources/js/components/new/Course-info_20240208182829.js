import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

export default function Course_info() {
    let url = window.location.origin;
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [data, Setdata] = useState(allcourse.length > 0?allcourse:[]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

   // Logic to get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);




    const handleCart = (id)=>{
            let cart = data.find((item)=>item.id == id)
            // console.log(cart)
            let object =   cart.standard_price?{
                certification: cart.certification,
                coursedetails: cart.coursedetails,
                coursename: cart.coursename,
                coursetype: cart.coursetype,
                created_at: cart.created_at,
                currency_name:cart.currency_name ,
                duration: cart.duration,
                firstletter: cart.firstletter,
                id:cart.id,
                instructor: cart.instructor,
                language: cart.language,
                learning:cart.learning ,
                lesson: cart.lesson ,
                picture: cart.picture,
                quizzes:cart.quizzes,
                rating: cart.rating,
                price:cart.standard_price,
                updated_at:cart.updated_at,
                whothiscoursefor:cart.whothiscoursefor,
            }:cart
            let Awnser =  Cart.map(item=>item.id != id)
            let ans =   Awnser.includes(false)
          if(ans == false){
            SetCart([
                ...Cart,
                object,

            ])
            let AddCart = [...Cart, object]
            localStorage.setItem('Cart', JSON.stringify(AddCart))
              let stringdata =  JSON.stringify(AddCart)
            let formData = new FormData();
            formData.append("cartitems", stringdata)
              let urltwo = `${url}/addcart`;
              axios.post(urltwo, formData).then(res=>{
                 console.log(res)
                })

          }

     }

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


     const getBtnText = (id) => {
       
        let cart = Cart.find((item) => item.id === 22);
         console.log(cart);
        if (cart) {
            return '0'; // Return this if item with id exists
        } else {
            return '1'; // Return this if item with id doesn't exist
        }
    };
    

    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

    const handleLearn=(id)=>{
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
         apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(additional == false){
                    window.location.href = `${url}/profile`;
                }else if(additional == true && res.data){
                    window.location.href =`${url}/coursevideos/${word}/${res.data}`;
                }
                })
            })

    }

    const handleEnrol = ()=>{
        window.location.href =`${url}/signup`;
    }

    const handleEnrolCom =()=>{
        window.location.href =`${url}/companyregister`;
    }
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
    function convertDate(rawDate){
        const inputDate = new Date(rawDate);
        const monthsInEnglish = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = monthsInEnglish[inputDate.getMonth()];
        const year = inputDate.getFullYear();

        return `${day} ${month} ${year}`;
    }
    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
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
// dhdghdg 
  return (
    <div >
       <Navbar/>

        <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div class="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div class="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
                <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape"/>
            </div>
            <div class="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
                <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape"/>
            </div>
            <div class="container">
                <div class="breadcumb-content text-center">
                    <h1 class="breadcumb-title">Courses Details</h1>
                    <ul class="breadcumb-menu">
                        <li>
                            <a onClick={handlehome} style={{cursor:'pointer'}} >Home</a>
                        </li>
                        <li>Courses Details</li>
                    </ul>
                </div>
            </div>
        </div>

        <section className="space-top space-extra2-bottom">
            <div className="container">
                <div className="row">
                <div className="col-xxl-9 col-lg-8">
                    <div className="course-single">
                        <div className="course-single-top">
                            <div className="course-img">
                            <img src={single.picture} alt={single.coursename} />
                            {/* <span className="tag"><i className="fas fa-clock"></i> 03 WEEKS</span> */}
                            {/* <span className="tag bg-theme">BEST SELLER</span> */}
                            </div>
                            <div className="course-meta style2">
                            <span><i className="fal fa-file"></i>Lesson {single.lesson}</span>
                            <span><i className="fal fa-user"></i>Students 60+</span>
                            </div>
                            <h2 className="course-title">{single.coursename}</h2>
                            <ul className="course-single-meta">
                                <li><span className="meta-title">Instructor: </span><a href="course.html">{single.instructor}</a></li>

                                <li><span className="meta-title">Category: </span><a href="course.html">{single.coursename}</a></li>
                                <li><span className="meta-title">Last Update: </span><a href="course.html">{convertDate(single.created_at)}</a></li>
                                <li>
                                    <span className="meta-title">Review:</span>
                                    <div className="course-rating">
                                    <div className="star-rating" role="img" aria-label={`Rated ${single.rating} out of 5`}>
                                        <span style={{ width: `${(single.rating / 5) * 100}%` }}>
                                            Rated <strong className="rating">{single.rating}</strong> out of 5</span>
                                    </div>({single.rating == null?0:single.rating})
                                    

                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="course-single-bottom">
                            <ul class="nav course-tab" id="courseTab" role="tablist">
                                <li class="nav-item" role="presentation"><a class="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab"      aria-controls="Coursedescription" aria-selected="true"><i class="fa-regular fa-bookmark"></i>Overview</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false">
                                        <i class="fa-regular fa-book"></i>Curriculum
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation"><a class="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i class="fa-regular fa-user"></i>Instructor</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="productTabContent">
                                <div class="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                    <div class="course-description">
                                        <h5 class="h5">Description</h5>
                                        <p>
                                            <Markup content={single.coursedetails.substring(0, 200)+'...'}/> 
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="curriculam"
                                    role="tabpanel"
                                    aria-labelledby="curriculam-tab"
                                >
                                    <div class="course-curriculam">
                                        <h4 class="h4">The Course Curriculum</h4>
                                        <h5 class="h5">{single.MainHead} </h5>
                                        <h5 class="h6">{single.coursename} </h5>
                                        {video.map((item, index) => (
                                            <div class="checklist mb-1">
                                                <ul>
                                                <li className="hover:bg-gray-100  mb-3 flex rounded-md items-center" key={index}>
                                                        {usercourse ? (
                                                        <>
                                                            {/* <BsFillPlayFill /> {item.courseepisodetitle}{' '} */}
                                                            {item.courseepisodetitle}{' '}
                                                            <span >{item.courseduration}</span>
                                                            
                                                        </>
                                                        ) : (
                                                        <>
                                                         <ul className="course-single-meta">
                                                            {/* <AiFillLock /> {item.courseepisodetitle}{' '} */}
                                                            {item.courseepisodetitle}{' '}
                                                            <span>{item.courseduration}</span>
                                                            <div className="th-video">
                                                            <img src={single.picture} style={{ width: '50px', height: '50px', borderRadius:'30px' }} alt="video" />
                                                            <a href={item.courselink} className="play-btn popup-video" style={{ width: '50px', height: '50px'}} >
                                                                <i className="fas fa-play"  style={{ width: '50px', height: '50px'}}></i>
                                                                {/* <i className="fas fa-play"  style={{ transform: 'scale(0.8)' }}></i> */}
                                                            </a>
                                                            </div>
                                                        </ul>
                                                            
                                                        </>
                                                        )}
                                                    </li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div className="course-instructor">
                                        <div className="course-author-box">
                                        
                                        <div className="media-body">
                                            <h3 className="author-name">
                                                <a className="text-inherit" >{single.instructor}</a>
                                            </h3>
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-4">
                    <aside class="sidebar-area">
                        <div class="widget widget_info">
                            <div class="th-video">
                           
                            <img src={single.picture} alt="video" />
                            {/* <a
                                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                                class="play-btn popup-video"
                                ><i class="fas fa-play"></i
                            ></a> */}
                            </div>
                            {/* <span class="h4 course-price"> {single.price} 
                                <span class="tag">25% Off</span>
                            </span> */}
                            <span className='h4 course-price'>
                                <CurrencyFormat value={moneyTalks(single.converted, single.price, single.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                            </span>
                           
                            <h3 class="widget_title">Course Information</h3>
                            <div class="info-list">
                            <ul>
                                <li>
                                <i class="fa-light fa-user"></i>
                                <strong>Instructor: </strong><span>{single.instructor}</span>
                                </li>
                                <li>
                                <i class="fa-light fa-file"></i> <strong>Lessons: </strong
                                ><span>{single.lesson}</span>
                                </li>
                                <li>
                                <i class="fa-light fa-clock"></i>
                                <strong>Duration: </strong><span>{single.duration}</span>
                                </li>
                                <li>
                                <i class="fa-light fa-globe"></i>
                                <strong>Language: </strong><span>English</span>
                                </li>
                                <li>
                                <i class="fa-light fa-puzzle-piece"></i>
                                <strong>Quizzes: </strong><span>{single.quizzes}</span>
                                </li>
                            </ul>
                            </div>
                            {/* {usercourse?
                                 <a onClick={()=>handleLearn(single.id)}  class="th-btn style6 mt-35 mb-2">Start Learning</a>
                                :username?"":
                                <a onClick={handleEnrolCom}  class="th-btn mt-4">Enrol as a Company</a>
                            }*/}
                            
                            {/* {usercourse?
                                <a onClick={()=>handleLearn(single.id)}  class="th-btn style5 mt-35 mb-2">Purchased</a>:
                                username?
                                <a  onClick={()=>handleCart(single.id)} class="th-btn style6 mt-10"> {getBtnText(single.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} </a> 
                                 :
                                <a  onClick={handleEnrol} class="th-btn style4">Enrol as a Student</a>
                            }  */}
                    

                            <p key={id} className={getBtnText(31)}>Item {single.id}: {getBtnText(31)}</p>
           
                            {/* {usercourse?
                                <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-green-500 text-white cursor-pointer" style={{color:'white' }}> Purchased </a>:
                                username?
                                <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-blue-600 text-white cursor-pointer" onClick={()=>handleCart(single.id)} style={{color:'white' }}> 
                                {getBtnText(single.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'}  </a>:
                                <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-[#A32926] text-white cursor-pointer" onClick={handleEnrol} > Enrol as a Student </a>
                            } */}
                        </div>
                        </aside>
                </div>
                </div>
            </div>
        </section>

        <section class="space-bottom">
            <div class="container">
                <div class="title-area text-center">
                <span class="sub-title"
                    ><i class="fal fa-book me-2"></i> Related Courses</span
                >
                <h2 class="sec-title">Courses You May Like</h2>
                </div>
                <div
                class="row slider-shadow th-carousel course-slider-1"
                data-slide-show="4"
                data-ml-slide-show="3"
                data-lg-slide-show="3"
                data-md-slide-show="2"
                data-sm-slide-show="1"
                data-arrows="true"
                >
                {currentPosts.map(item => (
                    <div class="col-md-6 col-xl-4">
                        <div class="course-box style2">
                        <div class="course-img">
                            <img style={{ width: '350px', height: '250px' }} src={item.picture} alt={item.coursename} />
                            <span class="tag">
                                <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                            </span>
                            
                        </div> 
                        <div class="course-content">
                            <div class="course-rating">
                                <div className="star-rating" role="img" aria-label={`Rated ${item.rating} out of 5`}>
                                    <span style={{ width: `${(item.rating / 5) * 100}%` }}>
                                        Rated <strong className="rating">{item.rating}</strong> out of 5</span>
                                </div>({item.rating == null?0:item.rating})
                            </div>
                            <h3 class="course-title">
                            <a style={{ cursor: 'pointer' }} key={item.id} onClick={()=>handleLink('TMC', item.id)}>{item.coursename.substring(0, 30)+'...'}</a>
                            </h3>
                            <div class="course-meta">
                                <span><i class="fal fa-file"></i>Lesson {item.lesson}</span>
                                <span><i class="fal fa-user"></i>Students 60+</span>
                            </div>
                            <div class="course-author">
                                {item.instructor !== null ? (
                                    <div className="author-info">
                                        <a key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer' }} className="author-name">{item.instructor}</a>
                                    </div>
                                    ) : (
                                    <a key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer' }} className="author-name"><br /></a>
                                )}

                            </div>
                        </div>
                        </div>
                    </div>
                ))}
                
                </div>
            </div>
        </section>




        <Footer/>
    </div>
  )
}

if(document.getElementById('courseinfo')){
ReactDOM.render(<Course_info />, document.getElementById('courseinfo'));
}

