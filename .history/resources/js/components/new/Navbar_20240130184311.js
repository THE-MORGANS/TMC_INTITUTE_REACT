import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';

export default function Navbar() {
    let url = ` ${window.location.origin}`;
   
 
     const handleTestimonials = ()=>{
         window.location.href = ` ${url}/testimonials`
     }
 
     const handleAboutus = (e)=>{
         e.preventDefault(); 
         window.location.href =`${url}/about-us`
    }
    const handleStudy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/studyabroad`
    }
    const handleHowtoAppy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/howtoApply`
    }
    const handleContact = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/contactus`
    }
    const handleOthm = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/othmcourses`
    }
    const handleLgca = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/lgca`
    }
    const handleCart= (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/cart`
    }
    return ( 
        <div>
            
        </div>
    );
}

