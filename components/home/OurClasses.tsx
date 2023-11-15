import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { classesList } from "@/constants/classesList";
// import "swiper/css/scrollbar";

const OurClasses = () => {
  return (
    <section
      id="ourClasses-parent"
      className="ourClasses relative z-40 bg-maqraaGreen py-[40px]"
    >
      <div className="green-top absolute left-0 top-[-100px] h-[110px] w-full overflow-x-clip">
        <Image
          preview={false}
          src="/assets/green-top.png"
          alt="bg"
          className="max-h-full w-full min-w-[1920px] object-cover"
          wrapperClassName="w-full"
        />
      </div>

      <div className="green-bottom absolute bottom-[-100px] left-0 h-[110px] w-full overflow-x-clip">
        <Image
          preview={false}
          src="/assets/green-bottom.png"
          alt="bg"
          className="max-h-full w-full min-w-[1920px] object-cover"
          wrapperClassName="w-full"
        />
      </div>
      <div className="absolute bottom-[10%] left-[1%] h-[70px] w-[70px] md:bottom-[15%] md:left-[10%] md:block md:h-[70px]  md:w-[100px] lg:h-[150px] lg:w-[150px] 2xl:h-[170px] 2xl:w-[170px]">
        <Image
          src="/assets/our-classes/moon.svg"
          alt="moon"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="absolute right-[1%] top-[20%] h-[70px] w-[70px] md:right-[10%] md:top-[15%]  md:block lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px]">
        <Image
          src="/assets/our-classes/earth.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="absolute left-[5%] top-[5%] h-[40px] w-[40px] md:left-[10%]  md:block lg:h-[50px] lg:w-[50px] 2xl:h-[60px] 2xl:w-[60px]">
        <Image
          src="/assets/our-classes/light-green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          wrapperClassName="max-w-full"
          preview={false}
        />
      </div>

      <div className="absolute left-[25%] top-[1%] h-[40px] w-[40px] md:left-[33%] md:top-[5%]  md:block lg:h-[50px] lg:w-[50px] 2xl:h-[60px] 2xl:w-[60px]">
        <Image
          src="/assets/our-classes/inline-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          wrapperClassName="max-w-full"
          preview={false}
        />
      </div>

      <div className="white-star  absolute bottom-[20%] right-[5%] ">
        <div
          className="h-[40px] w-[40px]
lg:h-[50px] lg:w-[50px] 2xl:h-[60px] 2xl:w-[60px]"
        >
          <Image
            src="/assets/our-classes/light-green-star.svg"
            alt="star"
            className="max-w-full object-scale-down"
            wrapperClassName="max-w-full"
            preview={false}
          />
        </div>
        <div
          className="mr-[40px] mt-3 h-[40px] w-[40px]
lg:h-[40px] lg:w-[40px] 2xl:h-[50px] 2xl:w-[50px]"
        >
          <Image
            src="/assets/our-classes/white-star.svg"
            alt="star"
            className="max-w-full object-scale-down"
            wrapperClassName="max-w-full"
            preview={false}
          />
        </div>
      </div>

      <div className="container relative h-full">
        <div className="content relative z-20">
          <div id="ourClasses-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <div className="main-header mb-8 lg:mb-4">
                <div className="title text-center">
                  <div className="top-title main-title-sm mr-[-90%] text-white">
                    {HOME.OUR_CLASSES.TITLE_PARTS.P1}
                  </div>
                  <div className="bottom-title main-title-lg  mr-[9%] mt-[2px] text-maqraaBlue md:mt-[5px] lg:mt-[10px]">
                    {HOME.OUR_CLASSES.TITLE_PARTS.P2}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="circle-swiper classes-swiper">
              <Swiper
                key={1}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                centeredSlides={true}
                dir="rtl"
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
              >
                {classesList &&
                  classesList.map((classItem) => (
                    <SwiperSlide key={classItem.id}>
                      <div className="swiper-item-container">
                        <div className="image flex items-center justify-center">
                          <Image
                            preview={false}
                            wrapperClassName="w-full h-full"
                            src={classItem.image}
                            alt={classItem.text}
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="swiper-title">{classItem.text}</div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurClasses;
