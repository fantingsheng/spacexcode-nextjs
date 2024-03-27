export default function PostList ({ posts }) {
  return (
    <ul
      className="flex flex-col animated-list"
    >
      {posts.length === 0 && <p>No posts found</p>}
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}