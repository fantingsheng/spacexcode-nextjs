import { defineDocumentType } from "contentlayer/source-files";
 
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true,
    },
  },
}));