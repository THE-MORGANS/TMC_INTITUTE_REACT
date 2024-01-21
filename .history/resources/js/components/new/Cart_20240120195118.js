import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Cart() {
  return (
      <div>
        <Navbar />

        <main>
          <div class="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

          <section class="shop-checkout container">
            <h2 class="page-title">Cart</h2>
            <div class="checkout-steps">
              <a href="cart.html" class="checkout-steps__item active">
                <span class="checkout-steps__item-number">01</span>
                <span class="checkout-steps__item-title">
                  <span>Shopping Bag</span>
                  <em>Manage Your Items List</em>
                </span>
              </a>
              <a href="checkout.html" class="checkout-steps__item">
                <span class="checkout-steps__item-number">02</span>
                <span class="checkout-steps__item-title">
                  <span>Shipping and Checkout</span>
                  <em>Checkout Your Items List</em>
                </span>
              </a>
              <a href="order_complete.html" class="checkout-steps__item">
                <span class="checkout-steps__item-number">03</span>
                <span class="checkout-steps__item-title">
                  <span>Confirmation</span>
                  <em>Review And Submit Your Order</em>
                </span>
              </a>
            </div>
        <Footer />
      </div>
      
    );
}
 
export default Cart;

if(document.getElementById('cart')){
  ReactDOM.render(<Cart/>, document.getElementById('cart'))
}
  