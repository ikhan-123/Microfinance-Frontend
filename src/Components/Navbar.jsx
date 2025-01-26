// import React from 'react'
// import { Link } from 'react-router-dom'
// import Contact from '../Pages/Contact'

// import PrimaryBtn from './PrimaryBtn'

// const Navbar = () => {
//     return (
//         <>
//             <div className="navbar shadow-xl">
//                 <div className="navbar-start">
//                     {/* <div className="dropdown text-white">
//                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16M4 18h7" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             <li><Link to=''>Home</Link></li>
//                             <li><Link to='about'>About</Link></li>
//                             <li><Link to='contact'>Contact</Link></li>
//                             <li><Link to='services'>Services</Link></li>
//                         </ul>
//                     </div> */}

//                     <div className='w-20'>
//                         <img className='w-full h-full' src={logo} alt="" />
//                     </div>
//                 </div>
//                 <ul>
//                     <li>How Its Work</li>
//                     <li>Services</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                 </ul>
//                 {/* <div className="navbar-end">
//                     <button className="btn text-white  btn-ghost btn-circle">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                         </svg>
//                     </button>
//                     <button className="btn btn-ghost btn-circle">
//                         <div className="indicator text-white">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                             </svg>
//                             <span className="badge badge-xs badge-primary indicator-item"></span>
//                         </div>
//                     </button>
//                 </div> */}
//                 <div>
//                   <PrimaryBtn
//                   BtnText={'Sign Up '}
//                   />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar

import React from "react";
import logo from "../../public/Logo/logo.png";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex gap-2 items-center text-sm">
                <span>
                  <MdOutlineEmail />
                </span>
                <h1>info@SaylaniWelfareUSA.com</h1>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <span>
                  <FaPhone />
                </span>
                <h1>833-786-0999</h1>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center text-sm">
                <span>
                  <IoLogoWhatsapp />
                </span>
                <h1>+923331201585</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 h-20 w-full shadow-xl flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-52">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <div>
            <ul className="flex gap-5">
              <Link>
                <ul>How Its Work</ul>
              </Link>
              <Link>
                <ul>Services</ul>
              </Link>
              <Link>
                <ul>Contact Us</ul>
              </Link>
              <Link>
                <ul>About Us</ul>
              </Link>
            </ul>
          </div>
          <div>
            <PrimaryBtn routLink={'/login'} additinalClasses={"duration-300 hover:scale-105 hover:bg-green-700 bg-customGreen"} BtnText={"Login"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
