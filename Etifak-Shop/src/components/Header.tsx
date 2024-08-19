import React from "react";
import HeaderCSS from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";
import HeaderPrice from "./HeaderPrice";
import ShopButtons from "./ShopButtons";

interface HeaderProps {
  productName: string;
  productPrice: number;
}

const Header = ({ productName, productPrice }: HeaderProps) => {
  return (
    <div className={HeaderCSS.container}>
      <HeaderTitle>{productName}</HeaderTitle>
      <HeaderPrice>{productPrice}</HeaderPrice>
      <ShopButtons
        productName={productName}
        productPrice={productPrice}
      ></ShopButtons>
    </div>
  );
};

export default Header;
