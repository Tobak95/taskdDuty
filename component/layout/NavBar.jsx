import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import profile from "../../src/assets/profile.png";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { Link, redirect } from "react-router-dom";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const links = [
    { title: "New Task", path: "#" },
    { title: "All Task", path: "my-task" },
  ];

  return (
    <nav className="bg-white px-3 border border-[#B8B6B6]">
      <div className="layout flex h-[80px] items-center justify-between ">
          <div className="flex gap-2">
     
            <div>
              <img src={logo} alt="logo pics" />
            </div>
            <div>
              <h1 className="text-[27.37px] font-[600] text-[#2D0050] font-Signika Negative">
                TaskDuty
              </h1>
            </div>
      
          </div>

        <div className="hidden lg:flex items-center text-[#292929] text-[22px] font-semibold gap-5">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.path}>
                {link.title}
              </a>
            );
          })}

          <img src={profile} alt="..." />
        </div>
        {showHamburger ? (
          <MdOutlineClose
            className="text-[30px] lg:hidden cursor-pointer "
            onClick={() => setShowHamburger(!showHamburger)}
          />
        ) : (
          <IoMdMenu
            className="text-[30px] lg:hidden cursor-pointer"
            onClick={() => setShowHamburger(!showHamburger)}
          />
        )}

        {showHamburger && (
          <div className="absolute top-[80px] right-0 p-6 bg-white lg:hidden">
            <ul className="flex flex-col items-center gap-2 py-5">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-[22px] font-semibold">
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                );
              })}
              <li>
                <img src={profile} alt="profile" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
