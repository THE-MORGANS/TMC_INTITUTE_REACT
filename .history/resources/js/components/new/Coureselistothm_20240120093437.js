import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';

export default function Coureselistothm() {
   
 const handleLeave = ()=>{
    setoveron(1000)
 }

//  let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
 useEffect(()=>{
    let urlthree = `${url}/allcurrency`;
    axios.get(urlthree).then(res=>{
        if(res.data){
            let info = res.data
        info.map((item)=>{
           console.log(item.currencyname, item.foreignrate,
            item.nairarate)

            if(item.currencyname === 'Pound sterling'){
                setPoundsnaira(item.nairarate)
            }
        })

        }
    })
    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }

    },1000)
    return () => clearInterval(interval);
 },[])
    const [read, Setread] = useState(false)
   const handleRead =()=>{
    Setread(true)
   }
  return (
    <div>
        <h2>courselistothm</h2>
       {/* <Navbar/> */}
       

        {/* <Footer /> */}
    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
