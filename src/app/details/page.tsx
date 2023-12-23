import RumahDetail1 from "@/components/page-2-on-sale/details/detailRumah1";
import RumahDetail2 from "@/components/page-2-on-sale/details/detailRumah2";
import RumahDetail3 from "@/components/page-2-on-sale/details/detailRumah3";
import RumahDetail4 from "@/components/page-2-on-sale/details/detailRumah4";
import RumahDetail5 from "@/components/page-2-on-sale/details/detailRumah5";
import Footer from "@/components/page-8-footer/footer";
import type React from "react";

const Home: React.FC = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between overflow-hidden"
      style={{
        backgroundColor: "white", // Menetapkan latar belakang putih
        backgroundImage: 'url("/backgrounds.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Pastikan SVG tidak berulang
      }}
    >
      <section className="mt-20">
        <RumahDetail1 />
      </section>
      <section>
        <RumahDetail2 />
      </section>
      <section>
        <RumahDetail3 />
      </section>
      <section>
        <RumahDetail4 />
      </section>
      <section>
        <RumahDetail5 />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
