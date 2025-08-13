import React from "react";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import lesserThan from "../src/assets/lesserThan.png";
import vector from "../src/assets/vector.png";

const NewTask = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const links = [{ title: "All Task", path: "#" }];
  return (
    <div>
      <nav className="bg-white px-3 border border-[#B8B6B6]">
        <div className="layout flex h-[80px] items-center justify-between ">
          <div className="flex gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo pics" />
              <h1 className="text-[27.37px] font-[600] text-[#2D0050] font-Signika Negative">
                TaskDuty
              </h1>
            </Link>
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

      <div className="max-w-[1100px] mx-auto mt-10">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src={lesserThan}
              alt="....."
              className="w-[50.5px] h-[50px] bg-cover"
            />
          </div>
          <div className="w-[250px]">
            <h1 className="text-[50px]">New Task</h1>
          </div>
        </div>

        <div className="mt-10 relative">
          <label
            className="absolute -top-4 left-10 bg-white px-2 text-[22px] font-[500] text-[#9C9C9C] z-10"
            style={{ pointerEvents: "none" }}
          >
            Task Title
          </label>
          <input
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className="w-full h-[84px] border border-lg border-[#CCCCCC] mt-2 text-[22px] px-16 bg-white relative z-0 font-semibold text-black"
          />
        </div>

        <div className="mt-10 relative text-[22px] ">
          <label className="absolute -top-4 left-10 bg-white px-2 text-[22px] font-[500] text-[#9C9C9C] z-10">
            Description
          </label>

          <textarea
            type="text"
            placeholder="Briefly describe your task..."
            className="w-full h-[262px] border border-[#B8B6B6] mt-2  px-12 bg-white relative z-0 py-4"
          ></textarea>
        </div>

        <div className="mt-10 relative">
          <label className="absolute -top-4 left-10 bg-white px-2 text-[22px] font-[500] text-[#9C9C9C] z-10">
            Tags
          </label>
          <div className="relative w-full mt-2">
            <select
              className="w-full h-[60px] border border-[#B8B6B6] text-[22px] px-16 pr-16 bg-white relative z-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled></option>
              <option value="urgent">Urgent</option>
              <option value="work">Important</option>
            </select>
            <img
              src={vector}
              alt="dropdown icon"
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-7 h-4 pointer-events-none "
            />
          </div>

          <button className="w-full mt-10 border border-black h-[60px] text-white bg-[#974FD0] font-semibold text-[25px]">
            Done
          </button>

          <h1 className="text-[#974FD0] text-center mt-8 text-[26px]">
            Back To Top
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
