// Study.js
import React from 'react';

function Study() {
  return( <h2>Study</h2>);
}

export default Study;

if(document.getElementById('studyabroad')){
  ReactDOM.render(<Study/>, document.getElementById('study'));
}
