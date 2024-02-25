"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
const EventContext = createContext();

async function getAllEvents() {
  const query = `
  *[_type == "event"] {
    _id,
    name,
    slug,
    banner,
    location,
    details,
    excerpt,
    date,
    time,
    signupLink,
    partnerWithUsLink,
    guests[] {
      name,
      position,
      linkedin
    }
  }
  `;
  const events = await client.fetch(query);
  return events;
}
export const revalidate = 60;
async function getEventBySlug(slug) {
  const query = `
  *[_type == "event" && slug.current == "${slug}"][0] {
    _id,
    name,
    slug,
    banner,
    location,
    details,
    excerpt,
    date,
    time,
    signupLink,
    partnerWithUsLink,
    guests[] {
      name,
      position,
      linkedin
    }
  }
  `;
  const event = await client.fetch(query);
  return event || null;
}

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getAllEvents();
      setEvents(allEvents);
      setLoading(false);
    };

    fetchData();
  }, []);

  const getUpcomingEvents = () => {
    const today = new Date();
    return events.filter((event) => new Date(event.date) >= today);
  };

  const getPastEvents = () => {
    const today = new Date();
    return events.filter((event) => new Date(event.date) < today);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        loading,
        getUpcomingEvents,
        getPastEvents,
        getEventBySlug,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
