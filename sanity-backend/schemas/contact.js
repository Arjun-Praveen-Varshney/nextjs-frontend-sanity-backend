export default {
  name: "contact",
  type: "document",
  title: "Contact",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "youtubechannelurl",
      title: "Youtube Channel URL",
      type: "string",
    },
    {
      name: "whatsappurl",
      title: "Whatsapp URL",
      type: "string",
    },
    {
      name: "telegramurl",
      title: "Telegram URL",
      type: "string",
    },
    {
      name: "instagramurl",
      title: "Instagram URL",
      type: "string",
    },
    {
      name: "addressimage",
      type: "image",
      title: "Address Image",
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
