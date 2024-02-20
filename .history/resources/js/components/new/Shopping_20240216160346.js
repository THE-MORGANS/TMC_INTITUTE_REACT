import React, {useState, useEffect, useRef, useMemo} from 'react';
import ReactDOM  from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import {FiPlus} from 'react-icons/fi';
import {BsFillCartFill} from 'react-icons/bs';
import {AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus, AiFillHome} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CurrencyFormat from 'react-currency-format';

function Shopping() {
    let url = window.location.origin;
    const [Cart, SetCart] = useState([])
    const pal = useRef(); 
    // const [Loader, SetLoader] = useState(false);
    const [Message, SetMessage] = useState("")
    const [pop, Setpop] = useState(false)
    const [showgroup, Setshowgrop] = useState(false)
    const [groupswitch, Setgroupswitch] = useState(false);
    const [secondswitch, SetSecSwitch] = useState(false);
    const [useremail, Setuseremail] = useState('')
    const [fullname, Setuserfullname] = useState('')
    const [list, Setlist] = useState([]);
    const [edit, setEdit] = useState(false)
    const [editid, Seteditid] = useState('')
    const [datacollect, setdatacollect] = useState([]);
    const [error, Seterror] = useState('');
    const [totalcost, Settotalcost] = useState('')
    const [subtotalcost, Setsubtotal] = useState()
    const [OrderId, setOrderId] = useState('')
    // const [currencycodee, setcurrencycode] = useState('')
    // const [usagroup, setusagroup] = useState('')
    // const [totalgroupcost, settotalgroupcost] = useState(0)
    const [loader, setloader] = useState(false)
    const [loaders, setloaders] = useState(false)
    const [poundsnaira, setPoundsnaira] = useState(0)
    const [totalusagroup, setTotalusagroup] = useState(0)
 
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


        if(Cart.length == 0){
            SetCart(cart === null || cart.length == 0?[]:cart)
        }
    },[])

    let symbol = currencysymbol.currency.symbol
    let converted = JSON.parse(currencyex)
    let convertnaira = converted.result.NGN
    let moneyname = currencysymbol.currency.name
    let currencycode = currencysymbol.currency.code
   // let other =  Object.values(othersmoneys.result);
    //let poundtonaira = poundton.result.NGN
    let poundtodollar =  todollar.result.USD
    //let other =  Object.values(othersmoneys.result);
    let poundtonaira = poundton.result.NGN
    const [convertdollar, setconvertdollar] = useState(poundtodollar)
    let subtotal = useMemo(()=>Cart.map((item)=>{
        if(moneyname == 'Nigerian Naira' && item.coursetype == 'OTHM'){
            return Math.round(item.price * poundsnaira);
        }else{
            return  parseInt(item.price?item.price:0)
        }
    }), [Cart])
     
     
     const onedollar = 1215

     function addedall (){
        const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

        return sum?sum:0;
       }

    function gettotal(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
    
        if(currencysymbol.currency.code != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans + (onedollar/convertnaira);
            return Math.round(quest);
        }else{
            let ans =   parseInt(sum?sum:0)
            return ans;
        }
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



const handleHome =()=>{
   window.location.href = `${url}`;
}

const handleLink =(e)=>{
    e.preventDefault();
    window.location.href =`${url}/shoppingcart`
}

const handleMycourse = ()=>{
    window.location.href =`${url}/usercourses`;
}
let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]

        useEffect(()=>{
    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }
    },1000)
    return () => clearInterval(interval);
 },[])


    function moneyTalks(converted, price, coursetype){
        // console.log(converted, price);
        if(moneyname == 'Nigerian Naira' && coursetype == 'OTHM'){
            return Math.round(price * poundsnaira);

        }else{
            if(converted){
                return Math.round(price);
            }
            else{
                if(currencycode != 'NGN'){
                    return Math.round(price / convertnaira) ;
                }else{
                    return Math.round(price);

                }
            }
        }
    }
    function usatotal(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
        let ans =   parseInt(sum?sum:0)
        let quest = ans / convertnaira + onedollar / convertnaira ;
        // let totalleght = list.length == 0?1:list.length;
            return Math.round(quest * poundtodollar);
        }else{
        let ans =   parseInt(sum?sum:0)
        return ans;
        }
    }

    function usatotalgroup(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
        let ans =   parseInt(sum?sum:0)
        let quest = ans / convertnaira + onedollar / convertnaira ;
            return Math.round(quest * poundtodollar * list.length);
        }else{
        let ans =   parseInt(sum?sum:0)
        return ans;
        }
    }

    //    let answhole =whole  * poundtodollar.result.USD
    //    setpounddollar(answhole)
    whole =  usatotal()
    wholeusagroup  = usatotalgroup()
    // console.log(wholeusagroup)

    let whole;
    let wholesecond = '';
    let wholeusagroup;
    function totalgroup(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
    if(currencycode != 'NGN'){
        return Math.round( sum * list.length / convertnaira)
    }else{

        return  sum * list.length
    }
    // let ans =   parseInt(sum?sum:0)
    //  return sum;
    }

    const handleBack =()=>{
        window.location.href = `${url}/newdashboard`
    }
     
    const handlePop =()=>{
        Setshowgrop(true)
    }
     
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

    const handlePay = (e)=>{
        e.preventDefault();
        setloaders(true)
        let from = new Date()
        var ddfrom = String(from.getDate()).padStart(2, '0');
        var mmfrom = String(from.getMonth() + 1).padStart(2, '0');
        var yyyyfrom = from.getFullYear();
        let bfrom = ddfrom+ '/' + mmfrom + '/' + yyyyfrom;

        let paystack = PaystackPop.setup({
          key: 'pk_live_1cdc09bd2d33d7063a0e628325d43c0cd289ecf1',
          email:usersemail,
          amount:totalgroup() * 100,
          // 2000  *100.00,
          currency:'NGN',
          // currencycode == 'NGN'?'NGN':'USD',
          callback: function(response){
            let ref = response.reference
            if(ref){
              let hypelink = `${url}/paystack_verify/${ref}`
              axios.get(hypelink).then(res=>{
                if(res.data.status){

                  let xoxo = list.map((item)=>{
                    item['arr'] =Cart.map((one)=>{
                        popTalks(one.converted, one.price)
                        return one;
                    })
                    item['status'] =  res.data.message
                    item['code'] =  ref
                    item['moneyname'] = moneyname
                    return item;
                  })

                  let data = JSON.stringify(xoxo);
                  let formData = new FormData();
                  formData.append("data", data)
                  formData.append("totalcost", totalcost)
                  formData.append("subcost", subtotalcost)
                   formData.append("today", bfrom)
                  let sendlink = `${url}/multiuserpurchase`
                  axios.post(sendlink, formData).then(res=>{
                    // console.log(res)
                    if(res.data.success){
                        let formDataone = new FormData();
                        formDataone.append("commend", 'yes')
                        let sendlink =  `${url}/deletestorage`
                        axios.delete(sendlink, formDataone).then(res=>{
                            if (res.data.success){
                       localStorage.removeItem("Cart");
                      Setshowgrop(false)
                      SetSecSwitch(false)
                      setloaders(false)
                      setTimeout(()=>{
                        localStorage.removeItem("Cart");
                        SetCart([])
                        window.location.href = `${url}/newdashboard`;
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
          }
        });
        paystack.openIframe();

    }

    function popTalks(converted, price){
        if(converted){
            return Math.round(price);
        }
        else{
            if(currencycode != 'NGN'){
                return Math.round(price * currencyex)
            }else{
                return Math.round(price)

            }

        }
    }

    let itemspurchased = Cart.map((item)=>item.coursename).toString()
    

     
     const starcont = star => {
         let content = [];
         for (let i = 0; i < star; i++){
          content.push(   <label className='w-8' key={i}>
          <AiFillStar data-id={i} className='w-full text-[#FFC107] text-2xl'/>
         </label>)
         }
         return content;
     }

    const handlesecSwitch = ()=>{
        if(secondswitch){
            SetSecSwitch(false)
        }else{
            SetSecSwitch(true)
            Setgroupswitch(false)
        }
    }

    const handleEnter =(e)=>{
        e.preventDefault();
         if(useremail){
           if(list.length == 0){
               let obj =  {id:0, email:useremail, fullname:fullname};
               let datasend = [ ... list, obj]
               Setlist(datasend)
               localStorage.setItem("purchase", JSON.stringify(datasend));
 
               let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
               for (let index = 0; index < cart.length; index++) {
                cart[index]['email'] = useremail;
               }
 
               const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
               if(currencycode != 'NGN'){
                   let ans =   parseInt(sum?sum:0)
                   let quest = ans / convertnaira + onedollar / convertnaira ;
                    let answercom = Math.round(quest * poundtodollar * 1);
                   setTotalusagroup(answercom)
 
                 }else{
                   let ans =   parseInt(sum?sum:0)
                   console.log(ans)
 
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
 
               const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
               if(currencycode != 'NGN'){
                   let ans =   parseInt(sum?sum:0)
                   let quest = ans / convertnaira + onedollar / convertnaira ;
                   let totalleght = list.length + 1
                    let answercom = Math.round(quest * poundtodollar * totalleght);
                    setTotalusagroup(answercom)
                 }else{
                   let ans =   parseInt(sum?sum:0)
                   console.log(ans)
 
                 }
 
 
               let lastElement = list[list.length - 1];
                let answer = lastElement.id + 1;
                let object =  {id:answer, email:useremail, fullname:fullname};
                let datasend = [ ... list, object]
                Setlist(datasend)
                localStorage.setItem("purchase", JSON.stringify(datasend));
 
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
              }
           }
 
         }else{
           Seterror('please insert an email')
           setTimeout(()=>{
               Seterror('')
           },1000)
         }
 
    }

 
    const handleDelete = (id)=>{
        let ans =   list.filter((item)=>item.id != id)
        Setlist(ans)
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans / convertnaira + onedollar / convertnaira ;
            let totalleght = list.length - 1
            let answercom = Math.round(quest * poundtodollar * totalleght);
            setTotalusagroup(answercom)

        }else{
            let ans =   parseInt(sum?sum:0)
            console.log(ans)

        }
        localStorage.setItem("purchase", JSON.stringify(ans));
        Setuseremail('')
    }
 
 
    const handleEdit = (id)=>{
        let ans =   list.filter((item)=>item.id == id)
        setEdit(true)
        Seteditid(id)
        Setuseremail(ans[0].email)
        Setuserfullname(ans[0].fullname)
    }

    const handleEditarr = (e)=>{
        e.preventDefault();
        if(edit){
        let answer =  list.map((item)=>{
        return item.id === editid?{...item, email:useremail, fullname:fullname}:item
        })
        localStorage.setItem("purchase", JSON.stringify(answer));
        Setlist(answer)
        setEdit(false)
        Seteditid('')
        Setuseremail('')
        Setuserfullname('')
        }
    }



  return (
    <div>
      <Navbar/>
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="title" data-opacity="8">
          <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
          <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px" >
              <img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape"/>
          </div>
          <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px">
              <img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape"/>
          </div>
          <div className="container">
              <div className="breadcumb-content text-center">
                  <h1 className="breadcumb-title">Cart Page</h1>
                  <ul className="breadcumb-menu">
                      <li>
                          <a onClick={handleHome} style={{cursor:'pointer'}}>Home</a>
                      </li>
                      <li>Cart Page</li>
                  </ul>
              </div>
          </div>
      </div>

      <div className="th-cart-wrapper space-top space-extra-bottom">
            <div className="container">
                <div className="woocommerce-notices-wrapper">
                    <div className="woocommerce-message"> Your cart ({Cart.length} items)</div>
                </div>
                <form action="#" className="woocommerce-cart-form">
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th className="cart-col-image">Image</th>
                                <th className="cart-col-productname">Product Name</th>
                                <th className="cart-col-price">Price</th>
                                <th className="cart-col-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                          {Cart.length > 0 ? (
                              Cart.map((item, index) => (
                                <tr className="cart_item" key={index}>
                                    <td data-title="Product">
                                        <a className="cart-productimage" href="#">
                                            <img width="91" height="91" src={item.picture} alt="Image" />
                                        </a>
                                    </td>
                                    <td data-title="Name">
                                        <a className="cart-productname" href="#">{item.coursename}</a>
                                    </td>
                                    <td data-title="Price">
                                        <span className="amount">
                                            <bdi>
                                                <CurrencyFormat value={moneyTalks(item.converted, item.price, item.coursetype)} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                                            </bdi>
                                        </span>
                                    </td>
                                    <td data-title="Remove">
                                        <a onClick={()=>handleClick(item.id)} style={{cursor:'pointer'}}  className="remove">
                                            <i className="fal fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))
                          ) : (
                            <tr>
                                <td colSpan="6" className="text-danger">No items in cart</td>
                            </tr>
                          )}

                       
                        </tbody>
                    </table>
                </form>
                {Cart.length > 0 ? (
                        <div className="row justify-content-end">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <h2 className="h4 summary-title">Cart Totals</h2>
                                <table className="cart_totals">
                                    <tbody>
                                        <tr>
                                            <td>Cart Subtotal</td>
                                            <td data-title="Cart Subtotal">
                                                <span className="amount">
                                                    <bdi>
                                                        <div className="font-semibold text-black text-xl"> 
                                                            <CurrencyFormat value={addedall()} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                                                        </div>
                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr className="order-total">
                                            <td>Order Total</td>
                                            <td data-title="Total">
                                                <strong>
                                                    <span className="amount">
                                                        <bdi>
                                                            <CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                                                        </bdi>
                                                    </span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                {/* <div className="wc-proceed-to-checkout mb-30">
                                    <a href="" className="th-btn">Make Payment</a>
                                </div> */}
                                <div className="px-6 pb-5 mb-30">
                                {Cart.length > 0?
                                currencycode == 'NGN'?
                                // <p>Checkout</p>
                                <a className="bg-blue-600 block py-3 rounded-md text-white text-center text-base font-semibold hover:text-white hover:bg-blue-700 cursor-pointer" style={{ color:'white' }} onClick={()=>handleCheck()}>{loader?'Please wait...':'Checkout'}  </a>
                                
                                :
                                <div className="relative" >
                                <PayPalScriptProvider options={{ "client-id": "AUBDz8zhTjw7acKU1_wB6b-ngtUEEsYD2vPbPtr6i8Lp5zHlvvgq-zhdpUBSuFNZ5qMlvaNB2SI23M5A" }}>
                                    <PayPalButtons style={{layout:'vertical', z_index:'-1'}}
                                    createOrder={(data, actions)=>{
                                        //
                                        // console.log(sun)
                                    return actions.order.create({
                                        // whole
                                        purchase_units:[{
                                            description:itemspurchased,
                                            amount:{
                                                currency_code:'USD',
                                                value:whole,

                                            },
                                        },
                                    ],
                                    application_context: {
                                        shipping_preference:'NO_SHIPPING'
                                        }
                                    }).then((orderID)=>{
                                        setOrderId(orderID)
                                        // OrderId
                                        return orderID
                                    })

                                    }}
                                    onApprove={(data, actions)=>{
                                        let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
                                        return actions.order.capture().then((details)=>{
                                            // console.log(details, OrderId)
                                            let transactionid = '';
                                            // details.status
                                            details.purchase_units.map((item)=>{
                                                item.payments.captures.map((one)=>{
                                                    transactionid = one.id
                                                })
                                            })
                                            // const {payer} = details;

                                            if(details.status && transactionid){

                                                // for (let index = 0; index < cart.length; index++) {

                                                //     // cart[index]['means'] = 'paystack'
                                                //  }
                                                for (let index = 0; index < cart.length; index++) {
                                                    if(currencycode == 'NGN'){
                                                        console.log(cart[index])
                                                        cart[index]['status'] =  details.status
                                                        cart[index]['code'] =  transactionid
                                                        cart[index]['moneyname'] = moneyname
                                                    }else{
                                                    Math.round(cart[index]['price']/convertnaira)
                                                        cart[index]['status'] =  details.status
                                                        cart[index]['code'] =  transactionid
                                                        cart[index]['moneyname'] = moneyname

                                                    }

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
                                                            //  SetLoader(false)
                                                            // SetMessage(res.data.success)
                                                            setTimeout(()=>{
                                                                localStorage.removeItem("Cart");
                                                                window.location.href = `${url}/newdashboard`;
                                                            },1500)
                                                        }
                                                    })
                                                    }
                                                })
                                            }

                                        })
                                    }}
                                    onError={(data, actions)=>{
                                        //   SetErrorMessage('your payment was not successfull')
                                    }}
                                    />
                                </PayPalScriptProvider>
                                </div>

                                :
                                <a className="bg-red-500 block py-3 rounded-md text-white text-center text-base font-semibold hover:text-white hover:bg-blue-700 cursor-pointer"  style={{ color:'white' }} onClick={()=>handleBack()}> Back </a>
                                }
                                <div className="flex items-center justify-center mt-4 space-x-1.5 text-center">
                                    <p className="font-medium"> or </p> 
                                    <button type="button"   class="th-btn style5 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Group Purchase
                                    </button>
                                    {/* <a  className="text-blue-600 font-semibold text-center cursor-pointer" onClick={handlePop}>Group Purchase</a> */}
                                </div>
                            
                                
                            </div>


                            </div>
                        </div>
                    ) : (
                    <p></p>
                  )}
            </div>
        </div>
      
      

       
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-5" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">List of courses</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ">
                    <div className='container-fluid'>
                    <div className="woocommerce-notices-wrapper">
                        <div className="woocommerce-message"> Your cart ({Cart.length} items)</div>
                    </div>
                    <form action="#" className="woocommerce-cart-form">
                        <table className="cart_table">
                            <thead>
                                <tr>
                                    <th className="cart-col-image">Image</th>
                                    <th className="cart-col-productname">Product Name</th>
                                    <th className="cart-col-price">Price</th>
                                    <th className="cart-col-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Cart.length > 0 ? (
                                Cart.map((item, index) => (
                                    <tr className="cart_item" key={index}>
                                        <td data-title="Product">
                                            <a className="cart-productimage" href="#">
                                                <img width="91" height="91" src={item.picture} alt="Image" />
                                            </a>
                                        </td>
                                        <td data-title="Name">
                                            <a className="cart-productname" href="#">{item.coursename}</a>
                                        </td>
                                        <td data-title="Price">
                                            <span className="amount">
                                                <bdi>
                                                    <CurrencyFormat value={moneyTalks(item.converted, item.price, item.coursetype)} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                                                </bdi>
                                            </span>
                                        </td>
                                        <td data-title="Remove">
                                            <a style={{cursor:'pointer'}} onClick={()=>handleClick(item.id)} className="remove">
                                                <i className="fal fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-danger">No items in cart</td>
                                </tr>
                            )}

                        
                            </tbody>
                            <tfooter>
                            <div class="info-list">
                                <ul>
                                    <li>
                                        <i class="fa-light fa-user"></i>
                                        <strong>Persons: </strong>
                                        <span>x{list.length}</span>
                                    </li>
                                </ul>
                            </div>
                                
                            </tfooter>
                        </table>
                       
                    </form>
                   
                    {list.length > 0 ? list.map((item, index) => (
                        <div className="course-Reviews" key={index}>
                            <div className="th-comments-wrap">
                                <ul className="comment-list">
                                    <li className="review th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <p>{index + 1 + "."}</p>
                                            </div>
                                            <div className="comment-content">
                                                <h4 className="name">{item.fullname}</h4>
                                                <span className="commented-on">
                                                {item.email}
                                                </span>
                                                <div className="d" aria-label="">
                                                    <span className="w-24 space-x-4 flex flex-row items-center">
                                                        <a className="bg-white border-none outline-none flex justify-center items-center "  onClick={()=>handleDelete(item.id)}>
                                                            <AiFillDelete className="text-2xl text-[#A32926]" onClick={()=>handleDelete(item.id)}/>
                                                        </a>
                                                        <a className="bg-white flex justify-center items-center">
                                                            <AiFillEdit className="text-2xl text-green-500" onClick={()=>handleEdit(item.id)} />
                                                        </a>
                                                    </span>
                                                </div>
                                             </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )) : (
                        <p className="">
                            No user email added
                        </p>
                    )}

                    <div className="woocommerce-notices-wrapper">
                        <div className="woocommerce-message"> Add Number Of Persons </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div  class="woocommerce-form-login">
                                <div class="form-group">
                                    <label>Enter Email *</label>
                                    <input type="email"  value={useremail} onChange={(e)=>Setuseremail(e.target.value)} class="form-control" placeholder="Enter Email" />
                                </div>
                                <div class="form-group">
                                    <label>Enter Fullname *</label>
                                    <input type="text"  value={fullname} onChange={(e)=>Setuserfullname(e.target.value)} class="form-control" placeholder="Enter Fullname" />
                                </div>
                                <div class="form-group">
                                {edit?
                                    <button class="th-btn style5" onClick={(e)=>handleEditarr(e)}>Edit</button>
                                    : 
                                    <a class="th-btn style5" onClick={(e)=>handleEnter(e)}>Enter</a>

                                    // <a className="px-4 py-3 capitalize bg-[#A32926] text-white rounded-sm" onClick={(e)=>handleEnter(e)}>enter</a>
                                }
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>

   
      <Footer/>
    </div>
  );
}

export default Shopping;

if (document.getElementById('shoppingcart')) {
  ReactDOM.render(<Shopping/>, document.getElementById('shoppingcart'));
}
