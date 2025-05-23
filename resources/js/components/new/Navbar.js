

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiExternalLink} from 'react-icons/fi';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';


export default function Navbar() {
    let url = ` ${window.location.origin}`;
    const [Cart, SetCart] = useState([]); 
    const [additionalpic, setAdditionalpic] = useState('');
    const [poundsnaira, setPoundsnaira] = useState(0)
    
    useEffect(()=>{
        setAdditionalpic(''); 
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

    // let symbol = currencysymbol.currency.symbol
    // let converted = JSON.parse(currencyex)
    // let convertnaira = converted.result.NGN
    // let moneyname = currencysymbol.currency.name
   // let other =  Object.values(othersmoneys.result);
    //let poundtonaira = poundton.result.NGN
     
     
     const onedollar = 615

     function addedall (){
        const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

        return sum?sum:0;
       }

    //  function gettotal(){
    //   const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
    
    //     if(currencysymbol.currency.code != 'NGN'){
    //         let ans =   parseInt(sum?sum:0)
    //         let quest = ans + (onedollar/convertnaira);
    //         return Math.round(quest);
    //     }else{
    //         let ans =   parseInt(sum?sum:0)
    //         return ans;
    //     }
    //  }

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

 const handleLogout =()=>{
         localStorage.clear();
         SetCart([])
         setTimeout(()=>{
              window.location.href = `${url}/Logout`;
         Setdrop(false)
         },1000)
 }

 
   
   const handleIcon =()=>{
    if(username){
        window.location.href = `${url}/newdashboard`;
    }else{
        window.location.href = `${url}`
    }
   }

     const handleTestimonials = ()=>{
         window.location.href = ` ${url}/testimonials`
     }
 
    const handleAboutus = (e)=>{
        e.preventDefault(); 
        window.location.href =`${url}/about-us`
    }
    const handleMission = (e)=>{
        e.preventDefault(); 
        window.location.href =`${url}/mission`
    }
    const handleStudy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/studyabroad`
    }
    const handleHowtoAppy = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/howtoApply`
    }
    const handleContact = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/contactus`
    }
    const handleOthm = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/othmcourses`
    }
    
    const handleCart= (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/shoppingcart`
    }
    const handlehome = ()=>{
        window.location.href = ` ${url}`;
    }
    const handlesignup = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/signup`
    }
    const handlecompanyregister = (e)=>{
        e.preventDefault(); 
        window.location.href = `${url}/companyregister`
    }
    
    const handleAcc = ()=>{
        window.location.href = `${url}/profile`
    }
    const handleCheckout = (e)=>{
        window.location.href = `${url}/checkout`
    }
    const handlelistcourses=(e)=>{
        e.preventDefault();
        window.location.href= `${url}/listcourses`;
    }
    
    const handleLG =(e)=>{
        window.location.href = `https://morgans.elearning.lgca.uk/index`
    }
    const handleGRC =()=>{
        window.location.href = `https://www.grcfincrimeawards.com/`
    }

    return (
        <div>
            <div className="preloader">
                <div className="preloader-inner">
                    {/* <span className="loader"></span> */}
                    <img
                        width="90"
                        height="30"
                        src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg"
                        alt="TMC Institute"
                    />
                </div>
            </div>

            <div className="sidemenu-wrapper d-none d-lg-block">
                <div className="sidemenu-content">
                    <button className="closeButton sideMenuCls">
                        <i className="far fa-times"></i>
                    </button>
                    <div className="widget woocommerce widget_shopping_cart">
                        <h3 className="widget_title">Login </h3>
                        <div className="widget_shopping_cart_content">
                            <p className="woocommerce-mini-cart__buttons buttons">
                                <a
                                    onClick={(e) => handlesignup(e)}
                                    className="th-btn checkout wc-forward"
                                >
                                    <FaUserAlt /> Individual
                                </a>{" "}
                                <a
                                    onClick={(e) => handlecompanyregister(e)}
                                    className="th-btn checkout wc-forward"
                                >
                                    <BsBuilding /> Corporate
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-search-box d-none d-lg-block">
                <button className="searchClose">
                    <i className="fal fa-times"></i>
                </button>
                <form action="#">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                    />
                    <button type="submit">
                        <i className="fal fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="th-menu-wrapper">
                <div className="th-menu-area text-center">
                    <button className="th-menu-toggle">
                        <i className="fal fa-times"></i>
                    </button>
                    <div className="mobile-logo">
                        <a onClick={handlehome}>
                            <img
                                width="70"
                                style={{ cursor: "pointer" }}
                                height="10"
                                src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li class="menu-item-has-children">
                                <a href="">Programmes</a>
                                <ul class="sub-menu">
                                    <li class="menu-item-has-children">
                                        <a href="#">Bachelor Degrees (BSc , BA )</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <div
                                                        className="row  justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc9b74c6d5_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            <snap
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                Business
                                                                Management &
                                                                Strategy (BA
                                                                Hons)
                                                            </snap>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc8d942e76_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            <snap
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                Business
                                                                Administration
                                                                (BBA)
                                                            </snap>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Masters (MSC, MBA, MA)</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/655ae8ea0e3cf_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            Strategic Management
                                                            and Leadership (MBA)
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                width={120}
                                                                height={40}
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc96eba4c2_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            <snap
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                Strategic
                                                                Management and
                                                                Leadership (MBA)
                                                            </snap>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc8d942e76_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            <snap
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                {" "}
                                                                Business
                                                                Administration
                                                                (MBA )
                                                            </snap>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                width={120}
                                                                height={40}
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc9b74c6d5_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            <snap
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                {" "}
                                                                Strategic
                                                                Management and
                                                                Leadership (MBA)
                                                            </snap>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                width={120}
                                                                height={40}
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc96eba4c2_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            <snap
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                Project
                                                                Management (MSc)
                                                            </snap>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Doctorate</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc97dc3835_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            Strategic Management
                                                            & Leadership
                                                            Practice (Level 8)
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc98d9e7d7_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            Strategic Management
                                                            & Leadership (Level
                                                            8)
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Diploma</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc97dc3835_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            Strategic Management
                                                            & Leadership
                                                            Practice (Level 8)
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div
                                                        className="row justify-content-center"
                                                        style={{
                                                            color: "#333",
                                                        }}
                                                    >
                                                        <div className="col-4">
                                                            <img
                                                                src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc98d9e7d7_universities_image"
                                                                alt="Image"
                                                                class="img-responsive"
                                                            />
                                                        </div>
                                                        <div
                                                            className="col-8"
                                                            style={{
                                                                marginLeft:
                                                                    "-10px",
                                                                marginTop:
                                                                    "-5px",
                                                            }}
                                                        >
                                                            Strategic Management
                                                            & Leadership (Level
                                                            8)
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Professional Certifications & Training Programmes</a>
                                        <ul class="sub-menu">
                                            <a
                                                onClick={handleLG}
                                                style={{ cursor: "pointer" }}
                                            >
                                                LGCA / AGRC Certification
                                            </a>
                                            <a
                                                onClick={(e) => handleOthm(e)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                OTHM Professional Qualifications {" "}
                                            </a>
                                            <a onClick={(e) => handleGRC(e)}>
                                                TMC Certification - GRC & FINCRIME Prevention
                                            </a>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    // onClick={(e) => handleStudy(e)}
                                    href='studyabroad'
                                    style={{ cursor: "pointer" }}
                                >
                                    Study Abroad
                                </a>
                            </li>
                            <li><a href="listcourses" style={{cursor:'pointer'}}>TMC Courses</a></li>
                          
                            <li>
                                <a
                                    // onClick={(e) => handleAboutus(e)}
                                    href="about-us"
                                    style={{ cursor: "pointer" }}
                                >
                                    About us
                                </a>
                            </li>
                            {/* <li><a onClick={(e)=>handleHowtoAppy(e)} style={{cursor:'pointer'}}>How to Apply</a></li> */}
                            <li>
                                <a
                                    // onClick={(e) => handleContact(e)}
                                    href="contactus"
                                    style={{ cursor: "pointer" }}
                                >
                                    Contact
                                </a>
                            </li>
                            <a
                                onClick={(e) => handlesignup(e)}
                                style={{ cursor: "pointer" }}
                                class="th-btn ml-25"
                            >
                                Login / Register
                            </a>
                        </ul>
                    </div>
                </div>
            </div>

            <header className="th-header header-layout1">
                <div class="header-top">
                    <div class="container">
                        <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                            <div class="col-auto d-none d-lg-block">
                                <div class="header-links">
                                    <ul>
                                        <li>
                                            <i class="far fa-phone"></i>
                                            <a href="tel:+234915-341-4314">
                                                +234 (0) 915-341-4314
                                            </a>
                                        </li>
                                        <li class="d-none d-xl-inline-block">
                                            <i class="far fa-envelope"></i>
                                            <a href="mailto:enquiries@tmcinstitute.com">
                                                enquiries@tmcinstitute.com
                                            </a>
                                        </li>
                                        {/* <li>
                                            <i class="far fa-clock"></i>Mon -
                                            Sat: 8:00 - 15:00
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div class="col-auto">
                                <div class="header-links header-right">
                                    <ul>
                                        <li>
                                            <div class="header-social">
                                                <span class="social-title">
                                                    Follow Us:
                                                </span>
                                                <a href="https://web.facebook.com/profile.php?id=100075775881210">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                                {/* <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>  */}
                                                <a href="https://www.linkedin.com/company/tmc-institute/">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href="https://www.instagram.com/tmcinstitute?igsh=b2pnaHR1ajJ4c2xn">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </div>
                                        </li>

                                        {username ? (
                                            <>
                                                <li class="d-none d-lg-inline-block">
                                                    <div class="dropdown-link">
                                                        <a>
                                                            <img
                                                                width="20"
                                                                height="20"
                                                                style={{
                                                                    borderRadius:
                                                                        "20",
                                                                }}
                                                                src={
                                                                    username
                                                                        ? additionalpic
                                                                            ? additionalpic
                                                                            : userpic
                                                                            ? userpic
                                                                            : "https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png"
                                                                        : "https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png"
                                                                }
                                                                className="header_widgets_avatar"
                                                                alt="image"
                                                            />
                                                            {""} Welcome,{" "}
                                                            {username}
                                                        </a>
                                                    </div>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li class="d-none d-lg-inline-block">
                                                    <i class="far fa-user"></i>{" "}
                                                    {""}
                                                    <a
                                                        onClick={(e) =>
                                                            handlesignup(e)
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Individual
                                                    </a>
                                                </li>
                                                <li class="d-none d-lg-inline-block">
                                                    <BsBuilding />
                                                    <a
                                                        onClick={(e) =>
                                                            handlecompanyregister(
                                                                e
                                                            )
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Corporate
                                                    </a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sticky-wrapper">
                    <div class="menu-area">
                        <div class="container">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-auto">
                                    <div class="header-logo">
                                        <a onClick={handlehome} style={{cursor:'pointer'}}><img width="70" height="10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="TMC Institute"/></a>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="row">
                                        <div class="col-auto">
                                            <nav class="main-menu d-none d-lg-inline-block">
                                                <ul>
                                                    <li class="menu-item-has-children">
                                                        <a href="">Programmes</a>
                                                        <ul className='sub-menu' style={{background:'#EEE6E6'}}>
                                                            <li >
                                                                <a href="#">Bachelor Degrees (BSc , BA ) </a>
                                                                <li>
                                                                    <a href=''>
                                                                        <div className='row  justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img  src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc9b74c6d5_universities_image" alt="Image" class="img-responsive"/>
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                <snap style={{fontWeight:'500'}}>Business Management & Strategy (BA Hons)</snap>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                        <a href=''>
                                                                            <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                                <div className='col-4'>
                                                                                    <img  src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc8d942e76_universities_image" alt="Image" class="img-responsive"/>
                                                                                </div>
                                                                                <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                    <snap style={{fontWeight:'500'}}>Business Administration (BBA)</snap>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                </li>
                                                            </li>
                                                            <li>
                                                                <a href="#">Masters (MSC, MBA, MA)</a>
                                                                <li>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img   src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/655ae8ea0e3cf_universities_image" alt="Image" class="img-responsive"/>                                                                      
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                Strategic Management and Leadership (MBA)
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img width={120} height={40}  src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc96eba4c2_universities_image" alt="Image" class="img-responsive"/>
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                <snap style={{fontWeight:'500'}}>Strategic Management and Leadership (MBA)</snap>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img  src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc8d942e76_universities_image" alt="Image" class="img-responsive"/>
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                <snap style={{fontWeight:'500'}}> Business Administration (MBA )</snap>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img width={120} height={40}  src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc9b74c6d5_universities_image" alt="Image" class="img-responsive"/>
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                <snap style={{fontWeight:'500'}}> Strategic Management and Leadership (MBA)</snap>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img width={120} height={40} src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc96eba4c2_universities_image" alt="Image" class="img-responsive"/>
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                <snap style={{fontWeight:'500'}}>Project Management (MSc)</snap>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </li>
                                                            <li>
                                                                <a href="#">Doctorate</a>
                                                                <li>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc97dc3835_universities_image" alt="Image" class="img-responsive"/>                                                                      
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                Strategic Management & Leadership Practice (Level 8)
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc98d9e7d7_universities_image" alt="Image" class="img-responsive"/>                                                                      
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                Strategic Management & Leadership   (Level 8)
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </li>
                                                            <li>
                                                                <a href="#">Diploma</a>
                                                                <li>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc97dc3835_universities_image" alt="Image" class="img-responsive"/>                                                                      
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                Strategic Management & Leadership Practice (Level 8)
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <a href=''>
                                                                        <div className='row justify-content-center' style={{ color:'#333'}}>
                                                                            <div className='col-4'>
                                                                                <img  src="https://snatikabucket.s3.ap-southeast-1.amazonaws.com/uploads/manage-cms/universities-image/651bc98d9e7d7_universities_image" alt="Image" class="img-responsive"/>                                                                      
                                                                            </div>
                                                                            <div className='col-8' style={{marginLeft: '-10px', marginTop:'-5px'}}>
                                                                                Strategic Management & Leadership   (Level 8)
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </li>
                                                            <li >
                                                                <a href="#"> Professional Certifications & Training Programmes </a>
                                                                <li><a onClick={handleLG} style={{cursor:'pointer'}}>LGCA / AGRC Certification</a></li>
                                                                    <li><a onClick={(e)=>handleOthm(e)} style={{cursor:'pointer'}}>OTHM Professional Qualifications</a></li>
                                                                    <li><a onClick={(e)=>handleGRC(e)} style={{cursor:'pointer'}}>
                                                                     TMC Certification - GRC & FINCRIME Prevention
                                                                     </a></li>
                                                            </li>
                                                        </ul>
                                                    
                                                    </li>
                                                
                                                    <li><a onClick={(e)=>handleStudy(e)} style={{cursor:'pointer'}}>Study Abroad</a></li>
                                                
                                                    <li><a onClick={(e)=>handlelistcourses(e)} style={{cursor:'pointer'}}>TMC Courses</a></li>

                                                    <li><a onClick={(e)=>handleAboutus(e)} style={{cursor:'pointer'}}>About us</a></li>

                                                    <li><a onClick={(e)=>handleContact(e)}  style={{cursor:'pointer'}}>Contact</a></li>
                                                    
                                                </ul>
                                            </nav>
                                           
                                        </div>
                                        <div class="col-auto d-none d-xl-block">
                                            <div class="header-button">
                                                
                                                {username ?
                                                    <>
                                                        <div class="col-auto d-none d-xl-block">
                                                            <div class="header-button">
                                                                {/* <button type="button" class="icon-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                                    <i class="far fa-search"></i>
                                                                </button> */}
                                                                <a style={{cursor:'pointer'}} onClick={(e) => handleCart(e)} class="icon-btn ">
                                                                    <i class="far fa-shopping-cart"></i>
                                                                    <span class="badge">{Cart.length}</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                                {username ?
                                                    <> 
                                                    <div class="col-auto d-none d-xl-block d-none d-lg-inline-block">
                                                        <div class="category-menu-wrap">
                                                            <a class="menu-expand" href="#">
                                                            <i class="far fa-user"></i> 
                      
                                                            {' '} Welcome, {username},  <i class="fa-solid fa-angle-down ms-auto"></i>
                                                            </a>
                                                            <nav class="category-menu">
                                                                <ul>
                                                                    <li>
                                                                        <a onClick={handleAcc} style={{cursor:'pointer'}}>My Account</a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={handleMycourse} style={{cursor:'pointer'}}> My Courses</a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={handleLogout} style={{cursor:'pointer'}}> Log Out </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                                {username ?
                                                    <>
                                                    
                                                    </>
                                                    :
                                                    <>
                                                    <div class="col-auto d-none d-xl-block">
                                                        <div class="header-button">
                                                            <a onClick={(e)=>handlesignup(e)} style={{cursor:'pointer'}} class="th-btn ml-25">Login / Register</a>
                                                        </div>
                                                    </div>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

