import React from 'react'
import ReactDOM from 'react-dom'
 function EmailVerified() {
    let url = window.location.origin;
    const handleClick =(e)=>{
       e.preventDefault();
       window.location.href = `${url}/login`;
    }
  return (
    <>
      <div className="">
          <div className="why-area-1 space overflow-hidden">
          <div className="shape-mockup why-shape-1 jump" data-top="10%" data-left="7%">
            <img src={img1} alt="img" />
          </div>
          <div className="shape-mockup why-shape-2" data-bg-src={img1}></div>
          <div className="shape-mockup why-shape-3 jump-reverse" data-bottom="25%" data-right="-3%">
            <img src={img2} alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="wcu-img-1">
                  <div className="img1">
                    <img src={lay} alt="img" />
                  </div>
                  
                  <div className="text-end">
                    <a className="th-btn mt-30" onClick={(e)=>handleClick(e)}  style={{ cursor:'pointer'}}>
                      Login <i className="far fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="wcu-wrap1">
                  <div className="title-area mb-25">
                    <span className="sub-title">
                      <i className="fal fa-book me-2"></i> Email Verified
                    </span>
                    <h2 className="sec-title">
                      You have succesfully registering on our website.
                    </h2>
                    
                 
                  
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        
        </div>    
      </div>

       
    </>
  )
}

export default EmailVerified;
if(document.getElementById('email')){
ReactDOM.render(<EmailVerified />, document.getElementById('email'))
}

