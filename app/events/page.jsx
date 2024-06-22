"use client";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import { useEventContext } from "@/context/eventContext";
import React, { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner";

const EventsPage = () => {
  const [tabState, setTabState] = useState("upcoming");
  const [eventsForUpcoming, setEventsForUpcoming] = useState([]);
  const [eventsForPast, setEventsForPast] = useState([]);
  const { getUpcomingEvents, getPastEvents } = useEventContext();

  useEffect(() => {
    const upcomingEvents = getUpcomingEvents();
    setEventsForUpcoming(upcomingEvents);
    const pastEvents = getPastEvents();
    setEventsForPast(pastEvents);
  }, [getPastEvents, getUpcomingEvents]);
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
          Events Join Future African Scientist's dynamic events to connect
          with fellow innovators, gain insights from industry leaders, and
          explore groundbreaking scientific advancements. Our events provide a
          platform for knowledge exchange, networking, and collaboration,
          ensuring that you stay at the forefront of science and technology in
          Africa. Whether you’re attending workshops, conferences, or webinars,
          you’ll find opportunities to grow, learn, and contribute to a vibrant
          scientific community.
        </div>
        <div className="text-tertiary text-lg flex gap-4 pb-16">
          <button
            onClick={() => {
              setTabState("upcoming");
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
              setTabState("past");
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
        {tabState === "upcoming" && (
          <div className="w-full">
            <div className="flex items-center justify-center capitalize">
              <SectionHeading Title={tabState} Bg="light" />
            </div>
            {/* cards */}
            <div className="px-16 py-8 grid grid-cols-1 items-center md:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
              {eventsForUpcoming.map((event) => (
                <div
                  key={event._id}
                  className="col-span-1 flex items-center justify-center"
                >
                  <EventCard
                    name={event?.name}
                    slug={event?.slug}
                    banner={event?.banner}
                    location={event?.location}
                    excerpt={event?.excerpt}
                    date={event?.date}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {tabState === "past" && (
          <div className="w-full">
            <div className="flex items-center justify-center capitalize">
              <SectionHeading Title={tabState} Bg="light" />
            </div>
            {/* cards */}
            <div className="px-16 py-8 grid grid-cols-1 items-center md:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
              {eventsForPast.map((event, index) => (
                <div
                  key={index}
                  className="col-span-1 flex items-center justify-center"
                >
                  <EventCard
                    name={event?.name}
                    slug={event?.slug}
                    banner={event?.banner}
                    location={event?.location}
                    excerpt={event?.excerpt}
                    date={event?.date}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
