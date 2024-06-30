import { defineType } from "sanity";

export const jobTag = defineType({
  name: "jobTag",
  title: "Job Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
});
