import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../components/logo.png";
const Navbar = () => {
  return (
    <div className="flex  justify-between p-4 bg-[#0A0A0A] max-sm:hidden">
      <div className="backdrop-blur-xl" >
        <Image src={logo} width={80} height={80} alt="Picture"></Image>
      </div>
      <div className="">
        <nav className="flex gap-10 text-xl mr-11  ">
          <ul>
            <Link
              href={"/"}
              className="hover:text-purple-500 "
            >
              Home
            </Link>
          </ul>
          <ul>
            <Link
              href={"/webscreens/endpoints"}
              className="hover:text-purple-500"
            >
              Api
            </Link>
          </ul>
          <ul>
            <Link href={"/webscreens/about"} className="hover:text-purple-500">
              About us
            </Link>
          </ul>
          <Link href={"/webscreens/login"}>
            {/* <div className='text-[15px] rounded-lg px-6 py-2 border-2 '>
                <div className=' rounded-lg'>Login / sign up</div></div> */}
            {/* <div className=" bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 px-6 py-2">
      <div className="text-[15px] font-manrope font-black leading-snug text-transparent bg-clip-text text-white bg-black"> Login / Signup </div>
      </div> */}
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login / Signup
              </span>
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
