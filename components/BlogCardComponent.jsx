import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardComponent = ({
  title,
  slug,
  author,
  excerpt,
  banner,
  publishedAt,
  tags,
}) => {
  return (
    <div className="rounded-md bg-white shadow-md cursor-pointer hover:shadow-none hover:border hover:border-lightGray hover:border-opacity-20 transition duration-300 ease-in-out">
      <Link href={`/blogs/${slug?.current}`}>
        <Image
          src={banner}
          alt="blog banner"
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <div className="p-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <p className="text-lightGray text-sm uppercase mb-2">
              {new Date(publishedAt).toDateString()}
            </p>
            <p className="text-lightGray text-sm uppercase mb-2">By {author}</p>
          </div>
          <p className="text-xl font-bold text-primary mb-2">{title}</p>
          <p className="text-lightGray">{excerpt}</p>
          <div className="mt-2">
            {tags.map((tag) => (
              <span
                key={tag._id}
                className="text-xs  border rounded-md border-lightGray border-opacity-40 text-tertiary font-bold px-2 py-1 mr-2"
              >
                {tag?.slug?.current}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCardComponent;
