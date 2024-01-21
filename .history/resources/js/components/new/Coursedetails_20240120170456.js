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
            

        </main>


        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('Coursedetails')){
    ReactDOM.render(<Coursedetails/>,document.getElementById('listcourses'));
}