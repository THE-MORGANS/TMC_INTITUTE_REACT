// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

function Contact() {
  return (
    <div>
      <Navbar/>
      <h2>Contact us</h2>

      <Footer
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
