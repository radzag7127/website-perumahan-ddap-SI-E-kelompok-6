// pages/featured-neighborhoods.tsx
import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import neighborhoods from "./neighborhoodData";

const FeaturedNeighborhoods: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-[14vh] mb-12 text-black">
        TEMUKAN RUMAH IMPIAN ANDA
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {neighborhoods.map((neighborhood) => (
          <a
            key={neighborhood.id}
            href="/contact"
            className="relative group block"
          >
            <Image
              src={neighborhood.imagePath}
              alt={neighborhood.label}
              layout="responsive"
              width={700}
              height={466}
              className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl">{neighborhood.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNeighborhoods;
