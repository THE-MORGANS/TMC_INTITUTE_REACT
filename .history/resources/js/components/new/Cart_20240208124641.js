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



// const handleHome =()=>{
//    window.location.href = `${url}`;
// }

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
 
 

 

 

  return (
      <div>
        {/* <Navbar /> */}
        <p>
        <CurrencyFormat value={moneyTalks(single.converted, single.price, single.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 

        </p>
        <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div class="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div class="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
                <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape"/>
            </div>
            <div class="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
                <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape"/>
            </div>
            <div class="container">
                <div class="breadcumb-content text-center">
                    <h1 class="breadcumb-title">Cart Page</h1>
                    <ul class="breadcumb-menu">
                        <li>
                            <a onClick={handlehome} >Home</a>
                        </li>
                        <li>Cart Page</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="th-cart-wrapper space-top space-extra-bottom">
            <div class="container">
                <div class="woocommerce-notices-wrapper">
                    <div class="woocommerce-message">Shipping costs updated.</div>
                </div>
                <form action="#" class="woocommerce-cart-form">
                    <table class="cart_table">
                        <thead>
                            <tr>
                                <th class="cart-col-image">Image</th>
                                <th class="cart-col-productname">Product Name</th>
                                <th class="cart-col-price">Price</th>
                                <th class="cart-col-quantity">Quantity</th>
                                <th class="cart-col-total">Total</th>
                                <th class="cart-col-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="cart_item">
                                <td data-title="Product">
                                    <a class="cart-productimage" href="shop-detailis.html">
                                        <img width="91" height="91" src="assets/img/product/product_thumb_1_1.jpg" alt="Image" />
                                    </a>
                                </td>
                                <td data-title="Name">
                                    <a class="cart-productname" href="shop-detailis.html">Flooring-Vinyl</a>
                                </td>
                                <td data-title="Price">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                                <td data-title="Quantity">
                                    <div class="quantity">
                                        <button class="quantity-minus qty-btn">
                                            <i class="far fa-minus"></i>
                                        </button>
                                        <input type="number" class="qty-input" value="1" min="1" max="99" />
                                        <button class="quantity-plus qty-btn">
                                            <i class="far fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td data-title="Total">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                                <td data-title="Remove">
                                    <a href="#" class="remove">
                                        <i class="fal fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr class="cart_item">
                                <td data-title="Product">
                                    <a class="cart-productimage" href="shop-detailis.html">
                                        <img width="91" height="91" src="assets/img/product/product_thumb_1_2.jpg" alt="Image" />
                                    </a>
                                </td>
                                <td data-title="Name">
                                    <a class="cart-productname" href="shop-detailis.html">Cement Metal Roof</a>
                                </td>
                                <td data-title="Price">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                                <td data-title="Quantity">
                                    <div class="quantity">
                                        <button class="quantity-minus qty-btn">
                                            <i class="far fa-minus"></i>
                                        </button>
                                        <input type="number" class="qty-input" value="1" min="1" max="99" />
                                        <button class="quantity-plus qty-btn">
                                            <i class="far fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td data-title="Total">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                                <td data-title="Remove">
                                    <a href="#" class="remove">
                                        <i class="fal fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr class="cart_item">
                                <td data-title="Product">
                                    <a class="cart-productimage" href="shop-detailis.html">
                                        <img width="91" height="91" src="assets/img/product/product_thumb_1_3.jpg" alt="Image"/>
                                    </a>
                                </td>
                                <td data-title="Name">
                                    <a class="cart-productname" href="shop-detailis.html">Metal Roof Steel</a>
                                </td>
                                <td data-title="Price">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                                <td data-title="Quantity">
                                    <div class="quantity">
                                        <button class="quantity-minus qty-btn">
                                            <i class="far fa-minus"></i>
                                        </button>
                                        <input type="number" class="qty-input" value="1" min="1" max="99"/>
                                        <button class="quantity-plus qty-btn">
                                            <i class="far fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td data-title="Total">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                                <td data-title="Remove">
                                    <a href="#" class="remove">
                                        <i class="fal fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6" class="actions">
                                    <div class="th-cart-coupon">
                                        <input type="text" class="form-control" placeholder="Coupon Code..."/>
                                        <button type="submit" class="th-btn">Apply Coupon</button>
                                    </div>
                                    <button type="submit" class="th-btn">Update cart</button>
                                    <a href="shop.html" class="th-btn">Continue Shopping</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div class="row justify-content-end">
                    <div class="col-md-8 col-lg-7 col-xl-6">
                        <h2 class="h4 summary-title">Cart Totals</h2>
                        <table class="cart_totals">
                            <tbody>
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td data-title="Cart Subtotal">
                                        <span class="amount">
                                            <bdi>
                                                <span>$</span>
                                                47
                                            </bdi>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="shipping">
                                    <th>Shipping and Handling</th>
                                    <td data-title="Shipping and Handling">
                                        <ul class="woocommerce-shipping-methods list-unstyled">
                                            <li>
                                                <input type="radio" id="free_shipping" name="shipping_method" class="shipping_method"/>
                                                <label for="free_shipping">Free shipping</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="flat_rate" name="shipping_method" class="shipping_method" checked="checked"/>
                                                <label for="flat_rate">Flat rate</label>
                                            </li>
                                        </ul>
                                        <p class="woocommerce-shipping-destination">Shipping options will be updated during checkout.</p>
                                        <form action="#" method="post">
                                            <a href="#" class="shipping-calculator-button">Change address</a>
                                            <div class="shipping-calculator-form">
                                                <p class="form-row">
                                                    <select class="form-select">
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="BD" selected="selected">Bangladesh</option>
                                                    </select>
                                                </p>
                                                <p>
                                                    <select class="form-select">
                                                        <option value="">Select an option…</option>
                                                        <option value="BD-05">Bagerhat</option>
                                                        <option value="BD-01">Bandarban</option>
                                                        <option value="BD-02">Barguna</option>
                                                        <option value="BD-06">Barishal</option>
                                                    </select>
                                                </p>
                                                <p class="form-row">
                                                    <input type="text" class="form-control" placeholder="Town / City"/>
                                                </p>
                                                <p class="form-row">
                                                    <input type="text" class="form-control" placeholder="Postcode / ZIP"/>
                                                </p>
                                                <p>
                                                    <button class="th-btn">Update</button>
                                                </p>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="order-total">
                                    <td>Order Total</td>
                                    <td data-title="Total">
                                        <strong>
                                            <span class="amount">
                                                <bdi>
                                                    <span>$</span>
                                                    47
                                                </bdi>
                                            </span>
                                        </strong>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div class="wc-proceed-to-checkout mb-30">
                            <a href="checkout.html" class="th-btn">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

        <Footer />
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  