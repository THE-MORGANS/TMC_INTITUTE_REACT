// Study.js
import React from 'react';

function Contact() {
  return <h2>Contact us</h2>;
}

export default Contact;

if(document.getElementById('home')){
  ReactDOM.render(<Study/>, document.getElementById('home'));
}
