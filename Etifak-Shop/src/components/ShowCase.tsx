import React, { useState, useRef } from "react";
import ShowCaseCSS from "./ShowCase.module.css";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ShowCaseProps {
  products: {
    productID: string;
    title: string;
    price: number;
    oldPrice?: number;
    rating: number;
    mode?: "discount" | "decrease" | "none";
  }[];
  title: string;
}

const ShowCase: React.FC<ShowCaseProps> = ({ products, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 250; // Adjust based on your card width
  const visibleCards = 4; // Number of visible cards
  const scrollAmount = cardWidth * visibleCards;

  const handlePrev = () => {
    if (containerRef.current) {
      const newScrollPosition = Math.max(scrollPosition - scrollAmount, 0);
      containerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      const maxScrollLeft =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const newScrollPosition = Math.min(
        scrollPosition + scrollAmount,
        maxScrollLeft
      );
      containerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className={ShowCaseCSS.bigContainer}>
      <div className={ShowCaseCSS.title}>{title}</div>
      <div className={ShowCaseCSS.container}>
        {products.length > visibleCards && (
          <button className={ShowCaseCSS.prevButton} onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <div className={ShowCaseCSS.sliderContainer} ref={containerRef}>
          <div className={ShowCaseCSS.cardsContainer}>
            {products.map((product) => (
              <ProductCard
                key={product.productID}
                productID={product.productID}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                mode={product.mode}
              />
            ))}
          </div>
        </div>
        {products.length > visibleCards && (
          <button className={ShowCaseCSS.nextButton} onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowCase;
