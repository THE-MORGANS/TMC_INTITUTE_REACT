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
        
            <section class="shop-main container border-top-1 p-4" style="background-color: #EFEBF5; border-radius:20px">
                <div class="container">
                    <div class="mb-3 mb-xl-0 pb-0 pb-xl-0"></div>
                    <div class="tab-content pt-2" id="collections-2-tab-content">
                        
                        <div class="tab-pane fade show active" id="collections-tab-6" role="tabpanel" aria-labelledby="collections-tab-6-trigger">
                            <div class="row">

                            </div>
                        </div>
                    </div>
                </div>
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