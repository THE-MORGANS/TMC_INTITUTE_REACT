import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Study from './Study';


export default function Navbar() {

    
    return (
        <Router>
            <br/>
            <header id="header" class="header header-fullwidth ">
                <div class="container">
                    <div class="header-desk header-desk_type_1">
                        <nav>
                            <ul>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/study">About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Route path="/" exact component={Study} />
                <Route path="/study" component={Study} />
            </header>
        </Router>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}