export const post = {
  name: "post", // This is the name of the document type.
  title: "Post", // This is the display title of the document type.
  type: "document", // This indicates that this is a document type in Sanity.io.

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "banner",
      title: "Banner",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.max(200).error("Max 300 characters"),
    },
    // Richtext element
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "array",
    //   of: [
    //     {
    //       type: "block",
    //       styles: [
    //         { title: "Normal", value: "normal" },
    //         { title: "Heading 1", value: "h1" },
    //         { title: "Heading 2", value: "h2" },
    //         { title: "Heading 3", value: "h3" },
    //         { title: "Heading 4", value: "h4" },
    //         { title: "Quote", value: "blockquote" },
    //         { title: "Bullet List", value: "bullet" }, // Added bullet list style
    //         { title: "Numbered List", value: "number" }, // Added numbered list style
    //       ],
    //       marks: {
    //         decorators: [
    //           { title: "Strong", value: "strong" },
    //           { title: "Emphasis", value: "em" },
    //           { title: "Code", value: "code" },
    //         ],
    //         annotations: [
    //           {
    //             name: "link",
    //             type: "object",
    //             title: "External link",
    //             fields: [
    //               {
    //                 title: "URL",
    //                 name: "href",
    //                 type: "url",
    //                 validation: (Rule) =>
    //                   Rule.uri({
    //                     scheme: ["http", "https", "mailto", "tel"],
    //                   }),
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       type: "image",
    //       fields: [{ type: "text", name: "alt", title: "Alt" }],
    //     },
    //   ],
    // },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
};
