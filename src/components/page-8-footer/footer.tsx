import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="mb-6 text-xl font-bold">Tentang Kami</h2>
            <p>
              Griya Rahayu Group adalah perusahaan properti terdepan di Jawa
              Tengah yang menyediakan pilihan hunian dan investasi terbaik.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Navigasi</h2>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Kontak Kami</h2>
            <ul>
              <li>Jl. Sukasenang No.12, Semarang</li>
              <li>Phone: (024) 1234567</li>
              <li>Email: info@griyarahayu.com</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Ikuti Kami</h2>
            <div className="flex items-center mt-1">
              <a
                href="https://www.facebook.com"
                className="hover:text-gray-400"
              >
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.whatsapp.com"
                className="hover:text-gray-400 ml-4"
              >
                <img src="/whatsapp.svg" alt="whatsapp" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-gray-400 ml-4"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          <p>
            © {new Date().getFullYear()} Griya Rahayu Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
