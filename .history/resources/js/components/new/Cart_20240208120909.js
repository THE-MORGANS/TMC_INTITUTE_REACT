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
  function moneyTalks(converted, price, coursetype, currency_name){
    // console.log(converted, price);
    // console.log(poundtonaira,coursetype, currency_name)
    if(coursetype == 'OTHM'){
        if(currency_name == moneyname){
             return price;

            }else if (moneyname == 'Nigerian Naira'){
                return Math.round(price * poundsnaira);
            }else if(currency_name != moneyname){
                return Math.round(price * other[0]);
            }

    }else{
        if(converted){
            return Math.round(price);
           }
           else{
            if(currencysymbol.currency.code != 'NGN'){
                return Math.round(price / convertnaira);
            }else{
                return  Math.round(price) ;
            }

           }
    }
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
  