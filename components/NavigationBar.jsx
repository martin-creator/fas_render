"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoLong from "../public/FAS1.png";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMenu, IoCloseCircle } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Our Team",
      link: "/team",
    },
    {
      title: "Our Program",
      link: "/programs",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <div>
      <div className="flex justify-between mx-6 md:mx-0 md:justify-around mt-8 z-10">
        {/* logo */}
        <div>
          <Image
            height={150}
            src={LogoLong}
            alt="Future African Scientist Logo"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-4 uppercase text-tertiary">
          {navLinks.map((link) => (
            <Link href={link.link} key={link.title}>
              <p
                className={`text-tertiary font-normal text-sm 2xl:text-lg text-animation-one ${
                  pathname.includes(link.link) ? "active-navbar-link" : ""
                }`}
              >
                {link.title}
              </p>
            </Link>
          ))}
        </div>
        {/* Social Media */}
        <div className="hidden md:flex gap-4 text-tertiary ">
          <BsInstagram className="text-animation-one" />
          <RiTwitterXLine className="text-animation-one" />
        </div>
        {/* Mobile Menu */}
        {!showNav && (
          <button className="md:hidden" onClick={() => setShowNav(!showNav)}>
            <IoMenu size={40} className="text-tertiary" />
          </button>
        )}
        {showNav && (
          <div
            className={`flex flex-col w-[30%] absolute mobile-menu gap-4 text-tertiary md:static md:w-auto transition-all ${
              showNav ? "left-0" : "-left-full"
            }`}
          >
            <div>
              <IoCloseCircle
                size={22}
                className="absolute -left-10 top-4"
                onClick={() => setShowNav(false)}
              />
            </div>
            {navLinks.map((link) => (
              <Link href={link.link} key={link.title}>
                <p
                  className={`text-tertiary font-normal text-sm text-animation-one ${
                    pathname.includes(link.link) ? "active-navbar-link" : ""
                  }`}
                >
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
