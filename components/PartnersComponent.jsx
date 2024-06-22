import React from "react";
import SectionHeading from "./SectionHeading";
import agriclub from "../public/partnerlogos/agriclub.png";
import emsa from "../public/partnerlogos/emsa.png";
import gambia from "../public/partnerlogos/gambia.png";
import mbarara from "../public/partnerlogos/mbarara.png";
import nigeria from "../public/partnerlogos/nigeria.png";
import tamsa from "../public/partnerlogos/tamsa.png";
import uganda from "../public/partnerlogos/uganda.png";
import Image from "next/image";

const PartnersComponent = () => {
  return (
    <div className="bg-primary w-full pt-12 flex flex-col items-center justify-center">
      <SectionHeading Title="Our Partners" Bg="dark" />
      <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray pb-8">
        We are deeply committed to collaborating with partners within the
        scientific community to cultivate a vibrant support ecosystem for young
        scientists, offering them invaluable growth opportunities. Through
        established relationships with global research organizations, consortia,
        and professional associations, we create a dynamic network dedicated to
        empowering the next generation of scientific innovators in Africa.
      </p>
      <div className="bg-secondary w-full py-12">
        {/* logos */}
        <div className="flex gap-8 xl:gap-12 px-8 pt-4 items-center justify-center flex-wrap lg:flex-nowrap">
          <Image className="w-32 h-32" src={agriclub} alt="agriclub logo" />
          <Image className="w-28 h-28" src={emsa} alt="emsa logo" />
          <Image className="w-36 h-36" src={gambia} alt="gambia logo" />
          <Image className="w-36 h-36" src={mbarara} alt="mbarara logo" />
          <Image className="w-36 h-36" src={nigeria} alt="nigeria logo" />
          <Image className="w-36 h-36" src={tamsa} alt="tamsa logo" />
          <Image className="w-28 h-28" src={uganda} alt="uganda logo" />
        </div>
      </div>
    </div>
  );
};

export default PartnersComponent;
