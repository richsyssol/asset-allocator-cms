import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import ServicesSection from "./AboutService";

import VideoSection from "./VideoSection";
import Testimonials from "./Testimonials";
import LogoGrid from "./LogoGrid";

import OurServices from "./OurServices";
import FAQSection from "./FAQSection";
import Blogs from "./Blogs";
import OurCorporateServices from "./OurCorporateServices";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhyUs />
      <OurCorporateServices />
      <FAQSection />
      <Blogs />
      <VideoSection />

      <LogoGrid />
      <ServicesSection />

      <CTA />
      <Testimonials />
    </div>
  );
};

export default Home;
