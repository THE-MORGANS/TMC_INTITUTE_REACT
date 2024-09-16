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
    const apiClient = axios.create({
     baseURL: `${url}/`,
     withCredentials: true
   });
    const numberOfData = data.length;

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
        });
    }

    const handleDowncert =(course_id, course_type)=>{
        window.location.href = `${url}/downloadresult/${course_id}/${course_type}`;
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

       
        <div class="container">
   
            <div class="th-sort-bar ">
             
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-auto">
                        <span class="course-result-count">We found <span class="text-theme"> {numberOfData} courses</span> available for you</span>
                    </div>
                    
                </div>
            </div>
            <div class="tab-content" id="nav-tabContent">

                <div class="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-course-grid">
                    <div class="row gy-4 mb-30">
                    {data.map((item, index)=>{
                        return <div class="col-md-6 col-lg-4 col-xxl-3 filter-item cat1 cat3" key={index}>
                        <a >
                            <div className="course-box2 style2 h-40 overflow-hidden rounded-lg relative shadow-sm">
                                <img src={item.picture} alt="" class="w-full h-full absolute inset-0 object-cover course-img"/>
                                <div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
                                    {item.MainHead}
                                </div>
                            </div>
                        </a>
                        <div className="flex-1 md:pt-0 pt-4">
                        
                            <h6><a onClick={()=>handleLink('TMC', item.id)} className="course-title  line-clamp-2 leading-5" style={{ cursor: 'pointer' }}> {item.coursename} </a></h6>
                            <p className="line-clamp-2"> <Markup content={item.coursedetails} /> </p>

                            <div className="flex items-center pt-2 text-sm">
                                <div class="grid grid-cols-1 gap-2 place-content-center space-x-2 mx-4 sm:grid sm:grid-cols-1 sm:place-content-center sm:gap-2 sm:space-x-2 sm:mx-4   md:flex md:items-center md:space-x-2 md:mx-4   lg:flex lg:items-center lg:space-x-2 lg:mx-4">
                                <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-blue-500 text-white cursor-pointer"  onClick={()=>handlePage(item.course_id, item.course)} style={{color:'white' }}>view course  </a>
                                {item.studentresult?
                            <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-[#A32926] text-white cursor-pointer"  onClick={()=>handleDowncert(item.course_id, item.course_type)} style={{color:'white' }}>Download Certificate</a>
                                :''}

                                </div>
                            </div>

                        </div>
                    </div>
                    })}

                    </div>
                </div>
            </div>
        </div>
       
        
        <div className="th-pagination text-center pt-50">
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={last}  // This should be updated dynamically based on the backend's `last_page`
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handleNext}  // Call handleNext on page change
            containerClassName={'inline-flex items-center justify-center m-auto '}
            pageClassName={'m-2'}
            pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
            previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
            nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
            activeClassName={'active'}
        />

        </div>
           
   
    <Footer/>
    </div>
  )
}

if(document.getElementById('usercourses')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercourses'));
}
