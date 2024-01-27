import Image from 'next/image'
import React from 'react'
import hero from '../public/heroImage.png'
import NavigationBar from './NavigationBar';

const HeroComponent = () => {
  return (
    <div className="h-screen w-full">
      <Image
        src={hero}
        className="w-full h-full object-cover "
        alt="Image of a black male scientist in a lab"
      />
      <div className='absolute left-0 top-0 h-full w-full bg-primary opacity-90'>
        <NavigationBar/>
      </div>
      Hero
    </div>
  );
}

export default HeroComponent
