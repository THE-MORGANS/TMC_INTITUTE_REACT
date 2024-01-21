import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Study from './Study';


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
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                </nav>

                <Route path="/" exact component={Home} />
            </div>
        </Router>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}