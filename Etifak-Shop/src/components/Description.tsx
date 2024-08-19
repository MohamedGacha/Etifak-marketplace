import React from "react";
import DescriptionCSS from "./Description.module.css";
import DescriptionCard from "./DescriptionCard";
import Caracteristics from "./Caracteristics";

interface DescriptionProps {
  productID: string;
}

const Description = ({ productID }: DescriptionProps) => {
  const productDescription: string = `Lorem ipsum dolor sit amet. 33 voluptate architecto qui officiis adipisci vel dolorem rerum. Sit odit esse et iure maxime ab nobis accusamus et voluptatem consequatur. Sed harum iure et molestiae voluptatem aut fuga quisquam aut labore commodi At animi accusantium. Quo modi quia ut fugiat laudantium id adipisci cumque est dolorum facere.

Aut velit soluta cum nesciunt deserunt ex aperiam nulla quo rerum vero ad error reiciendis qui molestias harum aut ipsum fugit. Et laborum iure et nulla numquam aut soluta fugit ea officiis magnam non voluptate minus.`;

  return (
    <div className={DescriptionCSS.container}>
      <div className={DescriptionCSS.leftGridDiv}>
        <DescriptionCard title="Carecteristics">
          <Caracteristics
            caracteristic={[
              ["Color", "White"],
              ["Color", "White"],
              ["Color", "White"],
            ]}
          ></Caracteristics>
        </DescriptionCard>
      </div>
      <div className={DescriptionCSS.rightGridDiv}>
        <DescriptionCard title="About the product">
          {productDescription}
        </DescriptionCard>
      </div>
    </div>
  );
};

export default Description;
