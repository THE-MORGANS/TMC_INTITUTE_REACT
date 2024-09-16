import React from 'react';
import ReactDOM from 'react-dom';
// import Footer from './new/Footer';
// import Navbar from './new/Navbar';

export default function Activation() {
  let url = ` ${window.location.origin}`;
  
  const handleLogin =(e)=>{
    e.preventDefault();
    window.location.href = `${url}/login`;
  }

  const handlelistcourses = (e)=>{
      e.preventDefault();
      window.location.href = ` ${url}/listcourses`;
  }

  return ( 
    <div>

      <div className="">
          <div className="why-area-1 space overflow-hidden">
          <div className="shape-mockup why-shape-1 jump" data-top="10%" data-left="7%">
            <img src="assets/img/normal/about_1_shape1.png" alt="img" />
          </div>
          <div className="shape-mockup why-shape-2" data-bg-src="assets/img/normal/wcu_1_shape1.png"></div>
          <div className="shape-mockup why-shape-3 jump-reverse" data-bottom="25%" data-right="-3%">
            <img src="assets/img/normal/wcu_1_shape2.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="wcu-img-1 emailVerify">
                  <div className="img1">
                    <img src="assets/img/normal/wcu_1_1.png" alt="img" />
                  </div>
                  
                  <div className="text-end">
                    <a className="th-btn mt-30" onClick={handleLogin} style={{ cursor:'pointer'}}>
                      Get Started <i className="far fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="wcu-wrap1">
                  <div className="title-area mb-25">
                    <span className="sub-title">
                      <i className="fal fa-book me-2"></i> Thank you for Signing up!
                    </span>
                    <h2 className="sec-title">
                    A confirmation email has been sent to your email address.
                    </h2>
                    <p className="sec-text mt-20">
                      <b>Note:</b> If you do not receivce  email few minutes:
                    </p>
                    
                    <div className="checklist">
                      <ul>
                          <li> Check spam folder</li>
                          <li>Verfy you entered the correct email</li>
                          <li>If it is not resolved, please contact <a href='mailto:tmcinstitute-support@tmcinstitute.com' className="text-[#A32926]">tmcinstitute-support@tmcinstitute.com</a></li>

                      </ul>
                    </div>
                  
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        
        </div>

          

          
      </div>

    </div>
  )
}

if(document.getElementById('active')){
ReactDOM.render(<Activation/>, document.getElementById('active'));
}
