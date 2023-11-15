import { faqList } from "@/constants/faqList";
import { GLOBAL, HOME } from "@/constants/i18n/ar";
import useFaqQuery from "@/hooks/home/useFaqQuery";
import { Collapse, Image } from "antd";
import React from "react";
import parse from "html-react-parser";

const Faq = () => {
  const { data } = useFaqQuery();

  return (
    <section id="faq-parent" className="faq relative z-10 bg-white py-[200px]">
      <div className="absolute right-[5%] top-[13%] h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
        <Image
          src="/assets/faq/green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>

      <div className="absolute left-[5%] top-[13%] h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
        <Image
          src="/assets/faq/blue-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="container relative h-full">
        <div className="content relative z-20">
          <div id="faq-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <div className="main-header mb-8 lg:mb-4">
                <div className="flex">
                  <div className="title w-fit text-center">
                    <div className="top-title main-title-lg mr-[-10%] text-maqraaGreen">
                      {HOME.FAQ.TITLE_PARTS.P1}
                    </div>
                    <div className="top-title main-title-xs mt-2 text-maqraaGreen">
                      {HOME.FAQ.TITLE_PARTS.P3}
                    </div>
                  </div>
                  <div className="char  main-title-xl text-maqraaBlue">
                    {HOME.FAQ.TITLE_PARTS.P2}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-10">
            {data && data?.length ? (
              <div className="mx-auto max-w-[900px]">
                <Collapse
                  accordion
                  items={data?.map((item, index) => ({
                    key: index + 1,
                    label: item.title,
                    children: parse(item.answer),
                    style: { order: item?.order || 500 },
                  }))}
                  bordered={false}
                  defaultActiveKey={["1"]}
                />
              </div>
            ) : (
              <div className="text-center text-lg lg:text-xl xl:text-2xl">
                {GLOBAL.EMPTY}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
