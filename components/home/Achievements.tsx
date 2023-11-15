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
      className="achievements relative z-30 bg-maqraaBlue bg-contain bg-center bg-no-repeat py-[60px] pb-[120px]"
    >
      <div className="blue-top absolute left-0 top-[-100px] h-[130px] w-full overflow-x-clip">
        <Image
          preview={false}
          src="/assets/blue-top.png"
          alt="bg"
          className="max-h-full w-full min-w-[1920px] object-cover"
          wrapperClassName="w-full"
        />
      </div>

      <div className="blue-bottom absolute bottom-[-100px] left-0 h-[110px] w-full overflow-x-clip">
        <Image
          preview={false}
          src="/assets/blue-bottom.png"
          alt="bg"
          className="max-h-full w-full min-w-[1920px] object-cover"
          wrapperClassName="w-full"
        />
      </div>

      <div
        className="absolute right-[5%] top-[-30px] z-[3] h-[80px] w-[80px]  sm:right-[10%] sm:top-[10%] sm:h-[85px]  sm:w-[85px]  md:right-[20%]
           md:h-[100px]
md:w-[100px] lg:top-[13%] xl:h-[120px] xl:w-[120px] 2xl:h-[140px] 2xl:w-[140px]"
      >
        <Image
          src="/assets/achievements/trophy.svg"
          alt="star"
          className="max-w-full object-scale-down"
          wrapperClassName="max-w-full"
          preview={false}
        />
      </div>

      <div
        className="absolute left-[5%] top-[2%] z-[3] h-[40px]  w-[40px] md:left-[12%]
           lg:top-[1%]
lg:h-[40px] lg:w-[40px] 2xl:h-[60px] 2xl:w-[60px]"
      >
        <Image
          src="/assets/achievements/white-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          wrapperClassName="max-w-full"
          preview={false}
        />
      </div>

      <div
        className="absolute bottom-[2%] left-[2%] z-[3] h-[40px]  w-[40px] md:left-[10%]
           lg:bottom-[1%]
lg:h-[40px] lg:w-[40px] 2xl:h-[60px] 2xl:w-[60px]"
      >
        <Image
          src="/assets/achievements/white-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          wrapperClassName="max-w-full"
          preview={false}
        />
      </div>
      <div className="container relative z-30 h-full">
        <div className="content">
          <div id="achievements-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <div className="main-header">
                <div className="title relative text-center">
                  <div className="top-title main-title-lg  mr-[-35%] text-maqraaGreen">
                    {HOME.ACHIEVEMENTS.TITLE_PARTS.P1}
                  </div>
                  <div className="bottom-title main-title-sm ml-[-75%] mt-[2px] text-white  md:mt-[5px] lg:mt-[10px]">
                    {HOME.ACHIEVEMENTS.TITLE_PARTS.P2}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {achievementsListData && achievementsListData?.length && (
            <div className="mt-[60px]">
              <div className="relative flex  w-full flex-wrap items-center gap-2 md:px-[50px] lg:flex-nowrap lg:justify-between">
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
