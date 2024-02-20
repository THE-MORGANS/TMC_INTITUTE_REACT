import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Shopping() {
  let url = `${window.location.origin}/`;
  
  const handleHome = () => {
    window.location.href = url;
  }

  return (
    <div>
      <p>pp</p>
      {/* <Navbar/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Shopping;

if (document.getElementById('shoppingcart')) {
  ReactDOM.render(<Shopping/>, document.getElementById('shopping'));
}
