import Image from "next/image";
import React from "react";
import hero from "../public/heroImage.png";

const HeroComponent = () => {
  return (
    <div className="absolute left-0 top-0 h-screen w-full">
      <Image
        src={hero}
        className="w-full h-screen object-cover "
        alt="Image of a black male scientist in a lab"
      />
      <div className="absolute left-0 top-0 h-screen w-full bg-primary opacity-90">
        {/* <NavigationBar /> */}
        <div className="w-full h-full flex flex-col items-center justify-center mt-8">
          <h2 className="uppercase text-tertiary text-4xl sm:text-6xl md:text-[70px] xl:text-[88px] 2xl:text-[100px] font-extrabold text-center">
            Future African
          </h2>
          <h2 className="uppercase mt-4 text-tertiary text-4xl sm:text-6xl md:text-[70px] xl:text-[88px] 2xl:text-[100px] font-extrabold">
            Scientist
          </h2>
          <p className="text-center my-8 xl:my-12 text-white text-xl xl:text-2xl">
            Fostering the next generation of African scientists and engineers
          </p>
          <button className="border border-white px-6 py-4 uppercase rounded-md text-white text-base">
            {" "}
            Work with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
