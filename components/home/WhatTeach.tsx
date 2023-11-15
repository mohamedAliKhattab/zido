import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { Image } from "antd";
import React from "react";

const WhatWeTeach = () => {
  return (
    <section
      id="whatTeach-parent"
      className="whatTeach relative z-10 -mt-[0px] bg-white py-[20px] pt-[10px]"
    >
      <div className="container h-full">
        <div className="content">
          <div id="whatTeach-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <span className="mb-4 text-center font-medium text-maqraaDarkBlue !drop-shadow-gray-b-4px">
                {HOME.WHAT_WE_TEACH.TITLE}
              </span>
              <div className="title-border w-[300px]">
                <img
                  src="assets/title-border.png"
                  className="h-auto w-full object-scale-down"
                />
              </div>
            </div>
          </div>
          <div className="mb-1 mt-[60px]">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              className="main-item mb-[40px] flex flex-col items-center justify-center gap-4"
            >
              <div className="icon flex w-[80px] min-w-[80px] items-center justify-center">
                <Image
                  src="assets/item-1.png"
                  preview={false}
                  className="h-auto w-full object-scale-down"
                />
              </div>
              <div className="item-name text-lg text-maqraaDarkBlue md:text-2xl">
                {HOME.WHAT_WE_TEACH.LIST.ITEM1.TEXT}
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-12 sm:flex-row">
              <div className="teach-list flex w-full flex-col gap-14 sm:w-[40%]">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  className="teach-item flex h-[83px]
flex-col items-center justify-center gap-4 sm:flex-row sm:justify-end"
                >
                  <div className="item-name order-2 text-lg text-maqraaDarkBlue sm:order-1 md:text-xl">
                    {HOME.WHAT_WE_TEACH.LIST.ITEM2.TEXT}
                  </div>
                  <div
                    className="icon order-1 flex w-[50px] min-w-[50px] items-center justify-center
sm:order-2"
                  >
                    <Image
                      src="assets/mohamed.svg"
                      preview={false}
                      className="h-auto w-full object-scale-down"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  className="teach-item flex h-[83px]
flex-col items-center justify-center gap-4 sm:flex-row sm:justify-end"
                >
                  <div
                    className="item-name  order-2 text-lg
                    text-maqraaDarkBlue
sm:order-2 md:text-xl"
                  >
                    {HOME.WHAT_WE_TEACH.LIST.ITEM4.TEXT}
                  </div>
                  <div
                    className="icon order-1
flex w-[50px] min-w-[50px] items-center justify-center sm:order-2"
                  >
                    <Image
                      src="assets/item-7.png"
                      preview={false}
                      className="h-auto w-full object-scale-down"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  data-aos-easing="ease-in-out"
                  className="teach-item flex h-[83px]
flex-col items-center justify-center gap-4 sm:flex-row sm:justify-end"
                >
                  <div
                    className="item-name  order-2 text-lg
                    text-maqraaDarkBlue
sm:order-2 md:text-xl"
                  >
                    {HOME.WHAT_WE_TEACH.LIST.ITEM6.TEXT}
                  </div>
                  <div
                    className="icon order-1
flex w-[50px] min-w-[50px] items-center justify-center sm:order-2"
                  >
                    <Image
                      src="assets/item-4.png"
                      preview={false}
                      className="h-auto w-full object-scale-down"
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                className="teach-image hidden w-full items-center justify-center sm:flex sm:w-[30%]"
              >
                <div className="max-w-[225px]">
                  <Image
                    src="assets/what-is-we-teach.png"
                    preview={false}
                    className="h-auto w-full object-scale-down"
                  />
                </div>
              </div>
              <div className="teach-list flex w-full flex-col gap-14 sm:w-[40%]">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  className="teach-item flex h-[83px] flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
                >
                  <div className="icon flex w-[50px] min-w-[50px] items-center justify-center">
                    <Image
                      src="assets/azkar.svg"
                      preview={false}
                      className="h-auto w-full object-scale-down"
                    />
                  </div>
                  <div className="item-name text-lg text-maqraaDarkBlue md:text-xl">
                    {HOME.WHAT_WE_TEACH.LIST.ITEM3.TEXT}
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  className="teach-item flex h-[83px] flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
                >
                  <div className="icon flex w-[50px] min-w-[50px] items-center justify-center">
                    <Image
                      src="assets/item-6.png"
                      preview={false}
                      className="h-auto w-full object-scale-down"
                    />
                  </div>
                  <div className="item-name text-lg text-maqraaDarkBlue md:text-xl">
                    {HOME.WHAT_WE_TEACH.LIST.ITEM5.TEXT}
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  data-aos-easing="ease-in-out"
                  className="teach-item flex h-[83px] flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
                >
                  <div className="icon flex w-[50px] min-w-[50px] items-center justify-center">
                    <Image
                      src="assets/item-5.png"
                      preview={false}
                      className="h-auto w-full object-scale-down"
                    />
                  </div>
                  <div className="item-name text-lg text-maqraaDarkBlue md:text-xl">
                    {HOME.WHAT_WE_TEACH.LIST.ITEM7.TEXT}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeTeach;
