import {
  require_db
} from "/build/_shared/chunk-R3DOIDEC.js";
import {
  Form,
  Link,
  useTransition
} from "/build/_shared/chunk-ZJV4BXCW.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/routes/posts/writeanewpost.jsx?browser
init_react();

// app/routes/posts/writeanewpost.jsx
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
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "body"
  }, "Body"), /* @__PURE__ */ React.createElement("textarea", {
    name: "body",
    id: "body"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-block"
  }, transition.submission ? "Creating..." : "Create Post"))));
}
var writeanewpost_default = NewPost;
export {
  writeanewpost_default as default
};
//# sourceMappingURL=/build/routes/posts/writeanewpost-NELUFOCR.js.map
