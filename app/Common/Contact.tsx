"use client";

import React from "react";
import { FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <section className="relative overflow-hidden  flex flex-col justify-center items-center gap-6 bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8">
        <div className="bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
        <div className="flex flex-col items-center gap-3 text-center ">
          <div>
            <h1 className="text-[36px] font-bold text-[#f8fafc] sm:text-[48px]">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
            <p className=" sm:w-3xl sm:h-7 text-[20px] text-[#94a3b8] w-85.75 h-14">
              Ready to bring your ideas to life? Lets discuss your next project
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6  sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8  ">
          <div className="sm:w-xl sm:h-133.75 sm:active:shadow-xl/50 sm:active:shadow-[#28bcf6] sm:active:-translate-y-2.5 flex flex-col bg-[#080c16b2] justify-start items-start pl-6 pt-6 gap-4 w-85.75 h-157 border rounded-[10px] border-[#28bcf64d]">
            <h1 className="text-[#f8fafc] text-[20px] font-bold">
              Send Message
            </h1>
            <div className="sm:flex sm:flex-row sm:gap-4 ">
              <div className="flex flex-col gap-3 ">
                <label
                  className="flex gap-2 text-[#f8fafc] text-[14px] font-bold"
                  htmlFor=""
                >
                  <p>Name</p>
                  <span>*</span>
                </label>
                <input
                  className="border sm:w-60.75 sm:h-10 w-[288px] h-10 rounded-[10px] p-2 border-[#10192d] text-[#818795] active:outline-[#28bfc6] active:outline-3"
                  type="text"
                  placeholder="Your full name"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="flex gap-2 text-[#f8fafc] text-[14px] font-bold"
                  htmlFor=""
                >
                  <p>Email</p>
                  <span>*</span>
                </label>
                <input
                  className="border  sm:w-60.75 sm:h-10 w-[288px] h-10 rounded-[10px] p-2 border-[#10192d] text-[#818795] active:outline-[#28bfc6] active:outline-3"
                  type="text"
                  placeholder="Your.email@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="flex gap-2 text-[#f8fafc] text-[14px] font-bold"
                htmlFor=""
              >
                <p>Subject</p>
                <span>*</span>
              </label>
              <input
                className="border sm:w-127.5 sm:h-10 w-[288px] h-10 rounded-[10px] p-2 border-[#10192d] text-[#818795] active:outline-[#28bfc6] active:outline-3"
                type="text"
                placeholder="Project discussion, collaboration, etc."
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="flex gap-2 text-[#f8fafc] text-[14px] font-bold"
                htmlFor=""
              >
                <p>Message</p>
                <span>*</span>
              </label>
              <textarea
                className="border w-[288px] sm:w-127.5 sm:h-34.5 h-34.5 rounded-[10px] p-2 border-[#10192d] text-[#818795] active:outline-[#28bfc6] active:outline-3"
                placeholder="Tell me about your project, timeline, budget, and any specific requirements...."
              />
            </div>
            <button className="flex gap-2 justify-center items-center text-center border w-69.5 h-10 bg-[#28bcf6] rounded-[5px] text-[#05080f] font-medium">
              <i>
                <FiSend />
              </i>
              <p>Send Message</p>
            </button>
          </div>
          <div className="flex flex-col gap-4 sm:pt-12 sm:flex sm:flex-col sm:gap-8">
            <div className="sm:w-xl sm:h-78.5 sm:active:shadow-xl/50 sm:active:shadow-[#28bcf6] sm:active:-translate-y-2.5 flex flex-col bg-[#080c16b2] justify-start items-start pl-6 pt-6 gap-6 w-85.75 h-78.25 border rounded-[10px] border-[#28bcf64d]">
              <h1 className="text-[#f8fafc] text-[24px]">
                Contact Information
              </h1>
              <div className="flex gap-5 justify-center items-center">
                <i className="border w-12 h-12 flex text-2xl justify-center items-center rounded-[10px] bg-[#28bcf6]">
                  <MdOutlineEmail />
                </i>
                <div>
                  <p className="text-[#94a3b8] text-[14px]">Email</p>
                  <p className="text-[#f8fafc] text-[16px] font-medium">
                    Hamedmy1991@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <i className="border w-12 h-12 flex text-2xl justify-center items-center rounded-[10px] bg-[#28bcf6]">
                  <LuPhone />
                </i>
                <div>
                  <p className="text-[#94a3b8] text-[14px]">Phone</p>
                  <p className="text-[#f8fafc] text-[16px] font-medium">
                    +98-9217451339
                  </p>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <i className="border w-12 h-12 flex text-2xl justify-center items-center rounded-[10px] bg-[#28bcf6]">
                  <CiLocationOn />
                </i>
                <div>
                  <p className="text-[#94a3b8] text-[14px]">Location</p>
                  <p className="text-[#f8fafc] text-[16px] font-medium">
                    Tehran , Iran
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-xl sm:h-60 sm:active:shadow-xl/50 sm:active:shadow-[#28bcf6] sm:active:-translate-y-2.5 flex flex-col bg-[#080c16b2] justify-start items-start pl-6 pt-6 gap-6 w-85.75 h-60 border rounded-[10px] border-[#28bcf64d]">
              <h1 className="text-[#f8fafc] text-[24px]">Follow Me</h1>
              <div className="flex gap-5 justify-center items-center">
                <i className="border w-12 h-12 flex text-2xl justify-center items-center rounded-[10px] bg-[#28bcf6]">
                  <LuGithub />
                </i>
                <div>
                  <p className="text-[#94a3b8] text-[14px]">Github</p>
                  <p className="text-[#f8fafc] text-[16px] font-medium">
                    Hamedmy91
                  </p>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <i className="border w-12 h-12 flex text-2xl justify-center items-center rounded-[10px] bg-[#28bcf6]">
                 <FaLinkedinIn />
                </i>
                <div>
                  <p className="text-[#94a3b8] text-[14px]">Linkedin</p>
                  <p className="text-[#f8fafc] text-[16px] font-medium">
                    hamed-moyasseri-reactdeveloper
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
