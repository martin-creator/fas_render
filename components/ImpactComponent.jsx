import React from "react";
import SectionHeading from "./SectionHeading";
import ImpactCard from "./ImpactCard";

const ImpactComponent = () => {
  const impactCards = [
    {
      Number: "100,000+",
      Description: "Scientists & Students",
    },
    {
      Number: "15+",
      Description: "Partners",
    },
    {
      Number: "16+",
      Description: "African countries"
    },
    {
      Number: "500+",
      Description: "Students trained",
    },
  ];
  return (
    <div className="bg-primary w-full py-16 flex flex-col items-center justify-center">
      <SectionHeading Title="Our Impact" Bg="dark" />
      <p className="text-center w-1/2 mt-4 text-dimGray">
      Since our establishment in 2020, we've empowered numerous scientists with essential skills in scientific research and entrepreneurship. Our expert-led workshops, such as "The Science and Business of Biotechnology" by 
       <a href="https://be.mit.edu/directory/harvey-f-lodish" target="_blank" rel="noopener noreferrer">
        Professor Harvey Lodish
      </a>, provide invaluable insights and knowledge to our participants.

      </p>
      <div className="w-full h-full mx-12 flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
        {impactCards.map((card, index) => (
          <ImpactCard key={index} Number={card.Number} Description={card.Description} />
        ))}        
      </div>
    </div>
  );
};

export default ImpactComponent;
