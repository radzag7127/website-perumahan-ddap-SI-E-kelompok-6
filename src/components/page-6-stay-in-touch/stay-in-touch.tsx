"use client";

import React from "react";

const StayInTouchSection = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="text-black">
      <section
        className="w-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/stayr.jpg')" }}
      >
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            DAPATKAN INFORMASI TERKINI DARI KAMI
          </h2>
          <p className="mb-6 text-black">
            Edi Sukarno mendirikan PT Griya Rahayu, mengajak sejumlah spesialis
            yang bekerja sama untuk membukukan transaksi rekor di pasar
            perumahan Jawa Tengah, dengan mengedepankan passion,
            profesionalisme, integritas, dan pengetahuan mendalam tentang
            industri properti lokal. Kemampuan Edi untuk terhubung dan
            berkomunikasi dengan beragam klien dipandu oleh passion-nya untuk
            travelling dan pengalaman tinggal serta mengenal berbagai daerah di
            Jawa Tengah. Dengan membangun lini bisnis yang saling melengkapi di
            bawah Grup Griya Rahayu, termasuk pengembang, kontraktor, konsultan,
            agen properti, dan jasa keuangan, Edi bisa menjamin pengalaman
            memiliki hunian yang sepenuhnya terintegrasi bagi pelanggan di Jawa
            Tengah. Didukung staf profesional dan teknologi mutakhir, Griya
            Rahayu Group diposisikan untuk terus bertumbuh menjadi pengembang
            perumahan pilihan utama di wilayah tersebut.
          </p>
          <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-2 rounded-md text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-md"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default StayInTouchSection;
