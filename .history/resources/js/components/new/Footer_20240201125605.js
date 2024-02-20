import React from 'react'

export default function Footer() {

    let url = ` ${window.location.origin}/`;
    const handleterms = ()=>{
         window.location.href = ` ${url}terms`;
     }
 
     const handlepri = ()=>{
         window.location.href = ` ${url}privacy`;
     }
 
     const handleabout = ()=>{
         window.location.href =`${url}about-us`;
     }
  return (
    <div>
        <footer className="footer-wrapper footer-layout1" data-bg-src="assets/img/bg/footer-bg.png">
            <div className="shape-mockup footer-shape1 jump" data-left="60px" data-top="70px">
                <img  src="assets/img/normal/footer-bg-shape1.png" alt="img"/>
            </div>
                <div className="shape-mockup footer-shape2 jump-reverse" data-right="80px" data-bottom="120px">
                    <img src="assets/img/normal/footer-bg-shape2.png" alt="img"/>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-contact-wrap">
                            <div className="footer-contact">
                                <div className="footer-contact_icon icon-btn"><i className="fal fa-phone"></i></div>
                                <div className="media-body">
                                    <p className="footer-contact_text">Call us any time:</p>
                                    <a href="tel%2b11234567890.html" className="footer-contact_link">+256 214 203 215</a>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="footer-contact">
                                <div className="footer-contact_icon icon-btn"><i className="fal fa-envelope"></i></div>
                                <div className="media-body"><p className="footer-contact_text">Email us 24/7 hours:</p><a href="mailto:info@edura.com" className="footer-contact_link">info@edura.com</a></div>
                            </div>
                            <div className="divider"></div>
                            <div className="footer-contact">
                                <div className="footer-contact_icon icon-btn"><i className="fal fa-location-dot"></i></div>
                                <div className="media-body"><p className="footer-contact_text">Our university location:</p><a href="https://www.google.com/maps" className="footer-contact_link">147/I, Green Road, Dhaka</a></div>
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
                                        <div className="about-logo"><a href="index.html">
                                            <img  width="70" height="10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="Edura"/></a>
                                        </div>
                                        <p className="about-text">
                                            Continually optimize backward manufactured products whereas communities negotiate 
                                            life compelling alignments
                                            </p>
                                        <div className="th-social">
                                            <h6 className="title text-white">FOLLOW US ON:</h6>
                                            <a href="https://www.facebook.com/">
                                                <i className="fab fa-facebook-f"></i></a> 
                                                <a href="https://www.twitter.com/">
                                                    <i className="fab fa-twitter"></i></a> 
                                                    <a href="https://www.linkedin.com/">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a> 
                                                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i>
                                                </a> 
                                                <a href="https://www.skype.com/"><i className="fab fa-skype"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a href="course.html">Life Coach</a></li>
                                            <li><a href="course.html">Business Coach</a></li>
                                            <li><a href="course.html">Health Coach</a></li>
                                            <li><a href="course.html">Development</a></li>
                                            <li><a href="course.html">Web Design</a></li>
                                            <li><a href="course.html">SEO Optimize</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Resources</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a href="#">Community</a></li>
                                            <li><a href="#">Support</a></li>
                                            <li><a href="#">Video Guides</a></li>
                                            <li><a href="#">Documentation</a></li>
                                            <li><a href="#">Security</a></li>
                                            <li><a href="#">Template</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xxl-3 col-xl-3">
                                <div className="widget newsletter-widget footer-widget">
                                    <h3 className="widget_title">Get in touch!</h3>
                                    <p className="footer-text">Subscribe our newsletter to get our latest Update & news</p>
                                    <form className="newsletter-form form-group">
                                        <input className="form-control" type="email" placeholder="Email Email" required=""/> <i className="far fa-envelope"></i> <button type="submit" className="th-btn style3">Subscribe Now <i className="far fa-arrow-right ms-1"></i></button>
                                    </form>
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




