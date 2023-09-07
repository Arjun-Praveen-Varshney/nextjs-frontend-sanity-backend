export default {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      name: "workexperience1",
      type: "object",
      title: "Workexperience 1",
      fields: [
        {
          name: "duration",
          type: "string",
          title: "Duration",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "venue",
          title: "Venue",
          type: "string",
        },
      ],
    },
    {
      name: "workexperience2",
      type: "object",
      title: "Workexperience 2",
      fields: [
        {
          name: "duration",
          type: "string",
          title: "Duration",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "venue",
          title: "Venue",
          type: "string",
        },
      ],
    },
    {
      name: "workexperience3",
      type: "object",
      title: "Workexperience 3",
      fields: [
        {
          name: "duration",
          type: "string",
          title: "Duration",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "venue",
          title: "Venue",
          type: "string",
        },
      ],
    },
    {
      name: "statistics",
      title: "Statistics",
      type: "object",
      fields: [
        {
          name: "finishedprojects",
          title: "Finished Projects",
          type: "string",
        },
        {
          name: "satisfiedclients",
          title: "Satisfied Clients",
          type: "string",
        },
        {
          name: "awardswon",
          type: "string",
          title: "Awards Won",
        },
        {
          name: "bugsfixed",
          title: "Bugs Fixed",
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
