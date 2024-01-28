import React from 'react'

const SectionHeading = ({Title, Bg}) => {
  return <h3 className={`font-bold text-4xl my-4 ${Bg === "light"? "text-primary": "text-tertiary" } `}>{Title}</h3>;
}

export default SectionHeading
