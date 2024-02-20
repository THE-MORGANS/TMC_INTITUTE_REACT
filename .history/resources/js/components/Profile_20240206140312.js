import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './new/Navbar';
import Navbar from './Navbar';
import Footer from './Footer';

 function Profile() {
   
  return ( 
  <div>
      <Navbar />

      <Footer />

  </div>

    
  )
}

export default Profile;
if(document.getElementById('profile')){
ReactDOM.render(<Profile/>, document.getElementById('profile'))
}
