import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import axios from 'axios';
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


     const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
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

// dhdghdg 
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
                <h1 className="breadcumb-title">Courses Details</h1>
                <ul className="breadcumb-menu">
                    <li><a href="index.html">Home</a></li>
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
                            <span className="tag"><i className="fas fa-clock"></i> 03 WEEKS</span>
                            <span className="tag bg-theme">BEST SELLER</span>
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
                                    <div className="star-rating" role="img" aria-label={`Rated ${single.rating.toFixed(2)} out of 5`}>
                                        <span style={{ width: `${(single.rating / 5) * 100}%` }}>
                                            Rated <strong className="rating">{single.rating.toFixed(2)}</strong> out of 5</span>
                                    </div>({single.rating == null?5:single.rating})
                                    

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
                                                            {/* <AiFillLock /> {item.courseepisodetitle}{' '} */}
                                                            {item.courseepisodetitle}{' '}
                                                            <span >{item.courseduration}</span>
                                                            
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
                            <img src="assets/img/widget/video_1.jpg" alt="video" />
                            <a
                                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                                class="play-btn popup-video"
                                ><i class="fas fa-play"></i
                            ></a>
                            </div>
                            <span class="h4 course-price"
                            > {single.price} <span class="tag">25% Off</span></span
                            >
                           
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
                            {usercourse?
                                 <a onClick={()=>handleLearn(single.id)}  class="th-btn style6 mt-35 mb-2">Start Learning</a>
                                :username?"":
                                <a onClick={handleEnrolCom}  class="th-btn mt-4">Enrol as a Company</a>
                            }
                             {usercourse?
                                <a onClick={()=>handleLearn(single.id)}  class="th-btn style5 mt-35 mb-2">Purchased</a>:
                                username?
                                <a  onClick={()=>handleCart(single.id)} class="th-btn style6"> {getBtnText(single.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} </a> :
                                <a  onClick={handleEnrol} class="th-btn style4">Enrol as a Student</a>
                            }
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
                            <img src={item.picture} alt={item.coursename} />
                            <span class="tag"><i class="fas fa-clock"></i> 03 WEEKS</span>
                        </div>
                        <div class="course-content">
                            <div class="course-rating">
                            <div className="star-rating" role="img" aria-label={`Rated ${item.rating.toFixed(2)} out of 5`}>
                                <span style={{ width: `${(item.rating / 5) * 100}%` }}>
                                    Rated <strong className="rating">{item.rating.toFixed(2)}</strong> out of 5</span>
                            </div>({item.rating == null?5:item.rating})
                           
                            </div>
                            <h3 class="course-title">
                            <a href="course-details.html"
                                >Education Software and PHP and JS System Script</a
                            >
                            </h3>
                            <div class="course-meta">
                            <span><i class="fal fa-file"></i>Lesson 8</span>
                            <span><i class="fal fa-user"></i>Students 60+</span>
                            </div>
                            <div class="course-author">
                            <div class="author-info">
                                <img src="assets/img/course/author.png" alt="author" />
                                <a href="course.html" class="author-name">Max Alexix</a>
                            </div>
                            <div class="offer-tag">Free</div>
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

