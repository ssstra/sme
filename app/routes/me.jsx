import { Outlet } from "remix";

function Me() {
  return (
    <div>
      <h1>About Me</h1>
      <ul>
        <li>
          Hi, <br />
          &nbsp; I'm Shane.
          <br />I lived in Alaska.
          <br />
          &nbsp; I now live in Washington.
          <br />
          <br />
          I'm a full stack developer. <br />
          &nbsp; I focus on JavaScript and React.
          <br />I graduated with my Bachelor's in 2013.
          <br />
          &nbsp; I graduated with my Master's in 2014.
          <br />I am currently:
          <br />
          &nbsp; Looking for new opportunities.
          <br />
          &nbsp; Working to improve on Rails and C++.
        </li>
      </ul>
    </div>
  );
}

export default Me;
