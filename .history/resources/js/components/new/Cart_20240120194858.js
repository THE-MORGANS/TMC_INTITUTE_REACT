import React from 'react';
import ReactDOM from 'react-dom';

function Cart() {
  return (
      <div>
        
      </div>
      <h2>Cart</h2>
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  