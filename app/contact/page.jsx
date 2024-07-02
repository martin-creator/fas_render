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
        "Partner with Future African Scientist to foster innovation, support young scientists, and create impactful research collaborations.",
      url: "https://forms.gle/iDbRV43HPxdBTfHi7",
    },
    {
      title: "Donations",
      icon: <FaHandHoldingHeart size={40} />,
      description:
        "Support the next generation of African scientists through your generous donations. Your contributions help provide the resources and opportunities they need to excel",
      url: "https://forms.gle/iDbRV43HPxdBTfHi7",
    },
    {
      title: "Events",
      icon: <FaCalendarCheck size={40} />,
      description:
        "Participate in our events to network with industry leaders, gain valuable insights, and stay ahead in the scientific community. Join us in shaping the future of science in Africa",
      url: "https://forms.gle/iDbRV43HPxdBTfHi7",
    },
    {
      title: "Jobs/Internships",
      icon: <FaBriefcase size={40} />,
      description:
        "Are you an organization with job or internship opportunities for young scientists? Partner with us to connect with talented individuals eager to contribute to your projects and grow in their careers",
      url: "https://forms.gle/iDbRV43HPxdBTfHi7",
    },
    {
      title: "Research & Skills Development",
      icon: <FaQuestionCircle size={40} />,
      description:
        "Is your organization looking to train and develop African scientists? Collaborate with us to provide cutting-edge research opportunities and essential skills training",
      url: "https://forms.gle/iDbRV43HPxdBTfHi7",
    },
    {
      title: "Other Queries",
      icon: <FaQuestionCircle size={40} />,
      description:
        "Have questions or need more information? Reach out to us for any inquiries. We're here to assist and provide the information you need",
      url: "https://forms.gle/iDbRV43HPxdBTfHi7",
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
          Reach out to Future African Scientist for partnerships, donations,
          event organization, job opportunities, internships, or any other
          inquiries. We’re here to collaborate, innovate, and make a difference
          together.
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
      <Footer />
    </div>
  );
};

export default ContactUs;
