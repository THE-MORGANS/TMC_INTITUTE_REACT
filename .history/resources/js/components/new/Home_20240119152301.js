import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {AiFillStar, AiOutlineShopping} from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function Home() {
   

  return (
      <div className='flex flex-col items-center'>
        <p>How far</p>
      </div>
  )
}



export default Home;
if (document.getElementById('dash')) {
    ReactDOM.render(<Home/>, document.getElementById('dash'));
}


