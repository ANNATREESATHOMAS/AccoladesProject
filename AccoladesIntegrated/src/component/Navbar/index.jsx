import React, { useState } from 'react'

const Navbar = () => {
    const [showSidebar, setshowSidebar] = useState(false);
    return (
        <header className=''>
            <div className='header-body'>
                <div className='header-logo'>
                    <img src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Accolades_logo_TM.png" alt="" />
                </div>
                <div className='ham-icon' onClick={() => setshowSidebar(!showSidebar)}>
                    <i class="fa-solid fa-bars fa-xl"></i>
                </div>
                <div className={showSidebar ? 'header-content sidebar_open' : 'header-content '}>
                    <a className='a-list' href="/" style={{ color: "#23A7AE" }}>Home</a>
                    <a className='a-list' href="#">About Us</a>
                    <div className='dropdown-one'>
                        <div className='extra-space '></div>
                        <a className='a-list'>Services &nbsp; <i class="fa-regular fa-plus"></i></a>
                        <div className='dropdown-list '>

                            <div className=' dropdown-two ' >
                                <div className="list">
                                    <a >Digital Marketing &nbsp; <i class="fa-regular fa-plus"></i></a>
                                </div>
                                <div className='dropdown-list-two ' >
                                    <div className='list'>
                                        <a href="#">Google Ads </a>
                                    </div>
                                    <div className='list'>
                                        <a href="#">SEO </a>
                                    </div>
                                    <div className='list'>
                                        <a href="#">SMM</a>
                                    </div>
                                    <div className='list'>
                                        <a href="#">Content Marketing</a>
                                    </div>
                                </div>
                            </div>


                            <div className='list'>
                                <a href="#">Graphic Designing </a>
                            </div>
                            <div className='list'>
                                <a href="#">Web Development </a>
                            </div>
                        </div>

                    </div>

                    <a className='a-list' href="#">Careers</a>
                    <a className='a-list' href="#">Blog</a>
                    <a className='a-list' href="/contact">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar