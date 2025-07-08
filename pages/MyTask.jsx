import React from "react";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import plusSign from "../src/assets/plusSign.png";
import { task } from "../task";
import editTask from "../src/assets/editTask.png";
import deleteIcon from "../src/assets/deleteIcon.png";

const MyTask = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const links = [{ title: "New Task", path: "my-task" }];
  return (
    <div>
      <nav className="bg-white px-3 border border-[#B8B6B6]">
        <div className="layout flex h-[80px] items-center justify-between ">
            <Link to={"/"}>
          <div className="flex gap-2">
              <div>
                <img src={logo} alt="logo pics" />
              </div>
            <div>
              <h1 className="text-[27.37px] font-[600] text-[#2D0050] font-Signika Negative">
                TaskDuty{" "}
              </h1>
            </div>
          </div>
            </Link>

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

      <div className="max-w-[1100px] mx-auto mt-10 flex justify-between items-center">
        <div>
          <h1 className="text-[50px]">My Tasks</h1>
        </div>

        <Link to="/new-task">
          <button className="flex items-center gap-2">
            <img src={plusSign} alt="" />
            <h1 className="text-[20px] font-semibold text-[#974FD0]">
              Add Task{" "}
            </h1>
          </button>
        </Link>
      </div>

      {task.map((task, index) => {
        return (
          <div
            key={index}
            className="max-w-[1100px] mx-auto mt-10 p-5 border border-[#B8B6B6] rounded-lg h-[287px]"
          >
            <div>
              <div className="flex justify-between items-center ">
                <h3
                  className={`text-[24px] font-bold ${
                    task.status === "Urgent"
                      ? "text-[#F38383]"
                      : task.status === "Important"
                      ? "text-[#73C3A6]"
                      : "text-gray-500"
                  }`}
                >
                  {task.status}
                </h3>

                <div className="flex items-center p-5 gap-3 ">
                  <Link to="/edit-task">
                    <button className="bg-[#974FD0] text-white w-[126px] h-[50px] rounded-lg flex items-center justify-center gap-2 text-[24px]">
                      <img src={editTask} alt="...." />
                      <p>Edit</p>
                    </button>
                  </Link>
                  <button className="w-[126px] h-[50px] border border-[#B8B6B6] rounded-lg flex items-center justify-center gap-2 text-[24px]">
                    <img src={deleteIcon} alt="" />
                    <p>Delete</p>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <h1 className="text-[35px] font-semibold text-[#292929] ">
              {task.title}
            </h1>
            <p className="text-[24px] text-[#292929] ">{task.description}</p>
          </div>
        );
      })}

      <h1 className="text-[#974FD0] text-center mt-8 mb-15 text-[26px]">
        Back To Top
      </h1>
    </div>
  );
};

export default MyTask;
