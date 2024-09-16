import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


function ListCouses() {
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const [totalCourseCount, setTotalCourseCount] = useState(null);

    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(20)

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

    let num = [];
    for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
        num.push(i);

    }
    let numberofpages = num.length;
    useEffect(() => {
        let getCourseCount = `${url}/getcoursescount`;
        axios.get(getCourseCount)
            .then(res => {
                setTotalCourseCount(res.data.totalCourseCount);
                }
            )
            .catch(err => console.error(err));

    }, []);

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


     const fetchAllData = () => {
        let Answer = 1;
        let formData = new FormData();
        formData.append('page', Answer);
        let urltwo = `${url}/coursesdata`;
        axios.post(urltwo, formData)
            .then(res => {
                if (res.data) {
                    Setdata(res.data.data);
                    Setlast(res.data.last_page);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
     const handleAlphabetical = (e) => {
        const letter = e.target.dataset.name;
        const isChecked = e.target.checked;
        if (!isChecked) {
            setorderbystat('');
            fetchAllData();
            return; // Exit the function early
        }

        setorderbystat(letter);
        
        let Answer = 1;
        let formData = new FormData();
        formData.append('letter', letter);
        formData.append('page', Answer);
        let urltwo = `${url}/alphabet`;
        axios.post(urltwo, formData)
            .then(res => {
                if (res.data) {
                    Setdata(res.data.data);
                    Setlast(res.data.last_page);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    

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
          return 'icon-btn'
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
    const handlePag =(data)=>{
        let Answer = data.selected + 1;
        setCurrentPage(Answer)
    }
    const handlePageChange = (pageNumber) => {
        let Answer = pageNumber.selected + 1;
        setCurrentPage(Answer);
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
        <section class="space-top space-extra2-bottom">
            <div class="container-fluid">
                {/* <!-- Spacer --> */}
                <div className="row"> 
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                        <div class="widget widget_search">
                            <div class="search-form">
                                    <input type="text" placeholder="Search Courses..." onChange={(e)=>setsearch(e.target.value)} value={search}/>
                                    <button onClick={(e)=>handleSearch(e)}>
                                        <i class="far fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="widget widget_price_filter style2">
                                <h4 class="widget_title">Order By</h4>
                                <ul>
                                    <li>
                                        <input
                                            id="ascCheckbox" name="steve" type="checkbox" data-name="ASC"
                                            checked={orderbystat === 'ASC'}
                                            onChange={handleArrange}
                                        />
                                        <label htmlFor="ascCheckbox">ASC<span className="checkmark"></span></label>
                                    </li>
                                    <li>
                                        <input
                                            id="descCheckbox" name="steve" type="checkbox" data-name="DESC"
                                            checked={orderbystat === 'DESC'}
                                            onChange={handleArrange}
                                        />
                                        <label htmlFor="descCheckbox">DESC<span className="checkmark"></span></label>
                                    </li>
                                </ul>
                            </div>
                            <div class="widget widget_time_duration style2">
                                <h4 class="widget_title">Group Order</h4>
                                <ul>
    
                                    <li>
                                        <input  checked={orderbystat === 'a,b,c,d,e,f'} id="timecheck1" name="alpha" type="checkbox" data-name="a,b,c,d,e,f" 
                                        onChange={(e) => handleAlphabetical(e)} />
                                        <label htmlFor="timecheck1">A-F <span className="checkmark"></span></label>
                                    </li>

                                    <li>
                                        <input id="timecheck2" checked={orderbystat === 'g,h,i,j,k,l'} name="alpha" data-name="g,h,i,j,k,l" type="checkbox" onChange={(e) => handleAlphabetical(e)}/>
                                        <label for="timecheck2">
                                            G-L <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="timecheck3" checked={orderbystat === 'm,n,o,p,q,r'} name="alpha" data-name="m,n,o,p,q,r" onChange={(e)=>handleAlphabetical(e)} type="checkbox"/>
                                        <label for="timecheck3">
                                            M-R <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="timecheck4" checked={orderbystat === 's,t,u,v,w,x'} name="alpha" data-name="s,t,u,v,w,x" onChange={(e)=>handleAlphabetical(e)} type="checkbox"/>
                                        <label for="timecheck4">
                                            S-X <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="timecheck5" checked={orderbystat === 'y,z'} name="alpha" data-name="y,z"onChange={(e)=>handleAlphabetical(e)} type="checkbox"/>
                                        <label for="timecheck5">
                                            Y-Z <span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        <div>
                            
                        </div>
                       
                    </div>
                    <div className="ol-xl-9 col-lg-8 order-lg-2">
                        <div className='row'>
                            <div class="th-sort-bar">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-md-auto">
                                        <span class="course-result-count">We found <span class="text-theme"> {totalCourseCount} courses</span> available for you</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row gy-4 mb-30">
                            {data.map((item, index)=>{
                                return <div class="col-md-6 col-lg-6 col-xxl-4 filter-item cat1 cat3" key={index}>
                                    
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
                                                <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer', textTransform: 'capitalize'  }}> {item.coursename} </a>
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
                                                    {getBtnText(item.id) == 'icon-btn'? 'In Cart': 'Add to Cart'} 
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
            </div>
        </section>

        <section class="space-top space-extra-bottom">
            <div class="container">
               
                {/* Pagination */}
                <div class="th-pagination text-center pt-20">
                   
                   <ReactPaginate
                    previousLabel={<AiOutlineArrowLeft />}
                    nextLabel={<AiOutlineArrowRight />}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={last}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handleNext}
                    containerClassName={'inline-flex items-center justify-center m-auto '}
                    // subContainerClassName={'pages pagination'}
                    subContainerClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                    activeClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                />
                  
                    {/* <nav className="cd-secondary-nav border-b md:m-0 -mx-4 nav-small">
                        <ul className="space-x-1 overflow-x-scroll sm:overflow-x-scroll sm:space-x-1 md:overflow-x-scroll md:space-x-1 lg:overflow-x-hidden lg:space-x-2">
                            {Post.map((item, index)=>{
                            return<li className={hover == index?"active tip relative":"tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
                                <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
                                <span className={overon == index?"top-[-45px] h-32 absolute text-white text-xs bg-[#A32926]  grid place-content-center   sm:top-[-45px] sm:h-32 sm:absolute sm:text-xs sm:bg-[#A32926]  sm:grid sm:place-content-center  sm:text-white sm:z-30    md:grid md:place-content-center md:top-[-45px]  md:absolute md:text-xs md:bg-[#A32926]  md:text-white md:z-30  lg:mt-[-10px]  lg:grid lg:place-content-center lg:top-[-25px] lg:absolute lg:text-xs lg:bg-[#A32926]  lg:text-white lg:z-30":'hidden'} >{item.substr(0, 30)}</span>
                            </li>
                            })}
                        </ul>
                    </nav> */}
                    
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
