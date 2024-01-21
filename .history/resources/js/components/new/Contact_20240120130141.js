// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
      <main>

      </main>

      <Footer/>
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
