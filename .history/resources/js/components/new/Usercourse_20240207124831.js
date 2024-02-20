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
            const handlehome = ()=>{
                window.location.href = ` ${url}`;
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
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
                <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">User Courses</h1>
                <ul className="breadcumb-menu">
                    <li><a onClick={handlehome} style={{cursor:'pointer'}}>Home</a></li>
                    <li>User Courses</li>
                </ul>
                </div>
            </div>
        </div>



 <Footer/>
</div>
  )
}

if(document.getElementById('usercourses')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercourses'));
}
