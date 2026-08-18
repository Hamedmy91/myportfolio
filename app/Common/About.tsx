import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#04080F] px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[36px] font-bold text-[#f8fafc]">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className=" text-[20px] text-[#94a3b8]">
            Passionate about building transformative solutions that create real
            impact
          </p>
        </div>
        <div className="flex flex-col justify-center  h-39.25 w-69 items-center gap-4 rounded-[10px] border border-[#164454] bg-[#7de8e80d] px-6">
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
      <div className="relative z-10 pt-8 gap-4 flex flex-col">
        <h1 className="text-[#f8fafc] text-[24px]">My journey</h1>
        <p className="text-[#94a3b8] text-[14px]">
          With over 1 year of experience in front-end development I have had the
          privilege of working with vibrant teams across enterprise companies,
          building everything from MVPs to large-scale applications serving
          millions of users.
        </p>
        <p className="text-[#94a3b8] text-[14px]">
          My journey has been defined by creating meaningful impact through
          technology. From research publications to innovation competitions, I
          have consistently focused on building solutions that genuinely improve
          peoples lives. Whether working on accessibility, security, or wellness
          applications, Im driven by the belief that technology should be both
          powerful and purposeful.
        </p>
        <p className="text-[#94a3b8] text-[14px]">
          When Im not coding, you will find me contributing to open-source
          projects, writing technical articles, or maybe gaming. I believe in
          continuous learning and sharing knowledge with the community.
        </p>
      </div>
      <div className="relative z-10 pt-8 gap-4 flex flex-col">
        <h1 className="text-[#f8fafc] text-[24px]">How I Work</h1>
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="bg-[#80c16b2] outline-[#80c16b2] flex flex-col gap-4 w-85.75 h-39.75 rounded-[10px] p-6 border border-[#80c16b2]">
              <div className="flex gap-4 items-center  ">
                <div className="border flex justify-center items-center bg-[#54ebfc] w-12 h-12 rounded-[10px]">
                  <i>
                    <FaCode />
                  </i>
                </div>
                <p className="text-[16px] text-[#f8fafc] font-medium">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
