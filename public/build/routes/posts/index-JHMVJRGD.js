import {
  require_db
} from "/build/_shared/chunk-R3DOIDEC.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-BTPCKGWV.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/routes/posts/index.jsx?browser
init_react();

// app/routes/posts/index.jsx
init_react();
var import_db = __toModule(require_db());
function PostItems() {
  const { posts } = useLoaderData();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts/new",
    className: "btn"
  }, "New Post")), /* @__PURE__ */ React.createElement("ul", {
    className: "posts-list"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.id
  }, /* @__PURE__ */ React.createElement("h3", null, post.title), new Date(post.createdAt).toLocaleString("en-US", options))))));
}
var posts_default = PostItems;
export {
  posts_default as default
};
//# sourceMappingURL=/build/routes/posts/index-JHMVJRGD.js.map
