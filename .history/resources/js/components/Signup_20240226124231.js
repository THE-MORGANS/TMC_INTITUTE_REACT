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
      // const [captcha, Setcaptcha] = useState('')
      const [Alert, SetAlert] = useState('');
      const [loader, setloader] = useState(false)
      // const [captimg, setcaptimg] = useState(captchaimg)
      const [showbtn, setShowbtn] = useState(false)
  
       const handleSubmit = (e)=>{
  
          e.preventDefault();
          setloader(true)
          let company = 'user'
           let formData = new FormData();
           formData.append('fullname', fullname)
           formData.append('email', email)
          //  formData.append('captcha', captcha)
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
                }
                else if(error.captcha){
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
      const handlehome = ()=>{
        window.location.href = ` ${url}`;
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
                    <li>Sign up</li>
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
                      <div class="woocommerce-form-login-toggle">
                            <div class="woocommerce-info">
                                Sign up? <a onClick={(e)=>handleClick(e)} data-name="login" class="showlogin cursor-pointer">Click here to login</a>
                            </div>
                        </div>
                        <span className={message ?'text-center text-green-400 capitalize text-lg mt-2 py-1' :'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{message?message:""}</span>
                        <span className={Alert =='your account has been created'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>
            
                        <div class="consult-form ajax-contact">
                           
                            <div class="row gx-24">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Enter Your Full name" onChange={(e)=>setfullname(e.target.value)} value={fullname} autoComplete="off" />
                                        <i class="fal fa-user"></i>
                                    </div>
                                </div>
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

                                <div class="col-md-12">
                                    <div class="form-group">
                                    <input type={conpass == false?"password":"text"}  placeholder="Confirm Password" class="form-control" onChange={(e)=>Setpassword_confirmation(e.target.value)} value={password_confirmation} />
                
                                       <i class="fal fa-lock"></i>
                                    </div>
                                    <span className="absolute   top-3 right-2">
                                      {conpass == false?<AiOutlineEye className='w-6 h-6' onClick={()=>setConpass(true)}/>:
                                      <AiOutlineEyeInvisible className='w-6 h-6' onClick={()=>setConpass(false)}/>}
                                  </span>
                                  <span className='w-full '>
                                    {pasword != "" || password_confirmation != ""?
                                        <PasswordChecklist
                                        rules={["minLength","specialChar","number", "lowercase", "match"]}
                                        minLength={8}
                                        value={pasword}
                                        valueAgain={password_confirmation}
                                        onChange={(isValid) => {
                                            setShowbtn(isValid)
                                        }}
                                            />
                                    :""}

                                  </span> 
                                </div>

                                {/* <div className='col-md-12'>
                                  <div class="form-group">
                                    <img src={captimg} />
                                    <br/>
                                    <input placeholder="Enter Recaptcha value" type="text" class="form-control" onChange={(e)=>Setcaptcha(e.target.value)} value={captcha} autoComplete="off" />
                                    </div>
                                </div> */}
                                
                               

                               
                                <div class="form-group">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" id="remembermylogin" onChange={(e)=>Setterms(e.target.checked)} value={terms}  />
                                        <label for="remembermylogin">I agreed to the <snap style={{color:'#A32926'}} onClick={handleterms}>Terms & Conditions</snap></label>
                                    </div>
                                </div>
                                <div class="form-btn  col-12">
                                    {showbtn == false?
                                    
                                        <button  class="th-btn style6 opacity-25" disabled onClick={(e)=>handleSubmit(e)}>
                                        {loader?'please wait...':'Sign up'}
                                        </button>
                                     
                                    :
                                    <button class="th-btn cursor-pointer" onClick={(e)=>handleSubmit(e)}>
                                    {loader?'please wait...':'Sign up'}
                                    </button>
                                    }
                                    <p class="fs-xs mt-2 mb-0">
                                        <a class="text-reset cursor-pointer" onClick={handleForget}>Lost your password?</a>
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

export default Signup;

if (document.getElementById('register')) {
    ReactDOM.render(<Signup/>, document.getElementById('register'));
}
