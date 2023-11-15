import React from "react";
import HomeLayout from "@/components/layouts/HomeLayout";
import Header from "@/components/home/Header";
import WhatWeTeach from "@/components/home/WhatWeTeach";
import HowWeTeach from "@/components/home/HowWeTeach";
import OurSecret from "@/components/home/OurSecret";
import OurClasses from "@/components/home/OurClasses";
import Achievements from "@/components/home/Achievements";
import QuranReciter from "@/components/home/QuranReciter";
import OurWindow from "@/components/home/OurWindow";
import OurTeachers from "@/components/home/OurTeachers";
import Faq from "@/components/home/Faq";
import Testimonials from "@/components/home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HomeLayout>
        <Header />
        <QuranReciter />
        <WhatWeTeach />
        <HowWeTeach />
        <OurSecret />
        <OurWindow />
        <OurClasses />
        <OurTeachers />
        <Achievements />
        <Faq />
        <Testimonials />
      </HomeLayout>
    </div>
  );
};
export default HomePage;
