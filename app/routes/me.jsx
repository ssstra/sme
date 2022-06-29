import { Outlet } from "remix";

function Me() {
  return (
    <div style={{ lineHeight: "1.5" }}>
      <h1>About Me</h1>
      <ul>
        <li>
          My name's Shane and I'm a software engineer with a focus on web
          applications and research methodologies. I am always excited to engage
          with new frameworks, libraries, and languages. I endeavor to build
          projects with carefully considered features that come together to
          ensure a functional, innovative, and accessible product for everyone.
        </li>
        <li>
          I have a self-starter background, with teaching experience in the
          social sciences, independent research experience, and experience
          working in freelance web development and product editing.
        </li>
        <li>
          I completed my education in the United Kingdom, where I graduated with
          my Bachelor's in 2013 and my Master's in 2014.
        </li>
        <li>
          If you would like to get in touch, please send me a message.
          也会说中文。
        </li>
        <li>
          <a target="_self" href="/" rel="noreferrer">
            &nbsp; &nbsp; ↳&nbsp;Go back.
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Me;
