import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Cart() {
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
  let symbol = currencysymbol.currency.symbol

  let converted = JSON.parse(currencyex)
  let convertnaira = converted.result.NGN
  let moneyname = currencysymbol.currency.name
  let other =  Object.values(othersmoneys.result);
  let poundtonaira = poundton.result.NGN

  if(currencysymbol.currency.code != 'NGN'){
    let ans =   parseInt(sum?sum:0)
    let quest = ans + (onedollar/convertnaira);
     return Math.round(quest);
  }else{
    let ans =   parseInt(sum?sum:0)
    return ans;
  }

 

  return (
      <div>
        <Navbar />

        <Footer />
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  