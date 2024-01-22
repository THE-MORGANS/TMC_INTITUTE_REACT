import React from 'react'
import ReactDom from 'react-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function About() {
    return (
        <div className="">
            <Navbar/>
<<<<<<< HEAD
     
            <main>
                <div className="mb-4 pb-4"></div>
                <section className="about-us container">
                    <div className="mw-930">
                        <h2 className="page-title">ABOUT TMC Institute</h2>
                    </div>
                    <div className="about-us__content pb-5 mb-5">
                        <p className="mb-5">
                        <img loading="lazy" className="w-100 h-auto d-block" src="../images/about/about-1.png" width="1410" height="550" alt="" />
                        </p>
                        <div className="mw-930">
                        <h3 className="mb-4">OUR STORY</h3>
                        <p className="fs-6 fw-medium mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="mb-4">Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>
                        <div className="row mb-3">
                            <div className="col-md-6">
                            <h5 className="mb-3">Our Mission</h5>
                            <p className="mb-3">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="col-md-6">
                            <h5 className="mb-3">Our Vision</h5>
                            <p className="mb-3">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        </div>
                        <div className="mw-930 d-lg-flex align-items-lg-center">
                        <div className="image-wrapper col-lg-6">
                            <img className="h-auto" loading="lazy" src="../images/about/about-1.jpg" width="450" height="500" alt="" />
                        </div>
                        <div className="content-wrapper col-lg-6 px-lg-4">
                            <h5 className="mb-3">The Company</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="service-promotion horizontal container mw-930 pt-0 mb-md-4 pb-md-4 mb-xl-5">
                    <div className="row">
                        <div className="col-md-6 text-center mb-5 mb-md-0">
                        <div className="service-promotion__icon mb-4">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_shipping" /></svg>
                        </div>
                        <h3 className="service-promotion__title fs-6 text-uppercase">Fast And Free Delivery</h3>
                        <p className="service-promotion__content text-secondary">Free delivery for all orders over $140</p>
                        </div>

                        <div className="col-md-6 text-center mb-5 mb-md-0">
                        <div className="service-promotion__icon mb-4">
                            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_headphone" /></svg>
                        </div>
                        <h3 className="service-promotion__title fs-6 text-uppercase">24/7 Customer Support</h3>
                        <p className="service-promotion__content text-secondary">Friendly 24/7 customer support</p>
                        </div>
                    </div>
                </section>

                <section className="brands-carousel container mw-930">
                    <h5 className="mb-3 mb-xl-5">Company Partners</h5>
                    <div className="position-relative">
                        <div class="swiper-container js-swiper-slider"
                            data-settings='{
                                "autoplay": {
                                    "delay": 5000
                                },
                                "slidesPerView": 5,
                                "slidesPerGroup": 1,
                                "effect": "none",
                                "loop": true,
                                "breakpoints": {
                                    "320": {
                                        "slidesPerView": 2,
                                        "slidesPerGroup": 2,
                                        "spaceBetween": 14
                                    },
                                    "768": {
                                        "slidesPerView": 3,
                                        "slidesPerGroup": 3,
                                        "spaceBetween": 24
                                    },
                                    "992": {
                                        "slidesPerView": 4,
                                        "slidesPerGroup": 1,
                                        "spaceBetween": 30,
                                        "pagination": false
                                    },
                                    "1200": {
                                        "slidesPerView": 5,
                                        "slidesPerGroup": 1,
                                        "spaceBetween": 30,
                                        "pagination": false
                                    }
                                }
                            }'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand1.png" width="120" height="20" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand2.png" width="87" height="20" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand3.png" width="132" height="22" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand4.png" width="72" height="21" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand5.png" width="123" height="31" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand6.png" width="137" height="22" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img loading="lazy" src="../images/brands/brand7.png" width="94" height="21" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="mb-5 pb-xl-5"></div>

            </main>

            <Footer/>
        </div>
    );
