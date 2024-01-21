// Study.js
// Study.js
import React from 'react';
import ReactDOM from 'react-dom';

export default  function Study() {
  return( 
    <div>
       <h2>Study</h2> 
    </div>
   
  );
}


if(document.getElementById('studyabroad')){
  ReactDOM.render(<Study/>, document.getElementById('studyabroad'));
}
