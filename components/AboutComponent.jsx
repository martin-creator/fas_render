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
      Title: "Skills Development",
      Description:
        "We support our scientists in developing essential skills in scientific research, entrepreneurship, and interpersonal communication. These competencies enable them to  translate research into products and policies."
    },
    {
      Icon: <BsGraphUpArrow size={30} />,
      Title: "Infrastructure Access",
      Description:
        "In collaboration with our partners, we assist young scientists in identifying local laboratories where they can conduct research. We are actively seeking support to establish research hubs to provide hands-on training for all our students.",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Global Network",
      Description:
        "We connect our scientists to a global network of peers and partners, offering opportunities for scientific collaboration, funding, employment, and internships to build capacity to solve Africa’s most pressing challenges.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-32 pt-8 pb-16">
      <SectionHeading Title="Focus Areas" Bg="light" />
      <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
        Future African Scientist (FAS) is a non-profit organization founded in
        2020 to equip early career scientists and undergraduate, as well as
        upper-secondary students in Africa, with the skills, infrastructure, and
        network they need to solve Africa’s most pressing challenges.
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
