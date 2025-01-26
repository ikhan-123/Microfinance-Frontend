

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
