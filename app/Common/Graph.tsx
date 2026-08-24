"use client";

import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section id="github" className="w-full px-6 py-16 bg-[#04080F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#031620_0%,#040C15_45%,#04080F_100%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#f8fafc]">GitHub Activity</h2>
          <p className="mt-2 text-sm text-[#94a3b8]">
            My coding activity over the past year
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#0e1525] bg-[#020817] p-5">
          <GitHubCalendar
            username="Hamedmy91"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
