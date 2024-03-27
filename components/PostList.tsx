import type { Post } from ".contentlayer/generated";
import Link from "next/link";

type PostProps = {
  posts: Array<Post>
};

export default function PostList ({ posts }: PostProps) {
  return (
    <ul
      className="flex flex-col animated-list"
    >
      {posts.length === 0 && <p>No posts found</p>}
      {posts.map((post) => (
        <li key={post._id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}