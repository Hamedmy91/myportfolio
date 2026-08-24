"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="relative">
      <div className="relative z-10 flex items-center justify-between px-6 py-5  sm:px-6 sm:pl-24 sm:pr-24  ">
        <button className="font-mono text-xl font-bold text-[#28bcf6]">
          {"<Hamed/>"}
        </button>
        <div>
          <ul className="hidden items-center gap-9 text-[18px] text-[#f8fafc] sm:flex  ">
            <li>
              <a href="#about">About</a>
            </li>

            <a href="#skills">
              <button>Skills</button>
            </a>
            <a href="#github">
              <button>Github</button>
            </a>
            <a href="#job">
              <button>Experience</button>
            </a>

            <a href="#project">
              <button>Projects</button>
            </a>

            <a href="#contact">
              <button>Contact</button>
            </a>
          </ul>
        </div>
        <button
          onClick={() => setMenu(true)}
          className="text-3xl text-[#f8fafc] sm:hidden"
        >
          <IoIosMenu />
        </button>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenu(false)}
      >
        <div
          className={`absolute top-16 left-2 w-87.5 rounded-4xl bg-[#28bcf6] p-8 shadow-2xl transition-transform duration-500 ease-out ${
            menu ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMenu(false)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl text-white transition hover:bg-white/30"
          >
            <IoClose />
          </button>

          <ul className="mt-8 flex flex-col gap-5 text-[16px] font-bold text-[#f8fafc]">
            <a href="#about">
              <button onClick={() => setMenu(false)}>About</button>
            </a>
            <a href="#skills">
              <button onClick={() => setMenu(false)}>Skills</button>
            </a>
            <a href="#github">
              <button onClick={() => setMenu(false)}>Github</button>
            </a>
            <a href="#job">
              <button onClick={() => setMenu(false)}>Experience</button>
            </a>
            <a href="#project">
              <button onClick={() => setMenu(false)}>Projects</button>
            </a>
            <a href="#contact">
              <button onClick={() => setMenu(false)}>Contact</button>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
