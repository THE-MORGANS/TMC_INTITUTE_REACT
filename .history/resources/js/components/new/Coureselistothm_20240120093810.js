import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';

export default function Coureselistothm() {
   
   
  return (
    <div>
       <Navbar/>
       <main>
            <section className="shop-main container d-flex pt-4 pt-xl-5">
                <div className="shop-sidebar side-sticky bg-body" id="shopFilter">
                    <div className="aside-header d-flex d-lg-none align-items-center">
                        <h3 class="text-uppercase fs-6 mb-0">Filter By</h3>
                        <button class="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
                    </div>

                </div>
            </section>
        </main>


        <Footer />
    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
