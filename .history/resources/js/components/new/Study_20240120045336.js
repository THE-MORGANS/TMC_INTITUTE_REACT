import React from 'react'; 
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Study() {
  return( 
    <div>
      <Navbar />

      <main className="bg-grey-faf9f8">
        <section className="full-width_padding">
            <div className="full-width_border border-2" style={{borderColor: '#f5e6e0'}}>
                <div className="shop-banner position-relative ">
                    <div className="background-img" style={{backgroundColor: '#f5e6e0'}}>
                        <img loading="lazy" src="../images/shop/shop_banner_2.png" width="1759" height="220px" alt="Pattern" class="slideshow-bg__img object-fit-cover" />
                    </div>

                    <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                        <h2 className="text-uppercase text-center fw-bold mb-3 mb-xl-4 mb-xl-5">Study Abroad</h2>
                      
                    </div>
                </div>
            </div>
        </section>
        <div class="mb-4 pb-lg-3"></div>

        <section class="contact-us container" style={{backgroundColor:  '#EDE9F2', borderRadius:'20px'}}>
      
          <div class="p-4">
            <div class="row mb-5">
              <div class="col-lg-7">
                <p class="mb-3">We are your strategic, Study Abroad Buddy with tons of experience and reach to boot!</p>
                <p class="mb-3">
                  At TMC Institute, we boast strongly of our Study abroad program; Its structure, and our advisers.
                </p>
                <p class="mb-3">
                  This is because our advisers have been helping students take their first steps towards building a successful future with international education since 2019 with loads of successful relocations and referrals.
                </p>
                <p class="mb-3">
                  As the official, in-country representatives for a ton of international education partners, we will help you every step of the way, from helping you decide what you would prefer to study to help you sort out your application and admissions process and also assisting in the application process for your visa.
                </p>
                <p class="mb-3">
                  At TMC Institute, we make sure that all your career pathway needs such as your program selection, study location, accommodation, course fees, visa requirements and future career options are fulﬁlled in accordance with your preferences.
                </p>
                <p class="mb-3">
                  The success of our students oftentimes reﬂect on our intentional dedication to guiding them through the most appropriate path out of numerous available options.
                </p>
                <p class="mb-3"></p>
                <div class="text-left mt-2">
                  <a href="#" class="btn btn-primary mb-xl-4 mr-4" style=" border-radius: 10px;" >Get Started</a>
                  
                  <a href="#" class="btn btn-outline-primary mb-xl-4 " style=" border-radius: 10px;" >Arden University</a>

                </div>
              </div>
              <div class="col-lg-5">
                <img src="../images/home/colleage-level.jpg" class="w-80 h-auto d-block" />
                
              </div>
            </div>
            
          </div>
        </section>

        </main>

      <Footer />
    </div>
   
  );
}


if(document.getElementById('study')){
  ReactDOM.render(<Study/>, document.getElementById('study'));
}
