import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import BackButtonCSS from "./BackButton.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface BackButtonProps {
  handleOnClick?: () => void;
}

const BackButton = ({ handleOnClick }: BackButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-primary btn-lg " + BackButtonCSS.backButton}
      onClick={handleOnClick}
    >
      <FontAwesomeIcon icon={faArrowLeftLong} />
      <span>Back to Catalog</span>
    </button>
  );
};

export default BackButton;
