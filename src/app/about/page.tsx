import Footer from "@/components/page-8-footer/footer";
import AboutPage from "@/components/page-9-about_us/aboutus";

import type React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white overflow-hidden">
      <section>
        <AboutPage />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
