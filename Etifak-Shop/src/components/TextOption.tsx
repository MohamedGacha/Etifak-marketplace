import React from "react";
import ColorOptionCSS from "./ColorOption.module.css";

interface TextOptionProps {
  children: string;
  className?: string;
  selected?: boolean;
  onClick?: () => void;
}

const TextOption = ({
  children,
  className,
  selected,
  onClick,
}: TextOptionProps) => {
  return (
    <span
      onClick={onClick}
      className={`${ColorOptionCSS.container} ${className} ${
        selected ? ColorOptionCSS.selected : ""
      }`}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {children}
    </span>
  );
};

export default TextOption;
