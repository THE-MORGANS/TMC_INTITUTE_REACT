import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

function Cart() {
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

   // Logic to get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Logic to paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
    });

    const handleLink =(word, id)=>{
        console.log(`Clicked on course with id ${id}`);
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
               apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(res.data){
                    window.location.href =`${url}/courseinfo/${word}/${res.data}`;
                 }
                })
            })
     }


  
    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'icon-btn '
        }else{
            return 'icon-btn  text-[#A32926]'
        }
    }
    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
    let converted = JSON.parse(currencyex)
    let convertnaira = converted.result.NGN
    
   
    function moneyTalks(converted, price){
        if(converted){
         if(moneyname != 'NGN'){
             return Math.round(price / convertnaira) ;
         }else{
             return Math.round(price);
         }
        }
        else{
         if(moneyname != 'NGN'){
             return Math.round(price / convertnaira) ;
         }else{
             return Math.round(price) ;
     
         }
     
        }
    }
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }

    const reviewStarStyle = {
        width: '20px',
        height: '20px',
    };

    const pcTitleStyle = {
        marginRight: '20px',
    };

  return (
    <div>
        

       


        <Footer />
    </div>
  );
}

export default Cart;

if(document.getElementById("cart")){
ReactDOM.render(<Cart/>, document.getElementById("cart")) 
}
