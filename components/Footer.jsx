import Image from "next/image";
import React from "react";
import LogoLong from "../public/FAS1.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  let quickLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Our Team",
      link: "/about",
    },
    {
      title: "Programs",
      link: "/programs",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="bg-primary">
      <div className="flex flex-col md:grid grid-cols-3 py-8">
        {/* Logo */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <Image
            src={LogoLong}
            width={130}
            alt="Future African Scientist Logo"
          />
          <p className="text-lightGray text-center text-sm w-1/2 mt-4">
            Future African Scientist is a non-profit organization that equips
            early-career scientists and undergraduate students with the advanced
            research skills, infrastructure, and networks they need to translate
            research findings into products, policies, and practices.
          </p>
          <div className="text-white flex gap-6 mt-4">
            <MdOutlineFacebook size={28} />
            <FaLinkedin size={28} />
            <AiFillInstagram size={28} />
            <FaSquareXTwitter size={28} />
          </div>
        </div>
        {/* Quick Links */}
        <div className="col-span-1 flex flex-col text-lightGray items-center">
          <p className="font-bold text-white mb-4 mt-8 md:mt-0">Quick Links</p>
          {quickLinks.map((link) => (
            <Link className="text-sm mb-4" href={link.link} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
        {/* Contact Info */}
        <div className="col-span-1 flex flex-col items-center mt-8 md:mt-0">
          <p className="font-bold text-white mb-4">Contact Us</p>
          <p className="text-sm text-lightGray mb-4"> futureafricanscientist@gmail.com</p>
          <p className="text-sm text-lightGray mb-4">+1(858)335-3902 / +256783370759</p>
          <p className="text-sm text-lightGray mb-4">
          600 Main Street
          </p>
          <p className="text-sm text-lightGray mb-4">Cambridge MA 02139. </p>
        </div>
      </div>
      <div className="border-t border-t-lightGray flex justify-center p-6">
        <p className="text-lightGray text-sm">
          Future African Scientist © 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
