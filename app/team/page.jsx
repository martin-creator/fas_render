"use client";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import dummyUser from "../../public/teamImg/user1.jpg";

const TeamPage = () => {
  const coreTeam = [
    {
      name: "John Mdoe",
      position: "CEO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Martin Lubowa",
      position: "CTO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Muthoni",
      position: "Lead Curriculum Developer",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Peter Shawn",
      position: "CTO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Muthoni",
      position: "Lead Curriculum Developer",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
  ];
  const advisorsTeam = [
    {
      name: "Agnes Juma",
      position: "Founder, Amara Trust",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Joel Banange",
      position: "CTO, Amara Trust",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Muthoni",
      position: "Lead Curriculum Developer",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Peter Shawn",
      position: "CTO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Muthoni",
      position: "Lead Curriculum Developer",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
  ];
  const facilitatorsTeam = [
    {
      name: "John Mdoe",
      position: "CEO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Martin Lubowa",
      position: "CTO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Muthoni",
      position: "Lead Curriculum Developer",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Peter Shawn",
      position: "CTO",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jane Muthoni",
      position: "Lead Curriculum Developer",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita. Minus consequatur amet excepturi sequi et error, ad fugit explicabo voluptas corporis tenetur provident hic accusantium quisquam!",
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
  ];
  const [tabState, setTabState] = useState("core");
  const [modalStates, setModalStates] = useState(
    Array(coreTeam.length).fill(false)
  );

  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold">Our Team</p>
        </div>
        <div className="w-[60%] text-center text-lightGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
          asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
          ex esse illum veritatis sequi expedita.
        </div>
        <div className="text-tertiary text-lg flex gap-4 pb-16">
          <button
            onClick={() => {
              setTabState("core");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "core" ? "font-bold underline" : ""
            }`}
          >
            Core Team
          </button>
          <div className="border-l border-l-tertiary" />
          <button
            onClick={() => {
              setTabState("advisors");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "advisors" ? "font-bold underline" : ""
            }`}
          >
            Advisors
          </button>
          <div className="border-l border-l-tertiary" />
          <button
            onClick={() => {
              setTabState("facilitators");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "facilitators" ? "font-bold underline" : ""
            }`}
          >
            Course Facilitators
          </button>
        </div>
      </div>
      {/* body */}
      <div>
        {tabState === "core" && (
          <div>
            <div className="bg-backgroundLight flex flex-col items-center justify-center pt-8">
              <SectionHeading Title="Core Team" Bg="light" />
              <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aliquam. Beatae dignissimos voluptate suscipit
                maiores aliquam dolor asperiores atque quo amet qui libero
                magni, nemo exercitationem ipsam, ex esse illum veritatis sequi
                expedita. Minus consequatur amet excepturi sequi et error, ad
                fugit explicabo voluptas corporis tenetur provident hic
                accusantium quisquam!
              </p>
              {/* Images */}

              <div className="mt-8 mb-12 px-24 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {coreTeam.map((member, index) => (
                  <div key={index}>
                    {/* visible part */}
                    <div
                      onClick={() => {
                        const newModalStates = [...modalStates];
                        newModalStates[index] = !newModalStates[index];
                        setModalStates(newModalStates);
                      }}
                      className="bg-white cursor-pointer w-full col-span-1 overflow-hidden rounded-md shadow-lg"
                    >
                      <Image
                        className="rounded-t-md w-full"
                        width={100}
                        height={100}
                        // fill="contain"
                        src={dummyUser}
                        alt="image of a black professional"
                      />

                      <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col">
                          <h5 className="font-bold">{member.name}</h5>
                          <p className="text-sm text-darkerGray">
                            {member.position}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link href={member.linkedin}>
                            <FaLinkedin className="text-darkerGray" size={20} />
                          </Link>
                          <Link href={member.twitter}>
                            <FaSquareXTwitter
                              className="text-darkerGray"
                              size={20}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* end of visible part */}
                    <div
                      className={`relative ${
                        modalStates[index] === false ? "hidden" : ""
                      }`}
                    >
                      {/* <!-- Main modal --> */}
                      <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className={` ${
                          modalStates[index] === false ? "hidden" : ""
                        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
                      >
                        <div className="relative p-4 w-full h-full bg-primary bg-opacity-30 flex items-center justify-center">
                          {/* <!-- Modal content --> */}
                          <div className="relative bg-backgroundLight rounded-lg shadow w-[50%] h-full dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> */}
                            <div className="flex relative items-center p-4 md:p-5  rounded-t ">
                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="rounded-full">
                                  <Image
                                    className="rounded-full w-full"
                                    width={80}
                                    height={80}
                                    // fill="contain"
                                    src={dummyUser}
                                    alt="image of a black professional"
                                  />
                                </div>
                                <div className="flex flex-col items-center my-4">
                                  <h5 className="font-bold">{member.name}</h5>
                                  <p className="text-sm text-darkerGray">
                                    {member.position}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Link href={member.linkedin}>
                                    <FaLinkedin
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                  <Link href={member.twitter}>
                                    <FaSquareXTwitter
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="text-gray-400 absolute right-4 top-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                                onClick={() => {
                                  const newModalStates = [...modalStates];
                                  newModalStates[index] =
                                    !newModalStates[index];
                                  setModalStates(newModalStates);
                                }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="space-y-4">
                              <p className="text-base px-12 text-center leading-relaxed text-gray-500 dark:text-gray-400">
                                {member.bio}
                              </p>
                            </div>
                            {/* <!-- Modal footer --> */}
                            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tabState === "advisors" && (
          <div>
            <div className="bg-backgroundLight flex flex-col items-center justify-center pt-8">
              <SectionHeading Title="Advisors" Bg="light" />
              <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aliquam. Beatae dignissimos voluptate suscipit
                maiores aliquam dolor asperiores atque quo amet qui libero
                magni, nemo exercitationem ipsam, ex esse illum veritatis sequi
                expedita. Minus consequatur amet excepturi sequi et error, ad
                fugit explicabo voluptas corporis tenetur provident hic
                accusantium quisquam!
              </p>
              {/* Images */}

              <div className="mt-8 mb-12 px-24 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {advisorsTeam.map((member, index) => (
                  <div key={index}>
                    {/* visible part */}
                    <div
                      onClick={() => {
                        const newModalStates = [...modalStates];
                        newModalStates[index] = !newModalStates[index];
                        setModalStates(newModalStates);
                      }}
                      className="bg-white cursor-pointer w-full col-span-1 overflow-hidden rounded-md shadow-lg"
                    >
                      <Image
                        className="rounded-t-md w-full"
                        width={100}
                        height={100}
                        // fill="contain"
                        src={dummyUser}
                        alt="image of a black professional"
                      />

                      <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col">
                          <h5 className="font-bold">{member.name}</h5>
                          <p className="text-sm text-darkerGray">
                            {member.position}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link href={member.linkedin}>
                            <FaLinkedin className="text-darkerGray" size={20} />
                          </Link>
                          <Link href={member.twitter}>
                            <FaSquareXTwitter
                              className="text-darkerGray"
                              size={20}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* end of visible part */}
                    <div
                      className={`relative ${
                        modalStates[index] === false ? "hidden" : ""
                      }`}
                    >
                      {/* <!-- Main modal --> */}
                      <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className={` ${
                          modalStates[index] === false ? "hidden" : ""
                        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
                      >
                        <div className="relative p-4 w-full h-full bg-primary bg-opacity-30 flex items-center justify-center">
                          {/* <!-- Modal content --> */}
                          <div className="relative bg-backgroundLight rounded-lg shadow w-[50%] h-full dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> */}
                            <div className="flex relative items-center p-4 md:p-5  rounded-t ">
                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="rounded-full">
                                  <Image
                                    className="rounded-full w-full"
                                    width={80}
                                    height={80}
                                    // fill="contain"
                                    src={dummyUser}
                                    alt="image of a black professional"
                                  />
                                </div>
                                <div className="flex flex-col items-center my-4">
                                  <h5 className="font-bold">{member.name}</h5>
                                  <p className="text-sm text-darkerGray">
                                    {member.position}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Link href={member.linkedin}>
                                    <FaLinkedin
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                  <Link href={member.twitter}>
                                    <FaSquareXTwitter
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="text-gray-400 absolute right-4 top-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                                onClick={() => {
                                  const newModalStates = [...modalStates];
                                  newModalStates[index] =
                                    !newModalStates[index];
                                  setModalStates(newModalStates);
                                }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="space-y-4">
                              <p className="text-base px-12 text-center leading-relaxed text-gray-500 dark:text-gray-400">
                                {member.bio}
                              </p>
                            </div>
                            {/* <!-- Modal footer --> */}
                            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tabState === "facilitators" && (
          <div>
            <div className="bg-backgroundLight flex flex-col items-center justify-center pt-8">
              <SectionHeading Title="Course Facilitators" Bg="light" />
              <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aliquam. Beatae dignissimos voluptate suscipit
                maiores aliquam dolor asperiores atque quo amet qui libero
                magni, nemo exercitationem ipsam, ex esse illum veritatis sequi
                expedita. Minus consequatur amet excepturi sequi et error, ad
                fugit explicabo voluptas corporis tenetur provident hic
                accusantium quisquam!
              </p>
              {/* Images */}

              <div className="mt-8 mb-12 px-24 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {facilitatorsTeam.map((member, index) => (
                  <div key={index}>
                    {/* visible part */}
                    <div
                      onClick={() => {
                        const newModalStates = [...modalStates];
                        newModalStates[index] = !newModalStates[index];
                        setModalStates(newModalStates);
                      }}
                      className="bg-white cursor-pointer w-full col-span-1 overflow-hidden rounded-md shadow-lg"
                    >
                      <Image
                        className="rounded-t-md w-full"
                        width={100}
                        height={100}
                        // fill="contain"
                        src={dummyUser}
                        alt="image of a black professional"
                      />

                      <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col">
                          <h5 className="font-bold">{member.name}</h5>
                          <p className="text-sm text-darkerGray">
                            {member.position}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link href={member.linkedin}>
                            <FaLinkedin className="text-darkerGray" size={20} />
                          </Link>
                          <Link href={member.twitter}>
                            <FaSquareXTwitter
                              className="text-darkerGray"
                              size={20}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* end of visible part */}
                    <div
                      className={`relative ${
                        modalStates[index] === false ? "hidden" : ""
                      }`}
                    >
                      {/* <!-- Main modal --> */}
                      <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className={` ${
                          modalStates[index] === false ? "hidden" : ""
                        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
                      >
                        <div className="relative p-4 w-full h-full bg-primary bg-opacity-30 flex items-center justify-center">
                          {/* <!-- Modal content --> */}
                          <div className="relative bg-backgroundLight rounded-lg shadow w-[50%] h-full dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> */}
                            <div className="flex relative items-center p-4 md:p-5  rounded-t ">
                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="rounded-full">
                                  <Image
                                    className="rounded-full w-full"
                                    width={80}
                                    height={80}
                                    // fill="contain"
                                    src={dummyUser}
                                    alt="image of a black professional"
                                  />
                                </div>
                                <div className="flex flex-col items-center my-4">
                                  <h5 className="font-bold">{member.name}</h5>
                                  <p className="text-sm text-darkerGray">
                                    {member.position}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Link href={member.linkedin}>
                                    <FaLinkedin
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                  <Link href={member.twitter}>
                                    <FaSquareXTwitter
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="text-gray-400 absolute right-4 top-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                                onClick={() => {
                                  const newModalStates = [...modalStates];
                                  newModalStates[index] =
                                    !newModalStates[index];
                                  setModalStates(newModalStates);
                                }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="space-y-4">
                              <p className="text-base px-12 text-center leading-relaxed text-gray-500 dark:text-gray-400">
                                {member.bio}
                              </p>
                            </div>
                            {/* <!-- Modal footer --> */}
                            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
