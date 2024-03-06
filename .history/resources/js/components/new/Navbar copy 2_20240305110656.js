<div class="sticky-wrapper">
                    <div class="menu-area">
                        <div class="container ">
                        <div class="row align-items-center justify-content-between">
                         
                            <div class="col-auto d-none d-xl-block">
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="header-button">
                                            <div class="category-menu-wrap mr-5">
                                                <form class="search-form">
                                                    <input type="text" placeholder="Search For Course...."/>
                                                    <button type="submit">
                                                        <i class="far fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                           
                                            {username ?
                                                <>
                                                        <div class="col-auto d-none d-xl-block">
                                                        <div class="header-button">
                                                            <button type="button" class="icon-btn ">
                                                                <i class="far fa-search"></i>
                                                            </button>
                                                            <a onClick={(e) => handleCart(e)} class="icon-btn ">
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
                                                        {/* <img width="20" height="20" style={{borderRadius:'20'}}  src={username?additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" /> */}

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