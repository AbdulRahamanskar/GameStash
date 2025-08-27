import React, { useState } from "react";
import profile_pic from "../../assets/abdul_white.png";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto
    px-4 md:px-20 h-16 shadow-md 
    fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={profile_pic}
              className="h-12 w-12 rounded-full border-1 border-white cursor-pointer "
              alt="NavBar My Photo"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Abdu<span className="text-green-500 text-2xl">l</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop nav */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105
              duration-200
              cursor-pointer"
                  key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer">
              {menu ? <RiCloseFill /> : <RiMenu3Fill />}
            </div>
          </div>
        </div>
        {/* mobile nav */}
        {menu && (
          <div className="bg-white">
            <ul
              className="md:hidden flex flex-col
         h-screen items-center justify-center space-y-3
         text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105
                duration-200 cursor-pointer font-black"
                  key={id}>
                  <Link
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
