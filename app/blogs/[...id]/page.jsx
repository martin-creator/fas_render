"use client";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { useParams } from "next/navigation";
import { blogs } from "../../../data/data";
import blogImage from "../../../public/blogImg.jpg";
import { IoPricetags } from "react-icons/io5";
import { FaCalendarDay, FaUser } from "react-icons/fa";
import Image from "next/image";
const IndividualBlogPage = () => {
  // grab the blog id from the url
  const params = useParams();
  const blogData = blogs.find((blog) => blog.id === Number(params.id));

  // fetch the blog data
  // render the blog
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold text-center">
            {blogData.title}
          </p>
        </div>
        <div className="w-[60%] mb-12 flex items-center justify-center gap-4 text-center text-white">
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaCalendarDay size={20} />
            <p>{blogData.date}</p>
          </div>
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaUser size={20} />
            <p>{blogData.author}</p>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="flex flex-col mt-16 justify-center items-center">
        <Image
          src={blogData.bannerImage}
          width={600}
          height={400}
          alt="blog image"
        />

        <div className="mt-8 w-[80%] text-darkerGray">{blogData.content}</div>
        <div className="flex items-center justify-start gap-4">
          <div className="text-darkerGray flex gap-2">
            <p>Tags</p>
            <IoPricetags size={20} />
          </div>
          <div className="my-8">
            {blogData.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs border rounded-md border-lightGray border-opacity-40 text-tertiary font-bold px-2 py-1 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlogPage;
