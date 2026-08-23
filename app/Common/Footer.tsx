"use client";

import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <section className="relative overflow-hidden  flex flex-col justify-center items-center gap-6 bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8">
        <div className="bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
        <div className="flex flex-col gap-4  sm:grid sm:gap-6 sm:grid-cols-3 ">
          <div className="flex flex-col justify-center items-center gap-4 text-center sm:justify-start sm:items-start sm:text-start">
            <button className="font-mono text-[20px] font-bold text-[#28bcf6] sm:text-[24px ]">
              {"<Hamed/>"}
            </button>
            <p className="w-85.75 h-28.5 text-[#94a3b8] text-[14px] font-medium  sm:w-[384px] sm:h-30 sm:text-[16px]">
              Ready to collaborate on something extraordinary? Im always excited
              to connect with fellow innovators, explore cutting-edge projects,
              and push the boundaries of whats possible with technology. Lets
              build the future together.
            </p>
            <div className="text-[18px] flex gap-4 text-[#f8fafc]">
              <i className="border flex justify-center items-center w-8.5 h-8.5 bg-[#0e1525] border-[#0e1525] rounded-[5px]">
                <LuGithub />
              </i>
              <i className="border flex justify-center items-center w-8.5 h-8.5 bg-[#0e1525] border-[#0e1525] rounded-[5px]">
                <FaLinkedinIn />
              </i>
              <i className="border flex justify-center items-center w-8.5 h-8.5 bg-[#0e1525] border-[#0e1525] rounded-[5px]">
                <MdOutlineMailOutline />
              </i>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4  ">
            <h1 className="text-[16px] text-[#f8fafc] font-medium">
              Quick Links
            </h1>
            <div className="sm:flex sm:flex-col  flex flex-wrap justify-center items-center gap-8 w-86 h-14 text-[#94a3b8] font-medium text-[14px]">
              <p>About</p>
              <p>Skills</p>
              <p>Github</p>
              <p>Experience</p>
              <p>Projects</p>
              <div className="flex justify-center items-center gap-1">
                <p>resume</p>
                <i className="text-[12px]">
                  <FiExternalLink />
                </i>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4 pt-8">
            <h1 className="text-[#f8fafc] text-[16px] font-bold">
              Get In Touch
            </h1>
            <p className="text-[#94a3b8] text-[14px] font-medium">
              Ready to work together?
            </p>
            <p className="text-[#28bcf6] text-[14px] font-medium">
              Hamedmy1991@gmail.com
            </p>
            <p className="text-[#94a3b8] text-[14px] font-medium">
              Tehran , Iran
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 pt-8 text-center border-t mx-2 border-[]">
          <div className="flex  justify-center items-center flex-wrap text-[#94a3b8] text-[14px] font-medium">
            <span className="text-[12px]">
              © 2026 Hamed Moyasseri. Made with
            </span>
            <CiHeart className="mx-1 text-[#ef4444] text-[18px]" />
            <span>and lots of coffee.</span>
          </div>
          <p className="text-[#94a3b8] text-[12px] font-medium">
            Built with React, Next.js & Tailwind CSS
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
