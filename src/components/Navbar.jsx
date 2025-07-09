import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <nav className="flex flex-wrap justify-between md:item bg-center text-white px-10 pt-6 md:px-20 ">
        <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Riya Maurya
        </span>
        <ul
          className={`${
            menu ? "block" : "hidden"
          }  mx-24 py-2 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:m-0 md:flex gap-6`}
        >
          <a href="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              About
            </li>
          </a>
          <a href="#Experience">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Experience
            </li>
          </a>
          <a href="#Project">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Project
            </li>
          </a>
          <a href="#contact">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Contact
            </li>
          </a>
        </ul>
        {showMenu ? (
          <GiHamburgerMenu
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              setMenu(!menu);
              setShowMenu(!showMenu);
            }}
          />
        ) : (
          <RxCross2
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              setMenu(!menu);
              setShowMenu(!showMenu);
            }}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
