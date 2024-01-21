import React from 'react'; 
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Study() {
  return( 
    <div>
      <Navbar />

      <main class="bg-grey-faf9f8">
        <section class="full-width_padding">
            <div class="full-width_border border-2" style="border-color: #f5e6e0;">
                <div class="shop-banner position-relative ">
                    <div class="background-img" style="background-color: #f5e6e0;">
                        <img loading="lazy" src="../images/shop/shop_banner_2.png" width="1759" height="220px" alt="Pattern" class="slideshow-bg__img object-fit-cover" />
                    </div>

                    <div class="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                        <h2 class="text-uppercase text-center fw-bold mb-3 mb-xl-4 mb-xl-5">Study Abroad</h2>
                      
                    </div><!-- /.shop-banner__content -->
                </div><!-- /.shop-banner position-relative -->
            </div><!-- /.full-width_border -->
        </section><!-- /.full-width_padding-->

        <div class="mb-4 pb-lg-3"></div>

        </main>

      <Footer />
    </div>
   
  );
}


if(document.getElementById('study')){
  ReactDOM.render(<Study/>, document.getElementById('study'));
}
