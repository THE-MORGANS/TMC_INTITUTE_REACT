import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Order() {
  let url = ` ${window.location.origin}`;
  const handleCheckout = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/checkout`
  }

  const handleCart= (e)=>{
    e.preventDefault(); 
    window.location.href = `${url}/cart`
  }

  const handleOrder= (e)=>{
    e.preventDefault(); 
    window.location.href = `${url}/order`
  }

  return (
      <div>
        <Navbar />

     
        <div class="mb-5 pb-xl-5"></div>
        <Footer />
      </div>
      
    );
}
 
export default Order;

if(document.getElementById('order')){
  ReactDOM.render(<Order/>, document.getElementById('order'))
}
  