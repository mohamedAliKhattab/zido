import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { HowTeachBg, HowTeachNewBg } from "@/utils/svgImages";
import { Col, Image, Row } from "antd";
import React from "react";

const HowWeTeach = () => {
  return (
    <section
      id="howTeach-parent"
      className="howTeach relative z-10 min-h-[500px] bg-white py-[120px] pb-[60px] lg:pb-[150px] lg:pt-[240px] xl:pb-[215px] 2xl:pb-[315px]"
    >
      <div className="earth absolute left-[2%] top-[11%]   h-[90px] w-[90px] sm:top-[15%] sm:block md:h-[150px] md:w-[150px] lg:h-[180px] lg:w-[180px]">
        <Image
          src="/assets/how-we-teach/earth.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          wrapperClassName="w-full h-full"
          preview={false}
        />
      </div>

      <div className="green-star  absolute right-[10%] top-[10%] h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:right-[45%] lg:top-[20%]">
        <Image
          src="/assets/how-we-teach/green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className=" absolute bottom-[18%] left-[5%] ">
        <div className="mr-[-50px] h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
          <Image
            src="/assets/how-we-teach/green-star.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
        <div className=" mt-3 h-[20px] w-[20px] md:h-[30px] md:w-[30px]">
          <Image
            src="/assets/how-we-teach/blue-sm-star.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
      </div>

      <div className="container relative z-30 h-full">
        <div className="content relative z-20">
          <div className="mt-[40px]">
            <Row
              gutter={[24, 54]}
              align={"top"}
              className="flex-col lg:flex-row"
            >
              <Col
                lg={12}
                className="order-2 w-full max-w-full lg:order-1 lg:w-auto
lg:max-w-[50%]"
              >
                <div className="section-image flex w-full  justify-end">
                  <div className="relative  mx-auto mt-4 h-[300px] w-[300px] max-w-[400px] md:h-[500px] md:w-[400px] lg:m-0 lg:w-full lg:max-w-full">
                    <div className="absolute right-[10%] top-[0%] flex h-[70px] w-auto max-w-full items-center justify-center md:right-[0%]  md:h-[120px] lg:h-[170px]">
                      <Image
                        src="assets/how-we-teach/mark.svg"
                        alt="icon"
                        preview={false}
                        wrapperClassName="w-full h-full"
                        className="relative z-10 h-full max-h-full w-full object-scale-down"
                      />
                    </div>

                    <div className="absolute right-0 top-0  h-full w-full px-6 lg:!w-[110%]">
                      <Image
                        src="assets/how-we-teach/girl_using_lap.svg"
                        alt="girl"
                        preview={false}
                        className="relative z-10  object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={12}
                className="justify-cente order-1 flex h-full w-full max-w-full flex-col lg:order-2
                lg:w-auto
lg:max-w-[50%]"
              >
                <div
                  id="howTeach-section"
                  className="section-header mt-4 xl:mr-[-120px]"
                >
                  <div className="section-title mb-4 mt-10 flex flex-col items-center justify-center text-3xl lg:text-4xl">
                    <div className="main-header">
                      <div className="title relative text-center">
                        <div className="top-title main-title-lg  mr-[-90%] text-maqraaGreen">
                          {HOME.HOW_WE_TEACH.TITLE_PARTS.P1}
                        </div>
                        <div className="bottom-title main-title-lg mt-[2px]  text-maqraaBlue  md:mt-[5px] lg:mt-[10px]">
                          {HOME.HOW_WE_TEACH.TITLE_PARTS.P2}
                          <span className="main-title-xl absolute bottom-[37%] left-[-50%] z-20 inline-block !font-urdType md:bottom-[25%]">
                            {HOME.HOW_WE_TEACH.TITLE_PARTS.P3}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="how-details mt-8 flex flex-col gap-2 md:mt-10 lg:gap-4 xl:mt-14">
                    <div className="text main-title-md mb-2 text-center text-maqraaGray lg:mb-4">
                      {HOME.HOW_WE_TEACH.LIST.ITEM1.TEXT}
                    </div>
                    <div className="text main-title-md text-center text-maqraaGray">
                      {HOME.HOW_WE_TEACH.LIST.ITEM2.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWeTeach;
