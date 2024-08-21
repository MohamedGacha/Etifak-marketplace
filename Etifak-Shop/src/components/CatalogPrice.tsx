import React from "react";
import CatalogPriceCSS from "./CatalogPrice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";

interface CatalogPriceProps {
  children: number;
  mode?: "discount" | "decrease" | "none"; // Specify the allowed mode values
  oldPrice?: number;
}

const CatalogPrice: React.FC<CatalogPriceProps> = ({
  children,
  mode = "none",
  oldPrice,
}) => {
  const price = children.toFixed(2);

  // Determine the CSS class for the price
  const priceClass = `${CatalogPriceCSS.priceItemHighlighted} ${
    mode === "decrease"
      ? CatalogPriceCSS.priceItemDecrease
      : CatalogPriceCSS.priceItemBold
  } ${
    mode !== "discount" && mode !== "decrease"
      ? CatalogPriceCSS.priceItemFederalBlue
      : ""
  }`;

  return (
    <div className={CatalogPriceCSS.priceContainer}>
      {/* Render the old price only if the mode is "discount" */}
      {mode === "discount" && oldPrice && (
        <div className={CatalogPriceCSS.oldPrice}>
          USD {oldPrice.toFixed(2)}
        </div>
      )}

      <div className={CatalogPriceCSS.subPriceItem}>
        <span className={priceClass}>USD {price}</span>
        <span className={CatalogPriceCSS.smallUnit}>
          / unit{" "}
          {mode === "decrease" && (
            <span className={CatalogPriceCSS.decreaseIcon}> | </span>
          )}
          {mode === "decrease" && (
            <FontAwesomeIcon
              icon={faArrowTrendDown}
              className={CatalogPriceCSS.decreaseIcon}
            />
          )}
        </span>
      </div>

      <div
        className={`${CatalogPriceCSS.deliveryInfo} ${CatalogPriceCSS.subPriceItem}`}
      >
        <span>Delivery - USD 20.00</span>
        <span className={CatalogPriceCSS.exw}>EXW</span>
      </div>
    </div>
  );
};

export default CatalogPrice;
