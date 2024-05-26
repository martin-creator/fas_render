import React from "react";
import SectionHeading from "./SectionHeading";
import { FlagIcon } from "react-flag-kit";

import Image from "next/image";
const TestimonialsComponent = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      name: "NKONGE REAGAN - ASRB 2022",
      university: "Gulu University",
      description:
        "ASRB is a great platform for many rising AFRICAN Scientists who are not only ambitious to see progress in their careers but also desire to create a mark in this world to make Africa a better place through science and research. It gives guidance on how to plan your scientific Research journey, takes you through the steps of writing a research proposal, and equips you with the knowledge of how to give a good research talk, all of which are crucial in building a competent and distinctive researcher! You also receive mentorship and inspiration from both local and international scientific researchers who are more than willing to walk with you throughout your research journey.",
      country: "UG",
      imageUrl:
        "https://images.unsplash.com/photo-1521511189395-b82252213754?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "HADIZA MARIAM SESAY - ASRB 2022",
      university: "University of Gambia",
      description:
        "I just took up a position as National Officer of Research Exchange when I saw the flyer for this program. I didn't hesitate to apply because I knew I needed any more knowledge on research, but I found more than expected. It was knowledge coupled with experience. The synchronous courses offered taught me that research could be made easy for anyone interested, and there is much more we could do to promote Research in our African region. Thanks to ASRB I will be leading my team this tenure with an array of ideas and topics on Research and masterclass, and the confidence to even get our first research project.",
      country: "UG",
      imageUrl:
        "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "JANICE ODHIAMBO - ASRB 2022",
      university: "University of Nairobi",
      description:
        "Joining this program proved vital to my research journey. I was a novice myself but after the training sessions and the iBiology courses paired with the capstone project, I can confidently carry out a project now. Straight from inception to publishing. The networks you build from this place are invaluable since there's a pool of people with common interests drawn from all over Africa. For the training sessions we have prodigies in their respective fields, so if you are keen on the program then there's only one way – up.",
      country: "KE",
      imageUrl:
        "https://images.unsplash.com/photo-1614317226858-a2bcad5498c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <SectionHeading Bg="light" Title="Testimonials" />
      <p className="text-center w-1/2 mt-4 text-dimGray">
      Here's what some of our program participants have to say about their experience with us
      </p>
      {/*testimonials  */}
      <div>
        <div className="flex justify-center items-center flex-col lg:grid lg:grid-cols-3 gap-8 mt-16 px-16">
          {/* <Slider {...settings}> */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col shadow-md p-8 rounded-md bg-white h-[80%] hover:shadow-lg transition duration-300 ease-in-out"
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
                      <h6 className="text-dimGray text-sm font-semibold flex-nowrap w-full">
                        {testimonial.university}
                      </h6>
                    </div>
                  </div>
                  {/* flag */}
                  <div className="">
                    <FlagIcon code={testimonial.country} size={45} />
                  </div>
                </div>
                <p className="text-left  text-dimGray mt-8  overflow-hidden">
                  {testimonial.description}
                </p>
              </div>
            ))}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
