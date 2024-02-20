import React,{useState} from 'react'
import Navbar from './Navbar'
import ReactDOM from 'react-dom'
import Footer from './Footer';
import { Markup } from 'interweave';
import ReactPaginate from 'react-paginate';

export default function Usercourse() {
 
  return (
    <div>
        {/* <Navbar/> */}

      


   

        {/* <Footer/> */}
    </div>
  )
}

if(document.getElementById('coursesUser')){
    ReactDOM.render(<Usercourse/>, document.getElementById('coursesUser'));
}
