"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FlagIcon } from "react-flag-kit";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import VideoComponent from "./VideoComponent";

const TestimonialsComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const testimonials = [
    {
      name: "NKONGE REAGAN - ASRB 2022",
      university: "Gulu University",
      description:
        "ASRB is a great platform for many rising AFRICAN Scientists who are not only ambitious to see progress in their careers but also desire to create a mark in this world to make Africa a better place through science and research. It gives guidance on how to plan your scientific Research journey, takes you through the steps of writing a research proposal, and equips you with the knowledge of how to give a good research talk, all of which are crucial in building a competent and distinctive researcher! You also receive mentorship and inspiration from both local and international scientific researchers who are more than willing to walk with you throughout your research journey.",
      country: "UG",
      imageUrl: "/teamImg/reagan_tst.png",
    },
    {
      name: "HADIZA MARIAM SESAY - ASRB 2022",
      university: "University of Gambia",
      description:
        "I just took up a position as National Officer of Research Exchange when I saw the flyer for this program. I didn't hesitate to apply because I knew I needed any more knowledge on research, but I found more than expected. It was knowledge coupled with experience. The synchronous courses offered taught me that research could be made easy for anyone interested, and there is much more we could do to promote Research in our African region. Thanks to ASRB I will be leading my team this tenure with an array of ideas and topics on Research and masterclass, and the confidence to even get our first research project.",
      country: "GM",
      imageUrl: "/teamImg/hadiza_tst.png",
    },
    {
      name: "JANICE ODHIAMBO - ASRB 2022",
      university: "University of Nairobi",
      description:
        "Joining this program proved vital to my research journey. I was a novice myself but after the training sessions and the iBiology courses paired with the capstone project, I can confidently carry out a project now. Straight from inception to publishing. The networks you build from this place are invaluable since there's a pool of people with common interests drawn from all over Africa. For the training sessions we have prodigies in their respective fields, so if you are keen on the program then there's only one way – up.",
      country: "KE",
      imageUrl: "/teamImg/janice_tst.png",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <SectionHeading Bg="light" Title="Testimonials" />
      <p className="text-center w-1/2 mt-4 text-dimGray">
        Here's what some of our program participants have to say about their
        experience with us
      </p>
      {/*testimonials  */}
      <div className="w-full h-full">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          // ssr={true}
          // infinite={true}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col shadow-md p-8 m-4 rounded-md bg-white h-[80%] hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="overflow-hidden flex gap-8 items-center">
                <div className="flex gap-6 ">
                  <Image
                    className="w-16 h-16 rounded-full object-cover"
                    src={testimonial.imageUrl}
                    width={40}
                    height={40}
                    alt="testimonial"
                  />
                  <div>
                    <h5 className="text-primary text-base font-bold flex-nowrap w-full mt-4">
                      {testimonial.name}
                    </h5>
                    <h6 className="text-dimGray text-sm font-semibold flex-nowrap w-full py-2">
                      {testimonial.university}
                    </h6>
                  </div>
                </div>

                <div className="">
                  <FlagIcon code={testimonial.country} size={45} />
                </div>
              </div>
              <p className="text-left  text-dimGray mt-8  overflow-y-scroll">
                {testimonial.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <SectionHeading Bg="light" Title="Hajer's Journey with Future African Scientist" />{" "}
      <VideoComponent videoLink={"https://www.youtube.com/embed/SOOtoAInrcE"} />
    </div>
  );
};

export default TestimonialsComponent;


