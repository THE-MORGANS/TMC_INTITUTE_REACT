import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';

export default function Coureselistothm() {
   


       const handleAlphabetical = (e)=>{
        let letter = e.target.dataset.name
        setorderbystat(letter)
       let Answer = 1;
       // alphabet
       let formData = new FormData();
       formData.append('letter', letter)
       formData.append('page', Answer)
       let urltwo = `${url}/alphabetothm`;
       axios.post(urltwo, formData).then(res=>{
          if(res.data){
           Setdata(res.data.data)
           Setlast(res.data.last_page)
          }
         })
      }

      const handleNext = (data)=>{
        if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabetothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'Level 7' || orderbystat == 'Level 6' || orderbystat == 'Level 5' || orderbystat == 'Level 4'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categoriesothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/othmcheck`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }
      }


      const handleArrange =(e)=>{
        setorderbystat(e.target.dataset.name)
        let formData = new FormData();
        formData.append('orderby', e.target.dataset.name)
        formData.append('page', 1)
        let urltwo = `${url}/arrangmentothm`;
        axios.post(urltwo, formData).then(res=>{

           if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
           }
          })
           }


           const handleSearch=(e)=>{
            e.preventDefault();
            if(search.length > 0){
                let formData = new FormData();
                formData.append('items', search)
                let urltwo = `${url}/searchcourseothm`;
                axios.post(urltwo, formData).then(res=>{
                    console.log(res)
                   if(res.data){
                    Setdata(res.data)

                   }
                  })
            }

           }
           const handleLink = (id)=>{
            let formData = new FormData();
            let myHeader = new Headers();
            myHeader.append('Content-Type', 'application/json')
            formData.append("id", id)
            apiClient.get('/sanctum/csrf-cookie').then( ()=> {
                let urltwo = 'api/encrypt';
                   apiClient.post(urltwo, formData, myHeader).then(res=>{
                     if(res.data){
                     window.location.href =`${url}/courseinfo/OTHM/${res.data}`;

                     }

                    })
                })

           }

     const [overon, setoveron] = useState(1000)
 const handleOver = (index)=>{
    setoveron(index)
 }

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
