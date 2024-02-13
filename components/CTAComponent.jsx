"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";

const CTAComponent = ({SectionTitle, Message, ButtonTitle}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16 bg-secondary">
      <SectionHeading Bg={"light"} Title={SectionTitle} />
      <p className="text-center w-[80%] md:w-1/2 text-white max-w-lg mb-16 mt-8">
        {Message}
      </p>
      <div className="w-1/2 flex justify-center">
        <PrimaryButton Title={ButtonTitle} />
      </div>
    </div>
  );
};

export default CTAComponent;
