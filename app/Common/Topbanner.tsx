"use client";

import Header from "./Header";
import Hero from "./Hero";

const Topbanner = () => {
  return (
    <div
      className="
        relative flex min-h-screen flex-col overflow-hidden
        bg-[#020b12]
        bg-[linear-gradient(to_right,rgba(20,155,200,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,155,200,0.10)_1px,transparent_1px)]
        bg-size-[48px_48px]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(0,180,255,0.08),transparent_45%)]
        "
      />

      <Header />
      <Hero />
    </div>
  );
};

export default Topbanner;
