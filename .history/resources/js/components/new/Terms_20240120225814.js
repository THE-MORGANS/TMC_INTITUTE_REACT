// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
    

      <Footer/>
    </div>
  
  );
}

export default Terms;

if(document.getElementById('contactus')){
  ReactDOM.render(<Terms/>, document.getElementById('contactus'))
  }
  
