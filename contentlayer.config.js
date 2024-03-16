import { makeSource } from "contentlayer/source-files";
 
import { Post } from "./content/definitions/post";
 
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
});