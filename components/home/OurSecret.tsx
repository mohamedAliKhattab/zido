import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { ourSecretList } from "@/constants/ourSecretList";
import { OrangeCheck } from "@/utils/svgImages";
import { Col, Image, Row } from "antd";
import React from "react";

const OurSecret = () => {
  return (
    <section
      id="ourSecret-parent"
      className="ourSecret relative z-20 bg-maqraaBlue bg-contain bg-center bg-no-repeat py-[60px] pb-[140px] lg:py-[90px]"
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

      <div className="book absolute left-[1%] top-[2%] h-[80] w-[100px] sm:left-[15%] md:h-[100] md:w-[130px] lg:h-[130px]">
        <Image
          preview={false}
          src="assets/our-secret/doodle.svg"
          alt="bg"
          className="max-h-full max-w-full object-scale-down"
          wrapperClassName="w-full"
        />
      </div>

      <div className="screen absolute right-[1%] top-[7%] h-[80] w-[80px] md:right-[15%] md:top-[15%] md:h-[100px] md:w-[100px] lg:h-[100px] xl:top-[18%]">
        <Image
          preview={false}
          src="assets/our-secret/video-call.svg"
          alt="bg"
          className="max-h-full max-w-full object-scale-down"
          wrapperClassName="w-full"
        />
      </div>

      <div className="absolute bottom-[10%] right-[-10px] h-[100] w-[100px]  md:h-[190px] md:w-[111px]">
        <Image
          preview={false}
          src="assets/our-secret/vector-1.svg"
          alt="bg"
          className="max-h-full max-w-full object-scale-down"
          wrapperClassName="w-full"
        />
      </div>

      <div className="absolute bottom-[10%] left-[-20px] h-[100] w-[100px]  md:h-[250px] md:w-[111px]">
        <Image
          preview={false}
          src="assets/our-secret/vector-2.svg"
          alt="bg"
          className="max-h-full max-w-full object-scale-down"
          wrapperClassName="w-full"
        />
      </div>

      <div className="container relative h-full">
        <div className="content relative z-20">
          <div id="ourSecret-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <div className="main-header">
                <div className="title relative text-center">
                  <div className="top-title main-title-sm  mr-[-90%] text-maqraaGreen">
                    {HOME.OUR_SECRET.TITLE_PARTS.P1}
                  </div>
                  <div className="bottom-title main-title-lg mt-[2px]  text-white  md:mt-[5px] lg:mt-[10px]">
                    {HOME.OUR_SECRET.TITLE_PARTS.P2}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[60px] md:mt-[80px]">
            <Row gutter={[24, 24]} align={"middle"} className="">
              {ourSecretList?.map((secret) => (
                <Col
                  xs={24}
                  md={12}
                  xl={8}
                  key={secret.id}
                  className="!w-full !max-w-full flex-[100%] md:!w-[50%] md:!max-w-[50%] md:flex-[50%] xl:!w-[33.3333%] xl:!max-w-[33.3333%] xl:flex-[33.333%]"
                >
                  <div className="secret-card h-full w-full rounded-3xl bg-white p-[1px]">
                    <div className="secret-content flex min-h-[50px] items-center gap-3 rounded-3xl  border-[1px] border-dashed border-black p-3">
                      <div className="icon min:w-[30px] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-dashed bg-maqraaGreen-100">
                        <Image
                          src="assets/our-secret/check.svg"
                          alt="icon"
                          className="h-[20px] w-[20px]"
                        />
                      </div>
                      <div className="text text-lg font-light text-black sm:text-lg xl:text-xl 2xl:text-2xl">
                        {secret.text}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurSecret;
