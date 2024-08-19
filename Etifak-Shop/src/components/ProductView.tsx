import React, { useState } from "react";
import ProductViewCSS from "./ProductView.module.css";
import ProductSlide from "./ProductSlide";
import BuyCard from "./BuyCard";
import CustomCard from "./CustomCard";
import ColorOption from "./ColorOption";
import TextOption from "./TextOption";

interface ProductViewProps {
  productID: string;
}

const ProductView = ({ productID }: ProductViewProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedConditionnement, setSelectedConditionnement] = useState<
    string | null
  >(null);

  // Handler for selecting a color
  const handleColorSelect = (hexCode: string) => {
    setSelectedColor(hexCode);
  };

  // Handler for selecting a memory option
  const handleMemorySelect = (memory: string) => {
    setSelectedMemory(memory);
  };

  // Handler for selecting a size option
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  // Handler for selecting a conditionnement option
  const handleConditionnementSelect = (conditionnement: string) => {
    setSelectedConditionnement(conditionnement);
  };

  return (
    <div className={ProductViewCSS.container}>
      <ProductSlide productID={productID}></ProductSlide>
      <div className={ProductViewCSS.rightGridItem}>
        <BuyCard productID={productID}></BuyCard>
        <CustomCard title="Color">
          {[
            { hexCode: "#FFFFFF", label: "Color 1" },
            { hexCode: "#010106", label: "Color 2" },
            { hexCode: "#09005D", label: "Color 3" },
            { hexCode: "#0807D1", label: "Color 4" },
            { hexCode: "#7776EB", label: "Color 5" },
            { hexCode: "#FE7062", label: "Color 6" },
            { hexCode: "#EE004E", label: "Color 7" },
          ].map(({ hexCode, label }) => (
            <ColorOption
              key={hexCode}
              hexCode={hexCode}
              selected={selectedColor === hexCode}
              onClick={() => handleColorSelect(hexCode)}
            >
              {label}
            </ColorOption>
          ))}
        </CustomCard>
        <CustomCard title="Memory">
          {[
            { value: "8 Go", label: "8 Go" },
            { value: "16 Go", label: "16 Go" },
            { value: "32 Go", label: "32 Go" },
            { value: "64 Go", label: "64 Go" },
            { value: "128 Go", label: "128 Go" },
            { value: "256 Go", label: "256 Go" },
          ].map(({ value, label }) => (
            <TextOption
              key={value}
              selected={selectedMemory === value}
              onClick={() => handleMemorySelect(value)}
            >
              {label}
            </TextOption>
          ))}
        </CustomCard>
        <CustomCard title="Size">
          {[
            { value: "140x190 cm", label: "140x190 cm" },
            { value: "140x200 cm", label: "140x200 cm" },
            { value: "160x200 cm", label: "160x200 cm" },
            { value: "180x200 cm", label: "180x200 cm" },
            { value: "200x200 cm", label: "200x200 cm" },
          ].map(({ value, label }) => (
            <TextOption
              key={value}
              selected={selectedSize === value}
              onClick={() => handleSizeSelect(value)}
            >
              {label}
            </TextOption>
          ))}
        </CustomCard>
        <CustomCard title="Conditionnement">
          {[
            { value: "Conditionnement 1", label: "Conditionnement 1" },
            { value: "Conditionnement 2", label: "Conditionnement 2" },
            { value: "Conditionnement 3", label: "Conditionnement 3" },
          ].map(({ value, label }) => (
            <TextOption
              key={value}
              selected={selectedConditionnement === value}
              onClick={() => handleConditionnementSelect(value)}
            >
              {label}
            </TextOption>
          ))}
        </CustomCard>
      </div>
    </div>
  );
};

export default ProductView;
