import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import PasswordChecklist  from  'react-password-checklist';
import Footer from './new/Footer';
import Navbar from './new/Navbar';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import ReCAPTCHA from 'react-google-recaptcha';


 function Signup() {
       //http://127.0.0.1:8000
       let url = `${window.location.origin}`;
       const handleClick =(e)=>{
        e.preventDefault();
        window.location.href = `${url}/login`;
        let data = e.target.dataset.name
        // if(data == 'login'){
        //  window.location.href = url+'login'
        // }else{
        //   // let link = `${url}auth/google/redirect`;
        //   let link = `${url}authenticate`
        //   console.log(link);
        //     window.location.href = link;
        // }
  
       }
   
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [pasword, Setpasssword] = useState('');
    const [terms, Setterms] = useState(false);
    const [password_confirmation, Setpassword_confirmation] = useState('');
    const [loader, setloader] = useState(false)
    // const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [showbtn, setShowbtn] = useState(false)
  
        const handleSubmit = (e)=>{
            e.preventDefault();
            // if (!recaptchaValue) {
            //     toastr.error('Please complete the reCAPTCHA', 'Error');
            //     return;
            // }
            setloader(true)
            let company = 'user'
            let formData = new FormData();
            formData.append('fullname', fullname)
            formData.append('email', email)
            // formData.append('recaptcha', recaptchaValue);
            formData.append("password", pasword)
            formData.append('password_confirmation', password_confirmation)
            formData.append("term", terms)
            formData.append('company', company)

            let urltwo = `${url}/register`;
            console.log('register');

            axios.post(urltwo, formData).then(res=>{
                console.log('success', res.data)
                if(res.data.success){  
                  toastr.success(res.data.success, 'Success');
                  setloader(false)
                  setTimeout(()=>{
                   window.location.href = `${url}/activationmail`;
                  },1100) 
                }else if(res.data.error){
                    toastr.error(res.data.error, 'Error');
                    setloader(false);
                } 
            }).catch(error =>{
                if (error.response && error.response.status === 422) {
                    const errors = error.response.data.errors;
                    console.log('errors', errors)
                    if (errors.term) {
                        toastr.error(errors.term[0], 'Validation Error');
                        setloader(false);
                    }
                    if(errors.email){
                        toastr.error(errors.email[0], 'Validation Error');
                        setloader(false)
                    }
                    if(errors.fullname){
                        toastr.error(errors.fullname[0], 'Validation Error');
                        setloader(false)
                    }
                    if(errors.password){
                        toastr.error(errors.password[0], 'Validation Error');
                        setloader(false)
                    }
                } else {
                    toastr.error('An unexpected error occurred. Please try again.', 'Error');
                    setloader(false);
                }
               
            })
        }
  
    const handleterms = ()=>{
        window.location.href = ` ${url}/terms`;
    }
    const [changepass, setChangepass] = useState(false)
    const [conpass, setConpass] = useState(false)
    
  
    const handleForget = ()=>{
        window.location.href = `${url}/forgotten/Individual`;
    }
    const handlehome = ()=>{
        window.location.href = `${url}`;
    }

    // const handleRecaptcha = (token) => {
    //     setRecaptchaToken(token);
    // };
    
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
                    <li>Sign up</li>
                </ul>
                </div>
            </div>
        </div>

        <div className="space-bottom space-top about-sec bg-bottom-right"
            data-bg-src="assets/img/update1/bg/about_bg_1.jpg"
            id="about-sec"
            >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div class="col-xl-5 mb-40 mb-xl-0 ml-20">
                    <div className="img-box7 tilt-active">
                    <center>
                        <img class="w-80 " src="assets/img/update1/normal/about_2_1.jpg" alt="About"/>
                    </center>
                   </div>
                </div>
                <div class="col-xl-6  align-self-start ml-20">
                    <div className="woocommerce-form-login-toggle">
                    <div className="woocommerce-info">
                        Sign up?{" "}
                        <a
                        onClick={(e) => handleClick(e)}
                        data-name="login"
                        className="showlogin cursor-pointer"
                        >
                        <snap style={{ cursor:'pointer'}}> Click here to login</snap>
                       
                        </a>
                    </div>
                    </div>
                    
                    <div className="consult-form ajax-contact">
                    <div className="row gx-24">
                        <div className="col-md-12">
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Full name"
                            onChange={(e) => setfullname(e.target.value)}
                            value={fullname}
                            autoComplete="off"
                            />
                            <i className="fal fa-user"></i>
                        </div>
                        </div>

                        <div className="col-md-12">
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            autoComplete="off"
                            />
                            <i className="fal fa-envelope"></i>
                        </div>
                        </div>


                        <div className="col-md-12">
                        <div className="form-group ">
                            <input
                            type={changepass ? "text" : "password"}
                            className="form-control"
                            placeholder="Password"
                            autoSave='off'
                            onChange={(e) => Setpasssword(e.target.value)}
                            value={pasword}
                            />
                             <i className="">
                            {changepass ? (
                                <AiOutlineEyeInvisible className="w-6 h-6" onClick={() => setChangepass(false)} />
                            ) : (
                                <AiOutlineEye className="w-6 h-6" onClick={() => setChangepass(true)} />
                            )}
                            </i>
                        </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group ">
                                <input
                                type={conpass ? "text" : "password"}
                                className="form-control"
                                autoSave='off'
                                placeholder="Confirm Password"
                                onChange={(e) => Setpassword_confirmation(e.target.value)}
                                value={password_confirmation}
                                />
                                <i className="">
                                {conpass ? (
                                    <AiOutlineEyeInvisible className="w-6 h-6" onClick={() => setConpass(false)} />
                                ) : (
                                    <AiOutlineEye className="w-6 h-6" onClick={() => setConpass(true)} />
                                )}
                                </i>
                            </div>

                            <span className="w-full">
                                {pasword && password_confirmation ? (
                                <PasswordChecklist
                                    rules={["minLength", "specialChar", "number", "lowercase", "match"]}
                                    minLength={8}
                                    value={pasword}
                                    valueAgain={password_confirmation}
                                    onChange={(isValid) => setShowbtn(isValid)}
                                />
                                ) : null}
                            </span>
                        </div>
                        <div className="col-md-12">
                        {/* <ReCAPTCHA
                            sitekey="your-site-key-here"
                            onChange={handleRecaptcha}
                        /> */}
                        </div>

                        <div className="form-group">
                        <div className="custom-checkbox">
                            <input
                            type="checkbox"
                            id="remembermylogin"
                            onChange={(e) => Setterms(e.target.checked)}
                            checked={terms}
                            />
                            <label htmlFor="remembermylogin">
                            I agree to the{" "}
                            <span className="text-red-600 cursor-pointer" onClick={handleterms}>
                                Terms & Conditions
                            </span>
                            </label>
                        </div>
                        </div>

                        <div className="form-btn col-12">
                        <button
                            className={`th-btn ${showbtn ? "cursor-pointer" : "opacity-25"}`}
                            disabled={!showbtn}
                            onClick={(e) => handleSubmit(e)}
                        >
                            {loader ? "Please wait..." : "Sign up"}
                        </button>
                        
                        <p className="fs-xs mt-2 mb-0">
                            <a className="text-reset cursor-pointer"  onClick={(e) => handleForget(e)}>
                            <snap  style={{ cursor:'pointer'}}>Lost your password?</snap>
                            </a>
                        </p>
                        </div>
                    </div>

                    <p className="form-messages mb-0 mt-3"></p>
                    </div>
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
