import React from 'react'

const ImpactCard = ({Number, Description}) => {
  return (
    <div className="w-1/2 md:w-1/6 h-[150px] border border-secondary p-8 rounded-md flex flex-col items-center justify-center">
      <p className="text-3xl font-bold text-secondary">{Number}</p>
      <p className="text-base text-dimGray mt-2">{Description}</p>
    </div>
  );
}

export default ImpactCard
