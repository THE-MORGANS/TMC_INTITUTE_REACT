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
                    <li>My account</li>
                </ul>
                </div>
            </div>
        </div>
    
   </div>

  )
}
export default Login;
if(document.getElementById('login')){
ReactDOM.render(<Login/>, document.getElementById('login'));
}
