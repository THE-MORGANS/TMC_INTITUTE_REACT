// Study.js
import React from 'react';

function Study() {
  return( <h2>Study</h2>);
}

Study;

if(document.getElementById('studyabroad')){
  ReactDOM.render(<Study/>, document.getElementById('studyabroad'));
}
