import React from 'react'; 
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default  function Study() {
  return( 
    
      <Navbar />


      {/* <Footer /> */}
   
   
  );
}


if(document.getElementById('study')){
  ReactDOM.render(<Study/>, document.getElementById('study'));
}
