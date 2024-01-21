import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Study from './Study';


export default function Navbar() {

    
    return (
        <Router>
            <header id="header" class="header header-fullwidth ">
                <div class="container">
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
                </div>
                <Route path="/" exact component={Study} />
                <Route path="/about" component={Study} />
            </header>
        </Router>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}