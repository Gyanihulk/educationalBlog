export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "heading1",
      title: "Heading1",
      type: "string",
    },
    {
      name: "heading2",
      title: "Heading2",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: 'headerImg',
      title: 'headerImage',
      type: 'image',
      options: {
          hotspot: true,
      },
  },
  ],
};
