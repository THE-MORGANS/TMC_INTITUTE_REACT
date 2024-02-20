// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Terms() {
  let url = ` ${window.location.origin}`;
  let uniarr = Object.values(unique)
  const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
  const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10); 

 // Logic to get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfData = currentPosts.length;
  const handlehome = ()=>{
      window.location.href = `${url}`;
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
          <h1 className="breadcumb-title">Terms and Conditions</h1>
          <ul className="breadcumb-menu">
            <li><a onClick={handlehome}>Home</a></li>
            <li> Terms and Conditions </li>
          </ul>
          </div>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="event-details-wrap">
            {/* <div className="event-img">
              <img src="assets/img/event/event_details.png" alt="Event Image" />
            </div> */}
            <h3 className="h3 mt-n2">Your use of this is governed by these terms of use</h3>

            <p className="mb-30">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>

            <h3 className="h3 mt-n2">TMC Institute - Who We Are</h3>
            <p className="mb-40">
              TMC Institute (UK & Africa) subsidiary of THE MORGANS is a non-profit global learning and development platform that provides training, 
              coaching, professional qualifications and a networking and business development community to professionals 
              and prospective students in the world. As the Controller, the TMC Institute determines the purpose and means 
              of processing individuals' personal data.
            </p>
            <h3 className="h3 mt-n2">Use of the content on this website</h3>
            <p className="mb-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          
            <h3 className="h3 mt-n2">How long will It take to get my package</h3> 
            <p className="mb-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          
            
            <h3 className="h3 mt-n2">Governing Law & Jurisdiction</h3>
            <p className="mb-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          
            <h3 className="h3 mt-n2">Limitation of liability</h3>
            <p class="mb-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        
            </div>
          </div>
          </div>
        </div>
      </section>

      

      <Footer/>
    </div>
  
  );
}

export default Terms;

if(document.getElementById('terms')){
  ReactDOM.render(<Terms/>, document.getElementById('terms'))
  }
  
