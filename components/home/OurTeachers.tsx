import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { teachersDetailsList } from "@/constants/teachersDetails";
import { Col, Image, Row } from "antd";
import React, { useState } from "react";

const OurTeachers = () => {
  return (
    <section
      id="ourTeachers-parent"
      className="ourTeachers relative z-20 bg-white py-[60px] pb-[180px] pt-[270px]"
    >
      <div className="absolute right-[25%] top-[10%] z-[3] hidden sm:block lg:left-[5%] lg:right-[initial] lg:top-[20%]">
        <div
          className="h-[40px] w-[40px]
lg:h-[40px] lg:w-[40px] 2xl:h-[60px] 2xl:w-[60px]"
        >
          <Image
            src="/assets/our-teachers/light-green-star.svg"
            alt="star"
            className="max-w-full object-scale-down"
            wrapperClassName="max-w-full"
            preview={false}
          />
        </div>
        <div
          className="mr-[40px] mt-3 h-[40px] w-[40px]
lg:h-[40px] lg:w-[40px] 2xl:h-[45px] 2xl:w-[45px]"
        >
          <Image
            src="/assets/our-teachers/blue-star.svg"
            alt="star"
            className="max-w-full object-scale-down"
            wrapperClassName="max-w-full"
            preview={false}
          />
        </div>
      </div>

      <div className="absolute right-[-130px] top-[5%] z-[2] h-[200px] w-[200px]  md:top-[10%] md:block lg:right-[-160px] lg:h-[260px]  lg:w-[260px] xl:right-[-210px] xl:h-[360px] xl:w-[360px] 2xl:right-[-260px] 2xl:h-[460px] 2xl:w-[460px]">
        <Image
          src="/assets/our-teachers/circle-t-r.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="absolute right-0 top-[15%] h-[150px] w-[150px]  md:top-[30%] md:block lg:h-[400px]  lg:w-[250px]  xl:h-[450] xl:w-[300px] 2xl:h-[500px] 2xl:w-[350px]">
        <Image
          src="/assets/our-teachers/circle-dots-t-r.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="absolute left-[10%] top-[21%] h-[80px] w-[50px] lg:left-[24%] lg:h-[90px] lg:w-[60px] xl:left-[20%] xl:h-[100px] xl:w-[70px] 2xl:h-[120px] 2xl:w-[80px]">
        <Image
          src="/assets/our-teachers/lamp.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="absolute bottom-[150px] right-[20%] h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]">
        <Image
          src="/assets/our-teachers/blue-star-rotate.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          wrapperClassName="w-full h-full"
          preview={false}
        />
      </div>

      <div className="absolute bottom-[120px] right-[50%] h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]">
        <Image
          src="/assets/our-teachers/light-green-star-rotate.svg"
          alt="earth"
          className="max-w-full object-scale-down"
          wrapperClassName="w-full h-full"
          preview={false}
        />
      </div>

      <div className="container h-full">
        <div className="content">
          <div
            id="ourTeachers-section"
            className="section-header relative z-20"
          >
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <div className="main-header mb-1 md:mb-8 lg:mb-4">
                <div className="title text-center">
                  <div className="bottom-title main-title-lg mr-[9%] mt-[2px] text-maqraaBlue md:mt-[5px] lg:mt-[10px]">
                    {HOME.TEACHERS.TITLE_PARTS.P1}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 lg:mt-10">
            <div className="flex flex-col md:flex-row">
              <div className="teachers-details relative z-20 order-2 w-full md:order-1 md:min-h-[300px] md:w-[58%]  xl:min-h-[400px] 2xl:min-h-[630px]">
                <ul className="details-list list-none">
                  {teachersDetailsList &&
                    teachersDetailsList.map((detail) => (
                      <li key={detail.id}>
                        <span>{detail.text}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="teachers-image order-1 h-[300px] w-full md:absolute md:left-[-5%] md:top-[260px] md:order-2 md:h-[550px] md:w-[48%] lg:h-[450px] xl:left-[-5%] xl:h-[650px] 2xl:left-[-9%] 2xl:h-[850px] 2xl:w-[55%]">
                <Image
                  src="assets/our-teachers/teachers-image.svg"
                  alt="teachers"
                  className="max-h-full w-full"
                  wrapperClassName="w-full h-full"
                  preview={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeachers;
