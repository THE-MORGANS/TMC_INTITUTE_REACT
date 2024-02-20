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

      

    <div className="container">

        <div className="text-2xl font-semibold pt-6"> Course you have Purchased  </div>
        {/* <nav className="cd-secondary-nav border-b md:mb-5 nav-small">
            <ul>
                <li className="active"><a href="#" class="lg:px-2"> Suggestions </a></li>
                <li><a href="#" className="lg:px-2"> Mobile App </a></li>
                <li><a href="#" className="lg:px-2"> JavaScript </a></li>
                <li><a href="#" className="lg:px-2"> Softwares </a></li>
                <li><a href="#" className="lg:px-2"> Drawing </a></li>
            </ul>
        </nav> */}

   

    <Footer/>
    </div>
  )
}

if(document.getElementById('usercour')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercour'));
}
