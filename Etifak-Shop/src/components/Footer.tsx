import React from "react";
import FooterCSS from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const etifakLogo =
    "https://uppler-platform-etifak.s3.eu-west-3.amazonaws.com/image/5d/d5/96ac3f152b739329d84dcf50eeb2.png";
  return (
    <div className={FooterCSS.footerContent}>
      <div className={FooterCSS.container}>
        <div className={FooterCSS.links}>
          <div className={FooterCSS.etifakLogoDiv}>
            <img
              className={FooterCSS.logo}
              src={etifakLogo}
              alt="Etifak Logo"
            />
          </div>
          <div className={FooterCSS.companyLinks}>
            <span>Company</span>
            <ul className={FooterCSS.list}>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Our offer
                </a>
              </li>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Vendor
                </a>
              </li>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className={FooterCSS.legalLinks}>
            <span>Legal</span>
            <ul className={FooterCSS.list}>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Privacy Policy
                </a>
              </li>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Terms of use Vendors
                </a>
              </li>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Terms of use Buyer
                </a>
              </li>
            </ul>
          </div>
          <div className={FooterCSS.contactLinks}>
            <span>Contact</span>
            <ul className={FooterCSS.list}>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  FAQ
                </a>
              </li>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Contact Us
                </a>
              </li>
              <li className={FooterCSS.item}>
                <a href="#" className={FooterCSS.link}>
                  Book a demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={FooterCSS.socials}>
          <div className={FooterCSS.coords}>
            <div className={FooterCSS.location}>
              <FontAwesomeIcon
                className={FooterCSS.coordsIcon}
                icon={faLocationDot}
              />
              <span className={FooterCSS.coordsText}>
                Etifak SAS - 69 chemin du Klettenberg, 68100 Mulhouse, FRANCE
              </span>
            </div>
            <div className={FooterCSS.phone}>
              <FontAwesomeIcon
                className={FooterCSS.coordsIcon}
                icon={faPhone}
              />
              <span className={FooterCSS.coordsText}>+33 123456789</span>
            </div>
          </div>
          <div className={FooterCSS.follow}>
            <span className={FooterCSS.followText}>Follow us</span>
            <div className={FooterCSS.socialsLinks}>
              <a href="#" className={FooterCSS.socialLink}>
                <FontAwesomeIcon
                  className={FooterCSS.socialIcon}
                  icon={faYoutube}
                />
              </a>
              <a href="#" className={FooterCSS.socialLink}>
                <FontAwesomeIcon
                  className={FooterCSS.socialIcon}
                  icon={faTwitter}
                />
              </a>
              <a href="#" className={FooterCSS.socialLink}>
                <FontAwesomeIcon
                  className={FooterCSS.socialIcon}
                  icon={faLinkedinIn}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={FooterCSS.copyRight}>
          ©2024 Etifak. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
