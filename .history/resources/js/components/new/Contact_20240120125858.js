// Study.js
import React from 'react';
import ReactDOM from 'react-dom';

function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
    </div>
  
  );
}

export default Contact;

if(document.getElementById('contactus')){
  ReactDOM.render(<Contact/>, document.getElementById('contactus'))
  }
  
