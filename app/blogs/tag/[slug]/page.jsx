import BlogCardComponent from "@/components/BlogCardComponent";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { client } from "@/sanity/lib/client";

async function getPostsByTag(tag) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
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

  const posts = await client.fetch(query);
  return posts;
}
let tag;
export const revalidate = 60;
const TagsPage = async ({ params }) => {
  const blogs = await getPostsByTag(params.slug);
  tag = params.slug;
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold capitalize">{tag} Blogs</p>
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

export default TagsPage;
