function Home() {
  return (
    <div style={{ lineHeight: "1.5" }}>
      <h1>
        ⇄ <span>shane</span> s[.me]
      </h1>
      <ul>
        <li>
          My name is <span>Shane</span> and I am a software engineer living in
          Washington state.
        </li>

        <li>
          <a target="_self" href="/me" rel="noreferrer">
            &nbsp; &nbsp; ↳&nbsp;Learn more about me.
          </a>
        </li>
        <li>
          <a target="_self" href="/contact" rel="noreferrer">
            &nbsp; &nbsp; ↳&nbsp;Send me a message.
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ssstra" rel="noreferrer">
            &nbsp; &nbsp; ↳&nbsp;Check out some recent projects.
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
