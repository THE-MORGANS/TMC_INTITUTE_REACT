import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Forgotten() {
  let url = `${window.location.origin}`;
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  

  const handleHome = () => {
    window.location.href = `${url}`;
  };

  const handleLogin =(e)=>{
    e.preventDefault();
    window.location.href = `${url}/login`;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    let formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);

    let urltwo = `${url}/forgotten`;

    axios.post(urltwo, formData)
      .then(res => {
        console.log(res);
        if (res.data.success) {
          toastr.success(res.data.success, 'Success');
          setLoader(false);
          setTimeout(()=>{
            window.location.href = `${url}/forgotten/Individual`;
           },1500) 
        } else if (res.data.error) {
          toastr.error(res.data.error, 'Error');
        }
        setLoader(false);
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          const errors = error.response.data.errors;
          console.log('errors', errors);
          
          if (errors.email) {
            toastr.error(errors.email[0], 'Validation Error');
            setLoader(false);
          }
          if (errors.fullname) {
            toastr.error(errors.fullname[0], 'Validation Error');
            setLoader(false);
          }
        }
        setLoader(false);
      });
  };

  return (
    <div>
      <Navbar/>
      <div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
        <div className="container">
          <div className="breadcumb-content text-center">
            <h1 className="breadcumb-title">My Account</h1>
            <ul className="breadcumb-menu">
              <li><a onClick={handleHome} style={{ cursor: 'pointer' }}>Home</a></li>
              <li>Forgotten Password</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-bottom space-top about-sec bg-bottom-right" data-bg-src="/assets/img/update1/bg/about_bg_1.jpg" id="about-sec">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-5 mb-40 mb-xl-0 d-flex justify-content-center align-items-center">
              <div className="img-box7 tilt-active text-center">
                <center>
                <img className="w-80" src="/assets/img/update1/normal/about_2_1.jpg" alt="About" />
                </center>
              </div>
            </div>

            <div className="col-xl-6 align-self-start ml-20">
              <div className="woocommerce-form-login-toggle">
                <h4>Forgotten Password</h4>
              </div>

              <div className="consult-form ajax-contact">
                <div className="row gx-24">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input required type="text" className="form-control" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)} value={fullname} autoComplete="off" />
                      <i className="fal fa-user"></i>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input required type="email" className="form-control" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="off" />
                      <i className="fal fa-envelope"></i>
                    </div>
                  </div>

                  <div className="form-btn col-12">
                    <button className='th-btn cursor-pointer' onClick={handleSubmit} disabled={loader}>
                      {loader ? 'Please wait...' : 'Submit'}
                    </button>
                  </div>
                  <p class="fs-xs mt-2 mb-0">
                      <a class=" cursor-pointer" style={{ cursor:'pointer'}} data-name="signup" onClick={(e)=>handleLogin(e)}> <snap style={{ color:'#A32926', cursor:'pointer'}}>Login</snap>  </a>
                  </p>
                 
                                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("forgot")) {
  ReactDOM.render(<Forgotten />, document.getElementById("forgot"));
}
