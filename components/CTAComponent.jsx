"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";

const CTAComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16 bg-secondary">
      <SectionHeading Bg="light" Title="Partner With Us" />
      <p className="text-center w-1/2 text-white max-w-lg mb-16 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
        asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
        ex esse illum veritatis sequi expedita.
      </p>
      <div className="w-1/2 flex justify-center">
        <PrimaryButton Title="Get Started" />
      </div>
    </div>
  );
};

export default CTAComponent;
