"use client";
import { pick } from "@contentlayer/client";
import { allPosts } from "contentlayer/generated";
// import PostList from "components/postlist";
// import Input from "components/input";
import { useState } from "react";
// import { IconSearch } from "components/Icons";

const seoTitle = "Blog | Samuel Kraft";
const seoDesc =
  "I write about development, design, React, CSS, animation and more!";

export default function Blog() {
  const [search, setSearch] = useState("");

  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((post) =>
      pick(post, ["title", "description", "publishedAt"])
    );

  const filteredPosts = posts.filter(({ title, description }) => {
    const searchString = `${title.toLowerCase()} ${description?.toLowerCase()}`;
    return searchString.includes(search.toLowerCase());
  });

  console.log("posts", posts);

  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <h1 className="animate-in">Blog</h1>
            <p
              className="text-secondary animate-in"
            >
              I write about CSS, animation techniques, design systems and more.
            </p>
          </div>
          <div
            className="animate-in"
          >
            {/* <Input
              id="search"
              type="search"
              placeholder="Search…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              pfix={<IconSearch className="w-5 h-5 text-secondary" />}
            /> */}
          </div>
        </div>
        <div
          className="animate-in"
        >
          {/* <PostList posts={filteredPosts} /> */}
        </div>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   const posts = allPosts
//     .sort(
//       (a, b) =>
//         new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
//     )
//     .map((post) =>
//       pick(post, ["slug", "title", "summary", "publishedAt", "image"])
//     );

//   return {
//     props: { posts },
//   };
// };