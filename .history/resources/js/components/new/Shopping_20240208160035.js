import React, {useState, useEffect, useRef, useMemo} from 'react';
import ReactDOM  from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import {FiPlus} from 'react-icons/fi';
import {BsFillCartFill} from 'react-icons/bs';
import {AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus, AiFillHome} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CurrencyFormat from 'react-currency-format';

function Shopping() {
  let url = `${window.location.origin}/`;
  const [Cart, SetCart] = useState([])
  
  const handleHome = () => {
    window.location.href = url;
  }

  return (
    <div>
      <Navbar/>
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
          <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
          <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px" >
              <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape"/>
          </div>
          <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
              <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape"/>
          </div>
          <div className="container">
              <div className="breadcumb-content text-center">
                  <h1 className="breadcumb-title">Cart Page</h1>
                  <ul className="breadcumb-menu">
                      <li>
                          <a onClick={handleHome} >Home</a>
                      </li>
                      <li>Cart Page</li>
                  </ul>
              </div>
          </div>
      </div>

      <div className="th-cart-wrapper space-top space-extra-bottom">
            <div className="container">
                <div className="woocommerce-notices-wrapper">
                    <div className="woocommerce-message">Shipping costs updated.</div>
                </div>
                <form action="#" className="woocommerce-cart-form">
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th className="cart-col-image">Image</th>
                                <th className="cart-col-productname">Product Name</th>
                                <th className="cart-col-price">Price</th>
                                <th className="cart-col-quantity">Quantity</th>
                                <th className="cart-col-total">Total</th>
                                <th className="cart-col-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                          {Cart.length > 0 ? (
                              Cart.map((item, index) => (
                                <tr className="cart_item">
                                    <td data-title="Product">
                                        <a className="cart-productimage" href="shop-detailis.html">
                                            <img width="91" height="91" src="assets/img/product/product_thumb_1_1.jpg" alt="Image" />
                                        </a>
                                    </td>
                                    <td data-title="Name">
                                        <a className="cart-productname" href="shop-detailis.html">Flooring-Vinyl</a>
                                    </td>
                                    <td data-title="Price">
                                        <span className="amount">
                                            <bdi>
                                                <span>$</span>
                                                18
                                            </bdi>
                                        </span>
                                    </td>
                                    <td data-title="Quantity">
                                        <div className="quantity">
                                            <button className="quantity-minus qty-btn">
                                                <i className="far fa-minus"></i>
                                            </button>
                                            <input type="number" className="qty-input" value="1" min="1" max="99" />
                                            <button className="quantity-plus qty-btn">
                                                <i className="far fa-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td data-title="Total">
                                        <span className="amount">
                                            <bdi>
                                                <span>$</span>
                                                18
                                            </bdi>
                                        </span>
                                    </td>
                                    <td data-title="Remove">
                                        <a href="#" className="remove">
                                            <i className="fal fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))
                          ) : (
                            <tr>
                                <td colSpan="6" classNameName="text-danger">No items in cart</td>
                            </tr>
                          )}

                       
                        </tbody>
                    </table>
                </form>
                <div className="row justify-content-end">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <h2 className="h4 summary-title">Cart Totals</h2>
                        <table className="cart_totals">
                            <tbody>
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td data-title="Cart Subtotal">
                                        <span className="amount">
                                            <bdi>
                                                <span>$</span>
                                                47
                                            </bdi>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="shipping">
                                    <th>Shipping and Handling</th>
                                    <td data-title="Shipping and Handling">
                                        <ul className="woocommerce-shipping-methods list-unstyled">
                                            <li>
                                                <input type="radio" id="free_shipping" name="shipping_method" className="shipping_method" />
                                                <label for="free_shipping">Free shipping</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="flat_rate" name="shipping_method" className="shipping_method" checked="checked" />
                                                <label for="flat_rate">Flat rate</label>
                                            </li>
                                        </ul>
                                        <p className="woocommerce-shipping-destination">Shipping options will be updated during checkout.</p>
                                        <form action="#" method="post">
                                            <a href="#" className="shipping-calculator-button">Change address</a>
                                            <div className="shipping-calculator-form">
                                                <p className="form-row">
                                                    <select className="form-select">
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="BD" selected="selected">Bangladesh</option>
                                                    </select>
                                                </p>
                                                <p>
                                                    <select className="form-select">
                                                        <option value="">Select an option…</option>
                                                        <option value="BD-05">Bagerhat</option>
                                                        <option value="BD-01">Bandarban</option>
                                                        <option value="BD-02">Barguna</option>
                                                        <option value="BD-06">Barishal</option>
                                                    </select>
                                                </p>
                                                <p className="form-row">
                                                    <input type="text" className="form-control" placeholder="Town / City"/>
                                                </p>
                                                <p className="form-row">
                                                    <input type="text" className="form-control" placeholder="Postcode / ZIP"/>
                                                </p>
                                                <p>
                                                    <button className="th-btn">Update</button>
                                                </p>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="order-total">
                                    <td>Order Total</td>
                                    <td data-title="Total">
                                        <strong>
                                            <span className="amount">
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
                        <div className="wc-proceed-to-checkout mb-30">
                            <a href="checkout.html" className="th-btn">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

      <Footer/>
    </div>
  );
}

export default Shopping;

if (document.getElementById('shoppingcart')) {
  ReactDOM.render(<Shopping/>, document.getElementById('shoppingcart'));
}
