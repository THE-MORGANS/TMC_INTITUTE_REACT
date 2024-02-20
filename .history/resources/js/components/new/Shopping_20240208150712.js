
import React from 'react';

function Shopping() {
  return <h2>Shopping</h2>;
}

export default Shopping;
if(document.getElementById('shoppingcart')){
ReactDOM.render(<Shopping/>, document.getElementById('shoppingcart'))
}
