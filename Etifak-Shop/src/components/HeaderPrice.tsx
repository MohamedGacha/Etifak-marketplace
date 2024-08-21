import React from "react";
import HeaderCSS from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

interface HeaderPriceProps {
  children: number;
  mode?: "discount" | "decrease";
  oldPrice?: number;
}

const HeaderPrice: React.FC<HeaderPriceProps> = ({
  children,
  mode,
  oldPrice,
}) => {
  const price = children.toFixed(2);

  // Determine the CSS class for the price
  const priceClass = `${HeaderCSS.priceItemHighlighted} ${
    HeaderCSS.priceItemBold
  } ${mode === "decrease" ? HeaderCSS.priceItemDecrease : ""}`;

  return (
    <div className={HeaderCSS.priceContainer}>
      {/* Render the old price only if the mode is "discount" */}
      {mode === "discount" && oldPrice && (
        <div className={HeaderCSS.oldPrice}>USD {oldPrice.toFixed(2)}</div>
      )}

      <div className={HeaderCSS.priceItem}>
        <span className={priceClass}>USD {price}</span>
        <span className={HeaderCSS.bigUnit}>/ unit</span>
      </div>

      <div className={HeaderCSS.subPriceItem}>
        <span className={HeaderCSS.priceItemBold}>USD {price}</span>
        <span className={HeaderCSS.smallUnit}>
          / unit <FontAwesomeIcon icon={faCircleDollarToSlot} />
        </span>
      </div>

      <div className={`${HeaderCSS.deliveryInfo} ${HeaderCSS.subPriceItem}`}>
        <span>Delivery - USD 20.00</span>
        <span className={HeaderCSS.exw}>EXW</span>
      </div>
    </div>
  );
};

export default HeaderPrice;
