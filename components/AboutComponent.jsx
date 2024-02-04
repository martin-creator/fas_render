import React from "react";
import AboutCard from "./AboutCard";
import { GiBrain } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
const AboutComponent = () => {
  const aboutCards = [
    {
      Icon: <GiBrain size={30} />,
      Title: "Become a Scientist",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <BsGraphUpArrow size={30} />,
      Title: "Improve your Research Skills",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Unlock the Key to success",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <SectionHeading Title="About Us" Bg="light"/>
      <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
        asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
        ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi
        sequi et error, ad fugit explicabo voluptas corporis tenetur provident
        hic accusantium quisquam!
      </p>
      <div className="w-full h-full md:mx-12 flex items-center justify-center flex-col lg:flex-row gap-4 mt-8">
        {/* Cards */}
        {aboutCards.map((card, index) => (
          <AboutCard
            key={index}
            Icon={card.Icon}
            Title={card.Title}
            Description={card.Description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutComponent;
