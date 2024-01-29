"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import PrimaryButton from './PrimaryButton';
import Image from 'next/image'
import Program1 from '../public/program1.jpg'
const ProgramsComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <SectionHeading Bg="light" Title="Our Programs" />
      <p className="text-center w-1/2 mt-4 text-dimGray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        aliquam.
      </p>
      <div className="mx-28 my-16 flex justify-center items-center flex-col md:grid md:grid-cols-2 gap-8">
        <div className="col-span-1 flex justify-center flex-col">
          <h5 className="text-primary text-2xl font-bold flex-nowrap w-full">
            Science Research Academy
          </h5>
          <div className="bg-secondary w-32 h-1 rounded-md mt-2" />
          <p className="text-left  text-dimGray mt-8 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
            asperiores atque quo amet qui libero magni, nemo exercitationem
            ipsam, ex esse illum veritatis sequi expedita.
          </p>
          <PrimaryButton Title="Learn More" />
        </div>
        {/* image */}
        <div className="col-span-1">
          <Image
            className="rounded-md"
            src={Program1}
            width={500}
            alt="image of a black laboratory professional"
          />
        </div>
      </div>
      {/* second */}
      <div className="mx-28 my-8 flex flex-col-reverse justify-center items-center md:flex-col md:grid md:grid-cols-2 gap-8">
        {/* image */}
        <div className="col-span-1">
          <Image
            className="rounded-md"
            src={Program1}
            width={500}
            alt="image of a black laboratory professional"
          />
        </div>
        <div className="col-span-1 flex justify-center flex-col">
          <h5 className="text-primary text-2xl font-bold flex-nowrap w-full">
            Mentorship
          </h5>
          <div className="bg-secondary w-32 h-1 rounded-md mt-2" />
          <p className="text-left  text-dimGray mt-8 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
            asperiores atque quo amet qui libero magni, nemo exercitationem
            ipsam, ex esse illum veritatis sequi expedita.
          </p>
          <PrimaryButton Title="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default ProgramsComponent
