import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {MdOutlineCancel} from 'react-icons/md';
import {AiOutlinePlus, AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import {FiPlus} from 'react-icons/fi';
import Naira from 'react-naira';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSpeechSynthesis } from 'react-speech-kit';

 function Cart() {
    let url = window.location.origin;
     const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
     const [Total, Settotal] = useState(0)
     const [Message, SetMessage] = useState('')
     const [Loader, SetLoader] = useState(false);
     const [load, Setload] = useState(false)
     const [groupswitch, Setgroupswitch] = useState(false);
     const [secondswitch, SetSecSwitch] = useState(false);
     const [useremail, Setuseremail] = useState('')
     const [fullname, Setuserfullname] = useState('')
     const [list, Setlist] = useState(localStorage.getItem('purchase')?JSON.parse(localStorage.getItem('purchase')):[]);
     const [edit, setEdit] = useState(false)
     const [editid, Seteditid] = useState('')
     const { speak } = useSpeechSynthesis();
     const [datacollect, setdatacollect] = useState([]);
   let subtotal =  Cart.map((item)=>parseInt(item.price?item.price:0))
   function addedall (){
    const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

    return '$'+sum?sum:0;
   }
   const onedollar = 615


   function gettotal(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
    let ans =   parseInt(sum?sum:0)
    return sum;

   }

   function totalgroup(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
    return  sum * list.length
    // let ans =   parseInt(sum?sum:0)
    //  return sum;
   }



   const handleClick = (id)=>{
    let add = Cart.filter((item)=>item.id != id)
    SetCart(add)
    localStorage.setItem('Cart', JSON.stringify(add))
    let stringdata =  JSON.stringify(add)
  let formData = new FormData();
  formData.append("cartitems", stringdata)
    let urltwo = `${url}/addcart`;
    axios.post(urltwo, formData).then(res=>{

      })
   }
  //  let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
  //  console.log(cart)

   const handleCheck =()=>{
    SetLoader(true)
    let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
      //gettotal() * money.result.toFixed(2) *100.00
    let paystack = PaystackPop.setup({
        key: 'pk_test_717211460dbb54580490c8c657c4b42e4e35da03',
        email:email,
        amount: gettotal()  *100.00,
        callback: function(response){
            let ref = response.reference
            if(ref){
                let hypelink = `${url}/paystack_verify/${ref}`
                axios.get(hypelink).then(res=>{
                   if(res.data.status){
                    for (let index = 0; index < cart.length; index++) {
                        cart[index]['status'] =  res.data.message
                        cart[index]['code'] =  ref
                     }

                    let data = JSON.stringify(cart)
                    let formData = new FormData();
                    formData.append("data", data)
                    let sendlink =  `${url}/muitplepayment`
                    axios.post(sendlink, formData).then(res=>{
                        if(res.data.success){
                          formData.append("commend", 'yes')
                          let sendlink =  `${url}/deletestorage`
                          axios.delete(sendlink, formData).then(res=>{
                              if (res.data.success){
                                SetLoader(false)
                                localStorage.removeItem("Cart");
                                SetMessage(res.data.success)
                                setTimeout(()=>{
                                    window.location.href = `${url}/courses`;
                                  },1500)
                              }
                        })


                        }
                      })

                   }
                })
            }
        },
        onClose: function(){
          // user closed popup
          SetLoader(false)
        }
      });
      paystack.openIframe();

   }

   const handleBack =()=>{
       window.location.href = `${url}/courses`
   }


const handlePurchase =()=>{

}
const [showgroup, Setshowgrop] = useState(false)
const handleshow =()=>{
    Setshowgrop(true)
}

const handleSwitch =()=>{

if(groupswitch){
    Setgroupswitch(false)
}else{
    Setgroupswitch(true)
    SetSecSwitch(false)
}

}

const handlesecSwitch = ()=>{
   if(secondswitch){
    SetSecSwitch(false)
   }else{
    SetSecSwitch(true)
    Setgroupswitch(false)
   }
}


const [error, Seterror] = useState('');

const handleEnter =()=>{

  if(useremail){
    if(list.length == 0){
        let obj =  {id:0, email:useremail, fullname:fullname};
        Setlist([
            ... list,
            obj
        ])
        let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
        for (let index = 0; index < cart.length; index++) {
         cart[index]['email'] = useremail;
        }


        let data = JSON.stringify(cart)
        let formData = new FormData();
        formData.append("data", data)
        let sendlink =  `${url}/usercheckcourse`
        axios.post(sendlink, formData).then(res=>{
            if(res.data.success){
                let collect =  JSON.parse(res.data.success)
                setdatacollect(collect)

             }
          })



        Setuseremail('')
        Setuserfullname('')
    }else if(list.length > 0){
       let ans = list.map((item)=>item.email == useremail || item.fullname == fullname);
       let answer = ans.includes(true);
       if(answer == true){
        Seterror('you can not enter the same email twice')
        setTimeout(()=>{
            Seterror('')
        },1000)
       }else{

        let lastElement = list[list.length - 1];
         let answer = lastElement.id + 1;
         let object =  {id:answer, email:useremail, fullname:fullname};
         Setlist([
             ... list,
             object
         ]);

         let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
         for (let index = 0; index < cart.length; index++) {
          cart[index]['email'] = useremail;
         }
         let data = JSON.stringify(cart)
         let formData = new FormData();
         formData.append("data", data)
         let sendlink =  `${url}/usercheckcourse`
         axios.post(sendlink, formData).then(res=>{
             if(res.data.success){
             let collect =  JSON.parse(res.data.success)
             setdatacollect(collect)
             }
           })
         Setuseremail('')
         Setuserfullname('')
        // let cool = [];
        // let stu = {name:useremail, arr:Cart};
        // cool = [...cool, stu]
        // console.log(cool)


       }
    }

  }else{
    Seterror('please insert an email')
    setTimeout(()=>{
        Seterror('')
    },1000)
  }

}

// console.log(list)

useEffect(() => {
    localStorage.setItem("purchase", JSON.stringify(list));
  }, [list]);



  const handleDelete = (id)=>{
  let ans =   list.filter((item)=>item.id != id)
  Setlist(ans)
  localStorage.setItem("purchase", JSON.stringify(ans));
  Setuseremail('')
  }

  const handleEdit = (id)=>{
    let ans =   list.filter((item)=>item.id == id)
     setEdit(true)
     Seteditid(id)
     Setuseremail(ans[0].email)
  }

const handleEditarr = (e)=>{
    e.preventDefault();
    if(edit){
     let answer =  list.map((item)=>{
       return item.id === editid?{...item, email:useremail, fullname:fullname}:item
       })
       Setlist(answer)
       setEdit(false)
       Seteditid('')
       Setuseremail('')
       Setuserfullname('')
    }
}

const starcont = star => {
    let content = [];
    for (let i = 0; i < star; i++){
     content.push(   <label className='w-8' key={i}>
     <AiFillStar data-id={i} className='w-full text-[#FFC107] text-2xl'/>
    </label>)
    }
    return content;
}

const handleclear=(id)=>{
  let good =  Cart.filter((item)=>item.id != id)
  SetCart(good)
  localStorage.setItem("Cart", JSON.stringify(good))
}

// let chuks = Object.assign({}, Cart);
// console.log(chuks);


const handlePay = ()=>{
  let paystack = PaystackPop.setup({
    key: 'pk_test_717211460dbb54580490c8c657c4b42e4e35da03',
    email:email,
    amount: 2000,
    // currency:'USD',
    currency: 'USD',
    callback: function(response){
      let ref = response.reference
      if(ref){
        let hypelink = `${url}/paystack_verify/${ref}`
        axios.get(hypelink).then(res=>{
          if(res.data.status){

            let xoxo = list.map((item)=>{
              item['arr'] =Cart
              item['status'] =  res.data.message
              item['code'] =  ref
              return item;
            })

            let data = JSON.stringify(xoxo);
            let formData = new FormData();
            formData.append("data", data)
            let sendlink = `${url}/multiuserpurchase`
            axios.post(sendlink, formData).then(res=>{
                console.log(res)
              if(res.data.success){
                Setshowgrop(false)

              }
             })

          }
        })
      }


    },
    onClose: function(){
      // user closed popup
    }
  });
  paystack.openIframe();

}

  return (
    <div>
      <Navbar />

      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
                <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title">Cart</h1>
                <ul className="breadcumb-menu">
                    <li><a onClick={handlehome} style={{cursor:'pointer'}}>Home</a></li>
                    <li>Courses Details</li>
                </ul>
                </div>
            </div>
        </div>

      

      <Footer />
    </div>
  )
}
export default Cart;
if(document.getElementById("cart")){
ReactDOM.render(<Cart/>, document.getElementById("cart"))
}


// export default Login;
// if(document.getElementById('login')){
// ReactDOM.render(<Login/>, document.getElementById('login'));
// }
