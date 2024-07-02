import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

async function getJobsByTag(tag) {
  const query = `
    *[_type == "job" && references(*[_type == "jobTag" && slug.current == "${tag}"]._id)]{
      title,
      slug,
      summary,
      datePosted,
      deadline,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
  `;
  const jobs = await client.fetch(query);
  return jobs;
}


// async function getAllTags() {
//   const query = `
//     *[_type == "jobTag"]{
//       slug
//     }
//   `;
//   const tags = await client.fetch(query);
//   return tags.map(tag => ({ slug: tag.slug.current }));
// }

// export async function generateStaticParams() {
//   const tags = await getAllTags();
//   return tags.map(tag => ({ params: { slug: tag.slug } }));
// }



const TagsPage = async ({ params }) => {
  const jobs = await getJobsByTag(params.slug);
  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }

  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* Hero section */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex flex-col w-full items-center justify-center py-12">
          <p className="text-5xl text-tertiary font-bold capitalize">
            {params.slug} Careers
          </p>
          <p className="text-white w-[60%] text-center my-6">
            Haven't found any position that matches your interests? Submit your
            resume here and we'll reach out to you when we have a position that
            matches your skills.
          </p>
          <a
            href={"https://forms.gle/BUNuVudUN4Z2sXjZ6"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-tertiary mb-8 bg-transparent hover:bg-tertiary text-tertiary hover:text-primary py-2 px-4 rounded-md hover:scale-110 transition duration-300 ease-in-out"
          >
            Submit it here!
          </a>
        </div>
      </div>
      {/* Job section */}
      <div className="px-8 grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
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
        {jobs.length === 0 && (
          <div className="text-center text-2xl text-primary font-semibold">
            No jobs found
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TagsPage;


