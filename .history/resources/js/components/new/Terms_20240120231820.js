// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Terms() {
  return (
    <div>
      <Navbar/>
    
    
      <Footer/>
    </div>
  
  );
}

export default Terms;

if(document.getElementById('terms')){
  ReactDOM.render(<Terms/>, document.getElementById('terms'))
  }
  
