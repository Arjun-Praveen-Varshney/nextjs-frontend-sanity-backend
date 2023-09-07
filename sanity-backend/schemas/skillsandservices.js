export default {
  name: "skillsandservices",
  type: "document",
  title: "Skills and Services",
  fields: [
    {
      name: "allskills",
      type: "array",
      title: "All Skills",
      of: [
        {
          name: "skills",
          title: "Skills",
          type: "object",
          fields: [
            {
              name: "skill",
              title: "Skill",
              type: "string",
            },
            {
              name: "percentage",
              title: "Percentage",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "allservices",
      type: "array",
      title: "All Services",
      of: [
        {
          name: "services",
          title: "Services",
          type: "object",
          fields: [
            {
              name: "service",
              title: "Service",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "img",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
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
