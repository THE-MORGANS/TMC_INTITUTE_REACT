import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import PasswordChecklist  from  'react-password-checklist';
import Footer from './new/Footer';
import Navbar from './new/Navbar'; 
// import 'toastr/build/toastr.min.css';
// import toastr from './toastr';

export default function Adminregister() {
    let url = `${window.location.origin}/`;
    const handleClick =(e)=>{
      e.preventDefault();
      let data = e.target.dataset.name
      window.location.href = url+data
    //   if(data == 'companylogin'){
    //     window.location.href = url+data
    //   }else{
    //  let link = `${url}authenticate`;
    //   window.location.href = link;
    //   }
 
     }

    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [pasword, Setpasssword] = useState('');
    const [terms, Setterms] = useState(false);
    const [password_confirmation, Setpassword_confirmation] = useState('');
    // const [captcha, Setcaptcha] = useState('')
    const [loader, setloader] = useState(false)
    const [showbtn, setShowbtn] = useState(false)

    const handleSubmit = (e)=>{
       e.preventDefault();
       let company = 'company'
       setloader(true)
        let formData = new FormData();
        formData.append('fullname', fullname)
        formData.append('email', email)
        // formData.append('captcha', captcha)
        formData.append("password", pasword)
        formData.append('password_confirmation', password_confirmation)
        formData.append("term", terms)
        formData.append("company", company)
          let urltwo = `${url}companyregister`;
          axios.post(urltwo, formData).then(res=>{
               //console.log(res)
             if(res.data.success){
               toastr.success(res.data.success, 'Success');
               setloader(false)
               window.scrollTo(0, 0)
               setTimeout(()=>{
                window.location.href = `${url}activationmail`;
               },1100)
             }

         }).catch(error=>{
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                console.log('errors', errors);
                if(errors.term){
                    toastr.error(errors.term[0], 'Validation Error');
                    setloader(false)
                } else if(errors.fullname){
                    toastr.error(errors.fullname[0], 'Validation Error');
                    setloader(false)
                }else if(errors.email){
                    toastr.error(errors.email[0], 'Validation Error');
                    setloader(false)
                }else if(errors.password){
                    toastr.error(errors.password[0], 'Validation Error');
                    setloader(false)
                }
            }
            
         })
    }

    const handleterms = ()=>{
        window.location.href = ` ${url}terms`;
    }

    const [changepass, setChangepass] = useState(false)
    const [conpass, setConpass] = useState(false)


    const handleForget = ()=>{
        window.location.href = `${url}forgotten/Company`;
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
              <h1 className="breadcumb-title">Company account</h1>
              <ul className="breadcumb-menu">
                  <li><a href="#" style={{cursor:'pointer'}}>Home</a></li>
                  <li>Sign up</li>
              </ul>
              </div>
          </div>
      </div>

      <div class="space-bottom space-top about-sec bg-bottom-right" data-bg-src="assets/img/update1/bg/about_bg_1.jpg" id="about-sec">
            <div class="container">
            
              
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-5 mb-40 mb-xl-0 ml-20 ">
                        <div class="img-box7 tilt-active ">
                            <center>
                                <img class="w-80 " src="assets/img/update1/normal/about_2_1.jpg" alt="About"/>
                            </center>
                        </div>
                    </div>
                    <div class="col-xl-6  align-self-start ml-20 justify-content-center align-items-center">
                      <div class="woocommerce-form-login-toggle">
                            <div class="woocommerce-info">
                                Sign up? <a onClick={(e)=>handleClick(e)} data-name="companylogin"  class="showlogin cursor-pointer" style={{ cursor:'pointer'}}>Already have account?  Sign in</a>
                            </div>
                        </div>
                        
                        <div class="consult-form ajax-contact">
                        
                            <div class="row gx-24">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Company name" onChange={(e)=>setfullname(e.target.value)} value={fullname} autoComplete="off" />
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
                                      <i class="">
                                          {changepass == false?<AiOutlineEye className='w-6 h-6' onClick={()=>setChangepass(true)}/>:
                                              <AiOutlineEyeInvisible className='w-6 h-6' onClick={()=>setChangepass(false)}/>
                                          }
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
                                <div class="form-group">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" id="remembermylogin" onChange={(e)=>Setterms(e.target.checked)} value={terms}  />
                                        <label for="remembermylogin">I agreed to the <snap style={{color:'#A32926'}} onClick={handleterms}>Terms & Conditions</snap></label>
                                    </div>
                                </div>
                                <div class="form-btn  col-12">
                                    {showbtn == false?
                                    
                                        <button  class="th-btn style6" disabled onClick={(e)=>handleSubmit(e)}>
                                        {loader?'please wait...':'Sign up'}
                                        </button>
                                     
                                    :
                                    <button class="th-btn cursor-pointer" onClick={(e)=>handleSubmit(e)}>
                                    {loader?'please wait...':'Sign up'}
                                    </button>
                                    }
                                    <p class="fs-xs mt-2 mb-0">
                                        
                                        <a class="text-reset cursor-pointer" onClick={handleForget}>
                                            <snap  style={{ cursor:'pointer'}}>Lost your password?</snap>
                                        </a>
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

if(document.getElementById('adminreg')){
ReactDOM.render(<Adminregister/>, document.getElementById('adminreg'));
}
