import React, { useState, useEffect } from "react";
import ProductSlideCSS from "./ProductSlide.module.css";
import ProductViewCSS from "./ProductView.module.css";
import mainImage from "../assets/main_product.jpg";
import secondaryImage from "../assets/secondary_image.png";
import secondaryImage2 from "../assets/secondary_image.png";
import Like from "./Like";
import Expand from "./Expand";
import Slider from "./Slider";

interface ProductSlideProps {
  productID: string;
}

const ProductSlide = ({ productID }: ProductSlideProps) => {
  const [liked, setLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState(mainImage);

  // Define the image list
  const imageList = [mainImage, secondaryImage, secondaryImage2];

  // Toggle the expanded state
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle escape key press to close the expanded image
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Update image to display when a new image is selected
  const handleImageSelect = (image: string) => {
    setImageToDisplay(image);
  };

  return (
    <div
      className={`${ProductSlideCSS.container} ${ProductViewCSS.leftGridItem}`}
    >
      {/* Dark overlay for expanded image */}
      {isExpanded && (
        <div
          className={ProductSlideCSS.overlay}
          onClick={() => setIsExpanded(false)}
        ></div>
      )}

      {/* Displayed image with conditional expanded style */}
      <img
        src={imageToDisplay}
        alt="Product"
        className={`${ProductSlideCSS.productImage} ${
          isExpanded ? ProductSlideCSS.expandedImage : ""
        }`}
      />

      {/* Discount label */}
      <div className={ProductSlideCSS.discount}>-30%</div>

      {/* Like button */}
      <Like
        onLike={() => setLiked(!liked)}
        liked={liked}
        classNamePos={ProductSlideCSS.likePos}
      />

      {/* Expand button */}
      <Expand
        onExpand={handleExpand}
        classNamePos={ProductSlideCSS.expandPos}
      />

      {/* Slider component with image selection handler */}
      <Slider
        imageList={imageList}
        classNamePos={ProductSlideCSS.sliderPos}
        onImageSelect={handleImageSelect}
      />
    </div>
  );
};

export default ProductSlide;
