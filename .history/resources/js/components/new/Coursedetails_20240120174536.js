// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Coursedetails() {
    const reviewStarStyle = {
        width: '20px',
        height: '20px',
    };

    const pcTitleStyle = {
        marginRight: '20px',
    };
  return (
    <div>
        <Navbar />

      
        <main style={{ backgroundColor: '#F7F5FA' }}>
        <section className="shop-main container p-3">
      <p className="mb-1 mb-md-3 pb-xl-3 mb-xl-4 h2" style={{ color: '#0a2472' }}>Similar Courses</p>
      <section className="shop-main container p-3" style={{ backgroundColor: '#eee' }}>
        <div className="products-grid row row-cols-1 row-cols-md-3 row-cols-lg-2 row-cols-xl-2" id="products-grid">
          {/* First Course */}
          <div className="product-card-wrapper">
            <div className="blog-list__item" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px' }}>
              {/* ... Course content ... */}
            </div>
          </div>

          {/* Second Course */}
          <div className="product-card-wrapper">
            <div className="blog-list__item" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px' }}>
              {/* ... Course content ... */}
            </div>
          </div>

          {/* Third Course */}
          <div className="product-card-wrapper">
            <div className="blog-list__item" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px' }}>
              {/* ... Course content ... */}
            </div>
          </div>

          {/* Fourth Course */}
          <div className="product-card-wrapper">
            <div className="blog-list__item" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px' }}>
              {/* ... Course content ... */}
            </div>
          </div>

          {/* Add more courses as needed */}

        </div>
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <section className="contact-us container" style={{ backgroundColor: '#37226C', borderRadius: '20px' }}>
          <div className="p-3 text-center">
            <div className="row mb-5">
              <div className="col-xl-4 d-none d-lg-block">
                <img src="../images/home/sub-1.png" className="w-50 h-auto d-block mt-xl-5" alt="Subscription 1" />
              </div>
              <div className="col-xl-4">
                <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
                <h2 style={{ fontWeight: 900, color: '#fff' }} className="section-title text-left mb-4 mb-xl-3">
                  Subscribe to Get Update For Every New Courses
                </h2>
                <p className="mb-4 mb-xl-5" style={{ color: '#777' }}>
                  20k+ students daily learn with TMC Institute. Subscribe for new courses.
                </p>
                <div className="text-left mt-2">
                  <form action="" className="footer-newsletter__form position-relative bg-body">
                    <input className="form-control border-white" type="email" name="email" placeholder="Enter your email" style={{ backgroundImage: 'url("data:image/png;base64,") !important', backgroundRepeat: 'no-repeat', backgroundSize: '70px', backgroundPosition: '97% center', cursor: 'auto' }} data-temp-mail-org="1" />
                    <input className="btn btn-link fw-medium text-white position-absolute top-0 end-0 h-100" type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
              <div className="col-xl-4 d-none d-lg-block">
                <img src="../images/home/sub-2.png" className="w-50 h-auto d-block mt-xl-5" alt="Subscription 2" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>




        </main>


        <Footer />
    </div>
  );
}

export default Coursedetails;

if(document.getElementById('coursedetails')){
    ReactDOM.render(<Coursedetails/>,document.getElementById('coursedetails'));
}