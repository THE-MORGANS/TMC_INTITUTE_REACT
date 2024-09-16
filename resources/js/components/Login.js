import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import Footer from './new/Footer';
import Navbar from './new/Navbar';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
 
 function Login() {
    let url = window.location.origin;
    const handleSignup =(e)=>{
        e.preventDefault();
        window.location.href = `${url}/signup`;
    }
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

   
    
    const [email, setemail] = useState('');
    const [pasword, Setpasssword] = useState('');
    const [loader, setloader] = useState(false);
    const [showbtn, setShowbtn] = useState(false)
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
                toastr.success(res.data.success, 'Success');
                setloader(false)
               setTimeout(()=>{
                window.location.href = `${url}/newdashboard`;
               },1500) 
             }else if(res.data.error){
                setloader(false)
                toastr.error(res.data.error, 'Error');
             }

            }).catch(error=>{
                if (error.response && error.response.status === 422) {
                    const errors = error.response.data.errors;
                    console.log('errors', errors);
                    if (errors.password) {
                        toastr.error(errors.password[0], 'Validation Error');
                        setloader(false);
                    }
                    if(errors.email){
                        toastr.error(errors.email[0], 'Validation Error');
                        setloader(false)
                    }
                }
                
            })
       }

    const [changepass, setChangepass] = useState(false)
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
    const handleForget = ()=>{
        window.location.href = `${url}/forgotten/Individual`;
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
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-5 mb-40 mb-xl-0 ml-20">
                        <div class="img-box7 tilt-active">
                            <center>
                            <img class="w-80" src="assets/img/update1/normal/about_2_1.jpg" alt="About"/>
                            </center>
                        </div>

                    </div>
                    <div class="col-xl-6  align-self-start ml-20">
                      <div class="woocommerce-form-login-toggle">
                            <div class="woocommerce-info">
                                <a className='mt-2' data-name="signup" style={{ cursor:'pointer'}} onClick={(e)=>handleSignup(e)} class="showlogin cursor-pointer">Do not have an account? <snap style={{cursor:'pointer'}}>Sign up</snap> </a>
                            </div>
                        </div>
                       
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
                                      <i >
                                          {changepass == false?<AiOutlineEye className='w-6 h-6' onClick={()=>setChangepass(true)}/>:
                                              <AiOutlineEyeInvisible className='w-6 h-6' onClick={()=>setChangepass(false)}/>
                                          }
                                     </i>
                                    </div>
                                </div>
                                
                                <div class="form-btn  col-12">
                                    <button className='th-btn cursor-pointer' onClick={(e)=>handleSubmit(e)}>
                                    {   loader?'please wait...':'login'}
                                    </button>
                                   
                                </div>
                                <p class="fs-xs mt-2 mb-0">
                                    <a class="text-reset cursor-pointer" style={{ cursor:'pointer'}} data-name="signup" onClick={(e)=>handleSignup(e)}>Do not have an account? <snap style={{ color:'#A32926', cursor:'pointer'}}>Sign up</snap>  </a>
                                </p>
                                <p className="fs-xs mt-2 mb-0">
                                    <a className="text-reset cursor-pointer"  onClick={(e) => handleForget(e)}>
                                    <snap  style={{ cursor:'pointer'}}>Lost your password?</snap>
                                    </a>
                                </p>
                                
                                
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
