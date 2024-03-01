import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

function ListCouses() {
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(12)
    const [hover, Sethover] = useState(0)
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [orderbystat, setorderbystat] = useState('')
    const [categories, setcategories] = useState('')
    const [search, setsearch] = useState('')
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage
       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost)
       let numberofcourse = data.length;
       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
    //    console.log(Post)

    const handlemouse =(num, word)=>{
     setorderbystat(word)
      Sethover(num)
      let formData = new FormData();
      formData.append('categories', word)
      formData.append('page', 1)
      let urltwo = `${url}/categories`;
      axios.post(urltwo, formData).then(res=>{
         if(res.data){
          Setdata(res.data.data)
          Setlast(res.data.last_page)
         }
        })
    }

    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
    });

    
    // const handlePag =(data)=>{
    // let Answer = data.selected + 1;
    // setCurrentPage(Answer)
    // }
    const handleNext = (data)=>{
        if(orderbystat == ''){
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
        }else if(orderbystat == 'ASC' || orderbystat == 'DESC'){
            let Answer = data.selected + 1;
           let formData = new FormData();
           formData.append('orderby', orderbystat)
           formData.append('page', Answer)
           let urltwo = `${url}/arrangment`;
           axios.post(urltwo, formData).then(res=>{
              if(res.data){
               Setdata(res.data.data)
               Setlast(res.data.last_page)
              }
             })
        }else if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabet`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categories`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }

    }

       const handleArrange =(e)=>{
            setorderbystat(e.target.dataset.name)
            let formData = new FormData();
            formData.append('orderby', e.target.dataset.name)
            formData.append('page', 1)
            let urltwo = `${url}/arrangment`;
            axios.post(urltwo, formData).then(res=>{
            if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
            }
            })
       }

       const handleSearch=(e)=>{
        e.preventDefault();
        if(search.length > 0){
            let formData = new FormData();
            formData.append('items', search)
            let urltwo = `${url}/searchcourse`;
            axios.post(urltwo, formData).then(res=>{
                console.log(res)
               if(res.data){
                Setdata(res.data)

               }
              })
        }

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
    // let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
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



  

   const handleAlphabetical = (e)=>{
     let letter = e.target.dataset.name
     setorderbystat(letter)
    let Answer = 1;
    // alphabet
    let formData = new FormData();
    formData.append('letter', letter)
    formData.append('page', Answer)
    let urltwo = `${url}/alphabet`;
    axios.post(urltwo, formData).then(res=>{
       if(res.data){
        Setdata(res.data.data)
        Setlast(res.data.last_page)
       }
      })
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

    const handleLink =(word, id)=>{
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
    const [overon, setoveron] = useState(1000)
    const handleOver = (index)=>{
        setoveron(index)
    }

    const handleLeave = ()=>{
        setoveron(1000)
    }

  
    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'icon-btn '
        }else{
            return 'icon-btn  text-[#A32926]'
        }
    }
    
    
   
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
        <Navbar />
        
        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
                <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">Courses</h1>
                <ul className="breadcumb-menu">
                    <li><a onClick={handlehome} style={{cursor:'pointer'}}>Home</a></li>
                    <li>Courses</li>
                </ul>
                </div>
            </div>
        </div>

        <section class="space-top space-extra-bottom">
            <div class="container">
                <div class="th-sort-bar">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-auto">
                            <span class="course-result-count">We found <span class="text-theme">{numberofcourse} courses</span> available for you</span>
                        </div>
                        
                    </div>
                </div>

                <div class="tab-content" id="nav-tabContent">
                
                     <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                        <div class="row gy-4 mb-30">
                        {data.map((item, index)=>{
                            return <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3" key={index}>
                                
                                <div class="course-box2 style2">
                                    <div class="course-img">
                                        <img style={{ width: '350px', height: '250px' }} src={item.picture} alt={item.coursename} /> 
                                        {/* <span class="tag"> { item.price}</span> */}
                                        
                                        <span class="tag">
                                            <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                                        </span>
                                    </div>
                                    <div class="course-content">
                                       
                                        <h4 class="course-title">
                                            <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer' }}> {item.coursename} </a>
                                        </h4>
                                        <div class="course-meta">
                                            <div class="author-info">
                                            <span>
                                                <i className="fal fa-file"></i>{' '}
                                                {item.lesson !== null ? item.lesson : '0'} Lesson
                                            </span>
                                            {' '}
                                            </div>
                                            
                                           
                                            {
                                                (
                                                username ? 
                                                <a  onClick={()=>handleCart(item.id)}  class="th-btn style6 mt-10" style={{cursor:'pointer'}}>
                                                {getBtnText(item.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} 
                                                </a> 
                                                
                                                : null
                                                )
                                            }
                                            {/* <CurrencyFormat value={moneyTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />  */}
                                        </div>
                                    </div> 
                                </div>
                                
                            </div>
                           
                        })}
                        </div>
                    </div>
                    
                </div>

               
                {/* Pagination */}
                <div class="th-pagination text-center pt-20">
                <ReactPaginate
                 previousLabel={<AiOutlineArrowLeft />}
                 nextLabel={<AiOutlineArrowRight />}
                 pageCount={numberofpages}
                    breakLabel={"..."}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handleNext}
                    containerClassName={'inline-flex items-center justify-center m-auto '}
                    pageClassName={'m-2'}
                    pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
                    previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                    nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                  />
                   
                    {/* {Array.from({ length: Math.ceil(data.length / postsPerPage) }).map((_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                        </li>
                    ))} */}
                    
                </div>
                
            </div>
        </section>

       


        <Footer />
    </div>
  );
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}
