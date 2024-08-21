import React from "react";
import FooterCSS from "./Footer.module.css";
import etifakLogo from "https://uppler-platform-etifak.s3.eu-west-3.amazonaws.com/image/5d/d5/96ac3f152b739329d84dcf50eeb2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={FooterCSS.footerContent}>
      <div className={FooterCSS.container}></div>
    </div>
  );
};

export default Footer;
