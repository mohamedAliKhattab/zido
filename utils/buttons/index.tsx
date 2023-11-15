import { Button } from "antd";
import React, { ReactNode } from "react";

type MainButtonProps = {
  text?: string;
  icon?: ReactNode;
  color?: "orange" | "yellow" | "dark-blue" | "blue" | "green";
  classNameList?: string;
  type?: "link" | "text" | "default" | "primary" | "dashed";
  onClick?: () => void;
  hrefLink?: string;
};

export const MainButton = ({
  text,
  icon,
  classNameList,
  type,
  color,
  hrefLink,
  onClick,
}: MainButtonProps) => {
  let colorStyle = "main-orange-btn";

  if (color && color === "yellow") {
    colorStyle = "main-yellow-btn";
  }

  if (color && color === "orange") {
    colorStyle = "main-orange-btn";
  }

  if (color && color === "dark-blue") {
    colorStyle = "main-dark-blue-btn";
  }

  if (color && color === "blue") {
    colorStyle = "main-blue-btn";
  }

  if (color && color === "green") {
    colorStyle = "main-green-btn";
  }
  return (
    <div>
      <Button
        // href={!!hrefLink ? hrefLink : ""}
        type={!!type ? type : "default"}
        onClick={() => !!onClick && onClick()}
        className={`main-btn flex items-center justify-center gap-2 ${colorStyle}  ${
          !!classNameList ? classNameList : ""
        }`}
      >
        {!!icon && (
          <span className="main-btn-icon !flex items-center justify-center">
            {icon}
          </span>
        )}
        {!!text && <span className="main-btn-text">{text}</span>}
      </Button>
    </div>
  );
};
