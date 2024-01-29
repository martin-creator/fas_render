import React from 'react'
import SectionHeading from './SectionHeading';

const PartnersComponent = () => {
  return (
    <div className="bg-primary w-full pt-16 flex flex-col items-center justify-center">
      <SectionHeading Title="Our Partners" Bg="dark" />
      <p className="text-center w-1/2 mt-4 text-dimGray pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
        asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
        ex esse illum veritatis sequi expedita.
      </p>
      <div className='bg-secondary w-full h-32'>
      {/* logos */}
      </div>

    </div>
  );
}

export default PartnersComponent
