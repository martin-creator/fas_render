"use client";
import BlogCardComponent from "@/components/BlogCardComponent";
import NavigationBar from "@/components/NavigationBar";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import {blogs } from "../../data/data"
import { useRouter } from "next/navigation";

const BlogsPage = () => {
  const router = useRouter();
  const NavigateFunction = (blogid) => {
    router.push(`/blogs/${blogid}`);
    
  }
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold">Our Blogs</p>
        </div>
        <div className="w-[60%] text-center text-lightGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor
          asperiores atque quo amet qui libero magni, nemo exercitationem ipsam,
          ex esse illum veritatis sequi expedita.
        </div>
        <button className="border border-tertiary mb-8 bg-transparent hover:bg-tertiary text-tertiary hover:text-primary py-2 px-4 rounded-md hover:scale-110 transition duration-300 ease-in-out">
          Have a blog idea? Submit it here!
        </button>
      </div>
      {/* blog sect */}
      <div className="px-8 grid grid-cols-1 bg-backgroundLight md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {blogs.map((blog) => (
          <BlogCardComponent
            key={blog.id}
            title={blog.title}
            bannerImage={blog.bannerImage}
            description={blog.description}
            date={blog.date}
            tags={blog.tags}
            author={blog.author}
            onClick={()=>{NavigateFunction(blog.id)}}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
