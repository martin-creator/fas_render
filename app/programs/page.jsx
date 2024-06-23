"use client";
import AboutCard from "@/components/AboutCard";
import NavigationBar from "@/components/NavigationBar";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaKey,
  FaBusinessTime,
  FaMoneyBills,
  FaPeopleGroup,
  FaHandshake,
} from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { GiArchiveResearch } from "react-icons/gi";
import { FaCalendarAlt, FaTools } from "react-icons/fa";
import CTAComponent from "@/components/CTAComponent";
import Footer from "@/components/Footer";
import Image from "next/image";
import mentorship from "../../public/mentorship.jpg";
import fas_asel from "../../public/fas_asel.png";
import fas_ment from "../../public/fas_ment.png";
import { IoBriefcase } from "react-icons/io5";
import VideoComponent from "@/components/VideoComponent";
const Programs = () => {
  const [tabState, setTabState] = useState("research");
  const handleRegisterClick = ({program}) => {
    window.location.href = "https://forms.gle/BUNuVudUN4Z2sXjZ6";
    // program === "research" ? window.open("https://forms.gle/7Q7Z9Q7Q7Q7Q7Q7Q7", "_blank") :
    // window.open("https://forms.gle/BUNuVudUN4Z2sXjZ6", "_blank");
  };


  const whyCardsResearchAcademy = [
    {
      Icon: <LuBrainCircuit size={30} />,
      Title: "Industry Inspired Curriculum",
      Description:
        "Access comprehensive curriculum on scientific research, entrepreneurship and people skills that are essential for a successful career in science",
    },
    {
      Icon: <BsGraphUpArrow size={30} />,
      Title: "Captsone Projects",
      Description:
        "Work on mentor-led projects to see how every piece fits together in the scientific research process",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Entrepeneurial Support ",
      Description:
        "Lifetime access to our support team that guides students that have science based ventures from ideation to launch",
    },
    {
      Icon: <FaKey size={30} />,
      Title: "Internships and Job Placements",
      Description:
        "Lifetime access to an opportunity portal where you can find career opportunities in science and technology",
    },
  ];
  const whyCardsMentorship = [
    {
      Icon: <IoBriefcase size={30} />,
      Title: "Career Guidance and Support",
      Description:
        "Get personalized career guidance and support from experienced scientists and professionals in your field of interest",
    },
    {
      Icon: <FaHandshake size={30} />,
      Title: "Virtual Mentorship Parleys",
      Description:
        "Engage in personalized, one-on-one virtual sessions in breakout rooms  with your mentors",
    },
    {
      Icon: <FaCalendarAlt size={30} />,
      Title: "Quarterly Country Meetups",
      Description:
        "Connect with peers and scientists in your country through regular in-person gatherings. ",
    },
    {
      Icon: <FaPeopleGroup size={30} />,
      Title: "Group Challenge Projects",
      Description:
        "Collaborate with fellow mentees on challenging scientific projects that provide hands-on experience",
    },
  ];

  const programTimelineItems = [
    {
      Icon: <GiArchiveResearch size={24} />,
      Title: "African Science Research Bootcamp (ASRB)",
      Duration: "3 Months",
      Content:
        "Dive into the world of scientific research with our intensive bootcamp. Learn foundational research techniques and essential soft skills to tackle scientific challenges. Our focus on methods and data analysis ensures you develop a deep, practical understanding of research.",
    },
    {
      Icon: <FaTools size={24} />,
      Title: "African Science Project Hub (ASPH)",
      Duration: "2 Months",
      Content:
        "Take your research skills to the next level by working on real-world projects. Guided by experienced scientists, you'll address under-researched problems, gaining hands-on experience and invaluable mentorship.",
    },
    {
      Icon: <FaMoneyBills size={24} />,
      Title: "Africa Science Entrepreneurship Leadership (ASEL)",
      Duration: "2 Months",
      Content:
        "Transform your research into impactful solutions. Our entrepreneurial leadership program teaches you how to build sustainable innovations, manage projects effectively, and enhance your financial and business acumen.",
    },
    {
      Icon: <FaBusinessTime size={24} />,
      Title: "Africa Science Opportunity Network (ASON)",
      Duration: "Lifetime Access",
      Content:
        "Connect with leading organizations and companies through our extensive network. Gain industry experience, collaborate with global experts, and build strong professional connections that will propel your career forward.",
    },
  ];

  const programTimelineItemsMentorship = [
    {
      Icon: <GiArchiveResearch size={24} />,
      Title: "Application and Selection",
      Duration: "1 Month",
      Content:
        "Both Mentors and mentees submit their application to join the program. The applications are reviewed and successful applicants are selected to join the program.",
    },
    {
      Icon: <FaTools size={24} />,
      Title: "AI Matching",
      Duration: "2 Weeks",
      Content:
        "Mentors and mentees are matched based on their interests, expertise, and availability. The matching is done using an AI algorithm that ensures the best possible match.",
    },
    {
      Icon: <FaCalendarAlt size={24} />,
      Title: "Virtual Sessions Commence",
      Duration: "6 Months",
      Content:
        " The program commences with virtual sessions between mentors and mentees. The sessions are held weekly and are designed to provide guidance and support to the mentees.",
    },
    {
      Icon: <FaBusinessTime size={24} />,
      Title: "Meetups and Projects",
      Duration: "6 Months",
      Content:
        " The program also includes quarterly in-person meetups and group projects that provide hands-on experience to the mentees.",
    },
  ];
  const eligibilityCriteria = [
    {
      Icon: <GiArchiveResearch size={24} />,
      Description:
        "Curiosity: Has the student gone out of their way to explore a scientific topic of interest? Have they published any papers or conducted independent research?",
    },
    {
      Icon: <GiArchiveResearch size={24} />,
      Description:
        "Leadership: Is the student actively involved in leadership initiatives within their community? Do they demonstrate the potential to inspire and lead others?",
    },
    {
      Icon: <GiArchiveResearch size={24} />,
      Description:
        "Commitment: Is the student dedicated to completing the entire program? Do they have a track record of following through on projects or initiatives, demonstrating their ability to commit to long-term goals?",
    },
    {
      Icon: <GiArchiveResearch size={24} />,
      Description:
        "Education: We welcome students at all educational levels, from undergraduate to PhD. Is the student pursuing or have they completed relevant academic coursework? Are they committed to furthering their education in scientific fields?",
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
            Mentorship Program
          </button>
        </div>
      </div>

      {/* body content */}

      {tabState === "research" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-backgroundLight w-full">
            <div className="col-span-1 flex flex-col justify-center md:w-[95%] md:mb-0 mt-6 md:mt-0 py-4 md:py-16 px-16 ">
              <h3 className="text-2xl font-bold text-center md:text-start text-primary mb-8 md:mb-12">
                Why Join the African Science Research Academy?
              </h3>
              <p className="text-darkerGray text-center md:text-start">
                <ul className="list-disc">
                  <li>
                    Are you interested in starting your scientific research
                    career but don't know where to begin, whether you're an
                    undergraduate, master's, or PhD student?
                  </li>
                  <li>
                    Are you looking for a multidisciplinary community of
                    researchers to see how different fields of research work
                    together to address complex problems?
                  </li>
                </ul>
              </p>
              <p className="text-darkerGray text-center md:text-start mt-2">
                The African Science Research Academy provides you with a strong
                foundation in scientific inquiry on which you can build a
                successful career. Join us and be part of a vibrant community
                dedicated to advancing science and solving pressing challenges.
              </p>
              <Image
                src={fas_asel}
                className="rounded-md mt-8"
                alt="Image of student working in a lab"
              />
              <p className="text-left text-sm  text-dark mt-8 mb-12">
                Students attending a class during the African Science Research
                Academy in 2022.
              </p>
            </div>
            <div className="col-span-1 grid lg:h-[80%] grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-8  py-16 px-16">
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
              Our program spans 6-7 months, with breaks in between, and is
              designed to be compatible with your school or work schedule.
              Delivered entirely online, it comprises both synchronous and
              asynchronous sessions, ensuring flexibility to accommodate your
              professional and academic commitments.
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
          <div className="flex flex-col items-center justify-center my-4 gap-4">
            <SectionHeading Bg="light" Title="Program Testimonials" />
            <VideoComponent
              videoLink={"https://www.youtube.com/embed/vQeEgW8L21U"}
            />
          </div>
          {/* Eligibility Criteria */}
          <div className="w-full backgroundLight flex flex-col items-center justify-center py-8">
            <SectionHeading Bg="light" Title="Am I Eligible?" />
            <p className="text-center w-1/2 mt-4 text-dimGray">
              Our admissions process is designed to recruit the most promising
              young scientists from across Africa. We welcome applicants at all
              educational levels, including undergraduates, master's, and PhD
              students. We understand that many of our applicants may have
              limited or no research experience. Our holistic review process
              focuses on the following key areas
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
            SectionTitle={"Applications Closed"}
            ButtonTitle={"Register Interest"}
            ClickFunction={()=>{handleRegisterClick("research")}}
            Message="Ready to kickstart your journey in scientific research and entrepreneurship? Complete the form. Join Africa's top young scientists and make a real difference!"
          />
        </div>
      )}

      {tabState === "mentorship" && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-backgroundLight w-full">
            <div className="col-span-1 flex flex-col justify-center md:w-[95%] mb-8 md:mb-0  p-16 ">
              <h3 className="text-2xl font-bold text-primary mb-12">
                Why Join the Mentorship Program?
              </h3>
              <p className="text-darkerGray">
                We facilitate the growth of emerging scientists in Africa by
                connecting them with seasoned experts who provide invaluable
                guidance and mentorship in their scientific journeys
              </p>
              <Image
                src={fas_ment}
                className="rounded-md mt-8"
                alt="Image of student working in a lab"
              />
              <p className="text-left text-sm  text-dark mt-8 mb-12">
                Mentorship call with some scientists from the Washington
                University in St. Louis
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
          {/* program timeline */}
          <div className="bg-primary w-full p-8 flex flex-col items-center justify-center ">
            <SectionHeading Title="How the Program works" Bg="dark" />
            <p className="text-center w-1/2 mt-4 mb-12 text-dimGray">
              We develop and teach both mentors and mentees a set of best
              practices to ensure successful career advancement.
            </p>
            {/* timeline */}
            <ol className="items-center sm:flex">
              {programTimelineItemsMentorship.map((item, index) => (
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
          <div className="flex flex-col items-center justify-center my-4 gap-4">
            <SectionHeading Bg="light" Title="Program Testimonials" />
            <VideoComponent
              videoLink={"https://www.youtube.com/embed/vQeEgW8L21U"}
            />
          </div>
          {/* Eligibility Criteria */}
          <div className="w-full backgroundLight flex flex-col items-center justify-center py-8">
            <SectionHeading Bg="light" Title="Am I Eligible?" />
            <p className="text-center w-1/2 mt-4 text-dimGray">
              Our admissions process is designed to recruit the most promising
              young scientists from across Africa. We welcome applicants at all
              educational levels, including undergraduates, master's, and PhD
              students. We understand that many of our applicants may have
              limited or no research experience. Our holistic review process
              focuses on the following key areas
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
            SectionTitle={"Applications Closed"}
            ButtonTitle={"Register Interest"}
             ClickFunction={()=>{handleRegisterClick("mentorship")}}
            Message="Ready to kickstart your journey in scientific research and entrepreneurship? Complete the form. Join Africa's top young scientists and make a real difference!  "
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Programs;
