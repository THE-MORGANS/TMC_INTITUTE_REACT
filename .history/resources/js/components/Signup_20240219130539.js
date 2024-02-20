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
    let uniarr = Object.values(unique)
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
                <h1 className="breadcumb-title">About Us</h1>
                <ul className="breadcumb-menu">
                    <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                    <li>About Us</li>
                </ul>
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
