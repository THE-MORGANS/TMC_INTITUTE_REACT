// Study.js
import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
  return (


  <div className="aside aside_right overflow-hidden customer-forms" id="customerForms">
    <div className="customer-forms__wrapper d-flex position-relative">
      <div className="customer__login">
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">Login</h3>
          <button className="btn-close-lg js-close-aside ms-auto"></button>
        </div>

        <form action="" method="POST" className="aside-content">
          <div className="form-floating mb-3">
            <input name="email" type="email" className="form-control form-control_gray" id="customerNameEmailInput" placeholder="name@example.com">
            <label for="customerNameEmailInput">Username or email address *</label>
          </div>

          <div className="pb-3"></div>

          <div className="form-label-fixed mb-3">
            <label for="customerPasswordInput" className="form-label">Password *</label>
            <input name="password" id="customerPasswordInput" className="form-control form-control_gray" type="password" placeholder="********" />
          </div>

          <div className="d-flex align-items-center mb-3 pb-2">
            <div className="form-check mb-0">
              <input name="remember" className="form-check-input form-check-input_fill" type="checkbox" value="" id="flexCheckDefault">
              <label className="form-check-label text-secondary" for="flexCheckDefault">Remember me</label>
            </div>
            <a href="./reset_password.html" className="btn-text ms-auto">Lost password?</a>
          </div>

          <button className="btn btn-primary w-100 text-uppercase" type="submit">Log In</button>

          <div className="customer-option mt-4 text-center">
            <span className="text-secondary">No account yet?</span>
            <a href="./login_register.html#register-tab" className="btn-text js-show-register">Create Account</a>
          </div>
        </form>
      </div>

      <div className="customer__register">
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
          <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
        </div>

        <form action="" method="POST" className="aside-content">
          <div className="form-floating mb-4">
            <input name="username" type="text" className="form-control form-control_gray" id="registerUserNameInput" placeholder="Username">
            <label for="registerUserNameInput">Username</label>
          </div>

          <div className="pb-1"></div>

          <div className="form-floating mb-4">
            <input name="email" type="email" className="form-control form-control_gray" id="registerUserEmailInput" placeholder="user@company.com">
            <label for="registerUserEmailInput">Email address *</label>
          </div>

          <div className="pb-1"></div>

          <div className="form-label-fixed mb-4">
            <label for="registerPasswordInput" className="form-label">Password *</label>
            <input name="password" id="registerPasswordInput" className="form-control form-control_gray" type="password" placeholder="*******" />
          </div>

          <p className="text-secondary mb-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

          <button className="btn btn-primary w-100 text-uppercase" type="submit">Register</button>

          <div className="customer-option mt-4 text-center">
            <span className="text-secondary">Already have account?</span>
            <a href="#" className="btn-text js-show-login">Login</a>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div className="modal fade" id="siteMap" tabindex="-1" aria-labelledby="siteMapModal" aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
      <div className="sitemap d-flex">
        <div className="w-50 d-none d-lg-block">
          <img loading="lazy" src="../images/nav-bg.jpg" alt="Site map" className="sitemap__bg" />
        </div>
        <div className="sitemap__links w-50 flex-grow-1">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active rounded-1 text-uppercase" id="pills-item-1-tab" data-bs-toggle="pill" href="#pills-item-1" role="tab" aria-controls="pills-item-1" aria-selected="true">WOMEN</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link rounded-1 text-uppercase" id="pills-item-2-tab" data-bs-toggle="pill" href="#pills-item-2" role="tab" aria-controls="pills-item-2" aria-selected="false">MEN</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link rounded-1 text-uppercase" id="pills-item-3-tab" data-bs-toggle="pill" href="#pills-item-3" role="tab" aria-controls="pills-item-3" aria-selected="false">KIDS</a>
                </li>
              </ul>
              <button type="button" className="btn-close-lg" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div className="tab-content col-12" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-item-1" role="tabpanel" aria-labelledby="pills-item-1-tab">
                  <div className="row">
                    <ul className="nav nav-tabs list-unstyled col-5 d-block" id="myTab" role="tablist">
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline active" id="tab-item-1-tab" data-bs-toggle="tab" href="#tab-item-1" role="tab" aria-controls="tab-item-1" aria-selected="true"><span className="rline-content">WOMEN</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" id="tab-item-2-tab" data-bs-toggle="tab" href="#tab-item-2" role="tab" aria-controls="tab-item-2" aria-selected="false"><span className="rline-content">MAN</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" id="tab-item-3-tab" data-bs-toggle="tab" href="#tab-item-3" role="tab" aria-controls="tab-item-3" aria-selected="false"><span className="rline-content">KIDS</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">HOME</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">COLLECTION</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline text-red" href="#">SALE UP TO 50% OFF</a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">NEW</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">SHOES</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">ACCESSORIES</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">JOIN LIFE</span></a>
                      </li>
                      <li className="nav-item position-relative" role="presentation">
                        <a className="nav-link nav-link_rline" href="#"><span className="rline-content">#UOMOSTYLE</span></a>
                      </li>
                    </ul>

                    <div className="tab-content col-7" id="myTabContent">
                      <div className="tab-pane fade show active" id="tab-item-1" role="tabpanel" aria-labelledby="tab-item-1-tab">
                        <ul className="sub-menu list-unstyled">
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">New</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Best Sellers</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Collaborations®</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Sets</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Denim</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Jackets & Coats</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Overshirts</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Trousers</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Jeans</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Dresses</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Sweatshirts and Hoodies</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">T-shirts & Tops</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shirts & Blouses</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shorts and Bermudas</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shoes</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="./shop3.html" className="menu-link menu-link_us-s">Accessories</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Bags</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Gift Card</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="tab-item-2" role="tabpanel" aria-labelledby="tab-item-2-tab">
                        <ul className="sub-menu list-unstyled">
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Best Sellers</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">New</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Sets</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Denim</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Collaborations®</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Trousers</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Jackets & Coats</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Overshirts</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Dresses</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Jeans</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Sweatshirts and Hoodies</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Gift Card</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shirts & Blouses</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">T-shirts & Tops</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shorts and Bermudas</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="./shop3.html" className="menu-link menu-link_us-s">Accessories</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shoes</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Bags</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="tab-item-3" role="tabpanel" aria-labelledby="tab-item-3-tab">
                        <ul className="sub-menu list-unstyled">
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Gift Card</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Collaborations®</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Sets</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Denim</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">New</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Best Sellers</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Overshirts</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Jackets & Coats</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Jeans</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Trousers</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shorts and Bermudas</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Shoes</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="./shop3.html" className="menu-link menu-link_us-s">Accessories</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Dresses</a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">Bags</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-item-2" role="tabpanel" aria-labelledby="pills-item-2-tab">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.
                </div>
                <div className="tab-pane fade" id="pills-item-3" role="tabpanel" aria-labelledby="pills-item-3-tab">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="modal fade" id="quickView" tabindex="-1" aria-labelledby="quickViewModal" aria-hidden="true">
    <div className="modal-dialog quick-view modal-dialog-centered">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="product-single">
          <div className="product-single__media m-0">
            <div className="product-single__image position-relative w-100">
              <div className="swiper-container js-swiper-slider"
                data-settings='{
                  "slidesPerView": 1,
                  "slidesPerGroup": 1,
                  "effect": "none",
                  "loop": false,
                  "navigation": {
                    "nextEl": ".modal-dialog.quick-view .product-single__media .swiper-button-next",
                    "prevEl": ".modal-dialog.quick-view .product-single__media .swiper-button-prev"
                  }
                }'>
                <div className="swiper-wrapper">
                  <div className="swiper-slide product-single__image-item">
                    <img loading="lazy" src="../images/products/quickview_1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide product-single__image-item">
                    <img loading="lazy" src="../images/products/quickview_2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide product-single__image-item">
                    <img loading="lazy" src="../images/products/quickview_3.jpg" alt="" />
                  </div>
                  <div className="swiper-slide product-single__image-item">
                    <img loading="lazy" src="../images/products/quickview_4.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-button-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></div>
                <div className="swiper-button-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></div>
              </div>
            </div>
          </div>
          <div className="product-single__detail">
            <h1 className="product-single__name">Lightweight Puffer Jacket With a Hood</h1>
            <div className="product-single__price">
              <span className="current-price">$449</span>
            </div>
            <div className="product-single__short-desc">
              <p>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
            </div>
            <form name="addtocart-form" method="post">
              <div className="product-single__swatches">
                <div className="product-swatch text-swatches">
                  <label>Sizes</label>
                  <div className="swatch-list">
                    <input type="radio" name="size" id="swatch-1">
                    <label className="swatch js-swatch" for="swatch-1" aria-label="Extra Small" data-bs-toggle="tooltip" data-bs-placement="top" title="Extra Small">XS</label>
                    <input type="radio" name="size" id="swatch-2" checked>
                    <label className="swatch js-swatch" for="swatch-2" aria-label="Small" data-bs-toggle="tooltip" data-bs-placement="top" title="Small">S</label>
                    <input type="radio" name="size" id="swatch-3">
                    <label className="swatch js-swatch" for="swatch-3" aria-label="Middle" data-bs-toggle="tooltip" data-bs-placement="top" title="Middle">M</label>
                    <input type="radio" name="size" id="swatch-4">
                    <label className="swatch js-swatch" for="swatch-4" aria-label="Large" data-bs-toggle="tooltip" data-bs-placement="top" title="Large">L</label>
                    <input type="radio" name="size" id="swatch-5">
                    <label className="swatch js-swatch" for="swatch-5" aria-label="Extra Large" data-bs-toggle="tooltip" data-bs-placement="top" title="Extra Large">XL</label>
                  </div>
                  <a href="#" className="sizeguide-link" data-bs-toggle="modal" data-bs-target="#sizeGuide">Size Guide</a>
                </div>
                <div className="product-swatch color-swatches">
                  <label>Color</label>
                  <div className="swatch-list">
                    <input type="radio" name="color" id="swatch-11">
                    <label className="swatch swatch-color js-swatch" for="swatch-11" aria-label="Black" data-bs-toggle="tooltip" data-bs-placement="top" title="Black" style="color: #222"></label>
                    <input type="radio" name="color" id="swatch-12" checked>
                    <label className="swatch swatch-color js-swatch" for="swatch-12" aria-label="Red" data-bs-toggle="tooltip" data-bs-placement="top" title="Red" style="color: #C93A3E"></label>
                    <input type="radio" name="color" id="swatch-13">
                    <label className="swatch swatch-color js-swatch" for="swatch-13" aria-label="Grey" data-bs-toggle="tooltip" data-bs-placement="top" title="Grey" style="color: #E4E4E4"></label>
                  </div>
                </div>
              </div>
              <div className="product-single__addtocart">
                <div className="qty-control position-relative">
                  <input type="number" name="quantity" value="1" min="1" className="qty-control__number text-center">
                  <div className="qty-control__reduce">-</div>
                  <div className="qty-control__increase">+</div>
                </div>
                <button type="submit" className="btn btn-primary btn-addtocart js-open-aside" data-aside="cartDrawer">Add to Cart</button>
              </div>
            </form>
            <div className="product-single__addtolinks">
              <a href="#" className="menu-link menu-link_us-s add-to-wishlist"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg><span>Add to Wishlist</span></a>
              <share-button className="share-button">
                <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_sharing" /></svg>
                </button>
                <details id="Details-share-template__main" className="m-1 xl:m-1.5" hidden="">
                  <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">+</summary>
                  <div id="Article-share-template__main" className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10">
                    <div className="field grow mr-4">
                      <label className="field__label sr-only" for="url">Link</label>
                      <input type="text" className="field__input w-full" id="url" value="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health" placeholder="Link" onclick="this.select();" readonly="">
                    </div>
                    <button className="share-button__copy no-js-hidden">
                      <svg className="icon icon-clipboard inline-block mr-1" width="11" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 11 13">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z" fill="currentColor"></path>
                      </svg>
                      <span className="sr-only">Copy link</span>
                    </button>
                  </div>
                </details>
              </share-button>
              <script src="./js/details-disclosure.js" defer="defer"></script>
              <script src="./js/share.js" defer="defer"></script>
            </div>
            <div className="product-single__meta-info mb-0">
              <div className="meta-item">
                <label>SKU:</label>
                <span>N/A</span>
              </div>
              <div className="meta-item">
                <label>Categories:</label>
                <span>Casual & Urban Wear, Jackets, Men</span>
              </div>
              <div className="meta-item">
                <label>Tags:</label>
                <span>biker, black, bomber, leather</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

 
  <div id="scrollTop" className="visually-hidden end-0"></div>

  
  <div className="page-overlay"></div>

  );
}

export default Home;

if (document.getElementById('home')) {
  ReactDOM.render(<Home />, document.getElementById('home'));
}
