import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import StarRatingCSS from "./StarRating.module.css";

interface StarRatingProps {
  children?: number; // Initial rating value (optional)
  onRate?: (rating: number) => void; // Optional function to handle rating selection
  className?: string; // Optional className for custom styling
}

const StarRating: React.FC<StarRatingProps> = ({
  children = 5,
  onRate,
  className,
}) => {
  const [rating, setRating] = useState(children);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Handle click to set the rating based on mouse position
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const starWidth = rect.width / 5;
    const newRating = Math.ceil(clickX / starWidth);
    setRating(newRating);

    if (onRate) {
      onRate(newRating); // Call the onRate function if provided
    }
  };

  return (
    <div
      className={`${StarRatingCSS.starRating} ${className}`}
      onClick={handleClick}
      onMouseLeave={() => setHoverRating(null)}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const currentRating = hoverRating !== null ? hoverRating : rating;
        return (
          <FontAwesomeIcon
            key={index}
            icon={index < currentRating ? solidStar : regularStar}
            onMouseEnter={() => setHoverRating(index + 1)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
