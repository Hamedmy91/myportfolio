"use client";

import React, { useState } from "react";

const Job = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Bamdad",
      period: "March 2025 – Present",
      location: "Tehran, Iran",
      summary:
        "Associate Software Engineer with hands-on experience in designing, developing, and deploying scalable software solutions. Skilled in backend development, API integration, cloud technologies, and AI-driven applications. Strong foundation in software engineering principles with a passion for problem-solving, automation, and building reliable, maintainable systems. Experienced in collaborating with cross-functional teams to deliver high-quality solutions in fast-paced environments.",
      achievements: [
        "Developed scalable software solutions using  FastAPI, React.js, and modern cloud technologies.",
        "Improved application scalability and maintainability through reusable components and modular architecture.",
        "Troubleshot and resolved software issues to improve system stability, performance, and user experience.",
      ],
      tech: [
        "FastAPI",
        "Nextjs",
        "React.js",
        "Redux",
        "Figma",
        "Tailwind",
        "Zustand",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Arian Energy Araz",
      period: "March 2022 – March 2024",
      location: "Tehran, Iran",
      summary:
        "Software Engineer with experience in designing, developing, and deploying scalable software solutions. Skilled in backend and frontend development, cloud technologies, APIs, databases, and modern AI-driven applications. Strong problem-solving abilities with a focus on writing clean, efficient, and maintainable code while delivering reliable solutions in fast-paced environments.",
      achievements: [
        "Developed and deployed scalable software applications using modern development frameworks and cloud technologies.",
        "Identified and resolved complex software issues, improving application stability and user experience.",
        "Contributed to the design and implementation of scalable system architectures and technical solutions.",
      ],
      tech: ["React.Js", "NextJs", "JavaScript", "TypeScript", "Tailwind"],
    },
    {
      role: "Sales Assistant",
      company: "Aria Energy Araz",
      period: "March 2020 – March 2022",
      location: "Tehran, Iran",
      summary:
        "Developed an innovative Faceless Recruitment System featuring bias-free hiring through anonymous candidate evaluation. Built a full-stack application with secure authentication and automated screening workflows. Led the intern team through the complete development cycle and pitched the solution to HR leadership.",
      achievements: [
        "Built complete recruitment platform with Azure MySQL Database and Node.js backend",
        "Deployed application using Heroku and Docker",
        "Led cross-functional team of interns to project success",
      ],
      tech: [
        "Microsoft Excel",
        "Microsoft Word",
        "Inventory Management",
        "Stock Management",
        "Communication",
        "Teamwork",
      ],
    },
  ];

  return (
    <section
      id="job"
      className="relative overflow-hidden bg-[#04080F] px-6 py-20 sm:flex sm:flex-col sm:gap-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-nowrap text-[30px] font-bold text-[#f8fafc] sm:text-[48px]">
            Professional <span className="text-cyan-400">Journey</span>
          </h1>

          <p className="w-full max-w-xl text-[16px] leading-relaxed text-[#94a3b8]">
            From enterprise solutions to tech innovation, building scalable
            systems and leading AI-driven initiatives across diverse technology
            stacks.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <div className="absolute bottom-2 left-2.75 top-2 w-px bg-slate-800 sm:left-3.75" />

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-10 sm:pl-12"
              >
                <span
                  className={`absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border sm:h-8 sm:w-8 ${
                    isOpen
                      ? "border-emerald-400 bg-emerald-400/10"
                      : "border-slate-700 bg-slate-900"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isOpen ? "bg-emerald-400" : "bg-slate-600"
                    }`}
                  />
                </span>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04080F]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-emerald-400">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-left text-xs text-slate-400 sm:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {exp.summary}
                    </p>

                    <span className="mt-4 inline-block text-xs font-medium text-emerald-400">
                      {isOpen ? "Show less −" : "Show details +"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-5 space-y-5 border-t border-slate-800 pt-5">
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                          Key Achievements
                        </h4>

                        <ul className="space-y-1.5">
                          {exp.achievements.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm text-slate-400"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                          Technologies Used
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Job;
