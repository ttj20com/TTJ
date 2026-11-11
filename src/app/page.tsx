const categories = ["Arcade", "Puzzle", "Strategy", "Racing", "Trivia"];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/">TTJ<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#games">Games</a>
          <a href="#how">How it works</a>
        </nav>
        <a className="account-link" href="/sign-in">Sign in</a>
      </header>

      <section className="hero">
        <div className="eyebrow">SKILL FIRST · PLAY YOUR WAY</div>
        <h1>Every round is<br /><span>your next move.</span></h1>
        <p>Discover arcade challenges, sharpen your skills, and play with platform points. No betting. No cash prizes.</p>
        <a className="primary-button" href="#games">Explore games <span>↗</span></a>
        <div className="hero-note">A new world of play is taking shape.</div>
      </section>

      <section className="games-section" id="games">
        <div className="section-heading">
          <div><div className="eyebrow">THE PLAYGROUND</div><h2>Find your kind of game.</h2></div>
          <span className="status">GAME CATALOG COMING SOON</span>
        </div>
        <div className="category-list">
          {categories.map((category) => <span key={category}>{category}</span>)}
        </div>
        <div className="empty-state">
          <div className="empty-icon">✳</div>
          <h3>Good games take a little setup.</h3>
          <p>Only verified, playable games will appear here. We’re preparing the catalog and will publish games when they’re ready.</p>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="eyebrow">SIMPLE BY DESIGN</div>
        <h2>Play. Improve. Earn points.</h2>
        <div className="steps">
          <article><b>01</b><h3>Choose a game</h3><p>Pick a published challenge that matches your style.</p></article>
          <article><b>02</b><h3>Use points to play</h3><p>Entry points are used for gameplay, not wagers.</p></article>
          <article><b>03</b><h3>Build your score</h3><p>Eligible game results may award platform points.</p></article>
        </div>
        <p className="policy">TTJ points have no cash value. They cannot be withdrawn, transferred for cash, or exchanged for money.</p>
      </section>

      <footer><a className="brand" href="/">TTJ<span>.</span></a><span>Play with skill. Keep it fair.</span><span>© {new Date().getFullYear()} TTJ</span></footer>
    </main>
  );
}
