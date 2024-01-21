import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <p>How far</p>
    </div>
  );
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  const dashElement = document.getElementById('dash');

  // Check if the element with ID 'dash' exists
  if (dashElement) {
    // Render the React component inside the 'dash' element
    ReactDOM.render(<Home />, dashElement);
  }
});
