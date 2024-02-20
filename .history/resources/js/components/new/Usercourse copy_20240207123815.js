import React,{useState} from 'react'
import Navbar from './Navbar'
import ReactDOM from 'react-dom'
import Footer from './Footer';
import { Markup } from 'interweave';
import ReactPaginate from 'react-paginate';
export default function Usercourse() {
   

  
  return (
    <div id="wrapper" class="horizontal">
     
        <Footer/>
    </div>
  )
}

if(document.getElementById('usercourses')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercourses'));
}
