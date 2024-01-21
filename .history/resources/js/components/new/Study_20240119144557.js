// Study.js
// Study.js
import React from 'react';
import ReactDOM from 'react-dom';

export default  function Study() {
  return( 
    <h2>Study</h2> 
  );
}


if(document.getElementById('studyabroad')){
  ReactDOM.render(<Study/>, document.getElementById('studyabroad'));
}
