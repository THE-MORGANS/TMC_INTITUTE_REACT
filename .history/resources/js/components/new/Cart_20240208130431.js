import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

export default function Cart() {
    let url = window.location.origin;
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [data, Setdata] = useState(allcourse.length > 0?allcourse:[]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

   // Logic to get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);



    const handleCart = (id)=>{
            let cart = data.find((item)=>item.id == id)
            // console.log(cart)
            let object =   cart.standard_price?{
                certification: cart.certification,
                coursedetails: cart.coursedetails,
                coursename: cart.coursename,
                coursetype: cart.coursetype,
                created_at: cart.created_at,
                currency_name:cart.currency_name ,
                duration: cart.duration,
                firstletter: cart.firstletter,
                id:cart.id,
                instructor: cart.instructor,
                language: cart.language,
                learning:cart.learning ,
                lesson: cart.lesson ,
                picture: cart.picture,
                quizzes:cart.quizzes,
                rating: cart.rating,
                price:cart.standard_price,
                updated_at:cart.updated_at,
                whothiscoursefor:cart.whothiscoursefor,
            }:cart
            let Awnser =  Cart.map(item=>item.id != id)
            let ans =   Awnser.includes(false)
          if(ans == false){
            SetCart([
                ...Cart,
                object,

            ])
            let AddCart = [...Cart, object]
            localStorage.setItem('Cart', JSON.stringify(AddCart))
              let stringdata =  JSON.stringify(AddCart)
            let formData = new FormData();
            formData.append("cartitems", stringdata)
              let urltwo = `${url}/addcart`;
              axios.post(urltwo, formData).then(res=>{
                 console.log(res)
                })

          }

     }

     useEffect(()=>{
        const interval =  setInterval(()=>{
         var storage = !!localStorage.getItem('Cart')
         if(storage == true){
          let cart =   JSON.parse(localStorage.getItem('Cart'));
          SetCart(cart)

         }

        },1000)
        return () => clearInterval(interval);
     },[])


     const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

    const handleLearn=(id)=>{
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
         apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(additional == false){
                    window.location.href = `${url}/profile`;
                }else if(additional == true && res.data){
                    window.location.href =`${url}/coursevideos/${word}/${res.data}`;
                }
                })
            })
    }

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

    const handleEnrol = ()=>{
        window.location.href =`${url}/signup`;
    }

    const handleEnrolCom =()=>{
        window.location.href =`${url}/companyregister`;
    }
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
    function convertDate(rawDate){
        const inputDate = new Date(rawDate);
        const monthsInEnglish = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = monthsInEnglish[inputDate.getMonth()];
        const year = inputDate.getFullYear();

        return `${day} ${month} ${year}`;
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

// dhdghdg 
  return (
    <div>
       <Navbar/>
        
        <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div class="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div class="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
                <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape"/>
            </div>
            <div class="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
                <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape"/>
            </div>
            <div class="container">
                <div class="breadcumb-content text-center">
                    <h1 class="breadcumb-title">Courses Details</h1>
                    <ul class="breadcumb-menu">
                        <li>
                            <a onClick={handlehome} style={{cursor:'pointer'}} >Home</a>
                        </li>
                        <li>Courses Details</li>
                    </ul>
                </div>
            </div>
        </div>


        <Footer/>
    </div>
  )
}

if(document.getElementById('courseinfo')){
ReactDOM.render(<Cart />, document.getElementById('courseinfo'));
}

