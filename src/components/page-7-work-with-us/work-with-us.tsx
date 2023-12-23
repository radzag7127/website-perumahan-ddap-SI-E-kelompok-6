
import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center text-center">
      <Image
        src="/work.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="The Malibu Life"
        className="absolute z-0"
      />

      <div className="z-10">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">
          GRIYA RAHAYU GROUP
        </h1>
        <div className="mt-10">
          <a
            href="/contact"
            className=" bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg"
          >
            WORK WITH US
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
