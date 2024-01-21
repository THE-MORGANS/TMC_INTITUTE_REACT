import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

function Cart() {
  return (
      <div>
        <Navbar />

        <Footer
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  