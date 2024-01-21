import React from 'react';
import ReactDOM from 'react-dom';
function Home() {
   

  return (
      <div className='flex flex-col items-center'>
        <p>How far</p>
      </div>
  )
}



export default Home;
if (document.getElementById('dash')) {
    ReactDOM.render(<Home/>, document.getElementById('dash'));
}


