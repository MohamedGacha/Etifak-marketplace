import React, { ReactNode } from "react";
import ColorOptionCSS from "./ColorOption.module.css";

interface TextOptionProps {
  children: ReactNode;
  className?: string;
  selected?: boolean;
  onClick?: () => void;
}

const TextOption: React.FC<TextOptionProps> = ({
  children,
  className,
  selected,
  onClick,
}) => {
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
