import React from "react";
import HeaderCSS from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

interface HeaderPriceProps {
  children: number;
}

const HeaderPrice = ({ children }: HeaderPriceProps) => {
  const price = children.toFixed(2);

  return (
    <div className={HeaderCSS.priceContainer}>
      <div className={HeaderCSS.priceItem}>
        <span
          className={
            HeaderCSS.priceItemHighlighted + " " + HeaderCSS.priceItemBold
          }
        >
          USD {price}
        </span>
        <span className={HeaderCSS.bigUnit}>/ unit</span>
      </div>
      <div className={HeaderCSS.subPriceItem}>
        <span className={HeaderCSS.priceItemBold}>USD {price}</span>
        <span className={HeaderCSS.smallUnit}>
          / unit <FontAwesomeIcon icon={faCircleDollarToSlot} />
        </span>
      </div>
      <div className={HeaderCSS.deliveryInfo + " " + HeaderCSS.subPriceItem}>
        <span>Delivery - USD 20.00</span>
        <span className={HeaderCSS.exw}>EXW</span>
      </div>
    </div>
  );
};

export default HeaderPrice;
