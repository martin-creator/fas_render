import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import React from "react";
import { FaChalkboardTeacher, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { FaEnvelopeOpenText, FaPhone } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

async function getJobs() {
  const query = `
  *[_type == "job"] {
    title,
    slug,
    summary,
    datePosted,
    deadline,
    applicationLink,
    requirements,
    tags[]-> {
      _id,
      name,
      slug
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}
async function getJobTagsWithCounts() {
  const query = `
  *[_type == "jobTag"] {
    _id,
    name,
    slug,
    "jobCount": count(*[_type == "job" && references(^._id)])
  }
  `;
  const tags = await client.fetch(query);
  return tags;
}
function truncateText(text, wordLimit) {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}
const CareersPage = async () => {
  const jobs = await getJobs();
  const tags = await getJobTagsWithCounts();
  if (!jobs || !tags) {
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

  const recruitmentProcessItems = [
    {
      Icon: <FaEnvelopeOpenText size={20} />,
      Title: "Application",
      Duration: "1-2 weeks",
      Content:
        "Submit your application for the role you are interested in. Make sure to include your resume and cover letter.",
    },
    {
      Icon: <FaCheckCircle size={20} />,
      Title: "Review",
      Duration: "1-2 weeks",
      Content:
        "Our team will review your application and reach out to you if you are selected to move forward in the process.",
    },
    {
      Icon: <MdWork size={20} />,
      Title: "Interview",
      Duration: "1-2 weeks",
      Content:
        "You will have an interview with the hiring manager and other team members. Be prepared to discuss your experience and skills.",
    },
    {
      Icon: <FaFileAlt size={20} />,
      Title: "Offer",
      Duration: "1-2 weeks",
      Content:
        "If you are selected for the role, you will receive an offer letter with details on compensation and benefits.",
    },
  ];
return (
  <div>
    <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
      <NavigationBar />
    </div>
    {/* hero sect */}
    <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full pb-8">
      <div className="flex w-full justify-center pt-12">
        <p className="text-5xl text-tertiary font-bold">Join Us</p>
      </div>
      <div className="w-[60%] text-center text-lightGray">
        We are always looking for talented individuals to join our team. Check
        out our open positions below.
      </div>
    </div>
    <div className="p-8 flex justify-center items-center flex-col">
      <SectionHeading Title="Our Recruitment Process" Bg="light" />
      <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray pb-8">
        Our recruitment process is designed to be as transparent and
        straightforward as possible. Here's what you can expect when you apply
        to join our team
      </p>
      <ol className="items-center sm:flex">
        {recruitmentProcessItems.map((item, index) => (
          <li key={index} className="mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-secondary rounded-full ring-0 ring-secondary dark:tertiary sm:ring-8 dark:tertiary shrink-0 text-primary">
                {item.Icon}
              </div>
              {/* <div className="hidden sm:flex w-full bg-backgroundLight h-0.5  dark:bg-gray-700"></div> */}
              <div className="hidden xl:flex w-full border-t border-dimGray border-dashed h-0.5  dark:bg-gray-700"></div>
            </div>
            <div className="mt-6 sm:pe-8">
              <h3 className="text-lg font-semibold text-primary">
                {item.Title}
              </h3>
              <time className="block my-4 text-sm font-bold leading-none text-darkerGray dark:text-gray-500">
                Duration: {item.Duration}
              </time>
              <p className="text-sm font-normal mt-2 text-darkerGray dark:text-gray-400">
                {item.Content}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* positions */}
      <div className="flex justify-center items-center flex-col w-full">
        <SectionHeading Title="Open Positions" Bg="light" />
        <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray pb-8">
          We are currently hiring for the following positions. Click on the
          position to learn more and apply.
        </p>
        {/* tags */}
        <div className="p-2 md:p-8 flex overflow-x-auto justify-start items-center w-full ">
          {tags.map((tag) => (
            <Link
              href={`/careers/tag/${tag.slug?.current}`}
              key={tag._id}
              className="text-sm flex-shrink-0 hover:bg-primary transition duration-300 ease-in-out cursor-pointer hover:text-white hover:border-primary border rounded-md border-lightGray border-opacity-40 text-tertiary font-bold px-2 py-1 mr-2"
            >
              {tag.name} ({tag.jobCount})
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
          {jobs.map((job) => (
            <div
              className="bg-backgroundLight p-8 mx-4 md:mx-0 rounded-md cursor-pointer hover:shadow-md duration-300 ease-in-out"
              key={job.slug?.current}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">
                  {job.title}
                </h3>
                <p className="font-semibold text-xs text-dimGray">
                  {new Date(job.datePosted).toLocaleDateString("en-GB")}
                </p>
              </div>
              <p className="text-sm font-normal mt-2 text-darkerGray dark:text-gray-400">
                {truncateText(job.summary, 30)}
              </p>
              <Link
                href={`/careers/${job.slug?.current}`}
                className="text-primary font-medium py-2 mt-32 pt-32 cursor-pointer"
              >
                View Job Post
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default CareersPage;
