import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { FaCalendarDay} from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";

async function getJob(slug) {
  const query = `
    *[_type == "job" && slug.current == "${slug}"][0] {
      title,
      slug,
      summary,
      datePosted,
      deadline,
      requirements,
      applicationLink,
      _id,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
  `;

  const job = await client.fetch(query);
  return job;
}

const SingleJobPost = async ({ params }) => {
  const job = await getJob(params?.slug);

  if (!job) {
    notFound();
  }

  const renderRequirements = (requirements) => {
    return (
      <ul className="list-disc list-inside w-full">
        {requirements.map((requirement) => (
          <li key={requirement?.key}>{requirement?.description}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* Hero section */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold text-center">
            {job?.title}
          </p>
        </div>
        <div className="w-[60%] mb-2 flex flex-col md:flex-row items-center justify-center gap-4 text-center text-white">
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaCalendarDay size={20} />
            <p>Posted on {new Date(job?.datePosted).toDateString()}</p>
          </div>
          <div className="flex text-sm gap-2 item-center justify-center">
            <FaCalendarDay size={20} />
            <p>Apply by {new Date(job?.deadline).toDateString()}</p>
          </div>
        </div>
        <div className="mb-12">
          {job.tags.map((tag) => (
            <Link
              href={`/jobs/tag/${tag.slug?.current}`}
              key={tag._id}
              className="text-sm hover:bg-primary transition duration-300 ease-in-out cursor-pointer hover:text-white hover:border-primary border rounded-md border-lightGray border-opacity-40 text-tertiary font-bold px-2 py-1 mr-2"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col mt-2 px-4 md:px-16 lg:px-32 items-center justify-center">
        <div className="mt-4">
          <p className="text-lg font-semibold text-primary">Summary</p>
          <p className=" text-darkerGray">{job?.summary}</p>
        </div>
        <div className="my-8 w-full">
          <p className="text-lg font-semibold text-primary">Requirements</p>
          <div className="text-darkerGray w-full">
            {renderRequirements(job?.requirements)}
          </div>
        </div>
        <div className="my-8 w-full items-center justify-center flex">
          <a
            href={job?.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary flex items-center justify-center hover:bg-secondary text-white w-1/4 font-bold py-2 px-4 rounded-md"
          >
            Apply
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleJobPost;
