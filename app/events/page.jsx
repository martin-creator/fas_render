import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import React, { useState } from "react";

const EventsPage = () => {
  const [tabState, setTabState] = useState("upcoming");
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold">Events</p>
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
              tabState === "upcoming" ? "font-bold underline" : ""
            }`}
          >
            Upcoming Events
          </button>
          <div className="border-l border-l-tertiary" />
          <button
            onClick={() => {
              setTabState("upcoming");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "past" ? "font-bold underline" : ""
            }`}
          >
            Past Events
          </button>
        </div>
      </div>

      {/* Body */}
      <div>
        <SectionHeading Title={tabState} Bg="light" />
      </div>
    </div>
  );
};

export default EventsPage;
