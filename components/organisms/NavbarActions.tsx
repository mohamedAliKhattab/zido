import React from "react";
import { GLOBAL } from "@/constants/i18n/ar";
import { MainButton } from "utils/buttons";
import { PayIcon } from "@/utils/icons";

type PaySubscriptionProps = {
  onClick?: () => void;
};
export const PaySubscription = ({ onClick }: PaySubscriptionProps) => {
  return (
    <MainButton
      color="orange"
      text={GLOBAL.SUBSCRIPTION}
      icon={<PayIcon />}
      onClick={onClick}
      type="primary"
    />
  );
};
