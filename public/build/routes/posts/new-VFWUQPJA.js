import {
  require_db
} from "/build/_shared/chunk-R3DOIDEC.js";
import {
  Link,
  useTransition
} from "/build/_shared/chunk-O4Q473FS.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/routes/posts/new.jsx?browser
init_react();

// app/routes/posts/new.jsx
init_react();
var import_db = __toModule(require_db());
function NewPost() {
  const transition = useTransition();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Title"), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Title",
    id: "title"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "body"
  }, "Body"), /* @__PURE__ */ React.createElement("textarea", {
    name: "Body",
    id: "body"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "SUBMIT",
    className: "btn btn-block"
  }, "Add Post", transition.submission ? "Creating..." : "Create Post"))));
}
var new_default = NewPost;
export {
  new_default as default
};
//# sourceMappingURL=/build/routes/posts/new-VFWUQPJA.js.map
