// Study.js
import React from 'react';

function Home() {
  return (<h2>Contact us</h2>;
}

export default Home;

if(document.getElementById('home')){
  ReactDOM.render(<Home/>, document.getElementById('home'));
}
