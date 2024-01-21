import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Privacy() {
  return (
    <div>
      <Navbar/>

      x
      
      <Footer/>
    </div>
  
  );
}

export default Privacy;

if(document.getElementById('privacy')){
  ReactDOM.render(<Privacy/>, document.getElementById('privacy'))
  }
  
