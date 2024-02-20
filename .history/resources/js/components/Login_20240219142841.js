import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

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

  return (
    <div className='w-full py-16 sm:py-16  md:py-6 lg:py-6'>
    
   </div>

  )
}
export default Login;
if(document.getElementById('login')){
ReactDOM.render(<Login/>, document.getElementById('login'));
}
