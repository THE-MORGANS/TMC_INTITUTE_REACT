
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiExternalLink} from 'react-icons/fi';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

function Profile() {
  let url = window.location.origin;
  const handlehome = ()=>{
    window.location.href = ` ${url}`;
  }
  const [Cart, SetCart] = useState([]);
  const [poundsnaira, setPoundsnaira] = useState(0)

  useEffect(()=>{
      let urlthree = `${url}/allcurrency`;
      axios.get(urlthree).then(res=>{
          if(res.data){
              let info = res.data
          info.map((item)=>{
          console.log(item.currencyname, item.foreignrate,
              item.nairarate)

              if(item.currencyname === 'Pound sterling'){
                  setPoundsnaira(item.nairarate)
              }
          })

          }
      })


      if(Cart.length == 0){
          SetCart(cart === null || cart.length == 0?[]:cart)
      }
  },[])

  let symbol = currencysymbol.currency.symbol

   let converted = JSON.parse(currencyex)
       let convertnaira = converted.result.NGN
       let moneyname = currencysymbol.currency.name
       let other =  Object.values(othersmoneys.result);
       let poundtonaira = poundton.result.NGN
   
   
   const onedollar = 615

   function addedall (){
      const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

      return sum?sum:0;
     }

   function gettotal(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
  //let ans =   parseInt(sum?sum:0)
  //return  Math.round(sum);
  if(currencysymbol.currency.code != 'NGN'){
      let ans =   parseInt(sum?sum:0)
      let quest = ans + (onedollar/convertnaira);
       return Math.round(quest);
    }else{
      let ans =   parseInt(sum?sum:0)
      return ans;
    }

   }

   const handleClick = (id)=>{
      let add = Cart.filter((item)=>item.id != id)
      SetCart(add)
      localStorage.setItem('Cart', JSON.stringify(add))
      let stringdata =  JSON.stringify(add)
      let formData = new FormData();
      formData.append("cartitems", stringdata)
      let urltwo = `${url}/addcart`;
      axios.post(urltwo, formData).then(res=>{

      })
  }
const handleLink =(e)=>{
  e.preventDefault();
  window.location.href =`${url}/shoppingcart`
}

const handleMycourse = ()=>{
  window.location.href =`${url}/usercourses`;
}
let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]

      useEffect(()=>{
  const interval =  setInterval(()=>{
   var storage = !!localStorage.getItem('Cart')
   if(storage == true){
    let cart =   JSON.parse(localStorage.getItem('Cart'));
    SetCart(cart)

   }
  },1000)
  return () => clearInterval(interval);
},[])

const handleLogout =()=>{
       localStorage.clear();
       SetCart([])
       setTimeout(()=>{
            window.location.href = `${url}/Logout`;
       Setdrop(false)
       },1000)
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
 
 const handleIcon =()=>{
  if(username){
      window.location.href = `${url}/newdashboard`;
  }else{
      window.location.href = `${url}`
  }
 }


 

   const handleTestimonials = ()=>{
       window.location.href = ` ${url}/testimonials`
   }

   const handleAboutus = (e)=>{
       e.preventDefault(); 
       window.location.href =`${url}/about-us`
  }
  const handleStudy = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/studyabroad`
  }
  const handleHowtoAppy = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/howtoApply`
  }
  const handleContact = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/contactus`
  }
  const handleOthm = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/othmcourses`
  }
  const handleLgca = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/lgca`
  }
  const handleCart= (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/cart`
  }
  const handlesignup = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/signup`
  }
  const handlecompanyregister = (e)=>{
      e.preventDefault(); 
      window.location.href = `${url}/companyregister`
  }
  
  const handleAcc = ()=>{
      window.location.href = `${url}/profile`
  }
  const handleCheckout = ()=>{
      window.location.href = `${url}/profile`
  }
  return (
    <div>
      <Navbar/>

      
      <Footer/>
    </div>
  
  );
}

export default Profile;

if(document.getElementById('userprofile')){
  ReactDOM.render(<Profile/>, document.getElementById('userprofile'))
}
  
