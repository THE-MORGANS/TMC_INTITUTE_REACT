import React from 'react'; 
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default  function Study() {
  return( 
    <div>

      <Navbar />


      <Footer />
    </div>
   
  );
}


if(document.getElementById('study')){
  ReactDOM.render(<Study/>, document.getElementById('studyabroad'));
}
