<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    let url = window.location.origin;
   // let url = `http://127.0.0.1:8000`;
    
    const handleLinks = (e)=>{
        let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
    }
    return (
        <header id="header" className="header header-fullwidth ">
        <div className="container">
          <div className="header-desk header-desk_type_1">
            <div className="logo">
              <a href="/">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" width="40px" height="40px" alt="TMC | Institute" className="logo__image d-block" />
              </a>
            </div>
           
            <nav className="navigation">
                <ul className="navigation__list list-unstyled d-flex">
                
                    <li className="navigation__item">
                        <a data-name='signup' onClick={(e)=>handleLinks(e)} className="navigation__link">
                        Programs
                        </a>
                    {/* <a to="/courses" onClick={(e)=>handleLinks(e)} className="navigation__link">Programs</a> */}
                          
                        {/* <a data-name="courses" onClick={(e)=>handleLinks(e)} className="navigation__link">Programs</a> */}
                            
                    {/* <snap data-name="courses" onClick={(e)=>handleLinks(e)} className="navigation__link">Programs</snap> */}
                    <div className="box-menu" style={{ width: '600px' }}>
                    
                        <div className="col pe-4">
                        <a href="#" className="sub-menu__title">Academic</a>
                        <ul className="sub-menu__list list-unstyled">
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Diploma & Certificate</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Bachelors</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Masters</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Masters</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Doctorate</a></li>
                        </ul>
                        </div>
    
                        <div className="col pe-4">
                        <a href="#" className="sub-menu__title">Professional</a>
                        <ul className="sub-menu__list list-unstyled">
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">LGCA</a></li>
                            <li className="sub-menu__item"><a href="othmcourses.html" className="menu-link menu-link_us-s">OTHM</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">GRC & Fincrime</a></li>
                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Project Management</a></li>
                        </ul>
                        </div>
                    </div>
                    </li>
                    <li className="navigation__item">
                    <a href="./study_abroad.html" className="navigation__link">Study Abroad</a>
                    </li>
                    <li className="navigation__item">
                    <a href="./about.html" className="navigation__link">About us</a>
                    <ul className="default-menu list-unstyled">
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Mission</a></li>
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Our Team</a></li>
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Recognition</a></li>
                        <li className="sub-menu__item"><a href="./about.html" className="menu-link menu-link_us-s">Our Partiners</a></li>
                    </ul>
                    </li>
                    <li className="navigation__item">
                    <a href="#" className="navigation__link">Testimonials</a>
                    </li>
                
                    <li className="navigation__item">
                    <a href="#" className="navigation__link">How to Apply</a>
                    </li>
                </ul>
            </nav>
          
            <div className="header-tools d-flex align-items-center">
              <a href="./cart.html" className="header-tools__item header-tools__cart" data-aside="cartDrawer">
                  <span className="mr-2">Cart (0) &nbsp; </span>
                  <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                 
                </a>
            <div className="header-tools__item hover-container">
              <a className="header-tools__item js-open-aside" href="#" data-aside="customerForms">
                  <span className="mr-2">My Account &nbsp; </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user" /></svg>
              </a>
            </div>
    
          </div>
    
          </div>
        </div>
      </header>
    );
}
export default Navbar;
if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}
=======
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {MdKeyboardArrowDown, MdOutlineAccountCircle} from 'react-icons/md';
import {AiOutlineShopping} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { createHashHistory } from 'history';

 function Navbar() {
    const [drop, Setdrop] = useState(false)
    const [Cart, SetCart] = useState(cart === null || cart.length == 0?[]:cart);
      let url = `http://127.0.0.1:8000`;
      const handleLinks = (e)=>{
          e.preventDefault();
          let word = e.target.dataset.name;
          if (word == 'Logout'){
            //Logout
              localStorage.clear();
              SetCart([])
              setTimeout(()=>{
                   window.location.href = `${url}/${word}`;
              Setdrop(false)
              },1000)

          }else{
              window.location.href = `${url}/${word}`;
              Setdrop(false)
          }

      }

     if(Cart.length > 0){
      localStorage.setItem('Cart', JSON.stringify(Cart))
     }
      const handleDrop =()=>{
      if(!drop){
       Setdrop(true)
      }else{
          Setdrop(false)
      }
      }

      useEffect(()=>{
             const interval =  setInterval(()=>{
              var storage = !!localStorage.getItem('Cart')
              if(storage == true){
               let cart =   JSON.parse(localStorage.getItem('Cart'));
               SetCart(cart)

              }

             },1000)
             return () => clearInterval(interval);
          },[])
     const handleHome =()=>{
        window.location.href = `${url}`;
     }


  return (
    <div className=" w-full flex flex-row items-center justify-between space-x-10 py-3 bg-white">

     <div className="w-1/5">
     <article className="w-32 float-right" onClick={handleHome}>
     <img src={picture} className="h-full w-full object-cover"/>
     </article>
     </div>
     {username?"":<section className="w-1/4 flex flex-row items-center justify-between ">
      {/* <span className="w-16 flex flex-row items-center space-x-1 text-[#37226C]">
          <h2 className="text-md font-sans">Snatika</h2>
          <MdKeyboardArrowDown/>
      </span> */}

      <span className="w-16 flex flex-row items-center space-x-1 text-[#37226C]">
          <h2 className="text-md font-sans">LGCA</h2>
          <MdKeyboardArrowDown/>
      </span>


      <span className="w-28 flex flex-row items-center space-x-1 text-[#37226C]">
          <h2 className="text-md font-sans">TMC Course</h2>
          <MdKeyboardArrowDown/>
      </span>


      <span className="w-28 flex flex-row items-center space-x-1 text-[#37226C]">
          <h2 className="text-md font-sans">OTHM</h2>
          <MdKeyboardArrowDown/>
      </span>
     </section>}


     <div className="w-1/4 flex flex-row items-center">
       <span className="w-28 flex flex-row items-center space-x-1 text-[#A32926]" >
           <h2 className="text-lg capitalize  cursor-pointer" data-name="cart" onClick={(e)=>handleLinks(e)}>cart({Cart.length})</h2>
           <AiOutlineShopping className="text-2xl"/>
       </span>

       <span className={userpic?"w-40 flex flex-row items-center space-x-1 text-[#A32926] relative":"w-40 flex flex-row items-center space-x-1 text-[#A32926]"}>
     <h2 className="text-lg capitalize cursor-pointer" onClick={handleDrop}>my account</h2>
     {userpic?
     <img src={userpic} className="w-10 h-10 rounded-full object-cover"/>
      :<MdOutlineAccountCircle className="text-2xl block"/>}

             {username?<div className={drop?"absolute  w-40 bg-[#A32926] top-16 flex flex-col items-center  rounded-md py-2 cursor-pointer shownow":"h-0 hidden "}>
         <span className="w-full text-center capitalize text-md text-white" data-name="courses" onClick={(e)=>handleLinks(e)}>homepage</span>
         <span className="w-full text-center capitalize text-md text-white cursor-pointer" data-name="profile" onClick={(e)=>handleLinks(e)}>Profile</span>
         <span className="w-full text-center capitalize text-md text-white cursor-pointer" data-name="main" onClick={(e)=>handleLinks(e)}>classroom</span>
         <span className="w-full text-center capitalize text-md text-white cursor-pointer"data-name='Logout' onClick={(e)=>handleLinks(e)} >logout</span>
      </div>:<div className={drop?"absolute  w-40 bg-[#A32926] top-16 flex flex-col items-center  rounded-md  cursor-pointer  transition  ease-in-out duration-300 ":"absolute  w-40 bg-[#A32926] top-16 flex flex-col items-center  rounded-md  cursor-pointer  transition  ease-in-out duration-300 h-0 hidden"}  >
         <span className="w-full text-center capitalize text-md text-white cursor-pointer py-1" data-name='signup' onClick={(e)=>handleLinks(e)}>user</span>
         <span className="w-full text-center capitalize text-md text-white cursor-pointer py-1" data-name='companyregister' onClick={(e)=>handleLinks(e)}>company</span>
      </div>}

       </span>
     </div>
    </div>
  )
}
export default Navbar;

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar/>, document.getElementById('nav'));
}
>>>>>>> 05c22c9b8edf9775407bfc6ae0eeb5fb662143f4
