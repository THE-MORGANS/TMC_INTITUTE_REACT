import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {AiFillStar, AiOutlineShopping} from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function Home() {
   
   

        let AddCart = [...Cart, cart]
        localStorage.setItem('Cart', JSON.stringify(AddCart))
          let stringdata =  JSON.stringify(AddCart)
        let formData = new FormData();
        formData.append("cartitems", stringdata)
          let urltwo = `${url}/addcart`;
          axios.post(urltwo, formData).then(res=>{

            })
      }

    }

    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }

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


