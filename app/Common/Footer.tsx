"use client";

import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#020817] px-6 py-14 text-slate-300 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div className="pointer-events-none bg-[radial-gradient(circle_at_75%_35%,rgba(14,116,255,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <a
              href="#"
              className="font-mono text-[22px] font-bold text-[#28bcf6] sm:text-[24px]"
            >
              {"<Hamed/>"}
            </a>

            <p className="mt-5 max-w-md text-[14px] font-medium leading-7 text-[#94a3b8] sm:text-[16px] sm:leading-7">
              Ready to collaborate on something extraordinary? Im always excited
              to connect with fellow innovators, explore cutting-edge projects,
              and push the boundaries of whats possible with technology. Lets
              build the future together.
            </p>

            <a
              href="https://github.com/Hamedmy91"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex gap-4 text-[18px] text-[#f8fafc]"
            >
              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#0e1525] bg-[#0e1525] transition hover:border-[#28bcf6] hover:text-[#28bcf6]">
                <LuGithub />
              </button>

              <a
                href="https://www.linkedin.com/in/hamed-moyasseri-reactdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#0e1525] bg-[#0e1525] transition hover:border-[#28bcf6] hover:text-[#28bcf6]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:Hamedmy1991@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#0e1525] bg-[#0e1525] transition hover:border-[#28bcf6] hover:text-[#28bcf6]"
              >
                <MdOutlineMailOutline />
              </a>
            </a>
          </div>

          <div className="flex flex-col items-center  sm:flex sm:flex-col  sm:items-center sm:gap-12">
            <h2 className="text-[16px] font-bold text-[#f8fafc]">
              Quick Links
            </h2>

            <div className="mt-6 flex flex-wrap justify-center  w-85.75 h-14 items-center gap-2 text-[14px] font-medium text-[#94a3b8] sm:flex sm:flex-nowrap sm:flex-col">
              <a
                href="#about"
                className="cursor-pointer transition hover:text-[#28bcf6]"
              >
                About
              </a>

              <a
                href="#skills"
                className="cursor-pointer transition hover:text-[#28bcf6]"
              >
                Skills
              </a>

              <a
                href="#github"
                className="cursor-pointer transition hover:text-[#28bcf6]"
              >
                Github
              </a>

              <a
                href="#job"
                className="cursor-pointer transition hover:text-[#28bcf6]"
              >
                Experience
              </a>

              <a
                href="#project"
                className="cursor-pointer transition hover:text-[#28bcf6]"
              >
                Projects
              </a>

              <a
                href="/resume2.pdf"
                download={true}
                className="flex cursor-pointer items-center gap-1 transition hover:text-[#28bcf6]"
              >
                <p>Resume</p>
                <FiExternalLink className="text-[12px]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-[16px] font-bold text-[#f8fafc]">
              Get In Touch
            </h2>

            <p className="mt-6 text-[14px] font-medium text-[#94a3b8]">
              Ready to work together?
            </p>

            <a
              href="mailto:Hamedmy1991@gmail.com"
              className="mt-4 break-all text-[14px] font-medium text-[#28bcf6] sm:break-normal"
            >
              Hamedmy1991@gmail.com
            </a>

            <p className="mt-4 text-[14px] font-medium text-[#94a3b8]">
              Tehran, Iran
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-7 sm:mt-14 sm:pt-8 lg:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <div className="flex flex-wrap items-center justify-center text-[12px] font-medium text-[#94a3b8] sm:text-[14px]">
              <span>© 2026 Hamed Moyasseri. Made with</span>

              <CiHeart className="mx-1 text-[18px] text-[#ef4444]" />

              <span>and lots of coffee.</span>
            </div>

            <p className="text-[12px] font-medium text-[#94a3b8] sm:text-[14px]">
              Built with React, Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
