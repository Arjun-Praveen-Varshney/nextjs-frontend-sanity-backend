export default {
  name: "portfolio",
  type: "document",
  title: "Portfolio",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
    {
      name: "profile",
      type: "object",
      fields: [
        {
          title: "Profile",
          name: "profile",
          type: "reference",
          to: [{ type: "profile" }],
        },
      ],
    },
  ],
};
