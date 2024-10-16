import React from "react";

const ProgramCard = ({ Icon, Title, Description }) => {
  return (
    <div className="p-4 flex flex-col bg-white shadow-md rounded-md">
      <div className="border text-tertiary border-gray-200 rounded-lg w-12 h-12 flex items-center justify-center">
        {Icon}
      </div>
      <h4 className="font-bold text-black text-base my-4">{Title}</h4>
      <div className="text-dimGray text-sm text-left mb-4">{Description}</div>
    </div>
  );
};

export default ProgramCard;
