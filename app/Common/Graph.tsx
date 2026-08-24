"use client";

import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section
      id="github"
      className="relative overflow-hidden bg-[#04080F] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-[36px] font-bold text-[#f8fafc] sm:text-[48px]">
            GitHub <span className="text-cyan-400">Activity</span>
          </h2>

          <p className="mt-3 text-[16px] text-[#94a3b8] sm:text-[20px]">
            My coding activity over the past year
          </p>
        </div>

        <div className="w-full flex justify-center items-center  overflow-x-auto">
          <div className="min-w-200 py-4">
            <GitHubCalendar
              username="Hamedmy91"
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              showWeekdayLabels
              showMonthLabels
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
