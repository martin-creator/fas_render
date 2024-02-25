export const event = {
  name: "event",
  title: "Event",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "banner",
      title: "Banner",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "details",
      title: "Details",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.max(200).error("Max 150 characters"),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "signupLink",
      title: "Signup Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "partnerWithUsLink",
      title: "Partner Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "guests",
      title: "Guests",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "position", title: "Position", type: "string" },
            { name: "linkedin", title: "LinkedIn", type: "url" },
            { name: "photo", title: "Photo", type: "url" },
          ],
        },
      ],
    },
  ],
};