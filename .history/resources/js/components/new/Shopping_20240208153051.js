import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Shopping() {
	let url = ` ${window.location.origin}/`;
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }

  return (
    <div>
      <p>pp</
      {/* <Navbar/> */}

      {/* <Footer/> */}
    </div>
  
  );
}

export default Shopping;

if(document.getElementById('shopping')){
  ReactDOM.render(<Shopping/>, document.getElementById('shopping'))
  }
  
