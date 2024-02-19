import Link from 'next/link';
import React from 'react'

const ContactCardComponent = ({ Title, Description, Icon, Url }) => {
  return (
    <div className="p-8 flex flex-col bg-white shadow-md rounded-md">
      <div className="border text-tertiary border-backgroundLight rounded-lg w-16 h-16 flex items-center justify-center">
        {/* <GiBrain size={30} /> */}
        {Icon}
      </div>
      <h4 className="font-bold text-black text-lg my-4">{Title}</h4>
      <div className="text-dimGray text-base text-left mb-4">{Description}</div>
      <Link href={Url}>Contact us &rarr; </Link>
    </div>
  );
};

export default ContactCardComponent
