"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoLong from "../public/FAS1.png";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
// import Linkedin icon
import { FaLinkedin } from "react-icons/fa";
import { IoMenu, IoCloseCircle } from "react-icons/io5";
import { usePathname } from "next/navigation";

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
      title: "Our Programs",
      link: "/programs",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Blog",
      link: "/blogs",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200; // Adjust this value as needed
      const scrollY = window.scrollY;

      if (scrollY >= threshold && !isSticky) {
        setIsSticky(true);
      } else if (scrollY < threshold && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);
  // bg-primary bg-opacity-90
  // Function to determine the active link
  return (
    <div className={`sticky top-0 left-0 z-20 `}>
      <div
        className={`flex  px-4 py-2 md:px-0 md:py-0 justify-between items-center md:mx-0 md:justify-around z-10 transition ${
          isSticky ? "bg-primary bg-opacity-90" : "bg-transparent"
        } `}
      >
        {/* logo */}
        <Link href="/">
          <Image
            height={100}
            src={LogoLong}
            alt="Future African Scientist Logo"
          />
        </Link>

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
          {/* <BsInstagram className="text-animation-one" /> */}
          <FaLinkedin className="text-animation-one" onClick={()=>{ window.location.href =
            "https://www.linkedin.com/company/future-african-scientist";}} />
          <RiTwitterXLine className="text-animation-one" onClick={()=>{ window.location.href = "https://x.com/FAS_2024";}} />

        </div>
        {/* Mobile Menu */}
        {!showNav && (
          <button className="md:hidden" onClick={() => setShowNav(!showNav)}>
            <IoMenu size={40} className="text-tertiary" />
          </button>
        )}
        {showNav && (
          <div
            className={`flex flex-col w-[50%] h-full p-4 bg-primary opacity-90 absolute mobile-menu gap-4 text-tertiary md:static md:w-auto transition-all ${
              showNav ? "-left-20" : "-left-full"
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
                    pathname.startsWith(link.link) ? "active-navbar-link" : ""
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
