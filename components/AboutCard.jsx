
import React from "react";

const AboutCard = ({ Icon, Title, Description, url }) => {
  return (
    <div className="p-8 flex flex-col bg-white shadow-md w-[80%] md:w-1/2  h-1/2 lg:w-1/4 lg:h-1/4 rounded-md">
      <div className="border text-tertiary border-backgroundLight rounded-lg w-14 h-14 flex items-center justify-center">     
        {Icon}
      </div>
      <h4 className="font-bold text-black text-lg my-4">{Title}</h4>
      <div className="text-dimGray text-base text-left mb-4">{Description}</div>
      
    </div>
  );
};

export default AboutCard;
