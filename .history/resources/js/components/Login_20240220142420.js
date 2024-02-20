import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import Footer from './new/Footer';
import Navbar from './new/Navbar';

 function Login() {
    let url = window.location.origin;
    const handleClick =(e)=>{
        e.preventDefault();
        let data = e.target.dataset.name

        if(data == 'signup'){
           window.location.href =url+'/'+data
        }else{
         let link = `${url}/authenticate`;
        window.location.href = link;
        }

       }
       const [Alert, SetAlert] = useState('');
       const [email, setemail] = useState('');
       const [pasword, Setpasssword] = useState('');
       const [loader, setloader] = useState(false);
       //const [captcha, Setcaptcha] = useState('')

       const handleSubmit = (e)=>{
        setloader(true)
        let formData = new FormData();
        formData.append('email', email)
       // formData.append('captcha', captcha)
        formData.append("password", pasword)
          let urltwo = `${url}/loginusers`;
          axios.post(urltwo, formData).then(res=>{
              console.log(res)
             if(res.data.success){
               SetAlert(res.data.success)
               setloader(false)
               setTimeout(()=>{
                window.location.href = `${url}/newdashboard`;
               },1500)
             }else if(res.data.error){
                setloader(false)
                SetAlert(res.data.error)
             }

            }).catch(erorr=>{
                let error = erorr.response.data.errors
                if(error.email){
                    SetAlert(error.email[0])
                    setloader(false)
                 }else if(error.password){
                  SetAlert(error.password[0])
                  setloader(false)
                 }
            //      else if(error.captcha){
            //         // captcha
            //         SetAlert(error.captcha[0])
            //         setloader(false)
            //         setTimeout(()=>{
            //             window.location.href = `${url}/login`;

            //         })
            // }
            })
       }

       const [changepass, setChangepass] = useState(false)
       const handlehome = ()=>{
        window.location.href = ` ${url}`;
      }

  return (
    <div >
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
                    <li>Login</li>
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
                    <div class="col-xxl-7 col-xl-8 align-self-start">
                      <div class="woocommerce-form-login-toggle">
                            <div class="woocommerce-info">
                                <a data-name="signup" onClick={(e)=>handleClick(e)}class="showlogin cursor-pointer">Do not have an account? Sign up</a>
                            </div>
                        </div>
                        <span className={Alert =='you have logged in successfully'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>

                        <div class="consult-form ajax-contact">
                           
                            <div class="row gx-24">
                                
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email Address" onChange={(e)=>setemail(e.target.value)} value={email} autoComplete="off"/>
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                      <input type={changepass == false?"password":"text"}  placeholder="Password"  class="form-control" onChange={(e)=>Setpasssword(e.target.value)} value={pasword} />
                                      {/* <i class="fal fa-lock"></i> */}
                                      <span className=" absolute   top-3 right-2">
                                          {changepass == false?<AiOutlineEye className='w-6 h-6' onClick={()=>setChangepass(true)}/>:
                                              <AiOutlineEyeInvisible className='w-6 h-6' onClick={()=>setChangepass(false)}/>
                                          }
                                      </span>
                                    </div>
                                </div>

                                
                                <div class="form-btn  col-12">
                                    <button className='th-btn cursor-pointer' onClick={(e)=>handleSubmit(e)}>
                                    {   loader?'please wait...':'login'}
                                    </button>
                                    <p class="fs-xs mt-2 mb-0">
                                        <a class="text-reset cursor-pointer" data-name="signup" onClick={(e)=>handleClick(e)}>Do not have an account? Sign up</a>
                                    </p>
                                </div>
                                
                                
                            </div>
                            <p class="form-messages mb-0 mt-3"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    
   </div>

  )
}
export default Login;
if(document.getElementById('login')){
ReactDOM.render(<Login/>, document.getElementById('login'));
}
