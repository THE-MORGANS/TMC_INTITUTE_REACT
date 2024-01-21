// Study.js
// Study.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

export default  function Study() {
  return( 
    <div>
      <Navbar />
    </div>
   
  );
}


if(document.getElementById('studyabroad')){
  ReactDOM.render(<Study/>, document.getElementById('studyabroad'));
}
