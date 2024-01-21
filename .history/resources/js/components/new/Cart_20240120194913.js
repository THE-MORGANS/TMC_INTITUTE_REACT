import React from 'react';
import ReactDOM from 'react-dom';

function Cart() {
  return (
      <div>
        <Navbar
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  