import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {AiFillStar, AiOutlineShopping} from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function Home() {
   
   
    const handlePag =(data)=>{
      let Answer = data.selected + 1;
      console.log(Answer)
      setCurrentPage(Answer)
    }

  return (
    <div className='flex flex-col items-center'>
      
        </div>
  )
}



export default Home;
if (document.getElementById('dash')) {
    ReactDOM.render(<Home/>, document.getElementById('dash'));
}


