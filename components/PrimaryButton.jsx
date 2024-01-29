import React from 'react'

const PrimaryButton = ({ Title, ClickFunction }) => {
  return (
    <button
      onClick={() => {
        ClickFunction;
      }}
      className="bg-tertiary w-full md:w-1/2 rounded-md px-8 py-2 text-white font-medium shadow-md hover:bg-transparent hover:text-tertiary border border-tertiary hover:scale-110 transition duration-300 ease-in-out"
    >
      {Title}
    </button>
  );
};

export default PrimaryButton
