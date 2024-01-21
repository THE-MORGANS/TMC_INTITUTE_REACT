import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock, AiOutlineShopping} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import CurrencyFormat from 'react-currency-format';

export default function Coureselistothm() {
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [orderbystat, setorderbystat] = useState('')
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [search, setsearch] = useState('')
    const [poundsnaira, setPoundsnaira] = useState(0)
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage

       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost).reverse()


       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
       const handlemouse =(num, word)=>{

        setorderbystat(word)
        Sethover(num)
        let formData = new FormData();
        formData.append('categories', word)
        formData.append('page', 1)
        let urltwo = `${url}/categoriesothm`;
        axios.post(urltwo, formData).then(res=>{
           if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
           }
          })
       }
       const handlePag =(data)=>{
        let Answer = data.selected + 1;
        setCurrentPage(Answer)
       }

       const handleCart = (coursename, obj)=>{
        let cart = data.find((item)=>item.coursename == coursename)
         let Awnser =  Cart.map(item=>item.coursename != coursename)
         let ans =   Awnser.includes(false)
       if(ans == false){
         SetCart([
             ...Cart,
             cart
         ])
         let AddCart = [...Cart, cart]
         localStorage.setItem('Cart', JSON.stringify(AddCart))
           let stringdata =  JSON.stringify(AddCart)
         let formData = new FormData();
         formData.append("cartitems", stringdata)
           let urltwo = `${url}/addcart`;
           axios.post(urltwo, formData).then(res=>{

             })
       }

     }

     const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

     const getBtnText =(coursename)=>{
        let cart = Cart.find((item)=>item.coursename == coursename);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    // currency->name

    let poundtonaira = poundton.result.NGN



    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
    let converted = JSON.parse(currencyex)
    let convertnaira = converted.result.NGN
     let other =  Object.values(othersmoneys.result);

    // let poundton =  poundton.result.NGN
    // function moneyTalks(currency_name, price){
    //     // console.log(currency_name, price, moneyname, convertnaira)
    // }

    function moneyTalks(currency_name, price){

        // console.log(currency_name)
        // console.log(currencyex, currencysymbol)
        if(currency_name == moneyname){
                   return price;

        }else if (moneyname == 'Nigerian Naira'){
            return Math.round(price * poundsnaira);
        }else if(currency_name != moneyname){
            return Math.round(price * other[0]) ;


        }
       }

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
    <div id="wrapper" className="horizontal">
       <Navbar/>
       



      <article className={read?"bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 flex flex-row justify-center overflow-y-scroll py-4":'hidden z-0'}>

        <section className=" w-10/12 m-auto bg-white   rounded-md sm:w-3/4 sm:m-auto sm:bg-white  sm:rounded-md   md:w-1/2 md:m-auto md:bg-white   md:rounded-md lg:w-1/2 lg:m-auto lg:bg-white   lg:rounded-md ">
         <section className='w-full py-2'>
            <span className=' w-20 float-right flex flex-row items-center justify-center'>
                <a className='w-6 h-6 grid place-content-center  rounded-full bg-[#0A033C] text-white cursor-pointer' onClick={()=>Setread(false)}>x</a>
            </span>
         </section>
          <div className="w-full flex flex-col overflow-y-scroll h-96">
            <span className="capitalize text-xl text-center py-2 border-b text-[#A32926]">OTHM, UK</span>
            <span className="text-left px-2 py-2 text-base ">
            We are a UK-based Awarding Organisation regulated by Ofqual (Office of the Qualifications and
Examinations Regulation). We have a network of numerous delivery centres globally to deliver
our qualifications in various courses like Accounting and Finance, Business Management,
Education and Training, Health and Social Care Management (etc)
OTHM is approved and regulated by Ofqual (Office of the Qualifications and Examinations
Regulation).   The   Register   of   Regulated   Qualifications   Framework   can   be   found   at
<a href="https://register.ofqual.gov.uk"> https://register.ofqual.gov.uk</a>. OTHM is also a  full member of FAB
OTHM has established strong academic relationships in the UK and overseas to ensure that
OTHM qualifications are recognised globally.
The local and international recognition has enabled OTHM graduates to enhance their
employability skills as well as allowing them to join degree and/or Master top-up programmes.
            </span>
          </div>

        </section>

      </article>



    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
