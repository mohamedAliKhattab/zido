import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";
import useTestimonialsQuery from "@/hooks/home/useTestimonialsQuery";

const Testimonials = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [slides, setSlides] = useState<number>(3);
  const { data } = useTestimonialsQuery();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth) {
      setSlides(windowWidth >= 1024 ? 3 : 1);
    }
    if (data && data?.length <= 3) setSlides(1);
  }, [windowWidth, data, data?.length]);

  const rate = (rate: number) => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <div
          className={`star h-[30px] w-[30px] md:h-[40px] md:w-[40px] ${
            rate < index + 1 && "grayscale-[1]"
          }`}
        >
          <Image
            preview={false}
            src="assets/testimonials/star.svg"
            alt="rate"
            className="h-full w-full object-scale-down object-center"
            wrapperClassName="w-full h-full"
          />
        </div>
      );
    }
    return stars;
  };
  return (
    <section
      id="testimonials-parent"
      className="testimonials relative z-40 bg-maqraaGreen py-[40px] pb-[150px]"
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

      <div className=" absolute bottom-[13%] left-[5%] ">
        <div className="mr-[-50px] h-[35px] w-[35px] md:h-[50px] md:w-[50px]">
          <Image
            src="/assets/testimonials/green-star-b-l.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
        <div className=" mt-3 h-[35px] w-[40px] md:h-[50px] md:w-[50px]">
          <Image
            src="/assets/testimonials/blue-star-b-l.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
      </div>

      <div className=" absolute right-[5%] top-[1%] ">
        <div className="mr-[50px] h-[35px] w-[35px] md:h-[50px] md:w-[50px]">
          <Image
            src="/assets/testimonials/green-star-t-r.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
        <div className=" mt-3 h-[35px] w-[35px] md:h-[50px] md:w-[50px]">
          <Image
            src="/assets/testimonials/blue-star-t-r.svg"
            alt="star"
            className="max-w-full object-scale-down"
            preview={false}
          />
        </div>
      </div>
      <div className="absolute bottom-[10%] right-[5%] h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
        <Image
          src="/assets/testimonials/green-star.svg"
          alt="star"
          className="max-w-full object-scale-down"
          preview={false}
        />
      </div>
      <div className="container relative h-full">
        <div className="content relative z-20">
          <div id="testimonials-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <div className="main-header mb-8 lg:mb-4">
                <div className="title text-center">
                  <div className="top-title main-title-lg text-white">
                    {HOME.TESTIMONIALS.TITLE_PARTS.P1}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-10">
            {data && data?.length ? (
              <div
                className={`message-swiper testimonials-swiper ${
                  slides && slides <= 3 && "oneslide-swiper"
                }`}
              >
                <Swiper
                  key={2}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Autoplay, Navigation]}
                  slidesPerView={slides}
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
                  {data &&
                    data?.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="swiper-item-container  relative h-full w-full">
                          <div className="swiper-item-content absolute left-0 top-0 h-full w-full bg-white">
                            <div className="testimonials-header flex items-center gap-4">
                              <div className="user-image h-[50px] w-[50px] md:h-[80px] md:w-[80px]">
                                <Image
                                  preview={false}
                                  src="assets/testimonials/avatar.png"
                                  alt="user image"
                                  className="h-full w-full object-cover object-center"
                                  wrapperClassName="w-full h-full"
                                />
                              </div>
                              <div className="user-details">
                                <div className="name">{testimonial.name}</div>
                                <div className="date">
                                  {moment(testimonial?.createdDate).format(
                                    "DD/MM/YYYY"
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="stars flex items-center justify-center gap-2">
                              {rate(Number(testimonial.rate) || 0)}
                            </div>
                            <div className="testimonials-text overflow-auto px-1 text-center text-base 2xl:text-lg">
                              {testimonial?.opinions}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mx-auto mt-[40px] max-w-[300px] max-sm:mt-[-10px] lg:mt-[100px]">
                  <Image
                    preview={false}
                    src="/assets/testimonials/shadow.svg"
                    alt="shadow"
                    className="max-h-full w-full object-scale-down"
                    wrapperClassName="w-full"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center text-lg text-white lg:text-xl xl:text-2xl">
                {GLOBAL.EMPTY}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
