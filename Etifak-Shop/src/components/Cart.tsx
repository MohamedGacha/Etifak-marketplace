import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ShopButtonsCSS from "./ShopButtons.module.css";

interface CartProps {
  handleOnClick?: () => void;
}

const Cart = ({ handleOnClick }: CartProps) => {
  const numberOfProducts = 1;
  return (
    <div className={ShopButtonsCSS.cartContainer} onClick={handleOnClick}>
      <span className={ShopButtonsCSS.textPart}>{numberOfProducts}</span>
      <span className={ShopButtonsCSS.iconPart}>
        <FontAwesomeIcon icon={faCartPlus} />
      </span>
    </div>
  );
};

export default Cart;
