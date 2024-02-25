import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarDay, FaLocationDot } from "react-icons/fa6";
const EventCard = ({
  name,
  slug,
  banner,
  location,
  excerpt,
  date,
}) => {

  return (
    <div className="rounded-md h-[400px] w-[400px] bg-white shadow-md hover:shadow-none cursor-pointer border border-white hover:border-lightGray hover:border-opacity-20 border-opacity-20 transition duration-300 ease-in-out">
      <Link href={`/events/${slug?.current}`}>
        <Image
          src={
            banner
              ? banner
              : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Event banner"
          width={100}
          height={100}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <div className="px-4 py-2 ">
          <p className="text-primary font-bold mt-4 mb-2">{name}</p>

          <p className="text-darkGray text-sm my-2">{excerpt}</p>
          <div className="flex gap-4 my-4 items-center w-full">
            <div className="text-darkerGray flex-nowrap text-xs flex gap-2 items-center ">
              <FaCalendarDay size={15} />
              <p className="uppercase  font-semibold ">
                {new Date(date).toDateString()}
              </p>
            </div>

            <div className="text-darkerGray text-xs flex gap-2 items-center ">
              <FaLocationDot size={15} />
              <p className="font-bold">{location}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
