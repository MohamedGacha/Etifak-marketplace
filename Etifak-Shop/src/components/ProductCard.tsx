import React, { useState } from "react";
import ProductCardCSS from "./ProductCard.module.css";
import mainImage from "../assets/main_product.jpg";
import Like from "./Like";
import Expand from "./Expand";
import StarRating from "./StarRating";
import CatalogPrice from "./CatalogPrice";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons"; // Import the decrease icon

interface ProductCardProps {
  productID: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  mode?: "discount" | "decrease" | "none";
}

const ProductCard: React.FC<ProductCardProps> = ({
  productID,
  title,
  price,
  oldPrice,
  rating,
  mode = "none",
}) => {
  const [liked, setLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const finalPrice = price.toFixed(2);

  return (
    <div className={ProductCardCSS.container}>
      {isExpanded && (
        <div
          className={ProductCardCSS.overlay}
          onClick={() => setIsExpanded(false)}
        ></div>
      )}

      <img
        src={mainImage}
        alt="Product"
        className={`${ProductCardCSS.productImage} ${
          isExpanded ? ProductCardCSS.expandedImage : ""
        }`}
      />

      {/* Conditionally render the discount label or decrease icon */}
      {mode === "discount" && oldPrice && (
        <div className={ProductCardCSS.discount}>-30%</div>
      )}
      {mode === "decrease" && (
        <div className={ProductCardCSS.decreaseIconContainer}>
          <FontAwesomeIcon
            icon={faArrowTrendDown}
            className={ProductCardCSS.decreaseIcon}
          />
        </div>
      )}

      <Like
        onLike={() => setLiked(!liked)}
        liked={liked}
        classNamePos={ProductCardCSS.likePos}
      />

      <Expand onExpand={handleExpand} classNamePos={ProductCardCSS.expandPos} />

      <div className={ProductCardCSS.cartContainer}>
        <Cart></Cart>
      </div>

      <div className={ProductCardCSS.productTitle}>{title}</div>

      <StarRating>{rating}</StarRating>

      <div className={ProductCardCSS.priceContainer}>
        <CatalogPrice mode={mode} oldPrice={oldPrice}>
          {price}
        </CatalogPrice>
      </div>
    </div>
  );
};

export default ProductCard;
