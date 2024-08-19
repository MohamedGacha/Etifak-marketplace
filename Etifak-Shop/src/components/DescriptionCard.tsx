import React, { ReactNode, useState } from "react";
import DescriptionCardCSS from "./DescriptionCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DescriptionCardProps {
  children?: ReactNode;
  title: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  children,
  title,
}) => {
  const [isExpanded, setIsExpanded] = useState(true); // Expanded by default

  // Toggle the expanded state
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={DescriptionCardCSS.container}>
      <div className={DescriptionCardCSS.header}>
        <span className={DescriptionCardCSS.title}>{title}</span>
        <button
          type="button"
          className={DescriptionCardCSS.upDownButton}
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </button>
      </div>
      <div
        className={`${DescriptionCardCSS.content} ${
          isExpanded
            ? DescriptionCardCSS.contentExpanded
            : DescriptionCardCSS.contentCollapsed
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DescriptionCard;
