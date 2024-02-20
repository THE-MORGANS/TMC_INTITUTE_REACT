import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
 function Profile() {
    let url = `${window.location.origin}`;
    const handleLinks = (e)=>{
        localStorage.clear();
        e.preventDefault();
        let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
    }
    console.log(additional)
    const handleClick =(e)=>{
     let name = e.target.dataset.name
     if(name){
       window.location.href =`${url}/contact`;
     }
    }
    const handleback = ()=>{
        window.location.href = `${url}/newdashboard`
    }
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
