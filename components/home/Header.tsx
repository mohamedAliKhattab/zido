import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import { SignUpNow } from "@/utils/icons";
import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import VideoPlayer from "@/utils/videos";
import SignUpNowBtn from "@/components/organisms/SignUpNow";
import HomeNavbar from "../organisms/HomeNavbar";

const Header = () => {
  const video = "assets/header-video.mp4";
  return (
    <section
      id="header-section"
      className="header relative min-h-[calc(100vh-58px)] overflow-x-clip bg-white xl:min-h-[calc(100vh-58px)]"
    >
      <div className="green-circle absolute right-[-130px] top-[-130px] h-[200px] w-[200px]  rounded-full  bg-maqraaGreen  sm:h-[240px] sm:w-[240px]  "></div>
      <div className="book absolute right-[15%] top-[12%] hidden w-[90px] md:block xl:w-[95px] 2xl:w-[110px]">
        <Image
          preview={false}
          src="/assets/header/quran.svg"
          alt="icon"
          className="max-w-full object-scale-down"
        />
      </div>
      <div className="mic absolute right-[12%] top-[45%] hidden w-[70px]  md:block lg:w-[95px] 2xl:w-[110px]">
        <Image
          preview={false}
          src="/assets/header/mic.svg"
          alt="icon"
          className="max-w-full object-scale-down"
        />
      </div>

      <div className="star absolute left-[5%] top-[5%] w-[70px] md:left-[15%]  md:top-[10%] md:block lg:left-[20%] lg:top-[16%] lg:w-[90px] 2xl:w-[115px]">
        <Image
          preview={false}
          src="/assets/header/star.svg"
          alt="icon"
          className="max-w-full object-scale-down"
        />
      </div>
      {/* <div className="crown absolute right-[22%] top-[35%] hidden w-[70px] md:block lg:w-[90px] 2xl:w-[130px]">
        <Image
          preview={false}
          src="/assets/header/crown.svg"
          alt="icon"
          className="max-w-full"
        />
      </div> */}
      <div className="palm absolute bottom-[20%] left-[7%] hidden w-[70px] md:block lg:w-[120px] xl:w-[160px] 2xl:w-[220px]">
        <Image
          preview={false}
          src="/assets/header/palm-tree.svg"
          alt="icon"
          className="max-w-full"
        />
      </div>
      <div className="cloud absolute left-[2%] top-[2%] hidden w-[70px] md:block lg:left-[5%] lg:top-[8%] lg:w-[90px] xl:w-[100px] 2xl:w-[110px]">
        <Image
          preview={false}
          src="/assets/header/cloud.svg"
          alt="icon"
          className="max-w-full"
        />
      </div>
      <div className="container relative z-30 flex h-full min-h-[calc(100vh-58px)] items-center justify-center">
        <div className="header-center my-8 flex flex-col items-center justify-center gap-8">
          <div className="logo-container">
            <div className="flex flex-col  items-center justify-center gap-4">
              <div className="top-text text-2xl  font-medium text-maqraaBlue lg:text-4xl 2xl:text-[45px]">
                {HOME.HEADER.RISE_UP}
              </div>
              <div className="flex items-center gap-4">
                <div className="right-text z-2 text-2xl font-medium text-maqraaGreen lg:text-4xl 2xl:text-[45px]">
                  {HOME.HEADER.READ}
                </div>
                <div className="header-logo relative h-[220px] w-[220px] sm:h-[250px] sm:w-[250px] 2xl:h-[350px] 2xl:w-[350px]">
                  <Image
                    src="/assets/header/logo.svg"
                    alt="logo"
                    preview={false}
                    className="h-full w-full"
                  />
                </div>
                <div className="left-text z-2 text-2xl font-medium text-maqraaGreen lg:text-4xl 2xl:text-[45px]">
                  {HOME.HEADER.RECITE}
                </div>
              </div>
            </div>
          </div>
          <div className="header-title my-2 text-center text-2xl font-medium text-black lg:text-4xl 2xl:text-[45px]">
            {HOME.HEADER.TITLE}
          </div>
          <div className="header-signup">
            <SignUpNowBtn />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="relative">
          <div className="absolute left-[10%] top-[-50%] h-[70px] w-[140px] rounded-t-full bg-maqraaYellow"></div>
          <HomeNavbar />
        </div>
      </div>
    </section>
  );
};
export default Header;
