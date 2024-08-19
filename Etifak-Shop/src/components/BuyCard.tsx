import React from "react";
import BuyCardCSS from "./BuyCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ProductViewCSS from "./ProductView.module.css";
import StarRating from "./StarRating";
import HeaderPrice from "./HeaderPrice";
import ShopButtons from "./ShopButtons";

interface BuyCardProps {
  productID: string;
}

const BuyCard = ({ productID }: BuyCardProps) => {
  let productName = "Lorem ipsum dolor sit amet.";
  const oldPrice = 399.99;
  const productPrice = 299.99;
  return (
    <div className={BuyCardCSS.container}>
      <div className={BuyCardCSS.topDiv}>
        <div className={BuyCardCSS.topLeftDiv}>
          <span className={BuyCardCSS.title}>{productName}</span>
          <br />
          <span className={BuyCardCSS.productRef}>
            <span className={BuyCardCSS.refPart}>Ref</span> : {productID}
          </span>
          <br />
          <a href="#" className={BuyCardCSS.vendorLink}>
            Vendor Name
          </a>
          <br />
          <StarRating
            className={BuyCardCSS.starRating}
            onRate={(rating) => console.log(`Selected rating: ${rating}`)}
          >
            {5}
          </StarRating>
        </div>
        <div className={BuyCardCSS.topRightDiv}>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <div className={BuyCardCSS.bottomDiv}>
        <div className={BuyCardCSS.bottomLeftDiv}>
          <div className={BuyCardCSS.oldPrice}>USD {oldPrice}</div>
          <HeaderPrice>{productPrice}</HeaderPrice>
        </div>
        <div className={BuyCardCSS.bottomRighttDiv}>
          <ShopButtons
            productName={productName}
            productPrice={productPrice}
          ></ShopButtons>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
