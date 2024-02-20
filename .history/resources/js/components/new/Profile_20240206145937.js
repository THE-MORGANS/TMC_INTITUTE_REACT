
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
import Navbar from './Navbar';
import Footer from './Footer';

function Profile() {
  let url = window.location.origin;
  const handlehome = ()=>{
    window.location.href = ` ${url}`;
  }
 
  return (
    <div>
      {/* <Navbar/> */}
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
        <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
          <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
        </div>
        <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
          <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="breadcumb-content text-center">
            <h1 className="breadcumb-title">Profile</h1>
            <ul className="breadcumb-menu">
              <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
              <li>User Profile</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="th-checkout-wrapper space-top space-extra-bottom">
            <div class="container">
                <div class="woocommerce-form-login-toggle">
                    <div class="woocommerce-info">
                      My profile
                    </div>
                </div>
               
                <form action="#" class="woocommerce-checkout mt-40">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="h4">User Details</h2>
                            <div class="row">
                                <div class="col-12 form-group">
                                  <img width="91" height="91" src={additional?additional.image:userpic}alt="Image"/>
                                   
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Full Name *</label>
                                    <input disabled type="text" class="form-control" placeholder="Full Name" value={username}/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label> Name to be printed on the Certificate *</label>
                                    <input disabled type="text" class="form-control" placeholder="Certificate Name" value= {additional === null?"no data":additional.nameprint}/>
                                </div>
                                <div class="col-12 form-group">
                                    <label> Gender *</label>
                                    <input disabled type="text" class="form-control" placeholder="Gender" value={additional === null?"no data":additional.gender} />
                                </div>
                                <div class="col-12 form-group">
                                    <label> Email *</label>
                                    <input type="text" class="form-control" placeholder="" value= {email}/>
                                </div>
                                <div class="col-12 form-group">
                                    <label> Phone Number *</label>
                                    <input type="text" class="form-control" placeholder="Town / City" value={additional === null?"no data":additional.phone_number} />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label> Phone Number *</label>
                                    <input type="text" class="form-control" placeholder="Country"  />
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="text" class="form-control" placeholder="Postcode / Zip"/>
                                </div>
                                <div class="col-12 form-group">
                                    <input type="text" class="form-control" placeholder="Email Address"/>
                                    <input type="text" class="form-control" placeholder="Phone number"/>
                                </div>
                                <div class="col-12 form-group">
                                    <input type="checkbox" id="accountNewCreate"/>
                                    <label for="accountNewCreate">Creat An Account?</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <p id="ship-to-different-address">
                                <input id="ship-to-different-address-checkbox" type="checkbox" name="ship_to_different_address" value="1" checked="checked"/>
                                <label for="ship-to-different-address-checkbox">
                                    Ship to a different address? <span class="checkmark"></span>
                                </label>
                            </p>
                            <div class="shipping_address">
                                <div class="row">
                                    <div class="col-12 form-group">
                                        <select class="form-select">
                                            <option>United Kingdom (UK)</option>
                                            <option>United State (US)</option>
                                            <option>Equatorial Guinea (GQ)</option>
                                            <option>Australia (AU)</option>
                                            <option>Germany (DE)</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" placeholder="First Name" />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" placeholder="Last Name" />
                                    </div>
                                    <div class="col-12 form-group">
                                        <input type="text" class="form-control" placeholder="Your Company Name" />
                                    </div>
                                    <div class="col-12 form-group">
                                        <input type="text" class="form-control" placeholder="Street Address" />
                                        <input type="text" class="form-control" placeholder="Apartment, suite, unit etc. (optional)"/>
                                    </div>
                                    <div class="col-12 form-group">
                                        <input type="text" class="form-control" placeholder="Town / City" />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" placeholder="Country" />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" placeholder="Postcode / Zip" />
                                    </div>
                                    <div class="col-12 form-group">
                                        <input type="text" class="form-control" placeholder="Email Address" />
                                        <input type="text" class="form-control" placeholder="Phone number" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 form-group">
                                <textarea cols="20" rows="5" class="form-control" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <h4 class="mt-4 pt-lg-2">Your Order</h4>
                <form action="#" class="woocommerce-cart-form">
                    <table class="cart_table mb-20">
                        <thead>
                            <tr>
                                <th class="cart-col-image">Image</th>
                                <th class="cart-col-productname">Product Name</th>
                                <th class="cart-col-price">Price</th>
                                <th class="cart-col-quantity">Quantity</th>
                                <th class="cart-col-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="cart_item">
                                <td data-title="Product">
                                    <a class="cart-productimage" href="shop-details.html">
                                        <img width="91" height="91" src="assets/img/product/product_thumb_1_1.jpg" alt="Image"/>
                                    </a>
                                </td>
                                <td data-title="Name">
                                    <a class="cart-productname" href="shop-details.html">Flooring-Vinyl</a>
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
                                    <strong class="product-quantity">01</strong>
                                </td>
                                <td data-title="Total">
                                    <span class="amount">
                                        <bdi>
                                            <span>$</span>
                                            18
                                        </bdi>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="checkout-ordertable">
                            <tr class="cart-subtotal">
                                <th>Subtotal</th>
                                <td data-title="Subtotal" colspan="4">
                                    <span class="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span class="woocommerce-Price-currencySymbol">$</span>
                                            281.05
                                        </bdi>
                                    </span>
                                </td>
                            </tr>
                            <tr class="woocommerce-shipping-totals shipping">
                                <th>Shipping</th>
                                <td data-title="Shipping" colspan="4">Enter your address to view shipping options.</td>
                            </tr>
                            <tr class="order-total">
                                <th>Total</th>
                                <td data-title="Total" colspan="4">
                                    <strong>
                                        <span class="woocommerce-Price-amount amount">
                                            <bdi>
                                                <span class="woocommerce-Price-currencySymbol">$</span>
                                                281.05
                                            </bdi>
                                        </span>
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
                <div class="mt-lg-3 mb-30">
                    <div class="woocommerce-checkout-payment">
                        <ul class="wc_payment_methods payment_methods methods">
                            <li class="wc_payment_method payment_method_bacs">
                                <input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="bacs" checked="checked"/>
                                <label for="payment_method_bacs">Direct bank transfer</label>
                                <div class="payment_box payment_method_bacs">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                            </li>
                            <li class="wc_payment_method payment_method_cheque">
                                <input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="cheque"/>
                                <label for="payment_method_cheque">Cheque Payment</label>
                                <div class="payment_box payment_method_cheque">
                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>
                            </li>
                            <li class="wc_payment_method payment_method_cod">
                                <input id="payment_method_cod" type="radio" class="input-radio" name="payment_method"/>
                                <label for="payment_method_cod">Credit Cart</label>
                                <div class="payment_box payment_method_cod">
                                    <p>Pay with cash upon delivery.</p>
                                </div>
                            </li>
                            <li class="wc_payment_method payment_method_paypal">
                                <input id="payment_method_paypal" type="radio" class="input-radio" name="payment_method" value="paypal"/>
                                <label for="payment_method_paypal">Paypal</label>
                                <div class="payment_box payment_method_paypal">
                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                </div>
                            </li>
                        </ul>
                        <div class="form-row place-order">
                            <button type="submit" class="th-btn">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


      
      <Footer/>
    </div>
  
  );
}

export default Profile;

if(document.getElementById('profile')){
  ReactDOM.render(<Profile/>, document.getElementById('profile'))
}
  
