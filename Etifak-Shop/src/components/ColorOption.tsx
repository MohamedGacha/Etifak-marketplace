import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import ColorOptionCSS from "./ColorOption.module.css";

interface ColorOptionProps {
  hexCode: string;
  children: string;
  className?: string;
  selected?: boolean;
  onClick?: () => void;
}

const ColorOption = ({
  hexCode,
  children,
  className,
  selected,
  onClick,
}: ColorOptionProps) => {
  return (
    <span
      onClick={onClick}
      className={`${ColorOptionCSS.container} ${className} ${
        selected ? ColorOptionCSS.selected : ""
      }`}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <FontAwesomeIcon
        icon={faSquare}
        className={ColorOptionCSS.square}
        style={{ color: hexCode }}
      />
      {" " + children}
    </span>
  );
};

export default ColorOption;
