import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div
      className="py-10 px-6 lg:px-20"
      style={{
        backgroundImage: 'url("/backgrounds.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
      }}
    >
      <div className="mb-6 relative h-auto min-h-[200px] lg:min-h-[450px]">
        <Image
          src="/rahayuestate.svg"
          alt="Rahayu Estate"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="text-center text-black">
        <h1 className="text-4xl font-bold mb-4">TENTANG GRIYA RAHAYU</h1>
        <p className="mb-6">
          Pengembang Properti Terdepan di Indonesia.
          <br />
          Griya Rahayu mewakili portofolio real estat mewah, rumah, dan properti
          untuk dijual di pasar utama dan destinasi terkenal di Indonesia.
          Berdiri di Semarang, Jawa Tengah, Griya Rahayu kini diakui sebagai
          salah satu merek butik terkemuka yang berkembang pesat di negeri ini.
          Klien dan agen kami mendapatkan manfaat dari sumber daya bersama tim
          kami, termasuk divisi kreatif, hubungan masyarakat, dan teknologi yang
          terdepan. Di mana pun Anda berada, kami siap membantu Anda.
        </p>
      </div>

      <div className="flex justify-center space-x-10 text-black">
        <div className="text-center">
          <span className="text-3xl font-bold">10+</span>
          <p>KOTA</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold">5+</span>
          <p>PROVINSI</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold">20+</span>
          <p>KOMUNITAS TERHUBUNG</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
