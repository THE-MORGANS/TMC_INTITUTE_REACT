import React from 'react'
import ReactDom from 'react-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function About() {
    return (
        <div className="">
            <Navbar/>
     



 
            <Footer/>
        </div>
    );
}

if(document.getElementById("aboutrent")){
    ReactDom.render(<About/>, document.getElementById("aboutrent"));
    }
