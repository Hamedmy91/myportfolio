"use client";

import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div>
      <section
        id="project"
        className="relative overflow-hidden bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-[36px] font-bold text-[#f8fafc] sm:text-[48px]">
              Featured <span className="text-cyan-400">Projects</span>
            </h1>
            <p className=" text-[20px] text-[#94a3b8]">
              Innovative solutions that bridge React/NextJs technology with
              real-world impact
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center sm:grid sm:grid-cols-3 sm:gap-8 sm:grid-rows-3">
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a
                    href="https://medical-app-49n8.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#28bcf6] hover:text-cyan-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col  gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]">
              <div className="flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75 ">
                <Image src="/user4.WEBP" alt="user5" width={342} height={191} />
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" absolute left-28 top-20 opacity-0 hover:opacity-100 w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center text-nowrap font-medium bg-[#0b111e]">
                      <i>
                        <FiGithub />
                      </i>
                      <p>code</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start p-2">
                <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
                  Completed
                </p>
                <h1 className="text-[20px] text-[#f8fafc]">Medical App</h1>
                <p className="text-[12px] text-[#28bcf6] font-bold">
                  Medical Management Application
                </p>
                <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
                  A modern medical web application built with React, TypeScript,
                  and Vite. The project focuses on creating a clean, responsive,
                  and user-friendly interface for healthcare-related services,
                  with optimized development using React Compiler and ESLint.
                </p>
                <div className="flex gap-6 w-73.5 h-13 text-[#f8fafc] text-[12px] sm:w-83.5 sm:h-12.75">
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-15 h-5">
                    React
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-24 h-5">
                    TypeScript
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-34 h-5">
                    ReactCompiler
                  </p>
                  <p className="border bg-[#28bcf61a] rounded-full text-center w-13 h-5">
                    Eslint
                  </p>
                </div>
                <div className="text-[#f8fafc] bg-[#05080f] border-[#05080f] text-[14px] flex justify-between items-center gap-4 border w-full p-2 rounded-[5px]">
                  <a
                    href="https://github.com/Hamedmy91/Medical-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <i>
                      <FiGithub />
                    </i>
                    <p>View Code</p>
                  </a>
                  <a href="">Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4 ">
            <h1 className="text-[#94a3b8] text-[16px]">
              Interested in collaborating on innovative React/Nextjs projects?
            </h1>
            <button className="text-[05080f] w-47.75 h-11 border text-[14px] font-bold border-[#28bcf6] bg-[#28bcf6] rounded-[5px]">
              Lets Work together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
