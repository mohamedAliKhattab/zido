import {
  azkarAchievements,
  quranAchievements,
} from "@/constants/achievementsList";
import { HOME } from "@/constants/i18n/ar";
import { Button, Carousel, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import React, { useRef, useState } from "react";
import QuranAchievements from "./QuranAchievements";
import AzkarAchievements from "./AzkarAchievements";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<CarouselRef>(null);

  const achievementsListData: any[] = [];
  if (quranAchievements && !!quranAchievements?.length) {
    achievementsListData.push(quranAchievements);
  }

  if (azkarAchievements && !!azkarAchievements?.length) {
    achievementsListData.push(azkarAchievements);
  }

  const next = () => {
    if (achievementsListData && carouselRef && carouselRef.current) {
      setCurrentIndex((currentIndex + 1) % achievementsListData.length);
      carouselRef.current?.next();
    }
  };
  const previous = () => {
    if (achievementsListData && carouselRef && carouselRef.current) {
      setCurrentIndex(
        ((currentIndex !== 0 ? currentIndex : achievementsListData.length) -
          1) %
          achievementsListData.length
      );
      carouselRef.current?.prev();
    }
  };
  return (
    <section
      id="achievements-parent"
      className="achievements bg-maqraaLightBlue-300 relative z-10 py-[140px] pb-[280px]"
    >
      <div
        data-aos="fade-down-right"
        data-aos-anchor-placement="center-center"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="absolute left-[3%] top-[30%] z-10 w-[100px] max-w-full md:w-[110px]"
      >
        <img
          src="assets\achievements-2.png"
          className="hidden  h-full w-full object-scale-down object-center sm:block"
        />
      </div>

      <div
        data-aos="fade-up-left"
        data-aos-anchor-placement="center-center"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="absolute right-[3%] top-[20%] z-10 hidden w-[120px] max-w-full sm:block md:w-[155px]"
      >
        <img
          src="assets\achievements-1.png"
          className="h-full  w-full object-scale-down object-center"
        />
      </div>
      <div className="container relative z-30 h-full">
        <div className="content">
          <div id="achievements-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <span className="mb-7 text-center font-medium text-maqraaDarkBlue !drop-shadow-white-b-4px">
                {HOME.ACHIEVEMENTS.TITLE}
              </span>
              <div className="title-border w-[300px]">
                <img
                  src="assets/title-border.png"
                  className="h-auto w-full object-scale-down"
                />
              </div>
            </div>
          </div>
          {achievementsListData && achievementsListData?.length && (
            <div className="mt-[60px]">
              <div className="relative flex  w-full flex-wrap items-center gap-2 px-[50px] lg:flex-nowrap lg:justify-between">
                <div className="achievements-carousel  order-3 mx-auto  w-full max-w-full">
                  <Carousel
                    ref={carouselRef}
                    dotPosition="bottom"
                    autoplay
                    speed={1000}
                    afterChange={setCurrentIndex}
                    effect="fade"
                  >
                    {quranAchievements && !!quranAchievements?.length && (
                      <QuranAchievements />
                    )}

                    {azkarAchievements && !!azkarAchievements?.length && (
                      <AzkarAchievements />
                    )}
                  </Carousel>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
