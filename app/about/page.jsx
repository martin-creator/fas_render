import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";
import aboutUs from "../../public/aboutImg.png";
const about = () => {
  let impactStatements = [
    {
      figure: "10000",
      description:
        "Globally competitive career scientists trained.",
    },
    {
      figure: "50",
      description:
        "We will have provided 50 fellowships to African early-career scientists.",
    },
    {
      figure: "Research Projects",
      description:
        "We will have supported 100 impactful research projects in Africa.",
    },
    {
      figure: "Innovative Projects",
      description:
        "We will have supported 50 innovative projects led by African early-career scientists.",
    },
  ];
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      <div className="bg-primary h-1/2 flex flex-col w-full">
        <div className="flex w-full justify-center py-16">
          <p className="text-5xl text-tertiary font-bold">About Us</p>
        </div>
      </div>
      {/* Our Story Section */}
      <div className="flex flex-col items-center py-8">
        <SectionHeading Title={"Our Story"} Bg="light" className="" />
        <p className="py-8 px-16 md:px-32 text-center text-darkerGray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptatum doloremque dolorum illum nam, culpa est quasi, nisi saepe
          hic soluta reprehenderit amet ea mollitia itaque expedita beatae id
          dolorem, laudantium veritatis! Iure possimus illum cum, voluptas
          magnam iusto maxime facilis commodi adipisci reprehenderit corporis
          assumenda ipsa ullam consequatur accusantium libero distinctio quos
          numquam eius tenetur quod rem labore impedit pariatur. Odit sed
          molestias laboriosam aperiam animi perspiciatis maiores nam nemo
          magnam deserunt veritatis sunt modi magni dicta, corrupti adipisci
          tenetur natus doloribus repellat ipsam sit, accusantium neque quis
          error. Architecto necessitatibus blanditiis doloremque? Numquam,
          excepturi iusto blanditiis ullam totam non repellendus quidem sit
          possimus autem ut, natus mollitia id laboriosam quod distinctio.
          Provident, doloremque laboriosam at unde dolore non maxime magni
          reprehenderit asperiores quia ipsa aspernatur! Dignissimos natus
          magnam temporibus neque odit repudiandae unde nisi? Labore illum
          neque, iusto repellat quidem numquam praesentium iste ratione adipisci
          quos? Autem, eveniet!
        </p>
        <div className="w-[60%]">
          <Image
            src={aboutUs}
            alt="Image of a male scientist examining samples"
          />
        </div>
        <div className="flex flex-col md:grid grid-cols-2 px-16 md:px-32 mt-8">
          {/* Our Vision */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <SectionHeading Title={"Our Vision"} Bg="light" />
            <p className="py-4 text-center md:text-left text-darkerGray">
              To inspire and enable early-career scientists in Africa to become
              catalysts for positive change and sustainable development.
            </p>
          </div>
          {/* Our Mission */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <SectionHeading Title={"Our Mission"} Bg="light" />
            <p className="py-4 text-center md:text-left text-darkerGray">
              To equip African early-career scientists with the skills,
              opportunities, and networks to conduct impactful research and lead
              innovative projects.
            </p>
          </div>
        </div>

        <div className="bg-secondary py-4 w-full flex flex-col items-center mt-8">
          <SectionHeading Title={"Impact by 2032"} Bg="light" />
          <p className="py-4 text-darkerGray w-1/2 text-center">
            We aim to achieve the following impact by 2032:
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default about;
