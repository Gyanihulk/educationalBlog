export default {
  name: "blog",
  title: "Blog",
  type: "document",
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
      name: 'headerImg',
      title: 'headerImage',
      type: 'image',
      options: {
          hotspot: true,
      },
  },
  ],
};
