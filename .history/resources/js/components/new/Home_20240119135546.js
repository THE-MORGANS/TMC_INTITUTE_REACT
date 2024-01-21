// Study.js
import React from 'react';
import ReactDOM from 'react-dom';

function Study() {
  return <h2>Contact us</h2>;
}

export default Study;

if (document.getElementById('study')) {
  ReactDOM.render(<Study />, document.getElementById('study'));
}
