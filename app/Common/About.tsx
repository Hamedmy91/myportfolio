"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[36px] font-bold text-[#f8fafc] sm:text-[48px]">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className=" text-[20px] text-[#94a3b8]">
            Passionate about building transformative solutions that create real
            impact
          </p>
        </div>
        <div className="sm:flex sm:flex-row sm:w-169.75 sm:h-20 sm:rounded-full flex flex-col justify-center  h-39.25 w-69 items-center gap-4 rounded-[10px] border border-[#164454] bg-[#7de8e80d] px-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17303A] text-cyan-400">
            <FaGraduationCap size={20} />
          </div>

          <p className="text-[14px] font-medium text-nowrap  text-[#f8fafc]">
            BD in Computer Hardware Engineering
          </p>
          <p className="text-[#94a3b8] text-[14px] text-nowrap">
            Islamic Azad University, Parand Branch
          </p>
        </div>
      </div>
      <div className="flex-col flex sm:flex sm:flex-row sm:justify-around sm:items-center">
        <div className="relative z-10 pt-8 gap-4 flex flex-col sm:w-xl sm:h-94">
          <h1 className="text-[#f8fafc] text-[24px]">My journey</h1>
          <p className="text-[#94a3b8] text-[14px]">
            With over 1 year of experience in front-end development I have had
            the privilege of working with vibrant teams across enterprise
            companies, building everything from MVPs to large-scale applications
            serving millions of users.
          </p>
          <p className="text-[#94a3b8] text-[14px]">
            My journey has been defined by creating meaningful impact through
            technology. From research publications to innovation competitions, I
            have consistently focused on building solutions that genuinely
            improve peoples lives. Whether working on accessibility, security,
            or wellness applications, Im driven by the belief that technology
            should be both powerful and purposeful.
          </p>
          <p className="text-[#94a3b8] text-[14px]">
            When Im not coding, you will find me contributing to open-source
            projects, writing technical articles, or maybe gaming. I believe in
            continuous learning and sharing knowledge with the community.
          </p>
        </div>
        <div className="relative z-10 pt-8 gap-4 flex flex-col sm:w-xl sm:h-111 ">
          <h1 className="text-[#f8fafc] text-[24px]">How I Work</h1>
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-col gap-8 sm:grid  sm:grid-cols-2 sm:grid-rows-2 sm:gap-6">
              <div className="bg-[#80c16b2] sm:w-69 sm:h-43 active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-39.75 rounded-[10px] p-6 border border-[#28bcf64d]">
                <div className="flex gap-4 items-center  ">
                  <div className="border flex justify-center items-center bg-[#54ebfc] w-12 h-12 rounded-[10px]">
                    <i>
                      <FaCode />
                    </i>
                  </div>
                  <p className="text-[16px] text-[#f8fafc] font-bold">
                    Clean Code
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#94a3b8]">
                    Writing maintainable, scalable code that stands the test of
                    time
                  </p>
                </div>
              </div>
              <div className="bg-[#80c16b2] sm:w-69 sm:h-43 active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-39.75 rounded-[10px] p-6 border border-[#28bcf64d]">
                <div className="flex gap-4 items-center  ">
                  <div className="border flex justify-center items-center bg-[#54ebfc] w-12 h-12 rounded-[10px]">
                    <i>
                      <IoBulbOutline />
                    </i>
                  </div>
                  <p className="text-[16px] text-[#f8fafc] font-bold">
                    Innovation
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#94a3b8]">
                    Staying ahead of technology trends and implementing
                    cutting-edge solutions
                  </p>
                </div>
              </div>
              <div className="bg-[#80c16b2] sm:w-69 sm:h-43 active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-39.75 rounded-[10px] p-6 border border-[#28bcf64d]">
                <div className="flex gap-4 items-center  ">
                  <div className="border flex justify-center items-center bg-[#54ebfc] w-12 h-12 rounded-[10px]">
                    <i>
                      <FaUserGroup />
                    </i>
                  </div>
                  <p className="text-[16px] text-[#f8fafc] font-bold">
                    Collaboration
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#94a3b8]">
                    Working effectively with cross-functional teams to deliver
                    exceptional results
                  </p>
                </div>
              </div>
              <div className="bg-[#80c16b2] sm:w-69 sm:h-43 active:shadow-xl/50 active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 shadow-[#28bcf64d] outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-39.75 rounded-[10px] p-6 border border-[#28bcf64d]">
                <div className="flex gap-4 items-center  ">
                  <div className="border flex justify-center items-center bg-[#54ebfc] w-12 h-12 rounded-[10px]">
                    <i>
                      <BsLightningCharge />
                    </i>
                  </div>
                  <p className="text-[16px] text-[#f8fafc] font-medium">
                    Performance
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#94a3b8]">
                    Optimizing applications for speed, accessibility, and user
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 pt-8 gap-4 flex flex-col justify-center items-center sm:flex sm:flex-row sm:gap-4">
        <div className="bg-[#80c16b2]  sm:w-69.25 sm:h-30.5  justify-center items-center active:shadow-xl/50 active:shadow-[#28bcf64d] active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-24.5 rounded-[10px] p-6 border border-[#28bcf64d]">
          <p className="text-[#28bcf6] text-[24px] font-bold">10+</p>
          <p className="text-[#94a3b8] text-[16px] font-bold">
            Projects Completed
          </p>
        </div>
        <div className="bg-[#80c16b2] sm:w-69.25 sm:h-30.5  justify-center items-center active:shadow-xl/50 active:shadow-[#28bcf64d] active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500  flex flex-col gap-4 w-85.75 h-24.5 rounded-[10px] p-6 border border-[#28bcf64d]">
          <p className="text-[#28bcf6] text-[24px] font-bold">1+</p>
          <p className="text-[#94a3b8] text-[16px] font-bold">
            Years Experience
          </p>
        </div>
        <div className="bg-[#80c16b2] sm:w-69.25 sm:h-30.5 justify-center items-center  active:shadow-xl/50 active:shadow-[#28bcf64d] active:transition-transform active:ease-out active:-translate-y-2.5 active:duration-500 outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-24.5 rounded-[10px] p-6 border border-[#28bcf64d]">
          <p className="text-[#28bcf6] text-[24px] font-bold">10+</p>
          <p className="text-[#94a3b8] text-[16px] font-bold">
            Technologies Mastered
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