=======
     <div className="py-10 bg-white">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                <div className="flex flex-wrap items-center mb-10 lg:mb-0 ">
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1661870668/cc0uuy1zexzaqrnjbx5n.jpg" className="h-96 w-full  object-cover" alt="images"/>
                </div>
                <div className='px-4'>
                    <div className="mb-10">
                        <h3 className="font-semibold uppercase text-md mb-4 text-dark text-left">TRAINING & DEVELOPING TALENTS</h3>
                        <p>The institute has over the years has through experience in training and developing talents and helping organizations to identified knowledge gaps.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="font-semibold uppercase text-md mb-4 text-dark text-left">TRAINING COURSES</h3>
                        <p>TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow every year</p>
                    </div>
                    <div>
                        <h3 className="font-semibold uppercase text-md mb-4 text-dark text-left">CERTIFIED & EXPERIENCED TEAM</h3>
                        <p>Our certified and experienced team possesses an in-depth understanding and knowledge of the region’s financial services and provides world-class training packed full of practical examples and top-notch case studies.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <div className="testimonial-area bg-gray-light py-24 bg-no-repeat bg-cover bg-center group">
        <div className="container">
            <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-12">
                    <div className="text-center pb-14">
                        <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">TMC INSTITUTE </h2>
                        {/* <p className="font-playfair font-medium text-md mb-3">Contrary to popular belief, Lorem Ipsum is not.</p> */}
                    </div>
                </div>
                <div className="lg:col-start-3 col-span-12 lg:col-span-8 text-center">

                    <div className="testimonial overflow-hidden relative">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* <div className="swiper-slide">

                                    <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                                    <h5 className="font-semibold text-sm text-dark uppercase">Hester Perkins</h5>
                                </div> */}
                                <div className="swiper-slide">
                                    {/* <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                                        <img src="assets/images/testimonial/testimonial1.webp" alt="image"/>
                                    </div> */}
                                    <p className="my-8">
                                    was formed in 2016 and has been operating regionally and internationally right from its inception. As a member of The Morgans Consortium, the institute has excelled over the years in the area of training and developing talents, helping organizations to identified knowledge gaps, tailored relevant training and courses to abridge and improve efficiency and productivity across various sectors. We are the leading and specialist provider of specialized corporate training including Governance, Risk & Compliance, Financial Crime Prevention, and Leadership training focused on cultivating the right attitude and skills in your teams. To date, TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow every year, capitalizing on our in-depth knowledge of the needs of organizations and financial institutions. We have been training a wide range of organizations in the region for more than a decade, with special emphasis on financial institutions as our primary clientele. Our certified and experienced team possesses an in-depth understanding and knowledge of the region’s financial services and provides world-class training packed full of practical examples and top-notch case studies.
                                    </p>
                                    {/* <h5 className="font-semibold text-sm text-dark uppercase">Hester Perkins</h5> */}
                                </div>
                            </div>
                        </div>
                 <div className="swiper-pagination"></div>
                        {/* <div className="swiper-buttons">
                            <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible"></div>
                            <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible"></div>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    </div>




    <div className="py-20 bg-white">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 px-5">
                {/* <div className='px-4'> */}
                    <div className="mb-10">
                        <h3 className="font-bold uppercase text-md mb-4 text-dark">WE COVER THE FULL GRC (GOVERNANCE & RISK COMPLIANCE) SPECTRUM</h3>
                        <p>Our extensive and proficient team of expert consultants and trainers ensures that our clients are available with experts no matter what aspect of the GRC spectrum it is. Whether you want financial crime prevention, compliance, risk management, corporate governance, prudential requirements, or just a finance understanding and awareness, our team has the right specialist to offer you what you need.</p>
                    </div>

                    <div className="mb-10">
                        <h4 className="font-semibold uppercase text-md mb-4 text-dark">THE WIDER SCOPE OF COMPLIANCE & OUR SERVICES</h4>
                        <p>Compliance, being a discipline, was previously related to ensuring compliance to rules and regulations businesses face. However, today, compliance is more about the same, including ethics, advice, and culture – contemporary compliance is now at the core of the business. Our compliance trainers not just keep navigating a complex regulatory mechanism but also add an in-depth commercial perspective. They help you conduct the right business in the right way and help businesses achieve success through such controls and systems in place that ensure effective and timely risk management.</p>
                    </div>

                    {/* <div>
                        <h4 className="font-semibold uppercase text-md mb-4 text-dark">CERTIFIED & EXPERIENCED TEAM</h4>
                        <p>Our certified and experienced team possesses an in-depth understanding and knowledge of the region’s financial services and provides world-class training packed full of practical examples and top-notch case studies.</p>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    </div>



       <Footer/>
        </div>
    )
>>>>>>> 05c22c9b8edf9775407bfc6ae0eeb5fb662143f4
}

if(document.getElementById("aboutrent")){
    ReactDom.render(<About/>, document.getElementById("aboutrent"));
    }
