import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <h1>Hello React!</h1>
    );
}

if (document.getElementById('nav')) {
    ReactDOM.render(<Navbar />, document.getElementById('nav'));
}