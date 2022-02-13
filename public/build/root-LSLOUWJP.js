import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-ZJV4BXCW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-GCBV6DZG.css";

// app/root.jsx
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => {
  const description = "personal development site";
  const keywords = "javascript, react, developer";
  return {
    title: "Shane S dot Me",
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: global_default
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function Layout({ children }) {
  let activeStyle = {
    color: "rgb(238, 255, 162)"
  };
  let activeClassName = "underline";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    className: "logo",
    to: "me",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "About"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "me",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "About"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "contact",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Contact"), /* @__PURE__ */ React.createElement(Link, {
    to: "https://github.com/ssstra",
    target: "_blank"
  }, "My Github")))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "Uh-oh, Some Errors Abound!"), /* @__PURE__ */ React.createElement("p", null, error.message)));
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-LSLOUWJP.js.map
