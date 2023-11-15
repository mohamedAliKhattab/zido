import { GLOBAL } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import { PayIcon, SignUpNow } from "@/utils/icons";
import { Image } from "antd";
import React from "react";
import SignUpNowBtn from "@/components/organisms/SignUpNow";
import { stripeConfig } from "stripe.config";

const Footer = () => {
  return (
    <footer className="relative bg-maqraaDarkBlue py-8">
      <div className="top-section absolute left-0 top-[-180px]  z-20  h-[190px] w-full">
        <img
          src="assets/footer-t.png"
          className="h-full  w-full object-cover object-bottom 2xl:object-top"
        />
      </div>
      <div
        data-aos="fade-down-left"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="right-cloud absolute right-28 top-0 z-20 hidden w-[100px] md:block"
      >
        <img
          src="assets/footer-cloud-r.png"
          className="h-full w-full object-scale-down object-center"
        />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="left-cloud absolute left-28 top-0  z-20 hidden w-[115px] md:block"
      >
        <img
          src="assets/footer-cloud-l.png"
          className="h-full w-full object-scale-down object-center"
        />
      </div>
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="footer-logo mx-auto mb-2 w-[110px]"
        >
          <Image
            src="assets/footer-logo.png"
            alt="logo"
            preview={false}
            className="h-auto w-full object-scale-down"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="footer-slogan text-center text-sm text-maqraaLightBlue-200"
        >
          {GLOBAL.READ_SLOGAN_DOTS}
        </div>
        <div className="footer-actions mt-8 flex flex-wrap items-center justify-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <SignUpNowBtn />
          </div>

          {/* <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <MainButton
              onClick={() => window.open(stripeConfig.url)}
              color="orange"
              text={GLOBAL.SUBSCRIPTION}
              icon={<PayIcon />}
            />
          </div> */}
        </div>
        <div className="copyright mx-auto mt-12 text-center text-xs text-maqraaDarkBlue-100">
          {GLOBAL.COPYRIGHT}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
