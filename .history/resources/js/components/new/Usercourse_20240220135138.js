import React,{useState} from 'react'
import Navbar from './Navbar'
import ReactDOM from 'react-dom'
import Footer from './Footer';
import { Markup } from 'interweave';
import ReactPaginate from 'react-paginate';
export default function Usercourse() {
   let url = window.location.origin
   const [data, Setdata] = useState(purchasedcourse.data.length > 0?purchasedcourse.data:[]);
   const [last, Setlast] = useState(purchasedcourse.last_page?purchasedcourse.last_page:0)
   const numberOfData = data.length;
   const apiClient = axios.create({
    baseURL: `${url}/`,
    withCredentials: true
  });

    const handlePage = (id,course)=>{
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
               apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(res.data){
                    window.location.href = `${url}/courseinfo/${course}/${res.data}`;
                 }
           })
        })
    }

    const handleNext = (data)=>{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/usercoursesinfo`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
            }

            const handleDowncert =(course_id, course_type)=>{
                // let formData = new FormData();
                // formData.append("coursename",  fetchdata.coursename)
                // formData.append("course_id", num)
                // formData.append("course_type", sen)
                  window.location.href = `${url}/downloadresult/${course_id}/${course_type}`;
                //   axios.post(urltwo, formData).then(res=>{
                //       if(res.data.success){
                //     //    Setmessage(res.data.message);
                //     //    Setpop(true)
                //        }
                //        })
            }
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
                <h1 className="breadcumb-title"> Course you have Purchased </h1>
                <ul className="breadcumb-menu">
                    <li><a href="#" style={{cursor:'pointer'}}>Home</a></li>
                    <li>  Course you have Purchased </li>
                </ul>
                </div>
            </div>
        </div>

        <section class="space-top space-extra-bottom">
            <div class="container">
                <div class="th-sort-bar">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-auto">
                            <span class="course-result-count">We found <span class="text-theme">1{numberOfData} courses</span> available for you</span>
                        </div>
                        
                    </div>
                </div>
                <div class="tab-content" id="nav-tabContent">
                
                <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                   <div class="row gy-4 mb-30">
                   {data.map(item => (
                       <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3">
                           
                           <div class="course-box2 style2">
                               <div class="course-img">
                                   <img style={{ width: '350px', height: '250px' }} src={item.picture} alt={item.coursename} /> 
                                   {/* <span class="tag"> { item.price}</span> */}
                                   
                                   {/* <span class="tag">
                                       <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> 
                                   </span> */}
                               </div>
                               <div class="course-content">
                                   <div class="course-author">
                                      
                                       <div className="course-rating">
                                           <div className="star-rating" role="img" aria-label={`Rated ${item.rating || 0} out of 5`}>
                                               <span style={{ width: `${((item.rating || 0) / 5) * 100}%` }}>
                                                   Rated <strong className="rating">{item.rating || 0}</strong> out of 5
                                               </span>
                                           </div>
                                       </div>
                                   </div> 
                                   <h4 class="course-title">
                                       <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} style={{ cursor: 'pointer' }}> {item.coursename} </a>
                                   </h4>
                                   <div class="course-meta">
                                       <div class="author-info">
                                           {/* <img src="assets/img/update1/course/author.jpg" alt="author"/>  */}
                                           <a  key={item.id} onClick={()=>handleLink('TMC', item.id)} class="author-name" style={{ cursor: 'pointer' }}>
                                               {item.instructor == null ? "" : `${item.instructor}`}
                                           </a>
                                       </div>
                                      
                                       {/* {
                                           (
                                           username ? 
                                           <a  onClick={()=>handleCart(item.id)}  class="th-btn style6 mt-10" style={{cursor:'pointer'}}>
                                           {getBtnText(item.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'} 
                                           </a> 
                                           
                                           : null
                                           )
                                       } */}
                                    </div>
                               </div> 
                           </div>
                           
                       </div>
                   ))}
                   </div>
               </div>
               
           </div>
           <div className="th-pagination text-center pt-50">
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={last}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handleNext}
            containerClassName={'inline-flex items-center justify-center m-auto '}
            pageClassName={'m-2'}
            pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
            previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
            nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
            activeClassName={'active'}
        />
    </div>
            </div>
        </section>

 <Footer/>
</div>
  )
}

if(document.getElementById('usercourses')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercourses'));
}
