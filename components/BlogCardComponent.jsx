import Image from "next/image";
import React from "react";

const BlogCardComponent = ({
  title,
  date,
  description,
  bannerImage,
  tags,
  author,
  onClick
}) => {
  return (
    <div className="rounded-md bg-white shadow-md cursor-pointer" onClick={onClick}>
      <Image
        src={bannerImage}
        alt="blog banner"
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <p className="text-lightGray text-sm uppercase mb-2">{date}</p>
          <p className="text-lightGray text-sm uppercase mb-2">By {author}</p>
        </div>
        <p className="text-xl font-bold text-primary mb-2">{title}</p>
        <p className="text-lightGray">{description}</p>
        <div className="mt-2">
          {tags.map((tag, index) => (
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
  );
};

export default BlogCardComponent;
