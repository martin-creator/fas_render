"use client";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";
import aboutUs from "../../public/aboutImg.png";
import support from "../../public/support.png";
import {
  FaUserDoctor,
  FaBriefcase,
  FaListCheck,
  FaUsers,
  FaBookOpen,
  FaHandshakeSimple,
} from "react-icons/fa6";
import { BiSolidBusiness } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { BsShieldFillCheck } from "react-icons/bs";
import PrimaryButton from "@/components/PrimaryButton";
const about = () => {
  let impactStatements = [
    {
      figure: "10,000",
      description: "Globally competitive early career scientists trained.",
      icon: <FaUserDoctor size={30} />,
    },
    {
      figure: "50",
      description:
        "General purpose laboratories established across 12 African countries",
      icon: <ImLab size={30} />,
    },
    {
      figure: "30,000",
      description:
        "New jobs, internships and fellowiship opportunities created for scientists in Africa.",
      icon: <FaBriefcase size={30} />,
    },
    {
      figure: "100",
      description:
        "Scientific enterprises created by our trainees solving local and global problems.",
      icon: <BiSolidBusiness size={30} />,
    },
  ];

  let coreValues = [
    {
      value: "Integrity",
      description:
        "We uphold the highest standards of professionalism, communicate openly, and always act in the best interest of our organization and community",
      icon: <BsShieldFillCheck size={30} />,
    },
    {
      value: "Accountability",
      description:
        "We take ownership of our responsibilities, embrace feedback, and learn from our mistakes to deliver exceptional results.",
      icon: <FaListCheck size={30} />,
    },
    {
      value: "Teamwork",
      description:
        "We trust and support each other, leveraging our strengths to overcome challenges and achieve our goals through collaboration.",
      icon: <FaUsers size={30} />,
    },
    {
      value: "Lifelong Learning",
      description:
        "We value curiosity, continuous learning, and development, recognizing their importance in staying ahead in the ever-evolving field of scientific research.",
      icon: <FaBookOpen size={30} />,
    },
    {
      value: "Commitment",
      description:
        "We are deeply committed to our mission, showing unwavering dedication, enthusiasm, and determination to impact the world positively through our work at FAS",
      icon: <FaHandshakeSimple size={30} />,
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
      <div className="flex flex-col items-center pt-8">
        {/* <SectionHeading Title={"Our Story"} Bg="light" className="" /> */}
        <p className="py-8 px-16 md:px-32 text-center text-darkerGray">
          Future African Scientist (FAS) is a non-profit organization founded in
          2020 to equip early career scientists and undergraduate, as well as
          upper-secondary students in Africa, with the skills, infrastructure,
          and network they need to solve Africa’s most pressing challenges. FAS
          partners with leading scientists from reputable research organizations
          and institutes to offer both virtual and in-person training in
          scientific research and entrepreneurship to the most promising young
          scientists in Africa. All students who graduate from FAS become part
          of a lifelong network of scientists in healthcare, agriculture, and
          artificial intelligence, where they are continuously matched with
          opportunities(jobs, internships) to work on real-world projects and
          learn from industry experts.
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
              infrastructure and networks to conduct impactful research and lead
              innovative projects.
            </p>
          </div>
        </div>

        <div className="bg-secondary pt-8 pb-12 w-full flex flex-col items-center mt-8">
          <SectionHeading Title={"Impact by 2032"} Bg="light" />
          <p className="py-4 text-darkerGray w-1/2 text-center">
            We aim to achieve the following impact by 2032:
          </p>
          {/* impact  */}
          <div className="bg-white grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 rounded-md overflow-hidden mx-12">
            {impactStatements.map((statement) => (
              <div
                className="bgStyle col-span-1 p-4 flex flex-col items-center justify-center"
                key={statement.figure}
              >
                <p className="font-bold text-2xl text-primary flex gap-2 flex-col items-center">
                  {statement.icon}
                  {statement.figure}
                </p>
                <p className="text-darkerGray text-center text-sm mt-2">
                  {statement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* core values */}
        <div className="bg-primary pt-8 pb-12 w-full px-8">
          <div className="w-full text-center pb-4">
            <SectionHeading Title={"Our Core Values"} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((valueItem) => (
              <div
                className="col-span-1 flex flex-col items-center md:items-start"
                key={valueItem.value}
              >
                <div className="text-tertiary bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  {valueItem.icon}
                </div>
                <p className="text-tertiary text-center md:text-left font-bold mt-4">
                  {valueItem.value}
                </p>
                <p className="text-lightGray text-center md:text-left mt-2">
                  {valueItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Support */}
        <div className="bg-backgroundLight w-full px-8">
          <div className="w-full text-center mt-12 pb-4">
            <SectionHeading Title={"Want to Support Our Mission?"} Bg="light" />
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-4">
            <div className="col-span-1 flex flex-col items-center justify-center">
              <p className="text-darkerGray w-[80%] text-center mb-4">
                Are you looking to extend training to a
                group of exceptional scientists working in healthcare,
                agriculture, and artificial intelligence? Do you want to help
                establish research infrastructure to enable young scientists to
                conduct groundbreaking research? Do you have job opportunities,
                internships, or projects that you want to share with talented
                young scientists in Africa? Contact us today to explore how we can collaborate and
                support the next generation of African scientific leaders.
              </p>
              <div className="w-1/2 md:w-full flex items-center justify-center mb-16 md:mb-0">
                <PrimaryButton Title="Contact Us" />
              </div>
            </div>
            <div className="col-span-1  flex items-center justify-center mb-8">
              <Image
                className="w-[400px]"
                src={support}
                alt="Radial support image"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
