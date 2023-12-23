import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 min-w-full min-h-full w-auto max-w-none">
        <Image
          src="/mainhero.svg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
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
