function Home() {
  return (
    <div style={{ lineHeight: "1.5" }}>
      <h1>
        ⇄ <span>shane</span> s[.me]
      </h1>
      <ul>
        <li>
          Hi, I'm <span>Shane</span>.
          <br />I live in Washington.
          <br />
          I'm a full stack developer with a background in data and political
          research.
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
            &nbsp; &nbsp; ↳&nbsp;Pay a visit to my github.
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
