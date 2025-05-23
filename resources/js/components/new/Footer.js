import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Footer() {
    let url = ` ${window.location.origin}`;
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [currentPosts, setCurrentPosts] = useState([]);

    useEffect(() => {
        // Shuffle the data array
        const shuffledData = shuffleArray(coursesdata.data);
        setData(shuffledData);
    }, []);

    useEffect(() => {
        // Logic to get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const slicedData = data.slice(indexOfFirstPost, indexOfLastPost);
        setCurrentPosts(slicedData);
    }, [currentPage, data, postsPerPage]);

    // Function to shuffle array
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleterms = ()=>{
         window.location.href = `${url}/terms`;
     }
 
    const handlepri = ()=>{
        window.location.href = `${url}/privacy`;
    }
 
    const handleAboutus = (e)=>{
        e.preventDefault(); 
        window.location.href =`${url}/about-us`
    }

    const handleSnatika = (e)=>{
        e.preventDefault(); 
        window.location.href =`${url}/snatika`
    }
    const handleLG =()=>{
        window.location.href = `https://morgans.elearning.lgca.uk/index`
    }
    const handlelistcourses=()=>{
        window.location.href= `${url}/listcourses`;
    }
    const handleStudy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/studyabroad`
    }
    const handleGRC =(e)=>{
        e.preventDefault(); 
        window.location.href = `https://www.grcfincrimeawards.com/`
    }
    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
    });
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
    const handleTMC = ()=>{
        window.location.href = `https://morgansconsulting.ng/`
    }

    const handleContact = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/contactus`
    }
  return (
    <div>
        

       
        <footer className="footer-wrapper footer-layout1" >
            <div class="cta-area-1 mb-20" style={{paddingBottom:'20px'}} data-bg-src="assets/img/bg/cta-bg1.png">
                <div class="container">
                    <div class="row align-items-center d-flex justify-content-between">
                        <div class="col-lg-8">
                            <div class="cta-wrap title-area mb-0">
                                <div class="cta-icon">
                                    <img src="assets/img/normal/cta-icon1.png" alt="icon"/>
                                </div>
                                <div class="cta-content">
                                    <h2 class="cta-title sec-title">Get Online Courses</h2>
                                    <p class="cta-text"></p>
                                    <br/>
                                </div>
                                <a onClick={(e)=>handleContact(e)} style={{cursor:'pointer'}} class="th-btn style8">
                                    Join With Us<i class="fas fa-arrow-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-top ">
                <div class="container">
                    <div class="footer-contact-wrap">
                        <div class="footer-contact">
                            <div class="footer-contact_icon icon-btn">
                                <i class="fal fa-phone"></i>
                            </div>
                            <div class="media-body">
                                <p class="footer-contact_text">Call us any time:</p>
                                <a href="tel+11234567890" class="footer-contact_link"> +234 (0) 915-341-4314</a>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="footer-contact">
                            <div class="footer-contact_icon icon-btn">
                                <i class="fal fa-envelope"></i>
                            </div>
                            <div class="media-body">
                                <p class="footer-contact_text">Email us 24/7 hours:</p>
                                <a href="mailto:enquiries@tmcinstitute.com" class="footer-contact_link">enquiries@tmcinstitute.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
                <div className="footer-wrap" data-bg-src="assets/img/bg/jiji.png">
                    <div className="widget-area"><div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xxl-3 col-xl-3">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo"><a href="">
                                            <img  width="70" height="10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="Edura"/></a>
                                        </div>
                                        <p className="about-text">
                                            TMC Institute is a registered trademark of TMC
                                        </p>
                                        <p>
                                            <b>Conact Address</b>
                                        </p>
                                       
                                        <p className="about-text">
                                            <b>HQ United Kingdom:</b><br/>
                                            85 Great Portland Street First Floor London W1W 7LT
                                            United Kingdom
                                        </p>

                                        <p className="about-text">
                                             <b>EUROPE:</b><br/>
                                           
                                            International House 24 Holborn Viaduct, London, EC1A 2BN, United Kingdom
                                        </p>
                                        <p className="about-text">
                                            <b>ASIA:</b><br/>

                                            21 Gillabbey Terrace, Gillabbey Street, Cork, T12 KPN4, Republic of Ireland
                                        </p>
                                        <div className="th-social">
                                            <h6 className="title text-white">FOLLOW US ON:</h6>
                                            <a href="https://web.facebook.com/profile.php?id=100075775881210">
                                                <i className="fab fa-facebook-f"></i></a> 

                                               <a href="https://www.instagram.com/tmcinstitute?igsh=b2pnaHR1ajJ4c2xn">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/company/tmc-institute/">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a> 
                                                {/* <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i>
                                                </a>  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Courses</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                        {currentPosts.map(item => (
                                            <li><a onClick={()=>handleLink('TMC', item.id)} style={{cursor:'pointer', color:'white'}}>{item.coursename}</a></li>
                                        ))}
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Our Company</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a onClick={handleTMC}  style={{cursor:'pointer', color:'white'}}>TMC</a></li>
                                            {/* <li><a onClick={(e)=>handleGRC(e)} style={{cursor:'pointer', color:'white'}}>GRC & Fincrime</a></li> */}
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a onClick={(e)=>handlelistcourses(e)} style={{cursor:'pointer', color:'#fff'}} >TMC Courses</a></li>
                                            <li><a onClick={(e)=>handleOthm(e)} style={{cursor:'pointer', color:'white'}}>OTHM Courses</a></li>
                                            <li><a onClick={handleLG} style={{cursor:'pointer', color:'white'}}>LGCA / AGRC Certification</a></li>
                                            <li><a onClick={(e)=>handleStudy(e)} style={{cursor:'pointer', color:'white'}}>Study Abroad</a></li>
                                            <li><a onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer', color:'white'}}>About us</a></li>
                                            <li><a onClick={(e)=>handleSnatika(e)} style={{cursor:'pointer', color:'white'}}>Snatika</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6"><p className="copyright-text">Copyright © {new Date().getFullYear()}  <a href="https://tmcinstitute.com/">TMC Institute</a> All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6 text-end d-none d-md-block">
                                <div className="footer-links">
                                    <ul>
                                        <li><a onClick={handlepri} style={{cursor:'pointer', color:'white'}}>Privacy Policy</a></li>
                                        <li><a onClick={handleterms} style={{cursor:'pointer', color:'white'}}>Terms & Condition</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </footer>
        
        <div className="scroll-top">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}></path>
            </svg>
        </div>
    </div>
  )
}




