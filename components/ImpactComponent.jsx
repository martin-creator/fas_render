import React from "react";
import SectionHeading from "./SectionHeading";
import ImpactCard from "./ImpactCard";

const ImpactComponent = () => {
  const impactCards = [
    {
      Number: "1830+",
      Description: "Scientists Trained",
    },
    {
      Number: "220",
      Description: "Partners",
    },
    {
      Number: "10",
      Description: "Partners",
    },
    {
      Number: "834+",
      Description: "Graduates",
    },
  ];
  return (
    <div className="bg-primary w-full py-16 flex flex-col items-center justify-cente">
      <SectionHeading Title="Our Impact" Bg="dark" />
      <p className="text-center w-1/2 mt-4 text-dimGray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
        asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
        ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi
        sequi et error, ad fugit explicabo voluptas corporis tenetur provident
        hic accusantium quisquam!
      </p>
      <div className="w-full h-full mx-12 flex itemx-center justify-center gap-4 mt-8">
        {impactCards.map((card, index) => (
          <ImpactCard key={index} Number={card.Number} Description={card.Description} />
        ))}        
      </div>
    </div>
  );
};

export default ImpactComponent;
