import HeroSection from "@/components/page-1-hero/hero-section";
import OnSaleSlider from "@/components/page-2-on-sale/on-sale-slider";

import TentangGriya from "@/components/page-4-tentang-griya/tentang-griya-rahayu";
import TestCase from "@/components/page-3-projects/test-case";

import Testimoni from "@/components/page-5-testimony/testiomi";
import StayInTouchSection from "@/components/page-6-stay-in-touch/stay-in-touch";
import WorkWithUs from "@/components/page-7-work-with-us/work-with-us";

import Footer from "@/components/page-8-footer/footer";
import AboutPage from "@/components/page-9-about_us/aboutus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white overflow-hidden">
      <section className="overflow-hidden">
        <HeroSection />
      </section>
      <section className="overflow-hidden">
        <OnSaleSlider />
      </section>
      <section className="overflow-hidden">
        <TestCase />
      </section>
      <section className="overflow-hidden">
        <TentangGriya />
      </section>
      <section className="overflow-hidden">
        <Testimoni />
      </section>
      <section className="overflow-hidden">
        <StayInTouchSection />
      </section>
      <section className="overflow-hidden">
        <WorkWithUs />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
