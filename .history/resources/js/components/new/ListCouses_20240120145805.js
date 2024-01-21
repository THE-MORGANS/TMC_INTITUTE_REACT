// Study.js
import React from 'react';

function ListCouses() {
  return <h2>Testimonials</h2>;
}

export default ListCouses;

if(document.getElementById('listcourses')){
    ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}