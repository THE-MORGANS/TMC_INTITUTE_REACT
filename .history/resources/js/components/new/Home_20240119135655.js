// Study.js
import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
  return <h2>Contact us</h2>;
}

export default Home;

if (document.getElementById('home')) {
  ReactDOM.render(<Home />, document.getElementById('study'));
}
