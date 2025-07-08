import React from "react";
import Navbar from "../component/layout/Navbar";
import lesserThan from "../src/assets/lesserThan.png";
import vector from "../src/assets/vector.png";

const EditTask = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1100px] mx-auto mt-10">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src={lesserThan}
              alt="....."
              className="w-[50.5px] h-[50px] bg-cover"
            />
          </div>
          <div className="w-[191px]">
            <h1 className="text-[50px]">Edit Task</h1>
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
            placeholder="Project Completion"
            className="w-full h-[84px] border border-lg border-[#B8B6B6] mt-2 text-[22px] px-16 bg-white relative z-0 font-bold text-black"
          />
        </div>

        <div className="mt-10 relative text-[22px] ">
          <label className="absolute -top-4 left-10 bg-white px-2 text-[22px] font-[500] text-[#9C9C9C] z-10">
            Description
          </label>

          <textarea
            type="text"
            placeholder="Lorem ipsum dolor sit amet, consetetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam."
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

          <h1 className="text-[#974FD0] text-center mt-8 text-[26px]">Back To Top</h1>
        </div>
      </div>
    </>
  );
};

export default EditTask;
