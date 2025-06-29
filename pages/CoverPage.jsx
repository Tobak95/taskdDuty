import React from "react";
import Navbar from "../component/layout/Navbar";

const CoverPage = () => {
  return (
    <div>
      <Navbar />

      <div className="layout flex justify-between mt-20">
        <div className="w-[535px] h-[369px]">
          <h1 className="text-[50px] w-[470px] font-Signika Negative font-bold ">
            Manage your Tasks on{" "}
            <span className="text-[#974FD0]">TaskDuty</span>
          </h1>

          <p className="text-[24px] text-[#737171] font-[Signika Negative]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>

          <button className="bg-[#974FD0] text-white mt-5 w-[201px] h-[50px] text-[24px] rounded-[8px] font-[500]">Go to My Tasks</button>
        </div>


        <div>
          
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
