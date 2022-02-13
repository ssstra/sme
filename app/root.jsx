import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import globalStylesUrl from "./styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  const description = "personal development site";
  const keywords = "javascript, react, developer";
  return {
    title: "Shane S dot Me",
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href={globalStylesUrl} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  let activeStyle = {
    color: "rgb(238, 255, 162)",
  };
  let activeClassName = "underline";
  return (
    <>
      <nav className="navbar">
        <NavLink
          className="logo"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="me"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Uh-oh, Some Errors Abound!</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
