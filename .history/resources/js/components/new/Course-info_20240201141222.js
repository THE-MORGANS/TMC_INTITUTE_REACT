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
                            <img src="assets/img/course/course-details.png" alt="Course Image" />
                            <span className="tag"><i className="fas fa-clock"></i> 03 WEEKS</span>
                            <span className="tag bg-theme">BEST SELLER</span>
                            </div>
                            <div className="course-meta style2">
                            <span><i className="fal fa-file"></i>Lesson 8</span>
                            <span><i className="fal fa-user"></i>Students 60+</span>
                            <span><i className="fal fa-chart-simple"></i>Beginner</span>
                            </div>
                            <h2 className="course-title">Education Software and PHP and JS System Script</h2>
                            <ul className="course-single-meta">
                            <li className="course-single-meta-author">
                                <img src="assets/img/course/author2.png" alt="author" />
                                <span>
                                <span className="meta-title">Instructor: </span>
                                <a href="course.html">Max Alexix</a>
                                </span>
                            </li>
                            <li><span className="meta-title">Category: </span><a href="course.html">Web Development</a></li>
                            <li><span className="meta-title">Last Update: </span><a href="course.html">20 Jun, 2023</a></li>
                            <li>
                                <span className="meta-title">Review:</span>
                                <div className="course-rating">
                                <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                    <span style={{ width: '80%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                </div>(4.00)
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
                                <li class="nav-item" role="presentation"><a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i class="fa-regular fa-star-sharp"></i>Reviews</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="productTabContent">
                                <div class="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                    <div class="course-description">
                                    <h5 class="h5">Description</h5>
                                        <p>Rapidiously develop parallel e-markets via worldwide paradigms. Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or "organic" sources. Energistically reinvent distinctive value via parallel services. Phosfluorescently deploy extensive paradigms vis-a-vis cross-unit manufactured products. Uniquely coordinate impactful services whereas team building e-services. Globally grow multimedia based benefits vis-a-vis client-based niches.</p>
                                        <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p>
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
                                <div
                                    class="tab-pane fade"
                                    id="reviews"
                                    role="tabpanel"
                                    aria-labelledby="reviews-tab"
                                >
                                    <div class="course-Reviews">
                                    <div class="th-comments-wrap">

                                    </div>
                                    </div>

                                
                                </div>


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

