import { makeSource } from "contentlayer/source-files";
 
import { Post } from "./content/definitions/post";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from 'rehype-highlight';
import codeTitle from "remark-code-titles";
 
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm], codeTitle],
    rehypePlugins: [
      rehypePrism,
      [rehypeSlug],
      rehypeHighlight
    ],
  },
});