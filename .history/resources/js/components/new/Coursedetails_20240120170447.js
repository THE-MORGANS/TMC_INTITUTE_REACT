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

        <main>
            

            <div class="mb-5 pb-xl-5"></div>
        </main>


        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}