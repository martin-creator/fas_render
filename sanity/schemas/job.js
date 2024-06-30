export const job = {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "applicationLink",
      title: "Application Link",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "datePosted",
      title: "Date Posted",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "deadline",
      title: "Deadline",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "jobTag" }] }],
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
