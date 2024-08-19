import React from "react";
import ExpandCSS from "./Expand.module.css";
import LikeCSS from "./Like.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

interface ExpandProps {
  onExpand: () => void;
  classNamePos?: string;
}

const Expand = ({ onExpand, classNamePos }: ExpandProps) => {
  return (
    <button
      type="button"
      onClick={onExpand}
      className={LikeCSS.likeButton + " " + classNamePos}
    >
      <FontAwesomeIcon icon={faMaximize} />
    </button>
  );
};

export default Expand;
