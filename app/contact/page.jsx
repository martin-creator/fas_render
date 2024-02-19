import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import {
  FaHandHoldingHeart,
  FaCalendarCheck,
  FaBriefcase,
  FaQuestionCircle,
} from "react-icons/fa";
import ContactCardComponent from "@/components/ContactCardComponent";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const contactItems = [
    {
      title: "Partnerships",
      icon: <FaHandshakeAngle size={40} />,
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
      url: "example.com",
    },
    {
      title: "Donations",
      icon: <FaHandHoldingHeart size={40} />,
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
      url: "example.com",
    },
    {
      title: "Events",
      icon: <FaCalendarCheck size={40} />,
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
      url: "example.com",
    },
    {
      title: "Jobs/Internships",
      icon: <FaBriefcase size={40} />,
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
      url: "example.com",
    },
    {
      title: "Other Queries",
      icon: <FaQuestionCircle size={40} />,
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
      url: "example.com",
    },
  ];
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold">Contact Us</p>
        </div>
        <div className="w-[60%] text-center text-lightGray mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
          asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
          ex esse illum veritatis sequi expedita.
        </div>
      </div>
      {/* body */}
      <div className="bg-backgroundLight py-8 px-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {contactItems.map((item, index) => (
          <div key={index} className="col-span-1">
            <ContactCardComponent
              Title={item.title}
              Description={item.description}
              Icon={item.icon}
              Url={item.url}
              
            />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
