"use client";

import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Medical App",
      category: "Medical Management Application",
      description:
        "A modern medical web application built with React, TypeScript, and Vite. The project focuses on creating a clean, responsive, and user-friendly interface for healthcare-related services, with optimized development using React Compiler and ESLint.",
      image: "/medicalApp.WEBP",
      status: "Completed",
      technologies: ["React", "TypeScript", "ReactCompiler", "Eslint"],
      github: "https://github.com/Hamedmy91/Medical-App",
      demo: "https://medical-app-49n8.onrender.com/",
    },

    {
      title: "Car Rental",
      category: "A clean and user-friendly car rental platform.",
      description:
        "A responsive car rental web application built with React, TypeScript, and Vite, featuring a modern user interface for exploring vehicles and rental services.",
      image: "/carrental2.WEBP",
      status: "Completed",
      technologies: ["React", "TypeScript", "Vite"],
      github: "https://github.com/Hamedmy91/Carrental",
      demo: "https://carrental91.netlify.app/",
    },
    {
      title: "Store",
      category: "Modern online store built with Next.js.",
      description:
        "A modern e-commerce web application built with Next.js, designed with a clean and responsive interface for showcasing products and creating a smooth online shopping experience. The project uses a modern Next.js structure with a focus on performance and reusable components.",
      image: "/storeko.WEBP",
      status: "Completed",
      technologies: ["Nextjs", "TypeScript", "Vite"],
      github: "https://github.com/Hamedmy91/store-next",
      demo: "https://dashboardadmin91.netlify.app/",
    },
    {
      title: "Dashboard",
      category: "Modern and responsive admin dashboard.",
      description:
        "A modern and responsive dashboard application built with Next.js, featuring a clean interface for managing and displaying data. The project uses Next.js App Router and provides a solid foundation for building scalable admin dashboards.",
      image: "/Dashboard.WEBP",
      status: "Completed",
      technologies: ["Nextjs", "TypeScript", "Vite"],
      github: "https://github.com/Hamedmy91/dashboard-next",
      demo: "https://dashboardadmin91.netlify.app///",
    },
    {
      title: "Gocart",
      category:
        "Modern, responsive e-commerce website built with React and Vite.",
      description:
        "GoCart is a modern e-commerce frontend built with React and Vite, featuring a clean and responsive user interface designed for an online shopping experience. The project focuses on a scalable frontend structure and provides a solid foundation for building and extending e-commerce features.",
      image: "/gocart.WEBP",
      status: "Completed",
      technologies: ["React", "TypeScript", "Vite"],
      github: "https://github.com/Hamedmy91/gocart",
      demo: "https://gocartshop.netlify.app/",
    },
   
  ];
  return (
    <div
      id="projects"
      className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#04080F] px-6 py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-3 w-85.25 h-150 sm:w-95.5 sm:h-150 bg-[#070d19] border rounded-[10px]"
        >
          <div className="relative flex w-85.5 h-48 bg-[#00000099] sm:w-95.5 sm:h-53.75">
            <Image
              src={project.image}
              alt={project.title}
              width={342}
              height={191}
              className="w-full h-full object-cover rounded-t-[10px]"
            />

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity"
            >
              <div className="w-24 h-9 text-[#f8fafc] border rounded-[10px] inline-flex justify-center items-center gap-2 font-medium bg-[#0b111e]">
                <FiGithub />
                <span>Code</span>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-4 justify-start items-start p-2">
            <p className="text-[12px] text-[#f8fafc] font-bold border rounded-full border-[#0b111e] w-20.5 h-5.5 bg-[#0b111e] flex justify-center items-center">
              {project.status}
            </p>

            <h1 className="text-[20px] text-[#f8fafc]">{project.title}</h1>

            <p className="text-[12px] text-[#28bcf6] font-bold">
              {project.category}
            </p>

            <p className="text-[14px] text-[#94a3b8] w-73.5 h-34 sm:w-83.5 sm:h-28.5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 w-full text-[#f8fafc] text-[12px]">
              {project.technologies.map((tech) => (
                <p
                  key={tech}
                  className="border bg-[#28bcf61a] border-[#28bcf6] rounded-full px-3 py-1"
                >
                  {tech}
                </p>
              ))}
            </div>

            <div className="text-[#f8fafc]  border-[#05080f]  bg-[#05080f] text-[14px] flex justify-between items-center border w-full p-2 rounded-[5px]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#28bcf6] transition-colors"
              >
                <FiGithub />
                <span>View Code</span>
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#28bcf6] hover:text-cyan-300 transition-colors"
                >
                  Demo
                </a>
              ) : (
                <span className="text-gray-500">No Demo</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
