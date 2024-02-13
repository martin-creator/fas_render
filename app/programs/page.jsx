"use client";
import AboutCard from "@/components/AboutCard";
import NavigationBar from "@/components/NavigationBar";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaKey, FaBusinessTime, FaMoneyBills } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { GiArchiveResearch } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import CTAComponent from "@/components/CTAComponent";
import Footer from "@/components/Footer";
const Programs = () => {
  const [tabState, setTabState] = useState("research");

  const whyCardsResearchAcademy = [
    {
      Icon: <LuBrainCircuit size={30} />,
      Title: "Become a Scientist",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <BsGraphUpArrow size={30} />,
      Title: "Improve your Research Skills",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Unlock the Key to success",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Unlock the Key to success",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
  ];
  const whyCardsMentorship = [
    {
      Icon: <LuBrainCircuit size={30} />,
      Title: "Become a Scientist",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <BsGraphUpArrow size={30} />,
      Title: "Improve your Research Skills",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Unlock the Key to success",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Unlock the Key to success",
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
  ];

  const programTimelineItems = [
    {
      Icon: <GiArchiveResearch size={24} />,
      Title: "Africa Science Research Bootcamp (ASRB)",
      Duration: "3 Months",
      Content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor.",
    },
    {
      Icon: <FaTools size={24} />,
      Title: "Africa Science Project Hub (ASPH)",
      Duration: "3 Months",
      Content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor.",
    },
    {
      Icon: <FaMoneyBills size={24} />,
      Title: "Africa Science Entrepreneurship Leadership (ASEL)",
      Duration: "3 Months",
      Content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor.",
    },
    {
      Icon: <FaBusinessTime size={24} />,
      Title: "Africa Science Opportunity Network (ASON)",
      Duration: "3 Months",
      Content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor.",
    },
  ];
  const eligibilityCriteria = [
    {
      Icon: <GiArchiveResearch size={24} />,
      Description: "Must be a high school student graduating in 2023 or 2024",
    },
    {
      Icon: <GiArchiveResearch size={24} />,
      Description: "Must be a high school student graduating in 2023 or 2024",
    },
    {
      Icon: <GiArchiveResearch size={24} />,
      Description: "Must be a high school student graduating in 2023 or 2024",
    },
    {
      Icon: <GiArchiveResearch size={24} />,
      Description: "Must be a high school student graduating in 2023 or 2024",
    },
  ];
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-16">
          <p className="text-5xl text-tertiary font-bold">Our Programs</p>
        </div>
        <div className="text-tertiary text-lg flex gap-4 pb-16">
          <button
            onClick={() => {
              setTabState("research");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "research" ? "font-bold underline" : ""
            }`}
          >
            Science Academy
          </button>
          <div className="border-l border-l-tertiary" />
          <button
            onClick={() => {
              setTabState("mentorship");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "mentorship" ? "font-bold underline" : ""
            }`}
          >
            Mentorship Academy
          </button>
        </div>
      </div>

      {/* body content */}

      {tabState === "research" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-backgroundLight w-full">
            <div className="col-span-1 flex flex-col justify-center md:w-[95%] md:mb-0 mt-6 md:mt-0 py-4 md:py-16 px-16 ">
              <h3 className="text-2xl font-bold text-center md:text-start text-primary mb-8 md:mb-12">
                Why Join the Science Research Academy?
              </h3>
              <p className="text-darkerGray text-center md:text-start">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-full gap-8  py-16 px-16">
              {whyCardsResearchAcademy.map((card, index) => (
                <ProgramCard
                  key={index}
                  Icon={card.Icon}
                  Title={card.Title}
                  Description={card.Description}
                />
              ))}
            </div>
          </div>
          {/* program timeline */}
          <div className="bg-primary w-full p-8 flex flex-col items-center justify-center ">
            <SectionHeading Title="Program Timeline" Bg="dark" />
            <p className="text-center w-1/2 mt-4 mb-12 text-dimGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, aliquam. Beatae dignissimos voluptate suscipit maiores
              aliquam dolor asperiores atque quo amet qui libero magni, nemo
              exercitationem ipsam, ex esse illum veritatis sequi expedita.
              Minus consequatur amet excepturi sequi et error, ad fugit
              explicabo voluptas corporis tenetur provident hic accusantium
              quisquam!
            </p>
            {/* timeline */}
            <ol className="items-center sm:flex">
              {programTimelineItems.map((item, index) => (
                <li key={index} className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 *:flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-secondary rounded-full ring-0 ring-secondary dark:tertiary sm:ring-8 dark:tertiary shrink-0 text-primary">
                      {item.Icon}
                    </div>
                    {/* <div className="hidden sm:flex w-full bg-backgroundLight h-0.5  dark:bg-gray-700"></div> */}
                    <div className="hidden xl:flex w-full border-t border-dimGray border-dashed h-0.5  dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-6 sm:pe-8">
                    <h3 className="text-lg font-semibold text-white">
                      {item.Title}
                    </h3>
                    <time className="block my-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Duration: {item.Duration}
                    </time>
                    <p className="text-sm font-normal mt-2 text-lightGray dark:text-gray-400">
                      {item.Content}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Eligibility Criteria */}
          <div className="w-full backgroundLight flex flex-col items-center justify-center py-8">
            <SectionHeading Bg="light" Title="Am I Eligible?" />
            <p className="text-center w-1/2 mt-4 text-dimGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, aliquam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12">
              {eligibilityCriteria.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md col-span-1 border border-lightGray border-opacity-30 flex flex-col"
                >
                  <div className="border mb-2 text-tertiary border-lightGray border-opacity-30 rounded-lg w-10 h-10 flex items-center justify-center">
                    {item.Icon}
                  </div>
                  <div className="text-dimGray text-sm text-left mb-4">
                    {item.Description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CTAComponent
            SectionTitle={"Apply Now"}
            ButtonTitle={"Apply"}
            Message="Fill this form and someone from our team will contact you within 24 hours. , nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.”  "
          />
          <Footer />
        </div>
      )}

      {tabState === "mentorship" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-backgroundLight w-full">
            <div className="col-span-1 flex flex-col justify-center md:w-[95%] mb-8 md:mb-0  p-16 ">
              <h3 className="text-2xl font-bold text-primary mb-12">
                Why Join the Mentorship Program?
              </h3>
              <p className="text-darkerGray">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-full gap-8 p-16">
              {whyCardsMentorship.map((card, index) => (
                <ProgramCard
                  key={index}
                  Icon={card.Icon}
                  Title={card.Title}
                  Description={card.Description}
                />
              ))}
            </div>
          </div>
          {/* Eligibility Criteria */}
          <div className="w-full backgroundLight flex flex-col items-center justify-center py-8">
            <SectionHeading Bg="light" Title="Am I Eligible?" />
            <p className="text-center w-1/2 mt-4 text-dimGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, aliquam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12">
              {eligibilityCriteria.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md col-span-1 border border-lightGray border-opacity-30 flex flex-col"
                >
                  <div className="border mb-2 text-tertiary border-lightGray border-opacity-30 rounded-lg w-10 h-10 flex items-center justify-center">
                    {item.Icon}
                  </div>
                  <div className="text-dimGray text-sm text-left mb-4">
                    {item.Description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CTAComponent
            SectionTitle={"Apply Now"}
            ButtonTitle={"Apply"}
            Message="Fill this form and someone from our team will contact you within 24 hours. , nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.”  "
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Programs;
