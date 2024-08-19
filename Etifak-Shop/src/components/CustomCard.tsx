import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProductViewCSS from "./ProductView.module.css";
import CustomCardCSS from "./CustomCard.module.css";

interface CustomCardProps {
  children?: ReactNode[]; // Optional array of React nodes
  title: string; // The title of the card
}

const CustomCard: React.FC<CustomCardProps> = ({ children, title }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Expanded by default

  // Toggle the expanded state
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={CustomCardCSS.container}>
      <div className={CustomCardCSS.header}>
        <span className={CustomCardCSS.title}>{title}</span>
        <button
          type="button"
          className={CustomCardCSS.upDownButton}
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </button>
      </div>
      <div
        className={`${CustomCardCSS.content} ${
          isExpanded
            ? CustomCardCSS.contentExpanded
            : CustomCardCSS.contentCollapsed
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
