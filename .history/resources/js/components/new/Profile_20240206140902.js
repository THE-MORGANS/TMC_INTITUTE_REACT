// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Profile() {
  let url = window.location.origin;
  const handlehome = ()=>{
    window.location.href = ` ${url}`;
  }
  return (
    <div>
      <Navbar/>

      
      <Footer/>
    </div>
  
  );
}

export default Profile;

if(document.getElementById('userprofile')){
  ReactDOM.render(<Profile/>, document.getElementById('userprofile'))
}
  
