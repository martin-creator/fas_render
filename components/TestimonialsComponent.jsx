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
      name: "Alexia Bern",
      university: "University of Nairobi",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.",
      country: "KE",
      imageUrl:
        "https://images.unsplash.com/photo-1521511189395-b82252213754?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Max",
      university: "Makerere University",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.",
      country: "UG",
      imageUrl:
        "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Joy Ike",
      university: "Delta State University",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
      country: "NG",
      imageUrl:
        "https://images.unsplash.com/photo-1614317226858-a2bcad5498c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <SectionHeading Bg="light" Title="Testimonials" />
      <p className="text-center w-1/2 mt-4 text-dimGray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        aliquam.
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
