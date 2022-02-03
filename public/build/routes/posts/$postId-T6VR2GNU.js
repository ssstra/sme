import {
  require_db
} from "/build/_shared/chunk-R3DOIDEC.js";
import {
  useLoaderData
} from "/build/_shared/chunk-O4Q473FS.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/routes/posts/$postId.jsx?browser
init_react();

// app/routes/posts/$postId.jsx
init_react();
var import_db = __toModule(require_db());
function Post() {
  const { post } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, post.body), /* @__PURE__ */ React.createElement("div", {
    className: "page-footer"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "button btn-delete"
  }, "Remove"))));
}
var postId_default = Post;
export {
  postId_default as default
};
//# sourceMappingURL=/build/routes/posts/$postId-T6VR2GNU.js.map
