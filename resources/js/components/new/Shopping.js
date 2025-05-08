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
// import { loadScript } from "@paypal/paypal-js";
export default function Shopping() {
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
            //    console.log(item.currencyname, item.foreignrate,
            //     item.nairarate)

                if(item.currencyname === 'Pound sterling'){
                    setPoundsnaira(item.nairarate)
                }
            })

            }
        })
        SetCart(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
        Setlist(localStorage.getItem('purchase')?JSON.parse(localStorage.getItem('purchase')):[])
    },[])

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

    
    // let symbol = currencysymbol.currency.symbol
    let moneyname = 'Nigerian Naira'
    // let moneyname = currencysymbol.currency.name Nigerian Naira
    // let converted = JSON.parse(currencyex)
    // let convertnaira = converted.result.NGN
    let currencycode = 'NGN'
    // let poundtodollar =  todollar.result.USD
    // let other =  Object.values(othersmoneys.result);
    // let poundtonaira = poundton.result.NGN
    // const [convertdollar, setconvertdollar] = useState(poundtodollar)

    let subtotal = useMemo(()=>Cart.map((item)=>{
    if(moneyname == 'Nigerian Naira' && item.coursetype == 'OTHM'){
        return Math.round(item.price * poundsnaira);
    }else{
        return  parseInt(item.price?item.price:0)
    }
    }), [Cart])
    
    const onedollar = 615;
    function gettotal(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
    if(currencycode != 'NGN'){
        let ans =   parseInt(sum?sum:0)
        let quest = ans / convertnaira + onedollar / convertnaira;
            return Math.round(quest);
        }else{
        let ans =   parseInt(sum?sum:0)
        return ans;
        }
    }
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
    }
    const [example, Setexample] = useState('')
    
    function usatotal(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans / convertnaira + onedollar / convertnaira ;
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

    whole =  usatotal()
    wholeusagroup  = usatotalgroup()

    const handleCheck =()=>{
        setloader(true)
        let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
       
        let paystack = PaystackPop.setup({
        key: 'pk_live_1cdc09bd2d33d7063a0e628325d43c0cd289ecf1',
        email:usersemail,
        amount:gettotal() * 100,
        // 2000 * 100,
        currency:'NGN',
        callback: function(response){
            let ref = response.reference
            if(ref){
                let hypelink = `${url}/paystack_verify/${ref}`
                axios.get(hypelink).then(res=>{
                    if(res.data.status){

                    for (let index = 0; index < cart.length; index++) {
                        cart[index]['status'] =  res.data.message
                        cart[index]['code'] =  ref
                        cart[index]['moneyname'] = moneyname
                        // cart[index]['means'] = 'paystack'
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
                                setloader(true)
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
            }
        },
        onClose: function(){
            // user closed popup
            setloader(false)
        }
        });
        paystack.openIframe();
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

    const starcont = star => {
        let content = [];
        for (let i = 0; i < star; i++){
        content.push(   <label className='w-8' key={i}>
        <AiFillStar data-id={i} className='w-full text-[#FFC107] text-2xl'/>
        </label>)
        }
        return content;
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
                  //  totalusagroup, setTotalusagroup
                  // localStorage.setItem('usatotallocal', JSON.stringify(add))
                  setTotalusagroup(answercom)

                }else{
                  let ans =   parseInt(sum?sum:0)
                  console.log(ans)

                }

            //   if(wholesecond){
            //     console.log(wholesecond)
            //     settotalgroupcost(wholesecond)
            //   }

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

            //    if(wholesecond){
            //     console.log(wholesecond)
            //     settotalgroupcost(wholesecond)
            //   }


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
        currency:'NGN',
        callback: function(response){
        let ref = response.reference
        if(ref){
            let hypelink = `${url}/paystack_verify/${ref}`
            axios.get(hypelink).then(res=>{
            // console.log(res)
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
            //   console.log(data)
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

    useEffect(()=>{
        // settotalgroupcost(usatotalgroup())
        Setsubtotal(gettotal())
        Settotalcost(totalgroup())
         if( datacollect.length > 0){
           setTimeout(()=>{
            setdatacollect([])
           },5000)
         }
      },[datacollect])

    // function moneyTalks(converted, price, coursetype){
    //     // console.log(converted, price);
    //     if(moneyname == 'Nigerian Naira' && coursetype == 'OTHM'){
    //         return Math.round(price * poundsnaira);

    //     }else{
    //         if(converted){
    //             return Math.round(price);
    //         }
    //         else{
    //             if(currencycode != 'NGN'){
    //                 return Math.round(price / convertnaira) ;
    //             }else{
    //                 return Math.round(price);

    //             }

    //         }
    //     }
    // }

   function popTalks(converted, price){
        // console.log(converted, price);
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

    let cal = localStorage.getItem('calcalate')?JSON.parse(localStorage.getItem('calcalate')):[]
    let dis =cal[0]
    
    const makeOrder = (data, actions)=>{

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
    }

    const handleHome = ()=>{
        window.location.href = `${url}/newdashboard`
    }
    const handleShopping =()=>{
        window.location.href = `${url}/shoppingcart`
    }
// https://github.com/chrisblakely01/quiz-app (question and answer application)
// https://github.com/machadop1407/PayPal-Implementation-React/blob/master/public/index.html
// wholeusagroup = usatotalgroup()


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


  return (
    <div id="wrapper" className="horizontal">
      <Navbar/>
      {/* <!--  breadcrumb --> */}
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
                        <li>
                            <a className='cursor-pointer' style={{cursor:'pointer'}} onClick={handleShopping}>Shopping Cart </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="th-cart-wrapper space-top space-extra-bottom">
            <div className="container">
                <div className="woocommerce-notices-wrapper">
                    <div className="woocommerce-message"> Your cart ({Cart.length} items)</div>
                </div>
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
                                        <span className="cart-productimage w-14 h-14  rounded-md lg:w-14 lg:h-14  lg:rounded-md">
                                            <img src={item.picture} width="100" height="100" className="w-full h-full  object-cover rounded-md"  />
                                        </span>
                                        <span className=' d-flex' >
                                            {starcont(item.rating?item.rating:3)}
                                        </span>
                                    </td>
                                    <td data-title="Name">
                                        <a className="cart-productname" href="#">{item.coursename}</a>
                                    </td>
                                    <td data-title="Price">
                                        {/* <CurrencyFormat value={popTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> */}

                                        <span className="amount">
                                            <bdi>
                                                <CurrencyFormat value={popTalks(item.converted, item.price, item.coursetype)} displayType={'text'} thousandSeparator={true} prefix='₦' />
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
                                                        <CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix='₦' />
                                                    </div>
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="px-6 pb-5 ">
                            {Cart.length > 0?
                            currencycode == 'NGN'?
                            <a className="th-btn style5 cursor-pointer" style={{cursor:'pointer'}} onClick={()=>handleCheck()}>
                                {loader?'Please wait...':'Checkout'}  
                            </a>
                            :<div className="relative z-0" >
                            <PayPalScriptProvider options={{ "client-id": "AUBDz8zhTjw7acKU1_wB6b-ngtUEEsYD2vPbPtr6i8Lp5zHlvvgq-zhdpUBSuFNZ5qMlvaNB2SI23M5A" }}>
                                 <PayPalButtons style={{layout:'vertical',   z_index:"-1"}}
                                 createOrder={(data, actions)=>{
                                   return actions.order.create({
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
                                       return orderID
                                   })
                                  }}
                                 onApprove={(data, actions)=>{
                                    let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
                                     return actions.order.capture().then((details)=>{
                                       
                                        let transactionid = '';
                                         details.purchase_units.map((item)=>{
                                            item.payments.captures.map((one)=>{
                                                transactionid = one.id
                                            })
                                         })
                                        
                                        if(details.status && transactionid){

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
                            <a className="bg-red-500 block py-3 rounded-md text-black text-center text-base font-semibold hover:text-black hover:bg-blue-700 cursor-pointer"  style={{ color:'black' }} onClick={()=>handleBack()}> Back </a>
}
                            <div className="flex items-center justify-center mt-4 space-x-1.5">
                                <p className="font-medium"> or </p> 
                                <a  className="th-btn style4" style={{cursor:'pointer'}} onClick={handlePop}>Group Purchase</a>
                            </div>
                          <br/>
                            {showgroup  && ( 
                                <div className='container'>
                                    <div className='row'>
                                        <a onClick={()=>Setshowgrop(false)} style={{cursor:'pointer'}}  className="remove">
                                            <i className="fal fa-trash-alt"></i>
                                        </a>
                                    </div>
                                    <table className="cart_totals">
                                        <tbody>
                                            <tr>
                                                <td>Amount</td>
                                                <td>
                                                    <span className="w-32 capitalize text-base">
                                                        <CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix='₦' />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Person</td>
                                                <td>
                                                    <span className="w-32  text-base">
                                                    x{list.length}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td>
                                                    <CurrencyFormat value={totalgroup()} displayType={'text'} thousandSeparator={true} prefix='₦' />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='d-flex'>
                                        <div className="woocommerce-notices-wrapper">
                                            <div className="woocommerce-message"> Add Number Of Persons </div>
                                        </div>
                                        <span className="w-12 grid place-content-center"  onClick={handlesecSwitch}>
                                            {secondswitch?<AiOutlineMinus className="text-black md:text-2xl md:text-black lg:text-2xl lg:text-black" onClick={handlesecSwitch}/>:
                                                    <FiPlus className="text-sm text-black md:text-2xl md:text-black lg:text-2xl lg:text-black text-2xl lg:text-black" onClick={handlesecSwitch}/>

                                            }
                                        </span>
                                    </div>
                                    {list.length > 0 ? list.map((item, index) => (
                                        <div className="" key={index}>
                                             <table className="">
                                                <tbody>
                                                    <tr>
                                                        <td>{index + 1 + "."}</td>
                                                        <td>
                                                            {item.fullname}<br/>
                                                            <b>{item.email}</b>
                                                        </td>

                                                        <td>
                                                            <div className="d-flex justify-content-between" aria-label="">
                                                                        <div className="flex justify-center items-center space-x-4">
                                                                    <a className="border-none outline-none" onClick={() => handleDelete(item.id)}>
                                                                        <AiFillDelete className="text-2xl text-[#A32926]" />
                                                                    </a>
                                                                    &nbsp;&nbsp;&nbsp;
                                                                    <a className="border-none outline-none" onClick={() => handleEdit(item.id)}>
                                                                        <AiFillEdit className="text-2xl text-green-500" />
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    )) : (
                                        <p className="">
                                            No user Email added
                                        </p>
                                    )}
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
                                                    <a class="th-btn style5" style={{cursor:'pointer'}} onClick={(e)=>handleEnter(e)}>Enter</a>

                                                }
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full flex  items-center justify-center mt-2 '>
                                        {list.length > 0?
                                            currencycode == 'NGN'?
                                        <button className= 'th-btn style5 ' onClick={(e)=>handlePay(e)}>
                                            {loaders?'please wait':'purchase'}
                                            </button>
                                            : <div  className="relative z-0" >
                                                {/* ref={pal} */}

                                                        <PayPalScriptProvider   options={{ "client-id": "AUBDz8zhTjw7acKU1_wB6b-ngtUEEsYD2vPbPtr6i8Lp5zHlvvgq-zhdpUBSuFNZ5qMlvaNB2SI23M5A" }}>
                                                            <PayPalButtons style={{layout:'vertical',   z_index:"-1"}}
                                                                disabled={false}
                                                            forceReRender={[wholeusagroup]}
                                                            fundingSource={undefined}
                                                            createOrder={ (data, actions)=>{

                                                                return actions.order.create({
                                                                    // whole
                                                                    purchase_units:[{
                                                                        description:itemspurchased,
                                                                        amount:{
                                                                            currency_code:'USD',
                                                                            value:wholeusagroup,

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
                                                            }
                                                            }

                                                            onApprove={
                                                            (data, actions)=>{
                                                                return actions.order.capture().then((details)=>{
                                                                // console.log(details, OrderId)
                                                                let transactionid = '';
                                                                // details.status
                                                                details.purchase_units.map((item)=>{
                                                                    item.payments.captures.map((one)=>{
                                                                        transactionid = one.id
                                                                    })
                                                                })
                                                                if(details.status && transactionid){
                                                                    let from = new Date()
                                                                    var ddfrom = String(from.getDate()).padStart(2, '0');
                                                                    var mmfrom = String(from.getMonth() + 1).padStart(2, '0');
                                                                    var yyyyfrom = from.getFullYear();
                                                                    let bfrom = ddfrom+ '/' + mmfrom + '/' + yyyyfrom;

                                                                    let xoxo = list.map((item)=>{
                                                                    item['arr'] =Cart
                                                                    item['status'] =  details.status
                                                                    item['code'] = transactionid
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
                                                                    if(res.data.success){
                                                                        Setshowgrop(false)
                                                                        setTimeout(()=>{
                                                                        window.location.href = `${url}/newdashboard`;
                                                                        },1500)
                                                                    }
                                                                    })


                                                                }



                                                                })
                                                            }

                                                            }
                                                            //  wholesecond
                                                            />
                                                        </PayPalScriptProvider>
                                                        </div>

                                            :  <button className= 'th-btn style5 ' >
                                                purchase
                                            </button>}

                                        </div>
                                    </div>
                                    
                                </div>
                            )}
                            
                        </div>

                        </div>
                    </div>
                    
            
            </div>
        </div>
            {/* <!--  breadcrumb --> */}

        

    <Footer/>

    </div>
  );
}

if(document.getElementById('shoppingcart')){
ReactDOM.render(<Shopping/>, document.getElementById('shoppingcart'))
}