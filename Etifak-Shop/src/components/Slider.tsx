import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SliderCSS from "./Slider.module.css";

interface SliderProps {
  imageList: string[];
  onImageSelect: (image: string) => void;
  classNamePos: string;
}

const Slider = ({ imageList, onImageSelect, classNamePos }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Calculate the number of images to display
  const calculateImagesToShow = (index: number) => {
    const start = index;
    const end = Math.min(start + 3, imageList.length);
    return imageList.slice(start, end);
  };

  // Update images to show whenever currentIndex changes
  const imagesToShow = calculateImagesToShow(currentIndex);

  // Handle image selection
  const handleImageSelect = (index: number) => {
    setSelectedIndex(index);
    onImageSelect(imageList[index]);
  };

  // Handle previous button click
  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + imageList.length) % imageList.length;

      console.log(newIndex, prevIndex);

      // Calculate the actual index within the full image list
      const actualIndex = newIndex;
      handleImageSelect(newIndex); // Update selected image

      console.log("Previous button clicked. Current index:", actualIndex);
      return newIndex; // Update currentIndex after selecting the image
    });
  };

  // Handle next button click
  const handleNext = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = (prevIndex + 1 + imageList.length) % imageList.length;

      // Calculate the actual index within the full image list
      const actualIndex = newIndex;
      handleImageSelect(newIndex); // Update selected image

      console.log("Next button clicked. Current index:", actualIndex);
      return actualIndex; // Update currentIndex after selecting the image
    });
  };

  return (
    <div className={SliderCSS.slider + " " + classNamePos}>
      <button
        className={`${SliderCSS.navButton} ${SliderCSS.prevButton}`}
        onClick={handlePrevious}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className={SliderCSS.imageContainer}>
        {imagesToShow.map((image, index) => {
          const actualIndex = currentIndex + index;
          return (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`${SliderCSS.imageSelection} ${
                actualIndex === selectedIndex ? SliderCSS.selectedImage : ""
              }`}
              onClick={() => handleImageSelect(actualIndex)}
            />
          );
        })}
      </div>

      <button
        className={`${SliderCSS.navButton} ${SliderCSS.nextButton}`}
        onClick={handleNext}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Slider;
