import { useLoaderData, Link } from "remix";
import { db } from "~/utilities/db.server";

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
  };
  return data;
};

function PostItems() {
  const { posts } = useLoaderData();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/writeanewpost" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString("en-US", options)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;
