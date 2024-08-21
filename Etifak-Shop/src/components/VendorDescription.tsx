import React from "react";
import VendorDescriptionCSS from "./VendorDescription.module.css";
import defaultAvatar from "../assets/vendor.jpeg";

interface VendorDescriptionProps {
  description: string;
  avatar?: string;
}

const VendorDescription = ({ description, avatar }: VendorDescriptionProps) => {
  return (
    <div className={VendorDescriptionCSS.container}>
      <div className={VendorDescriptionCSS.descriptioon}>{description}</div>
      <div className={VendorDescriptionCSS.avatarContainer}>
        <img
          src={defaultAvatar}
          alt=""
          className={VendorDescriptionCSS.avatar}
        />
      </div>
    </div>
  );
};

export default VendorDescription;
