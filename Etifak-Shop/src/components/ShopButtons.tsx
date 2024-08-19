import React from "react";
import ShopButtonsCSS from "./ShopButtons.module.css";
import Cart from "./Cart";
import Cash from "./Cash";

interface ShopButtonsProps {
  productName: string;
  productPrice: number;
}

const ShopButtons = ({ productName, productPrice }: ShopButtonsProps) => {
  const name = productName;
  const price = productPrice;

  return (
    <div className={ShopButtonsCSS.container}>
      <Cart></Cart>
      <Cash></Cash>
    </div>
  );
};

export default ShopButtons;
