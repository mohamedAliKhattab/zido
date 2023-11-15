import React from "react";
import { Image } from "antd";
import Link from "next/link";
import { GLOBAL } from "@/constants/i18n/ar";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex max-w-[90px] flex-col items-center justify-center !border-none !shadow-none !outline-none"
    >
      <Image
        preview={false}
        src="assets/logo.png"
        className="h-auto w-full object-scale-down"
        alt="Logo"
      />
      <span className="w-full self-center whitespace-nowrap text-center text-xs text-maqraaLightBlue">
        {GLOBAL.READ_SLOGAN}
      </span>
    </Link>
  );
};
export default Logo;
