"use client";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { useEventContext } from "@/context/eventContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCalendarDay, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import placeholder from "../../../public/person.png";
import { Spinner } from "@/components/Spinner";


// async function getAllEventSlugs() {
//   const query = `
//   *[_type == "event"] {
//     "slug": slug.current
//   }
//   `;
//   const events = await client.fetch(query);
//   return events;
// }

// export async function generateStaticParams() {
//   const slugs = await getAllEventSlugs();
//   return slugs.map(({ slug }) => ({ slug }));
// }


const SingleEventPage = () => {
  const { getEventBySlug } = useEventContext();
  const [individualEvent, setIndividualEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchEventDetails = async () => {
      const event = await getEventBySlug(slug);
      setIndividualEvent(event);
    };

    fetchEventDetails();
    setLoading(false);
  }, [slug, getEventBySlug]);
  if (!individualEvent) {
    return (
      <div className="w-full h-screen">
        <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
          <NavigationBar />
        </div>
        <div className="h-1/2 flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold text-center">
            {individualEvent?.name}
          </p>
        </div>
        <div className="w-[60%] mb-12 flex items-center justify-center gap-4 text-center text-white">
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaCalendarDay size={20} />

            <p>{new Date(individualEvent?.date).toDateString()}</p>
          </div>
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaLocationDot size={20} />
            <p>{individualEvent?.location}</p>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center w-full">
        <div className="col-span-2 flex flex-col px-16 py-4">
          <p className="text-xl text-primary  mb-4 font-bold ">Details</p>
          <p className="text-darkGray">{individualEvent?.details}</p>
          <div className="py-4">
            {/* <Link href={individualEvent.banner} download> */}
            <Image
              src={individualEvent.banner}
              width={650}
              height={350}
              alt="Event banner"
              className="w-full h-auto"
            />
            <a
              href={individualEvent.banner}
              download="event_poster.png"
              className="inline-block px-4 py-2 mt-4 text-primary hover:text-white border border-primary rounded-md bg-white hover:bg-primary transition duration-300 ease-in-out"
            >
              Download Poster
            </a>
            {/* </Link> */}
          </div>
          <p className="text-xl text-primary my-4 font-bold ">Guests</p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* guest Items*/}
            {individualEvent?.guests?.map((guest) => (
              <div
                key={guest?.name}
                className="col-span-1 border border-lightGray  border-opacity-20 transition duration-300 ease-in-out flex flex-col items-center justify-center p-4 h-64 w-64 rounded-md"
              >
                <div className="w-[80px] h-[80px] overflow-hidden rounded-full ">
                  <Image
                    src={placeholder ? placeholder : `${guest?.photo}`}
                    width={80}
                    height={80}
                    alt="guest persons image"
                  />
                </div>
                <div className="w-full flex flex-col items-center justify-center text-center">
                  <p className="font-bold text-primary py-2">{guest?.name}</p>
                  <p className="font-medium text-sm text-darkerGray">
                    {guest?.position}
                  </p>
                  <Link href={guest?.linkedin} className="cursor-pointer mt-2">
                    <FaLinkedin className="text-darkerGray" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="md:hidden text-xl text-primary mt-16 mb-4 font-bold ">
            Sign Up
          </p>
        </div>
        <div className="px-16 col-span-1 py-4 mr-16 flex lg:flex-col w-full gap-4">
          <div className="border border-lightGray  border-opacity-20 p-4 rounded-md">
            <p className="text-xl text-primary my-4 font-bold ">
              Want to Attend the Event?
            </p>
            <p className="text-darkGray mb-4">
              Let us know your interest by signing up for the event.
            </p>
            <Link
              href={individualEvent?.signupLink}
              className="px-4 mt-4 py-2 text-primary hover:text-white border border-primary rounded-md bg-white hover:bg-primary transition duration-300 ease-in-out"
            >
              Sign up &rarr;
            </Link>
          </div>
          <div className="border border-lightGray  border-opacity-20 p-4 rounded-md">
            <p className="text-xl text-primary my-4 font-bold ">
              Want to Partner with us in this Event?
            </p>
            <p className="text-darkGray mb-4">
              Let us know your interest by filling in this form!
            </p>
            <Link
              href={individualEvent?.partnerWithUsLink}
              className="px-4 mt-4 py-2 text-primary hover:text-white border border-primary rounded-md bg-white hover:bg-primary transition duration-300 ease-in-out"
            >
              Sign up &rarr;
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleEventPage;
