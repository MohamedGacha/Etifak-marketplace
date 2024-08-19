import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import ShopButtonsCSS from "./ShopButtons.module.css";

interface CashProps {
  handleOnClick?: () => void;
}

const Cash = ({ handleOnClick }: CashProps) => {
  const numberOfProducts = 1;
  return (
    <div className={ShopButtonsCSS.cartContainer} onClick={handleOnClick}>
      <span className={ShopButtonsCSS.textPart}>{numberOfProducts}</span>
      <span className={ShopButtonsCSS.iconPart}>
        <FontAwesomeIcon icon={faCashRegister} />
      </span>
    </div>
  );
};

export default Cash;
