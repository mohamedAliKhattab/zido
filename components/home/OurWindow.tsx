import { GLOBAL, HOME } from "@/constants/i18n/ar";
import VideoPlayer from "@/utils/videos";
import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import SignUpNowBtn from "../organisms/SignUpNow";
import useVideoByKey from "@/hooks/home/useVideoByKey";

const OurWindow = () => {
  const [videoToggleKey, setVideoToggleKey] = useState<number>(1);
  const video = "assets/video-1.mp4";
  const { data: windowVideo, refetch } = useVideoByKey("WINDOW_VIDEO");
  useEffect(() => {
    refetch();
  }, []);
  return (
    <section
      id="ourWindow-parent"
      className="ourWindow relative overflow-x-clip bg-white py-[200px] lg:py-[260px]"
    >
      <div className="map absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%]">
        <Image
          src="assets/our-window/map.svg"
          alt="map"
          className="!max-h-full !max-w-full object-scale-down object-center"
          wrapperClassName="h-full w-full pt-[160px] pb-[150px] px-[10px] sm:px-[30px]"
          preview={false}
        />
      </div>
      <div className="absolute right-[1%] top-[10%] h-[80px] w-[150px]  md:block lg:h-[100px] lg:w-[180px] 2xl:h-[130px] 2xl:w-[240px]">
        <Image
          src="/assets/our-window/window-top-r.svg"
          alt="bg"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="absolute bottom-[10%] left-[1%] h-[80px] w-[150px] md:block  lg:bottom-[20%] lg:h-[100px] lg:w-[180px] 2xl:h-[130px] 2xl:w-[240px]">
        <Image
          src="/assets/our-window/window-bottom-l.svg"
          alt="bg"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="green-star  absolute bottom-[30%] right-[2%] h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
        <Image
          src="/assets/our-window/green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="light-green-star  absolute bottom-[20%] right-[5%] h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
        <Image
          src="/assets/our-window/light-green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="light-green-star  absolute left-[5%] top-[20%] h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
        <Image
          src="/assets/our-window/light-green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="container relative z-30">
        <div id="ourWindow-section" className="section-header relative z-20">
          <div className="main-header  mb-8 lg:mb-4">
            <div className="title text-center">
              <div className="top-title main-title-sm mr-[-9%] text-maqraaGreen">
                {HOME.OUR_WINDOW.TITLE_PARTS.P1}
              </div>
              <div className="bottom-title main-title-lg  mr-[9%] mt-[2px] text-maqraaBlue md:mt-[5px] lg:mt-[10px]">
                {HOME.OUR_WINDOW.TITLE_PARTS.P2}
              </div>
            </div>
          </div>
        </div>
        {!!windowVideo ? (
          <div className="window-video-container mt-10 flex flex-col items-center justify-center gap-6 lg:mt-16 lg:gap-10">
            <div className="video-container relative mb-2 md:mb-4 lg:mb-8 xl:mb-10">
              <div className="absolute right-[-45px] top-0 hidden h-full sm:right-[-95px] sm:!w-[250px] sm:w-[100px] md:right-[-145px] md:block md:w-[150px] lg:right-[-195px] lg:w-[200px] xl:right-[-245px] xl:w-[250px]">
                <Image
                  src="assets/our-window/window-right.svg"
                  alt="map"
                  className="h-full !max-h-full min-h-full !max-w-full object-scale-down object-left"
                  wrapperClassName="h-full w-full"
                  preview={false}
                />
              </div>

              <div className="absolute left-[-45px] top-0 hidden h-full sm:left-[-95px] sm:!w-[250px] sm:w-[100px] md:left-[-145px] md:block md:w-[150px] lg:left-[-195px] lg:w-[200px] xl:left-[-245px] xl:w-[250px]">
                <Image
                  src="assets/our-window/window-left.svg"
                  alt="map"
                  className="h-full !max-h-full min-h-full !max-w-full object-scale-down object-right"
                  wrapperClassName="h-full w-full"
                  preview={false}
                />
              </div>
              <VideoPlayer
                videoToggleKey={videoToggleKey}
                videoIcon="assets/our-window/play-video.svg"
                videoUrl={windowVideo.videoUrl}
                videoClassNameList="!max-w-[550px] xl:!max-w-[600px]  2xl:!max-w-[750px] !w-[300px] sm:!w-[550px] xl:!w-[600px]  2xl:!w-[750px] cursor-pointer !rounded-[0px]"
                wrapperClassNameList="max-w-fit bg-maqraaGray-900 relative z-10 !border-[20px] lg:border-[30px] border-maqraaGray-900 !rounded-3xl w-auto cursor-pointer !rounded-[0px] overflow-hidden"
              />
            </div>
            <SignUpNowBtn />
          </div>
        ) : (
          <div className="text-center text-lg lg:text-xl xl:text-2xl">
            {GLOBAL.EMPTY_VIDEO}
          </div>
        )}
      </div>
    </section>
  );
};
export default OurWindow;
