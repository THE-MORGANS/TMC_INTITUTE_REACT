import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import {MdOutlineCancel} from 'react-icons/md';
import {AiOutlinePlus, AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import {FiPlus} from 'react-icons/fi';
import { useSpeechSynthesis } from 'react-speech-kit';

function Cart() {
  let url = ` ${window.location.origin}`
  let url = ` ${window.location.origin}`;
  const [Cart, SetCart] = useState([]);;
  const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
  const [Total, Settotal] = useState(0)
  const [Message, SetMessage] = useState('')
  const [Loader, SetLoader] = useState(false);
  const [load, Setload] = useState(false)
  const [groupswitch, Setgroupswitch] = useState(false);
  const [secondswitch, SetSecSwitch] = useState(false);
  const [useremail, Setuseremail] = useState('')
  const [fullname, Setuserfullname] = useState('')
  const [list, Setlist] = useState(localStorage.getItem('purchase')?JSON.parse(localStorage.getItem('purchase')):[]);
  const [edit, setEdit] = useState(false)
  const [editid, Seteditid] = useState('')
  const { speak } = useSpeechSynthesis();
  const [datacollect, setdatacollect] = useState([]);
  const [poundsnaira, setPoundsnaira] = useState(0)
  
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
  let symbol = currencysymbol.currency.symbol;

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
        {/* <Navbar /> */}

        <Footer />
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  