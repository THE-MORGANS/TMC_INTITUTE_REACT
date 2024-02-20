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

            </div>
        </section>


    <div className="container">

    <div className="text-2xl font-semibold pt-6"> Course you have Purchased  </div>
    
    <div className="lg:flex lg:space-x-6 mt-6">

        <div className="lg:w-10/12">
            <div className="divide-y tube-card px-6 md:m-0 -mx-5">
             
             })}








            </div>
        </div>
        {/* here */}
        {/* <div className="lg:w-80 w-full">

            <div className="space-y-5" uk-sticky="offset:22; bottom:true ; top:30 ; animation: uk-animation-slide-top-small">

                <div className="tube-card p-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg -mb-0.5 font-semibold"> Recently Posted </h4>
                        </div>
                        <a href="#" className="text-blue-600"> <ion-icon name="refresh" className="-mt-0.5 -mr-2 hover:bg-gray-100 p-1.5 rounded-full text-lg md hydrated" role="img" aria-label="refresh"></ion-icon> </a>
                    </div>
                    <ul>
                        <li>
                            <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                                <h3 className="font-medium line-clamp-2">   Interesting JavaScript and CSS Libraries  you should  know </h3>
                                <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                  <div> Sep 12, 2020</div> <div className="pb-1"> . </div>
                                  <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                               </div>
                            </a>
                        </li>
                        <li>
                          <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                              <h3 className="font-medium line-clamp-2">  Awesome Web Dev Tools and Resources For 2021</h3>
                              <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                                <ion-icon name="chatbox-ellipses-outline" role="img" class="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                             </div>
                          </a>
                      </li>
                      <li>
                          <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                              <h3 className="font-medium line-clamp-2">Interesting Web development and CSS Libraries  </h3>
                              <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                <div> Sep 12, 2020</div> <div className="pb-1"> . </div>
                                <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                             </div>
                          </a>
                      </li>
                      <li>
                          <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                              <h3 className="font-medium line-clamp-2">Awesome Web Dev Tools and Resources For 2021 </h3>
                              <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                                <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                             </div>
                          </a>
                      </li>
                    </ul>
                    <a href="#" className="hover:bg-gray-100 -mb-2 mt-0.5 h-8 flex items-center justify-center rounded-md text-blue-400 text-sm">
                        See all
                    </a>
                </div>

                <div className="mt-6">
                    <h4 className="text-lg mb-2 font-semibold"> Tags </h4>
                    <div className="flex flex-wrap font-medium gap-2">
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> JavaScript</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Angular</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Design</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Photography</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Technology</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Music</a>
                    </div>
                </div>

            </div>

        </div> */}
   {/* here */}
    </div>

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


</div>
 <Footer/>
</div>
  )
}

if(document.getElementById('usercourses')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercourses'));
}
