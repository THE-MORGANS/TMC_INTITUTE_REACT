import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';

 function Profile() {
    let url = `${window.location.origin}`;
    const handleLinks = (e)=>{
        localStorage.clear();
        e.preventDefault();
        let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
    }
    console.log(additional)
    const handleClick =(e)=>{
     let name = e.target.dataset.name
     if(name){
       window.location.href =`${url}/contact`;
     }
    }
    const handleback = ()=>{
        window.location.href = `${url}/newdashboard`
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
            <h1 className="breadcumb-title">Profile</h1>
            <ul className="breadcumb-menu">
              <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
              <li>User Profile</li>
            </ul>
          </div>
        </div>
      </div>

  

    

    <Footer />
    </div>
  )
}

export default Profile;
if(document.getElementById('profile')){
ReactDOM.render(<Profile/>, document.getElementById('profile'))
}
