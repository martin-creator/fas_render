"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import Program1 from "../public/program1.jpg";
import fas_mentorship from "../public/fas_mentorship.png";
import fas_asrb from "../public/fas_asrb.png";
const ProgramsComponent = () => {
   const handleClick = () => {
     window.location.href = "/programs";
   };
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <SectionHeading Bg="light" Title="Our Programs" />
      <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
        Our programs are meticulously crafted to meet the unique needs of
        early-career scientists and students in Africa. Based on two years of
        extensive research, they are designed to be holistic, accessible, and
        impactful, offering participants the tools they need to use science to
        solve problems in their communities and beyond.
      </p>
      <div className="mx-16 md:mx-28 my-16 flex justify-center items-center flex-col md:grid md:grid-cols-2 gap-8">
        <div className="col-span-1 flex justify-center flex-col">
          <h5 className="text-primary text-2xl font-bold flex-nowrap w-full">
            African Science Research Academy
          </h5>
          <div className="bg-secondary w-32 h-1 rounded-md mt-2" />
          <p className="text-left  text-dimGray mt-8 mb-12">
            The African Science Research Academy (ASRA), is a dynamic, virtual
            year-long program designed to empower participants with advanced
            scientific research, entrepreneurship, and interpersonal skills.
            Unlike conventional training programs, ASRA provides access to
            virtual research labs and culminates in a capstone project, allowing
            participants to tackle real-world problems.
          </p>
          <PrimaryButton ClickFunction={handleClick} Title="Learn More" />
        </div>
        {/* image */}
        <div className="col-span-1">
          <Image
            className="rounded-md"
            src={fas_asrb}
            width={500}
            alt="image of a black laboratory professional"
          />
          <p className="text-left text-sm  text-dark mt-8 mb-12">
            Students at Gulu University after participating in our research
            bootcamp in 2022.
          </p>
        </div>
      </div>
      {/* second */}
      <div className="mx-16 md:mx-28 my-8 flex flex-col-reverse justify-center items-center md:flex-col md:grid md:grid-cols-2 gap-8">
        {/* image */}
        <div className="col-span-1">
          <Image
            className="rounded-md"
            src={fas_mentorship}
            width={500}
            alt="image of a black laboratory professional"
          />
          <p className="text-left text-sm  text-dark mt-8 mb-12">
            Mentorship call with some scientists from the Washington University
            in St. Louis
          </p>
        </div>
        <div className="col-span-1 flex justify-center flex-col">
          <h5 className="text-primary text-2xl font-bold flex-nowrap w-full">
            African Scientist Mentorship Fellowship
          </h5>
          <div className="bg-secondary w-32 h-1 rounded-md mt-2" />
          <p className="text-left  text-darkerGray mt-8 mb-12">
            The African Scientist Mentorship Fellowship (ASMF) is a six-month
            program that pairs exceptional students with PhD candidates and
            experienced scientists. Participants receive personalized career
            guidance, collaborate on real-world research projects, and network
            with peers. This program aims to bridge the gap between theoretical
            knowledge and practical research skills, preparing you for a
            successful scientific career.
          </p>
          <PrimaryButton Title="Learn More" ClickFunction={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ProgramsComponent;
