import React from 'react'

export default function Footer() {
    let url = ` ${window.location.origin}`;

    const handleTerms = ()=>{
         window.location.href = ` ${url}/terms`
     } 

    const handlePrivacy = (e)=>{
        e.preventDefault(); 
        window.location.href =`${url}/privacy`;
    }
  return (
    <div>
       
    </div>
  )
}




