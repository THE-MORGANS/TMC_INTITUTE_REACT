import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import PasswordChecklist  from  'react-password-checklist';
import Footer from './new/Footer';
import Navbar from './new/Navbar';

 function Signup() {
     //http://127.0.0.1:8000
    let url = `${window.location.origin}/`;
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);

    
     const handleClick =(e)=>{
      e.preventDefault();
      let data = e.target.dataset.name
      if(data == 'login'){
       window.location.href = url+'login'
      }else{
        // let link = `${url}auth/google/redirect`;
        let link = `${url}authenticate`
        console.log(link);
      window.location.href = link;
      }

     }
     const [fullname, setfullname] = useState('');
     const [email, setemail] = useState('');
     const [pasword, Setpasssword] = useState('');
     const [terms, Setterms] = useState(false);
     const [password_confirmation, Setpassword_confirmation] = useState('');
     const [captcha, Setcaptcha] = useState('')
    const [Alert, SetAlert] = useState('');
    const [loader, setloader] = useState(false)
    const [captimg, setcaptimg] = useState(captchaimg)
    const [showbtn, setShowbtn] = useState(false)
    
    const handlehome = ()=>{
      window.location.href = ` ${url}`;
    }
     const handleSubmit = (e)=>{

        e.preventDefault();
        setloader(true)
        let company = 'user'
         let formData = new FormData();
         formData.append('fullname', fullname)
         formData.append('email', email)
         formData.append('captcha', captcha)
         formData.append("password", pasword)
         formData.append('password_confirmation', password_confirmation)
         formData.append("term", terms)
         formData.append('company', company)
           let urltwo = `${url}register`;
           axios.post(urltwo, formData).then(res=>{
                console.log(res)
              if(res.data.success){
                SetAlert(res.data.success)
                setloader(false)
                window.scrollTo(0, 0)
                setTimeout(()=>{
                 window.location.href = `${url}activationmail`;
                },1100)
              }else if(res.data.error){
                SetAlert(res.data.error)
                setloader(false)
                window.scrollTo(0, 0)
              }
 
          }).catch(erorr=>{
            console.log(erorr)
             let error = erorr.response.data.errors
             if(error.term){
                SetAlert(error.term[0])
                setloader(false)
                setcaptimg(captchaimg)
                window.scrollTo(0, 0)
              } else if(error.fullname){
                SetAlert(error.fullname[0])
                setcaptimg(captchaimg)
                setloader(false)
                window.scrollTo(0, 0)
              }else if(error.email){
                SetAlert(error.email[0])
                setcaptimg(captchaimg)
                setloader(false)
                window.scrollTo(0, 0)
              }else if(error.password){
                SetAlert(error.password[0])
                setcaptimg(captchaimg)
                setloader(false)
                window.scrollTo(0, 0)
              }else if(error.captcha){
                // captcha
                setcaptimg(captchaimg)
                SetAlert(error.captcha[0])
                setloader(false)
                  setTimeout(()=>{
                    window.location.href =`${url}signup`
                },1000)


        }
          })
     }

     const handleterms = ()=>{
        window.location.href = ` ${url}terms`;
    }
   const [changepass, setChangepass] = useState(false)
   const [conpass, setConpass] = useState(false)
    // const handlepassch = ()=>{

    // }

    const handleForget = ()=>{
        window.location.href = `${url}forgotten/Individual`;
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
                <h1 className="breadcumb-title">My account</h1>
                <ul className="breadcumb-menu">
                    <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                    <li>My account</li>
                </ul>
                </div>
            </div>
        </div>

        <div class="space-bottom space-top about-sec bg-bottom-right" data-bg-src="assets/img/update1/bg/about_bg_1.jpg" id="about-sec">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 mb-40 mb-xl-0">
                        <div class="img-box7 tilt-active">
                            <img class="w-100" src="assets/img/update1/normal/about_2_1.jpg" alt="About"/>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-8 align-self-end">
                        <form action="mail.php" method="POST" class="consult-form ajax-contact">
                            <div class="row gx-24">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter Your Full name"/>
                                        <i class="fal fa-user"></i>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email Address"/>
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                </div>

                                <div className='col-md-12'>
                                  <div class="form-group">
                                    <img src={captimg} />
                                    <br/>
                                    <input placeholder="Enter Recapta value" type="text" class="form-control" onChange={(e)=>Setcaptcha(e.target.value)} value={captcha} autoComplete="off" />
                                    </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="form-group">
                                      <input type={changepass == false?"password":"text"}  placeholder="Password"  class="form-control" onChange={(e)=>Setpasssword(e.target.value)} value={pasword} />
                                      <i class="fal fa-lock"></i>
                                    </div>
                                </div>
                                
                                <div class="form-btn col-12">
                                    <button class="th-btn">
                                        Send Message<i class="far fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                            <p class="form-messages mb-0 mt-3"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <section class="space-top  space-bottom bg-auto" data-bg-src="assets/img/update1/bg/testi_bg_4.png">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 mb-5 mb-xl-0">
                        <div class="testi-block-wrap">
                            <div class="title-area mb-30">
                                <span class="sub-title">What Student Says</span>
                                <h2 class="sec-title fw-semibold">Student’s Testimonials</h2>
                                <p class="sec-text">Enthusiastically architect corporate metrics via enterprise methodologies. Progressively extend distinctive process improvements rather.</p>
                            </div>
                            <div class="testi-block-slide th-carousel" data-slide-show="1" data-fade="true">
                                <div class="">
                                    <div class="testi-block">
                                        <p class="testi-block_text">
                                            <i class="fa-solid fa-quote-left"></i>
                                            Holisticly fabricate mission-critical manufactured products via enterprise-wide benefits Synergistically reconceptualize compelling internal or "organic" sources whereas low-risk high-yield infrastructures. Professionally deploy user friendly value rather than prospective technology. Enthusiastically.<i class="fa-solid fa-quote-right"></i>
                                        </p>
                                        <div class="testi-block_profile">
                                            <div class="testi-block_avater">
                                                <img src="assets/img/update1/testimonial/testi_3_1.jpg" alt="Avater"/>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="testi-block_name box-title">Mary Cruzleen</h3>
                                                <span class="testi-block_desig">CEO of Maithon</span>
                                                <div class="testi-block_review">
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="testi-block">
                                        <p class="testi-block_text">
                                            <i class="fa-solid fa-quote-left"></i>
                                            Fabricate holisticly mission-critical manufactured products via enterprise-wide benefits Synergistically reconceptualize compelling internal or "organic" sources whereas low-risk high-yield infrastructures. Professionally deploy user friendly value rather than technology Enthusiastically prospective.<i class="fa-solid fa-quote-right"></i>
                                        </p>
                                        <div class="testi-block_profile">
                                            <div class="testi-block_avater">
                                                <img src="assets/img/update1/testimonial/testi_3_2.jpg" alt="Avater"/>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="testi-block_name box-title">David Milton</h3>
                                                <span class="testi-block_desig">CEO of Gazal</span>
                                                <div class="testi-block_review">
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="testi-block">
                                        <p class="testi-block_text">
                                            <i class="fa-solid fa-quote-left"></i>
                                            Manufactured holisticly fabricate mission-critical products via enterprise-wide benefits Synergistically reconceptualize compelling internal or "organic" sources whereas low-risk high-yield infrastructures. Professionally deploy user friendly value rather than prospective technology. Professionally.<i class="fa-solid fa-quote-right"></i>
                                        </p>
                                        <div class="testi-block_profile">
                                            <div class="testi-block_avater">
                                                <img src="assets/img/update1/testimonial/testi_3_3.jpg" alt="Avater"/>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="testi-block_name box-title">Abraham Khalil</h3>
                                                <span class="testi-block_desig">CEO Edura</span>
                                                <div class="testi-block_review">
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                    <i class="fa-solid fa-star-sharp"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="icon-box">
                                <button data-slick-prev=".testi-block-slide" class="slick-arrow default">
                                    <i class="far fa-arrow-left"></i>
                                </button>
                                <button data-slick-next=".testi-block-slide" class="slick-arrow default">
                                    <i class="far fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <form action="mail.php" method="POST" class="consult-form ajax-contact">
                            <div class="row gx-24">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter Your Name"/>
                                        <i class="fal fa-user"></i>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email Address"/>
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="tel" class="form-control" name="number" id="number" placeholder="Phone Number"/>
                                        <i class="fal fa-phone"></i>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select name="subject" id="subject" class="single-select nice-select form-select">
                                            <option value="" disabled="disabled" selected="selected" hidden>Select Subject*</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Engine Diagnostics">Engine Diagnostics</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-12">
                                    <textarea name="message" id="message" cols="30" rows="3" class="form-control" placeholder="Message"></textarea>
                                    <i class="fal fa-comment"></i>
                                </div>
                                <div class="form-btn col-12">
                                    <button class="th-btn">
                                        Send Message<i class="far fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                            <p class="form-messages mb-0 mt-3"></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <div class="th-checkout-wrapper space-top space-extra-bottom">
            <div class="container">
              <div class="woocommerce-form-login-toggle">
                  <div class="woocommerce-info">
                      Returning customer? <a href="#" class="showlogin">Click here to login</a>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <form action="#" class="woocommerce-form-login">
                          <div class="form-group">
                              <label>Username or email *</label>
                              <input type="text" class="form-control" placeholder="Username or email"/>
                          </div>
                          <div class="form-group">
                              <label>Password *</label>
                              <input type="text" class="form-control" placeholder="Password"/>
                          </div>
                          <div class="form-group">
                              <div class="custom-checkbox">
                                  <input type="checkbox" id="remembermylogin"/>
                                  <label for="remembermylogin">Remember Me</label>
                              </div>
                          </div>
                          <div class="form-group">
                              <button type="submit" class="th-btn">Login</button>
                              <p class="fs-xs mt-2 mb-0">
                                  <a class="text-reset" href="#">Lost your password?</a>
                              </p>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
        
        
                



        <Footer/>

    </div>
  )
}

export default Signup;

if (document.getElementById('register')) {
    ReactDOM.render(<Signup/>, document.getElementById('register'));
}
