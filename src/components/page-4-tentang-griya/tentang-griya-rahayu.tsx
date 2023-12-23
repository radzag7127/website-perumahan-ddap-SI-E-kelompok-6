// pages/about.tsx
import Image from "next/image";
import React from "react";
import type { NextPage } from "next";

const TentangGriya: NextPage = () => {
  return (
    <div
      className="container mx-auto pt-20 pb-20 text-black"
      style={{
        backgroundImage: 'url("/backgrounds.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">GRIYA RAHAYU GROUP</h2>

          <p className="text-lg">
            Griya Rahayu Group adalah pengembang perumahan baru yang berdiri di
            Jawa Tengah pada tahun 2018. Fokus utama perusahaan ini adalah
            menyediakan perumahan berkualitas dengan harga terjangkau di area
            tersebut. Dipimpin oleh Bapak Edi Sukarno, Griya Rahayu Group terus
            membukukan pertumbuhan penjualan yang signifikan dari tahun ke
            tahun. Perusahaan turut menjadi yang terdepan dalam pemanfaatan
            platform digital dan media sosial untuk memasarkan proyek-proyek
            perumahannya.
          </p>
          <p className="text-lg mt-4">
            Dengan dukungan penuh para profesional muda berbakat dalam bidang
            arsitektur, design, dan teknologi informasi, Griya Rahayu Group
            berkomitmen untuk terus memberikan solusi tempat tinggal berkualitas
            melalui pengembangan kawasan perumahan yang asri, hunian modern, dan
            pelayanan berstandar internasional kepada konsumen di Jawa Tengah.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded-lg mr-4"
            >
              MEET THE TEAM
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-green-800 hover:bg-gray-200 text-black py-2 px-4 rounded-lg"
            >
              INQUIRE NOW
            </a>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2">
          <Image
            className="rounded-lg"
            src="/Construction.svg"
            alt="Griya"
            width={700}
            height={525}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TentangGriya;
