import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Study from './Study';


export default function Navbar() {
    

    
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

                <Route path="/" exact component={Study} />
                <Route path="/about" component={Study} />
            </div>
        </Router>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}