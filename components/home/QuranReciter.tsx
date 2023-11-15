import { GLOBAL, HOME } from "@/constants/i18n/ar";
import useVideoByKey from "@/hooks/home/useVideoByKey";
import VideoPlayer from "@/utils/videos";
import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";

const QuranReciter = () => {
  const [videoToggleKey, setVideoToggleKey] = useState<number>(1);
  const video = "assets/header-video.mp4";
  const { data: quranVideo, refetch } = useVideoByKey("QURAN_VIDEO");
  useEffect(() => {
    refetch();
  }, []);
  return (
    <section className="relative bg-white py-[100px] pb-[170px]">
      <div className="sm-yellow-stars absolute left-[10%] top-[10%] hidden h-[40px] w-[40px] md:left-[25%] md:block lg:left-[35%]">
        <Image
          src="/assets/quran/yellow-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="sm-yellow-stars absolute bottom-[30%] right-[3%] h-[60px] w-[60px]">
        <Image
          src="/assets/quran/yellow-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="sm-yellow-stars absolute bottom-[13%] left-[15%] h-[60px] w-[60px]">
        <Image
          src="/assets/quran/yellow-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="sm-blue-stars absolute left-[2%] top-[7%] h-[50px] w-[50px] xl:left-[9%]">
        <Image
          src="/assets/quran/blue-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="sm-blue-stars absolute right-[32%] top-[25%] hidden h-[25px] w-[25px] md:block">
        <Image
          src="/assets/quran/blue-sm-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="outline-yellow-stars absolute right-[10%] top-[5%] h-[100px] w-[100px] md:h-[130px] md:w-[130px]">
        <Image
          src="/assets/quran/outline-yellow-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="earth absolute bottom-[40%] left-[3%] h-[70px] w-[100px] md:bottom-[20%] md:h-[120px] md:w-[150px]">
        <Image
          src="/assets/quran/earth.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="container relative">
        <div className="main-header mb-8 lg:mb-4">
          <div className="title text-center">
            <div className="top-title main-title-lg text-maqraaGreen">
              {HOME.QURAN_RECITER.TITLE_PARTS.P1}
            </div>
            <div className="bottom-title main-title-lg  mr-[7%] mt-[2px] text-maqraaBlue md:mt-[5px] lg:mt-[10px]">
              {HOME.QURAN_RECITER.TITLE_PARTS.P2}
            </div>
          </div>
        </div>
        <Row
          gutter={[24, 50]}
          align={"middle"}
          className="mt-0 flex-col lg:mt-[-40px] lg:flex-row"
        >
          <Col
            sm={24}
            lg={15}
            className="order-2 max-w-full lg:order-1
lg:max-w-[62.5%]"
          >
            {!!quranVideo ? (
              <div className="video-container">
                <div
                  onClick={() => setVideoToggleKey(videoToggleKey + 1)}
                  className="video-wrapper relative mx-auto w-auto max-w-fit cursor-pointer p-[2px] sm:p-2 lg:m-0 "
                >
                  <div className="video-border absolute left-0 top-0 z-20 h-full w-full overflow-hidden">
                    <img
                      src="/assets/quran/video-border.png"
                      alt="border"
                      className="h-full max-h-full w-full max-w-full object-fill object-center"
                    />
                  </div>

                  <VideoPlayer
                    videoToggleKey={videoToggleKey}
                    videoIcon="assets/quran/black-player.png"
                    videoUrl={quranVideo.videoUrl}
                    videoClassNameList="!max-w-[550px] xl:!max-w-[630px] 2xl:!max-w-[730px] !w-[300px] sm:!w-[550px] xl:!w-[630px] 2xl:!w-[730px] cursor-pointer !rounded-[9px]"
                    wrapperClassNameList="max-w-fit relative z-10 !rounded-3xl w-auto cursor-pointer !rounded-[9px] overflow-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center text-lg lg:text-xl xl:text-2xl">
                {GLOBAL.EMPTY_VIDEO}
              </div>
            )}
          </Col>
          <Col
            sm={24}
            lg={9}
            className="order-1 max-w-full lg:order-2
lg:max-w-[37.5%]"
          >
            <div className="children-image max-w-[300px] md:max-w-[350px] lg:max-w-full">
              <Image
                src="/assets/quran/children.png"
                alt="children"
                preview={false}
                className="w-full object-scale-down"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default QuranReciter;
