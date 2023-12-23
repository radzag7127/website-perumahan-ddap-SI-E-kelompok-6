import ContactPage from "@/components/page-10-contact_us/contactUs";
import Footer from "@/components/page-8-footer/footer";

import type React from "react";

const Home: React.FC = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between overflow-hidden"
      style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >
      <section>
        <ContactPage />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
