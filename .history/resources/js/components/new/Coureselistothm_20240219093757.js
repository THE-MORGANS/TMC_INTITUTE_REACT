
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock, AiOutlineShopping} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import CurrencyFormat from 'react-currency-format';

export default function Coureselistothm() {
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [orderbystat, setorderbystat] = useState('')
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const numberOfData = data.length;
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [search, setsearch] = useState('')
    const [poundsnaira, setPoundsnaira] = useState(0)
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage

       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost).reverse()


       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
       const handlemouse =(num, word)=>{

        setorderbystat(word)
        Sethover(num)
        let formData = new FormData();
        formData.append('categories', word)
        formData.append('page', 1)
        let urltwo = `${url}/categoriesothm`;
        axios.post(urltwo, formData).then(res=>{
           if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
           }
          })
       }
       const handlePag =(data)=>{
        let Answer = data.selected + 1;
        setCurrentPage(Answer)
       }

       const handleCart = (coursename, obj)=>{
        let cart = data.find((item)=>item.coursename == coursename)
         let Awnser =  Cart.map(item=>item.coursename != coursename)
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

     const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

     const getBtnText =(coursename)=>{
        let cart = Cart.find((item)=>item.coursename == coursename);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    // currency->name

    let poundtonaira = poundton.result.NGN



    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
    let converted = JSON.parse(currencyex)
    let convertnaira = converted.result.NGN
     let other =  Object.values(othersmoneys.result);

    // let poundton =  poundton.result.NGN
    // function moneyTalks(currency_name, price){
    //     // console.log(currency_name, price, moneyname, convertnaira)
    // }

    function moneyTalks(currency_name, price){

        // console.log(currency_name)
        // console.log(currencyex, currencysymbol)
        if(currency_name == moneyname){
                   return price;

        }else if (moneyname == 'Nigerian Naira'){
            return Math.round(price * poundsnaira);
        }else if(currency_name != moneyname){
            return Math.round(price * other[0]) ;


        }
       }

       const handleAlphabetical = (e)=>{
        let letter = e.target.dataset.name
        setorderbystat(letter)
       let Answer = 1;
       // alphabet
       let formData = new FormData();
       formData.append('letter', letter)
       formData.append('page', Answer)
       let urltwo = `${url}/alphabetothm`;
       axios.post(urltwo, formData).then(res=>{
          if(res.data){
           Setdata(res.data.data)
           Setlast(res.data.last_page)
          }
         })
      }

      const handleNext = (data)=>{
        if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabetothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'Level 7' || orderbystat == 'Level 6' || orderbystat == 'Level 5' || orderbystat == 'Level 4'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categoriesothm`;
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
            let urltwo = `${url}/othmcheck`;
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
        let urltwo = `${url}/arrangmentothm`;
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
                let urltwo = `${url}/searchcourseothm`;
                axios.post(urltwo, formData).then(res=>{
                    console.log(res)
                   if(res.data){
                    Setdata(res.data)

                   }
                  })
            }

           }
           const handleLink = (id)=>{
            let formData = new FormData();
            let myHeader = new Headers();
            myHeader.append('Content-Type', 'application/json')
            formData.append("id", id)
            apiClient.get('/sanctum/csrf-cookie').then( ()=> {
                let urltwo = 'api/encrypt';
                   apiClient.post(urltwo, formData, myHeader).then(res=>{
                     if(res.data){
                     window.location.href =`${url}/courseinfo/OTHM/${res.data}`;

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

//  let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
 useEffect(()=>{
    let urlthree = `${url}/allcurrency`;
    axios.get(urlthree).then(res=>{
        if(res.data){
            let info = res.data
        info.map((item)=>{
           console.log(item.currencyname, item.foreignrate,
            item.nairarate)

            if(item.currencyname === 'Pound sterling'){
                setPoundsnaira(item.nairarate)
            }
        })

        }
    })
    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }

    },1000)
    return () => clearInterval(interval);
 },[])
    const [read, Setread] = useState(false)
   const handleRead =()=>{
    Setread(true)
   }

    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }


    // const [orderBy, setOrderBy] = useState('ASC');
  return (
    <div>
       <Navbar/>

        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px">
            <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" />
            </div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
            <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" />
            </div>
            <div className="container">
            <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">OTHM Courses </h1>
                <ul className="breadcumb-menu">
                <li><a onClick={handlehome}  style={{cursor:'pointer'}}>Home</a></li>
                <li> OTHM Courses </li>
                </ul>
            </div>
            </div>
        </div>

       

       
       <section class="space-top space-extra2-bottom">
            <div class="container">
                {/* <!-- Spacer --> */}
                <div className="row">
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                        <div class="widget widget_search">
                            <div class="search-form">
                                    <input type="text" placeholder="Search OTHM Courses..." onChange={(e)=>setsearch(e.target.value)} value={search}/>
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
                                        <input  checked={orderbystat === 'a,b,c,d,e,f'} id="timecheck1" name="alpha" type="checkbox" data-name="a,b,c,d,e,f" onChange={(e) => handleAlphabetical(e)} />
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
                        <div class="th-sort-bar course-sort-bar">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-md">
                                    <p class="woocommerce-result-count">
                                        Showing <span class="text-theme">{numberOfData} courses</span>
                                    </p>
                                </div>
                                <div class="col-md-auto">
                                    <div class="nav" role="tablist">
                                        <p class="woocommerce-result-count">
                                            <a onClick={handleRead} style={{cursor:'pointer'}}> 
                                                <span class="text-theme curson pointer">More about OTHM</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="widget widget_search">
                            <div class="search-form">
                                <input type="text" placeholder="Search OTHM Courses..." onChange={(e)=>setsearch(e.target.value)} value={search}/>
                                <button onClick={(e)=>handleSearch(e)}>
                                    <i class="far fa-search"></i>
                                </button>
                            </div>
                        </div> */}
                        <div class="tab-pane fade active show" id="tab-list" role="tabpanel" aria-labelledby="tab-shop-list">
                            
                            <nav className="course-single-bottom">
                                <ul class="nav course-tab" id="courseTab" role="tablist">
                                    {Post.map((item, index)=>{
                                    return <li className={hover == index?"nav-item  tip":"nav-item tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
                                        <a style={{cursor:'pointer'}} className={hover == index?"nav-link active":"nav-link"}>{item.substr(0, 12)}</a>
                                    </li>
                                    })}
                                </ul>
                            </nav>

                        </div>
                    <div>
                </div>

                        <div class="tab-content">
                            <div class="row gy-30">
                                {/* <!-- course list --> */}
                                {data.map((item, index)=>{
                                    return <div className="col-md-6 col-xl-4">
                                            <a  className="uk-link-reset" key={index}>
                                            <div className="course-box style2" onClick={()=>handleLink(item.id)}>
                                                <div class="course-img">
                                                    <img src={item.picture} style={{ width: '350px', height: '250px' }} alt="img"/>
                                                    <span class="tag">
                                                        <CurrencyFormat value={moneyTalks(item.currency_name, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                                                    </span>
                                                </div>
                                                <div class="course-content">
                                                    <div className="course-rating">
                                                        <div className="star-rating" role="img" aria-label={`Rated ${item.rating || 0} out of 5`}>
                                                            <span style={{ width: `${((item.rating || 0) / 5) * 100}%` }}>
                                                                Rated <strong className="rating">{item.rating || 0}</strong> out of 5
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <h3 class="course-title ">
                                                        <a  style={{cursor:'pointer'}} onClick={()=>handleLink(item.id)}>{item.coursename}</a>
                                                    </h3>
                                                    <div class="course-meta">
                                                        <span>
                                                            <i className="fal fa-file"></i>
                                                            {item.lesson !== null ? `${item.lesson} Lesson` : '0 Lesson'}
                                                        </span>
                                                       
                                                    </div>
                                                </div>
                                                
                                                {item.purchased?
                                                    <a class="th-btn style5 mt-35 mb-2">Purchased</a>:""
                                                } 
                                                {item.purchased ? '':
                                                    username?
                                                    <a  onClick={()=>handleCart(item.coursename,  item)} class="th-btn style6 mt-10" style={{cursor:'pointer'}}> 
                                                    {getBtnText(item.coursename) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} </a> 
                                                    :
                                                    ''
                                                } 
                                            </div>
                                        </a>
                                    </div>
                                })}
                               
                            </div>
                            {/* <!-- Pagination --> */}
                            <div className="flex justify-center mt-9 space-x-2 text-base font-semibold text-gray-400 items-center">
                                <ReactPaginate
                                    previousLabel={'<'}
                                    nextLabel={'>'}
                                    pageCount={last}
                                    breakLabel={"..."}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={1}
                                    onPageChange={handleNext}
                                    containerClassName={'inline-flex items-center justify-center m-auto '}
                                    pageClassName={'m-2'}
                                    pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
                                    previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                                    nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                                />
                            </div>
                           <div className="th-pagination text-center pt-50">
    <ul>
        {num.map((pageNumber, index) => (
            <li key={index} className={pageNumber === currentPage ? 'active' : ''}>
                <a onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</a>
            </li>
        ))}
    </ul>
</div>



                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Footer />
    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
