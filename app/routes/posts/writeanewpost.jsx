import { Link, redirect, useTransition, Form } from "remix";
import { db } from "~/utilities/db.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fields = { title, body };

  const post = await db.post.create({ data: fields });
  return redirect(`/posts/${post.id}`);
};

function NewPost() {
  const transition = useTransition();
  return (
    <>
      <div className="page-header">
        <h1>Title</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">
        <Form method="post">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title"></input>
          </div>
          <div className="form-control">
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" />
          </div>
          <button type="submit" className="btn btn-block">
            {transition.submission ? "Creating..." : "Create Post"}
          </button>
        </Form>
      </div>
    </>
  );
}

export default NewPost;
