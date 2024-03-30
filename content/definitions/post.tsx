import { defineDocumentType, ComputedFields } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const postComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();

      // https://stackoverflow.com/a/70802303
      const regex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

      const headings = 
        Array.from(doc.body.raw.matchAll(regex)).map(
        // @ts-ignore
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );

      return headings;
    }
  }
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    image: { type: "string" },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true,
    },
  },
  computedFields: postComputedFields
}));