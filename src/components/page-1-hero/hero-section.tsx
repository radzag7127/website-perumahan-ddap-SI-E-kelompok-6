import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full w-auto max-w-none"
      >
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="z-10 p-5 text-3xl text-white font-bold italic"
        style={{ transform: "skew(-15deg)" }}
      >
        <h1>Hunian Asri Bersama Griya Rahayu Group</h1>
      </div>
    </div>
  );
};

export default HeroSection;
