import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { useParams } from "next/navigation";
import { blogs } from "../../../data/data";
import blogImage from "../../../public/blogImg.jpg";
import { IoPricetags } from "react-icons/io5";
import { FaCalendarDay, FaUser } from "react-icons/fa";
import Image from "next/image";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getPost(slug) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    author,
    publishedAt,
    banner,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}
export const revalidate = 60;
const IndividualBlogPage = async ({ params }) => {
  const blog = await getPost(params?.slug);
  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold text-center">
            {blog?.title}
          </p>
        </div>
        <div className="w-[60%] mb-12 flex items-center justify-center gap-4 text-center text-white">
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaCalendarDay size={20} />
            <p>{new Date(blog?.publishedAt).toDateString()}</p>
          </div>
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaUser size={20} />
            <p>{blog.author}</p>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="flex flex-col mt-16 justify-center items-center">
        <Image src={blog.banner} width={600} height={400} alt="blog image" />

        {/* <div className="mt-8 w-[80%] text-darkerGray">{blog.content}</div> */}
        <div className={richTextStyles}>
          <PortableText
            value={blog?.body}
            components={myPortableTextComponents}
          />
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="text-darkerGray flex gap-2">
            <p>Tags</p>
            <IoPricetags size={20} />
          </div>
          <div className="my-8">
            {blog?.tags?.map((tag) => (
              <span
                key={tag._id}
                className="text-xs border rounded-md border-lightGray border-opacity-40 text-tertiary font-bold px-2 py-1 mr-2"
              >
                {tag?.slug?.current}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={400}
        height={400}
        className="w-full text-center my-8"
      />
    ),
  
  },
};
export default IndividualBlogPage;

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
