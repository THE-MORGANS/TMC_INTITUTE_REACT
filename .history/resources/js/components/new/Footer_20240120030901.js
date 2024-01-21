import React from 'react'
import ReactDOM from 'react-dom'

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
  )
}




