import { GLOBAL } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import React, { useState } from "react";
import Calendly from "@/components/organisms/Calendly";
import { SignUpNow } from "@/utils/icons";
import { useRouter } from "next/router";
import { signUpForm } from "stripe.config";
type SignUpNowBtnProps = {
  classNameList?: string;
};
const SignUpNowBtn = ({ classNameList }: SignUpNowBtnProps) => {
  const [togglePopup, setTogglePopup] = useState<boolean>(false);
  const router = useRouter();
  const handleCalendly = () => {
    // setTogglePopup(true);
    window.open(signUpForm.url, "_blank");
  };
  return (
    <>
      <MainButton
        onClick={handleCalendly}
        color="green"
        text={GLOBAL.SIGN_UP}
        classNameList={classNameList}
        // icon={<SignUpNow />}
      />
      {<Calendly togglePopup={togglePopup} setTogglePopup={setTogglePopup} />}
    </>
  );
};
export default SignUpNowBtn;
