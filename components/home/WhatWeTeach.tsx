import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { whatWeTeachList } from "@/constants/whatWeTeachList";
import { Image } from "antd";
import React from "react";

const WhatWeTeach = () => {
  return (
    <section
      id="whatTeach-parent"
      className="whatTeach relative z-20 -mt-[0px] bg-maqraaGreen py-[60px] lg:pb-[120px]"
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

      <div className="white-star  absolute left-[10%] top-[1%] h-[30px] w-[30px] sm:h-[50px]  sm:w-[50px] md:top-[5%] md:h-[70px] md:w-[70px]">
        <Image
          src="/assets/what-we-teach/white-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="meteor absolute right-[1%] top-[0%] h-[90px] w-[80px]  sm:block  sm:w-[120px] md:right-[10%] md:top-[5%] md:h-[140px] md:w-[170px]">
        <Image
          src="/assets/what-we-teach/meteor.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="yellow-star  absolute bottom-[30%] right-[3%] h-[40px] w-[40px] md:h-[60px] md:w-[60px]">
        <Image
          src="/assets/what-we-teach/yellow-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="blue-star  absolute bottom-[5%] right-[5%] h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
        <Image
          src="/assets/what-we-teach/blue-sm-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="white-star  absolute left-[5%] top-[60%] ">
        <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
          <Image
            src="/assets/what-we-teach/white-star-rotate.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
        <div className="mr-[-20px] mt-3 h-[30px] w-[30px] md:h-[35px] md:w-[35px]">
          <Image
            src="/assets/what-we-teach/blue-star-rotate.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
      </div>
      <div className="container h-full">
        <div className="content">
          <div id="whatTeach-section" className="section-header">
            <div className="section-title relative z-30  mb-1 flex flex-col items-center justify-center text-3xl lg:mb-3 lg:text-4xl">
              <div className="main-header">
                <div className="title relative text-center">
                  <div className="top-title main-title-sm  mr-[-90%] text-white">
                    {HOME.WHAT_WE_TEACH.TITLE_PARTS.P1}
                  </div>
                  <div className="bottom-title main-title-lg mt-[2px]  text-maqraaBlue  md:mt-[5px] lg:mt-[10px]">
                    {HOME.WHAT_WE_TEACH.TITLE_PARTS.P2}
                    <span className="main-title-xl absolute bottom-[37%] left-[-50%] z-20 inline-block !font-urdType md:bottom-[25%]">
                      {HOME.WHAT_WE_TEACH.TITLE_PARTS.P3}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-30 mb-1 mt-[60px] lg:mt-[60px] 2xl:mt-[100px]">
            <div className="flex w-full flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:gap-8">
              <div className="teach-list order-2 flex w-full flex-col gap-14 sm:w-[45%] md:order-1 md:w-[30%] xl:w-[28%]">
                {whatWeTeachList.map((item, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div
                        key={item.id}
                        className="teach-item flex h-[83px]
              flex-col items-center justify-center gap-4 md:flex-row md:justify-end"
                      >
                        <div
                          className="item-name order-2
text-lg text-maqraaGray-100 md:order-1  md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl"
                        >
                          {item.text}
                        </div>
                        <div
                          className="icon order-1
flex w-[55px] min-w-[55px] items-center justify-center md:order-2 lg:min-w-[72px]"
                        >
                          <Image
                            src={item.icon}
                            alt="icon"
                            preview={false}
                            className="h-auto w-full object-scale-down"
                          />
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="teach-image order-1 mb-4 flex  w-full flex-col items-center justify-center sm:w-full sm:min-w-full md:order-2 md:w-[28%] md:min-w-[28%] lg:mb-[-100px] xl:w-[38%] xl:min-w-[38%]">
                <div className="main-item mb-[40px] flex flex-col items-center justify-center lg:gap-4">
                  <div className="item-name mb-2 text-center text-2xl text-maqraaGray drop-shadow-dark-4px md:text-2xl lg:mb-3 lg:text-4xl xl:text-[50px] 2xl:text-[64px]">
                    {HOME.WHAT_WE_TEACH.TEACHING_QURAN}
                  </div>
                  <div className="text-center  text-lg text-white drop-shadow-dark-4px md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px]">
                    {HOME.WHAT_WE_TEACH.MEANING_OF_WORDS}
                  </div>
                </div>
                <div className="max-w-[225px]  sm:block md:max-w-[325px] lg:max-w-[360px] 2xl:max-w-[420px] ">
                  <Image
                    src="assets/what-we-teach/quran-lg.svg"
                    preview={false}
                    className="h-auto w-full object-scale-down"
                  />
                </div>
              </div>
              <div className="teach-list order-3 flex w-full flex-col gap-14 sm:w-[45%] md:order-3  md:w-[30%] xl:w-[28%]">
                {whatWeTeachList.map((item, index) => {
                  if (index % 2 !== 0) {
                    return (
                      <div
                        key={item.id}
                        className="teach-item flex h-[83px]
              flex-col items-center justify-center gap-4 md:flex-row md:justify-start"
                      >
                        <div className="icon flex w-[55px] min-w-[55px] items-center justify-center lg:min-w-[72px]">
                          <Image
                            src={item.icon}
                            alt="icon"
                            preview={false}
                            className="h-auto w-full object-scale-down"
                          />
                        </div>
                        <div className="item-name text-lg text-maqraaGray-100  md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl">
                          {item.text}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeTeach;
