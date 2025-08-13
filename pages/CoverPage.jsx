import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../component/layout/Navbar";
import couples from "../src/assets/couples.png";
import panada from "../src/assets/panada.png";
import bro from "../src/assets/bro.png";
import { Link } from "react-router-dom";

const CoverPage = () => {
  const images = [
    { src: couples, alt: "Couples" },
    { src: panada, alt: "Panada" },
    { src: bro, alt: "Bro" },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false); // Start fade out
    const fadeTimeout = setTimeout(() => {
      setFade(true); // Fade in after image changes
    }, 800); // Fade out duration

    return () => clearTimeout(fadeTimeout);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 200); // Change image after fade out
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />

      <div className="layout flex flex-col-reverse lg:flex-row justify-between mt-20">
        <div className=" h-[369px] p-4">
          <h1 className="max-w-[470px] w-full text-[40px] lg:text-[50px] font-Signika Negative font-bold ">
            Manage your Tasks on{" "}
            <span className="text-[#974FD0]">TaskDuty</span>
          </h1>

          <p className="max-w-[535px] w-full text-[22px] lg:text-[24px] text-[#737171] font-[Signika Negative]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>

          <Link to={"/my-task"}>
            <button className="bg-[#974FD0] text-white mt-5 w-[201px] h-[50px] text-[24px] rounded-[8px] font-[500]">
              Go to My Tasks
            </button>
          </Link>
        </div>

        <div>
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className={`shadow-xl max-w-[418.56px] w-full h-[396.2px] transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
