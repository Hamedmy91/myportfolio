"use client";
import Image from "next/image";
import React from "react";
import { LuDownload } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-6 justify-center items-center relative  z-10 sm:flex  sm:flex-row-reverse sm:justify-between sm:items-center sm:gap-4 sm:pt-16 sm:pr-32  sm:pl-24">
      <div>
        <Image
          src="/user4.WEBP"
          alt="user5"
          width={140}
          height={140}
          className="sm:w-87.5 sm:h-87.5"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 sm:w-116.75 sm:h-116.75 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-8 sm:pt-18">
        <h1 className="text-[#53d1ec] text-[36px] font-medium sm:text-[72px] sm:bg-linear-to-br sm:from-[#28bcf6] sm:to-[#7de8e8] sm:bg-clip-text sm:text-transparent sm:text-nowrap sm:font-bold">
          Hamed Moyasseri
        </h1>
        <p className="text-[#798b94] text-[20px] font-medium sm:text-[24px]">
          Front End Developer
        </p>
        <p className="hidden text-[#94a3b8] text-[16px] sm:flex sm:justify-start sm:items-start  sm:w-148 sm:h-8 sm:text-wrap ">
          I architect intelligent solutions at the intersection of AI and
          full-stack development. From building accessibility-first applications
          to automating complex workflows, I transform ideas into impactful
          digital experiences.
        </p>
        <div className="flex flex-col justify-center items-center gap-4 sm:mt-8 ">
          <div className="flex flex-col justify-center items-center gap-4 sm:flex sm:flex-row sm:justify-start sm:items-start sm:pr-12 sm:gap-4">
            <button className=" w-36 h-12 bg-linear-to-br from-[#28bcf6] to-[#66ffff] text-[14px] text-[#05080f] font-bold rounded-[10px]  ">
              Get In Touch
            </button>
            <button className="flex gap-4 items-center w-62.5 h-12.5 border border-[#28bcf680] rounded-[5px] justify-center text-[#f8fafc] bg-[#05080f]">
              <i>
                <LuDownload />
              </i>
              <span className="font-bold">Download Resume</span>
            </button>
          </div>
          <div className="flex justify-center items-center text-white gap-5 w-8 h-8 sm:flex sm:justify-start sm:items-start sm:pr-110 sm:size-36 ">
            <i className="">
              <FiGithub />
            </i>
            <i>
              <FaLinkedinIn />
            </i>
            <i>
              <MdOutlineMailOutline />
            </i>
          </div>
        </div>
        <div className="absolute -bottom-32 left-1/2 sm:left-1/2 sm:-bottom-20 ">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-1/2 sm:-bottom-6">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[24px] text-[#94a3b8]"
            >
              <FaArrowDown />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
