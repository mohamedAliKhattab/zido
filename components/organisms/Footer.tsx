import { GLOBAL } from "@/constants/i18n/ar";
import { Form, Image, Input } from "antd";
import React, { useState } from "react";
import SignUpNowBtn from "@/components/organisms/SignUpNow";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ar from "react-phone-number-input/locale/ar.json";
import { MainButton } from "@/utils/buttons";

const { TextArea } = Input;

const Footer = () => {
  const [phone, setPhone] = useState<string>();

  return (
    <footer className="bg relative  z-40 mt-[-100px] overflow-hidden py-8 pt-[200px]">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          preview={false}
          src="assets/footer-bg.png"
          className="!h-full !w-full min-w-[1920px] object-cover object-top"
          alt="footer"
          wrapperClassName="!w-full !h-full"
        />
      </div>

      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative z-10 order-2 max-lg:mt-4 max-md:mx-auto md:w-[38%] lg:order-1 lg:w-[58%]">
            <div className="flex flex-col items-center justify-center">
              <div className="footer-logo mx-auto mb-1 w-[110px]">
                <Image
                  src="assets/footer-logo.svg"
                  alt="logo"
                  preview={false}
                  className="h-auto w-full w-full object-scale-down"
                />
              </div>
              <div className="footer-slogan text-center text-sm text-white">
                {GLOBAL.READ_SLOGAN_DOTS}
              </div>
              <div className="footer-actions mt-2 flex flex-wrap items-center justify-center gap-4">
                <div>
                  <SignUpNowBtn />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-form relative z-10 order-1  w-full md:w-[58%] lg:order-2 lg:w-[38%]">
            <div className="main-header flex flex-col items-center justify-center">
              <div className="title relative w-fit text-center">
                <div className="top-title main-title-sm  mr-[-110%] text-maqraaGreen">
                  {GLOBAL.CONTACT_US.TITLE_PARTS.P1}
                </div>
                <div className="bottom-title main-title-sm mt-[2px]  text-white  md:mt-[5px] lg:mt-[10px]">
                  {GLOBAL.CONTACT_US.TITLE_PARTS.P2}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Form className="flex flex-col gap-3">
                <Input
                  name="email"
                  className="h-[40px]"
                  placeholder={GLOBAL.CONTACT_US.EMAIL}
                  required
                />
                <PhoneInput
                  defaultCountry="SA"
                  className="contact-phone rtl-element h-[40px]"
                  placeholder={GLOBAL.CONTACT_US.PHONE}
                  value={phone}
                  onChange={setPhone}
                  labels={ar}
                />
                <TextArea
                  rows={4}
                  placeholder={GLOBAL.CONTACT_US.MESSAGE}
                  maxLength={200}
                  className="!resize-none"
                />
                <MainButton
                  color="green"
                  classNameList="mx-auto"
                  text={GLOBAL.CONTACT_US.TITLE}
                />
              </Form>
            </div>
          </div>
        </div>
        <div className="copyright relative z-10 mx-auto mt-12 text-center text-xs text-white">
          {GLOBAL.COPYRIGHT}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
