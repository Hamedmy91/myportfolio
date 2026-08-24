"use client"
import React from "react";

const Job = () => {
  return (
    <section id="job" className="relative overflow-hidden bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[30px] text-nowrap font-bold text-[#f8fafc] sm:text-[48px]">
            Professional <span className="text-cyan-400">Journey</span>
          </h1>
          <p className=" text-[16px] text-[#94a3b8] w-85.75 h-19.5">
            From enterprise solutions to tech innovation, building scalable
            systems and leading AI-driven initiatives across diverse technology
            stacks
          </p>
        </div>
      </div>
    </section>
  );
};

export default Job;
