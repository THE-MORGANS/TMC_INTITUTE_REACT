// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Privacy() {
  return (
    <div>
      <Navbar/>
      
      <Footer/>
    </div>
  
  );
}

export default Privacy;

if(document.getElementById('contactus')){
  ReactDOM.render(<Privacy/>, document.getElementById('contactus'))
  }
  
