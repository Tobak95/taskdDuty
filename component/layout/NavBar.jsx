import React from "react";
import logo from "../../src/assets/logo.png";
import profile from "../../src/assets/profile.png"


const Navbar = () => {
  const links = [
    { title: "New Task", path: "#" },
    { title: "All Task", path: "#" },
  ];

  return (
    <nav className="bg-white  border border-[#B8B6B6]">
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

        <div className="flex items-center text-[#292929] text-[22px] font-semibold gap-5">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.path}>
                {link.title}
              </a>
            );
          })}

          <img src={profile} alt="..." />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
