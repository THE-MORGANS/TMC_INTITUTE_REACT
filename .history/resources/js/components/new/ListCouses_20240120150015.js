// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ListCouses() {
  return (
    <div>
        <Navbar />

        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}