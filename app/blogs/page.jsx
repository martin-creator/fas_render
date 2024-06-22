import BlogCardComponent from "@/components/BlogCardComponent";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Spinner } from "@/components/Spinner";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    author,
    publishedAt,
    banner,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}
export const revalidate = 60;
async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
}
const BlogsPage = async () => {
  const blogs = await getPosts();
  // TAGS
  const tags = await getAllTags();

  if (!blogs) {
    return (
      <div className="w-full h-screen">
        <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
          <NavigationBar />
        </div>
        <div className="h-1/2 flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
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
        Dive into a wealth of knowledge with our blog, where we explore everything from cutting-edge medical research and innovative health tech to practical advice on surgery, pediatrics, and mental health. Discover how science and entrepreneurship are transforming Africa and beyond.
        </div>
        <button className="border border-tertiary mb-8 bg-transparent hover:bg-tertiary text-tertiary hover:text-primary py-2 px-4 rounded-md hover:scale-110 transition duration-300 ease-in-out">
          Have a blog idea? Submit it here!
        </button>
      </div>
      {/* tags */}
      <div className="py-8 px-8 flex overflow-x-auto justify-center items-center bg-backgroundLight w-full">
        {tags.map((tag) => (
          <Link
            href={`blogs/tag/${tag.slug.current}`}
            key={tag._id}
            className="text-sm hover:bg-primary transition duration-300 ease-in-out cursor-pointer hover:text-white hover:border-primary border rounded-md border-lightGray border-opacity-40 text-tertiary font-bold px-2 py-1 mr-2"
          >
            {tag?.slug?.current}
          </Link>
        ))}
      </div>
      {/* blog sect */}
      <div className="px-8 grid grid-cols-1 bg-backgroundLight md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-16">
        {blogs.map((blog) => (
          <BlogCardComponent
            key={blog.id}
            title={blog.title}
            slug={blog.slug}
            banner={blog.banner}
            excerpt={blog.excerpt}
            publishedAt={blog.publishedAt}
            tags={blog.tags}
            author={blog.author}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
