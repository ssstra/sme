import { Outlet } from "remix";

function Me() {
  return (
    <div>
      <h1>About Me</h1>
      <ul>
        <li>
          Hello! My name's Shane and I'm a software engineer with a focus on web
          applications and data analysis. I was born in Salem, OR, and grew up
          in the beautiful state of Alaska. Not wanting to move away from the
          incomparable Pacific Northwest, I now live in western Washington.
        </li>
        <li>
          I have experience working with the following languages, frameworks,
          and libraries: JavaScript, ReactJS, NodeJS, HTML, CSS, SQL, MySQL,
          NoSQL, Python, and R. I completed my education in the United Kingdom,
          where I graduated with my Bachelor's in 2013 and my Master's in 2014.
          If you would like to get in touch, don't hesitate to send me a message
          and introduce yourself!
        </li>
      </ul>
    </div>
  );
}

export default Me;
