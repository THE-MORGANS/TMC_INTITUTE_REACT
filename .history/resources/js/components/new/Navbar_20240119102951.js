import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Navbar() {
    
    let url = window.location.origin;
   // let url = `http://127.0.0.1:8000`;
    
    const handleLinks = (e)=>{
        let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
    }
    
    const handleStudy = ()=>{
        window.location.href = `${url}/studyabroad`;
    }
    const handleAcc = ()=>{
        alert('ok');
        window.location.href = `http://127.0.0.1:8000/profile`
    }
    
    return (
        <Route>
            <Route
        </Route>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}