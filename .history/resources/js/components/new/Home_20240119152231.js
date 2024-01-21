import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {AiFillStar, AiOutlineShopping} from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function Home() {
   
    const handleLeave = (e)=>{
      if(e.target){
          Sethover(0)
      }
    }
  let uniarr = Object.values(unique)
  let uni_unshift = uniarr.unshift('All Courses');
//   let uni_push = uniarr.push('More Courses');


     const [currentPage, setCurrentPage] = useState(1)
   const[postPerPage, setPostsperPage] = useState(8)

   const indexofLastPost = currentPage * postPerPage
   const indexofFirstPost = indexofLastPost - postPerPage
      const Post = uniarr?.slice(indexofFirstPost, indexofLastPost)


            let num = [];
      for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
        num.push(i);

      }
      let numberofpages = num.length


    const handleNext = (data)=>{
        if(wordhead){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('mainhead', wordhead)
            formData.append('page', Answer)
            let urltwo = `${url}/coursecartories`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/coursesdata`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }

       }

       const handleClick = (id)=>{
         window.location.href = `${url}/coursedetails/${id}`;
       }

       const starcont = star => {
        let content = [];
        for (let i = 0; i < star; i++){
         content.push(   <label className='w-8' key={i}>
         <AiFillStar data-id={i} className='w-full text-[#FFC107] text-2xl'/>
        </label>)
        }
        return content;
    }

    const handleCart = (id)=>{
       let cart = data.find((item)=>item.id == id)
        let Awnser =  Cart.map(item=>item.id != id)
        let ans =   Awnser.includes(false)
      if(ans == false){
        SetCart([
            ...Cart,
            cart
        ])
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


