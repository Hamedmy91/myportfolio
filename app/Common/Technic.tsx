"use client";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";

const Technic = () => {
  return (
    <section className="relative overflow-hidden bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[30px] font-bold text-[#f8fafc] sm:text-[48px] text-nowrap">
            Technical <span className="text-cyan-400">Expertise</span>
          </h1>
          <p className=" text-[18px] text-[#94a3b8] w-85.75 h-14">
            Technologies Ive worked with in real-world projects and professional
            environments
          </p>
        </div>
        <div className="flex flex-col justify-start gap-4 items-center pl-8 pt-6 sm:grid sm:grid-cols-2">
          <div className="active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] border flex flex-col w-96 h-60 border-[#54ebfc] rounded-[10px] gap-4">
            <label className="flex items-center gap-3 mt-4" htmlFor="">
              <div className="flex items-center justify-center ml-2 w-8 h-8 rounded-[10px] border bg-[#54ebfc]">
                <FaCode className="text-white" />
              </div>

              <p className="text-nowrap text-[#f8fafc]">Programming language</p>
            </label>
            <ul className="flex flex-col justify-center items-center pr-6 pt-2 gap-3 ">
              <li className="flex justify-between items-center pl-1 gap-4 border bg-[#0b111ec4] rounded-full w-87.5 h-10.5">
                <div className="flex items-center gap-4 ">
                  <i className="flex gap-4 text-yellow-400 border justify-center bg-white  items-center outline-white rounded-full w-8 h-8">
                    <IoLogoJavascript />
                  </i>
                  <p className="text-[#f8fafc]">JavaScript</p>
                </div>
                <div className="flex gap-2 justify-between items-center mr-2 border bg-[#0b111ec4] w-13.5 h-5.5 rounded-full">
                  <i className="text-white ml-2">
                    <FaRegClock />
                  </i>
                  <p className="text-white text-[12px] mr-2">1y+</p>
                </div>
              </li>
              <li className="flex justify-between items-center pl-1 gap-4 border bg-[#0b111ec4] rounded-full w-87.5 h-10.5">
                <div className="flex items-center gap-4 ">
                  <i className="flex gap-4 text-blue-400 border justify-center bg-white  items-center outline-white rounded-full w-8 h-8">
                    <BsTypescript />
                  </i>
                  <p className="text-[#f8fafc]">TypeScript</p>
                </div>
                <div className="flex gap-2 justify-between items-center mr-2 border bg-[#0b111ec4] w-13.5 h-5.5 rounded-full">
                  <i className="text-white ml-2">
                    <FaRegClock />
                  </i>
                  <p className="text-white text-[12px] mr-2">1y+</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] border flex flex-col w-96 h-60 border-[#54ebfc] rounded-[10px] gap-4">
            <label className="flex items-center gap-3 mt-4" htmlFor="">
              <div className="flex items-center justify-center ml-2 w-8 h-8 rounded-[10px] border bg-[#54ebfc]">
                <RiComputerFill className="text-black" />
              </div>
              <p className="text-nowrap text-[#f8fafc]">Frontend Development</p>
            </label>
            <ul className="flex flex-col justify-center items-center pr-6 pt-2 gap-3 ">
              <li className="flex justify-between items-center pl-1 gap-4 border bg-[#0b111ec4] rounded-full w-87.5 h-10.5">
                <div className="flex items-center gap-4 ">
                  <i className="flex gap-4 text-blue-200 border justify-center bg-white  items-center outline-white rounded-full w-8 h-8">
                    <FaReact />
                  </i>
                  <p className="text-[#f8fafc]">React js</p>
                </div>
                <div className="flex gap-2 justify-between items-center mr-2 border bg-[#0b111ec4] w-13.5 h-5.5 rounded-full">
                  <i className="text-white ml-2">
                    <FaRegClock />
                  </i>
                  <p className="text-white text-[12px] mr-2">1y+</p>
                </div>
              </li>
              <li className="flex justify-between items-center pl-1 gap-4 border bg-[#0b111ec4] rounded-full w-87.5 h-10.5">
                <div className="flex items-center gap-4 ">
                  <i className="flex gap-4 text-black text-3xl border justify-center bg-white  items-center outline-white rounded-full w-8 h-8">
                    <RiNextjsFill />
                  </i>
                  <p className="text-[#f8fafc]">Next js</p>
                </div>
                <div className="flex gap-2 justify-between items-center mr-2 border bg-[#0b111ec4] w-13.5 h-5.5 rounded-full">
                  <i className="text-white ml-2">
                    <FaRegClock />
                  </i>
                  <p className="text-white text-[12px] mr-2">1y+</p>
                </div>
              </li>
              <li className="flex justify-between items-center pl-1 gap-4 border bg-[#0b111ec4] rounded-full w-87.5 h-10.5">
                <div className="flex items-center gap-4 ">
                  <i className="flex gap-4 text-orange-400 text-2xl border justify-center bg-white  items-center outline-white rounded-full w-8 h-8">
                    <FaHtml5 />
                  </i>
                  <p className="text-[#f8fafc]">Html/Css</p>
                </div>
                <div className="flex gap-2 justify-between items-center mr-2 border bg-[#0b111ec4] w-13.5 h-5.5 rounded-full">
                  <i className="text-white ml-2">
                    <FaRegClock />
                  </i>
                  <p className="text-white text-[12px] mr-2">1y+</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-8 sm:justify-center sm:items-center">
          <div className="active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] flex flex-col w-41 h-30 justify-center border rounded-[10px] border-[#54ebfc] gap-2 items-center bg-[#080c16b2]">
            <i className="flex items-center justify-center ml-2 w-8 h-8 rounded-[10px] border bg-[#54ebfc]">
              <FaCode />
            </i>
            <p className="text-[#54ebfc] text-[24px]">2 +</p>
            <span className="text-[#94a3b8] text-[12px] font-medium">
              Languages
            </span>
          </div>
          <div className=" active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] flex flex-col w-41 h-30 justify-center gap-2 border rounded-[10px] border-[#54ebfc] items-center bg-[#080c16b2]">
            <i className="flex items-center justify-center ml-2 w-8 h-8 rounded-[10px] border bg-[#54ebfc]">
              <FaCode />
            </i>
            <p className="text-[#54ebfc] text-[24px]">3 +</p>
            <span className="text-[#94a3b8] text-[12px] font-medium">
              Dev Frameworks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technic;
