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
// stephen


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
                                    <a class="nav-link" id="curriculum-tab" data-bs-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">
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
                                <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                    <div className="course-curriculum">
                                        <h5 className="h5">The Course Curriculum</h5>
                                        <p className="mb-30">
                                        Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary, making this the first true dummy generator on the Internet.
                                        </p>
                                        <div className="checklist mb-1">
                                        <ul>
                                            <li>How to use social media to reach local, national and international audiences</li>
                                            <li>How to set up and market events, using online tools, so you no longer depend</li>
                                            <li>How to create and run online shows, adapt your performance techniques and</li>
                                            <li>Mentoring and troubleshooting and post-training support from Jason</li>
                                            <li>How to use social media to reach local, national and international audiences</li>
                                            <li>How to set up and market events, using online tools</li>
                                            <li>Adapt your performance techniques and manage your audience throughout</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div className="course-instructor">
                                        <div className="course-author-box">
                                        <div className="author-img">
                                            <img src="assets/img/team/team_2_1.jpg" alt="Author Image" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="author-name">
                                            <a className="text-inherit" href="team-details.html">Kevin Perry</a>
                                            </h3>
                                            <p className="author-text">
                                            Optimize resource leveling innovation whereas visionary value. Compellingly engage extensible process with business process improvements.
                                            </p>
                                            <div className="author-meta">
                                            <a href="course.html">
                                                <i className="fal fa-file-video"></i>4 Courses
                                            </a>
                                            <span>
                                                <i className="fal fa-users"></i>2500 Students
                                            </span>
                                            </div>
                                            <div className="th-social">
                                            <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                            <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                            <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                            </div>
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
                            >$120.00 check {usercourse} {username}<span class="tag">25% Off</span></span
                            >
                            <a href="cart.html" class="th-btn">Add to Cart</a>
                           
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
                                <a className="flex items-center justify-center h-10 px-6 rounded-md bg-gray-100 w-40 outline-none border-none cursor-pointer" onClick={()=>handleLearn(single.id)}> Start Learning</a>:username?"":
                                <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-[#A32926] text-white cursor-pointer" onClick={handleEnrolCom} > Enrol as a Company </a>
                            }
                            {/* <a onClick={()=>handleLearn(single.id)}  class="th-btn style6 mt-35 mb-2">Start Learning</a>
                            <a onClick={handleEnrolCom}  class="th-btn">Enrol as a Company</a>
                            <a  onClick={handleEnrol} class="th-btn style4">Enrol as a Student</a> */}
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_1.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 03 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_2.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 02 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Learn Figma – UI/UX Design Essential Training</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 9</span>
                        <span><i class="fal fa-user"></i>Students 50+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
                        </div>
                        <div class="course-author">
                        <div class="author-info">
                            <img src="assets/img/course/author.png" alt="author" />
                            <a href="course.html" class="author-name">Kevin Perry</a>
                        </div>
                        <div class="offer-tag">Free</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_3.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 04 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Advanced Android 12 & Kotlin Development Course</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 7</span>
                        <span><i class="fal fa-user"></i>Students 30+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_4.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 02 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >IT Statistics Data Science and Business Analysis</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 10</span>
                        <span><i class="fal fa-user"></i>Students 20+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
                        </div>
                        <div class="course-author">
                        <div class="author-info">
                            <img src="assets/img/course/author.png" alt="author" />
                            <a href="course.html" class="author-name">Kevin Perry</a>
                        </div>
                        <div class="offer-tag">Free</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_5.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 03 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >The Complete HTML & CSS Bootcamp 2023 Edition</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 8</span>
                        <span><i class="fal fa-user"></i>Students 60+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_6.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 02 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Great Graphical Design That Catches Eyes</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 9</span>
                        <span><i class="fal fa-user"></i>Students 50+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
                        </div>
                        <div class="course-author">
                        <div class="author-info">
                            <img src="assets/img/course/author.png" alt="author" />
                            <a href="course.html" class="author-name">Kevin Perry</a>
                        </div>
                        <div class="offer-tag">Free</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_7.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 04 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Marketing 2023: Complete Guide To Social Growth</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 7</span>
                        <span><i class="fal fa-user"></i>Students 30+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_8.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 02 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >The complete business plan course includes 20+ template</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 10</span>
                        <span><i class="fal fa-user"></i>Students 20+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
                        </div>
                        <div class="course-author">
                        <div class="author-info">
                            <img src="assets/img/course/author.png" alt="author" />
                            <a href="course.html" class="author-name">Kevin Perry</a>
                        </div>
                        <div class="offer-tag">Free</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_9.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 03 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Fashion Photography From To Professional Courses</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 8</span>
                        <span><i class="fal fa-user"></i>Students 60+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_10.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 02 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Fashion and Luxury Fashion In A Changing</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 9</span>
                        <span><i class="fal fa-user"></i>Students 50+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
                        </div>
                        <div class="course-author">
                        <div class="author-info">
                            <img src="assets/img/course/author.png" alt="author" />
                            <a href="course.html" class="author-name">Kevin Perry</a>
                        </div>
                        <div class="offer-tag">Free</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_11.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 04 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Best Statistics Data Science & Business Analysis</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 7</span>
                        <span><i class="fal fa-user"></i>Students 30+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
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
                <div class="col-md-6 col-xl-4">
                    <div class="course-box style2">
                    <div class="course-img">
                        <img src="assets/img/course/course_1_12.png" alt="img" />
                        <span class="tag"><i class="fas fa-clock"></i> 02 WEEKS</span>
                    </div>
                    <div class="course-content">
                        <div class="course-rating">
                        <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                        >
                            <span style={{width: '79%'}}
                            >Rated <strong class="rating">4.00</strong> out of 5</span
                            >
                        </div>
                        (4.7)
                        </div>
                        <h3 class="course-title">
                        <a href="course-details.html"
                            >Angular with Nodejs Fullstack Development</a
                        >
                        </h3>
                        <div class="course-meta">
                        <span><i class="fal fa-file"></i>Lesson 10</span>
                        <span><i class="fal fa-user"></i>Students 20+</span>
                        <span><i class="fal fa-chart-simple"></i>Beginner</span>
                        </div>
                        <div class="course-author">
                        <div class="author-info">
                            <img src="assets/img/course/author.png" alt="author" />
                            <a href="course.html" class="author-name">Kevin Perry</a>
                        </div>
                        <div class="offer-tag">Free</div>
                        </div>
                    </div>
                    </div>
                </div>
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

