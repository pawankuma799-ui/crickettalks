
const stories = [
  {
    category: "CRICKET NEWS",
    title: "The Biggest Cricket Stories Making Headlines",
    time: "Latest Updates",
    color: "blue",
    image: "🏏",
  },
  {
    category: "TEAM ANALYSIS",
    title: "What Makes a Winning Cricket Team?",
    time: "Team Analysis",
    color: "purple",
    image: "🏆",
  },
  {
    category: "MATCH PREVIEW",
    title: "Key Players to Watch in Upcoming Matches",
    time: "Match Preview",
    color: "green",
    image: "⚡",
  },
  {
    category: "EXPERT OPINION",
    title: "The Changing Face of Modern Cricket",
    time: "Opinion",
    color: "orange",
    image: "🎯",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">C</span>
          Cricket<span>Talks</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#news">News</a>
          <a href="#analysis">Analysis</a>
          <a href="#teams">Teams</a>
          <a href="#about">About</a>
        </nav>
        <button className="search">⌕ Search</button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="tag">THE HOME OF CRICKET</div>
          <h1>
            EVERY STORY.
            <br />
            EVERY MATCH.
            <br />
            <span>EVERY MOMENT.</span>
          </h1>
          <p>
            Your destination for cricket news, match stories,
            team analysis and everything happening in cricket.
          </p>
          <a className="primary-btn" href="#news">
            EXPLORE LATEST NEWS →
          </a>
        </div>
        <div className="hero-art">
          <div className="stadium">🏏</div>
          <div className="hero-label">CRICKET LIVES HERE</div>
        </div>
      </section>

      <section className="news-section" id="news">
        <div className="section-heading">
          <div>
            <div className="eyebrow">STAY IN THE GAME</div>
            <h2>Latest <span>News</span></h2>
          </div>
          <a href="#analysis" className="view-all">EXPLORE MORE →</a>
        </div>

        <div className="news-grid">
          <article className="featured">
            <div className="feature-art">🏟️</div>
            <div className="feature-info">
              <span className="category">FEATURED STORY</span>
              <h3>Welcome to CricketTalks — Your New Cricket Destination</h3>
              <p>
                Discover cricket stories, team updates, match previews
                and detailed analysis, all in one place.
              </p>
              <span className="read-more">READ STORY →</span>
            </div>
          </article>

          <div className="side-stories">
            {stories.map((story, index) => (
              <article className="story-card" key={index}>
                <div className={`story-image ${story.color}`}>
                  {story.image}
                </div>
                <div className="story-info">
                  <span className="category">{story.category}</span>
                  <h3>{story.title}</h3>
                  <small>{story.time}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="analysis-section" id="analysis">
        <div className="eyebrow">MORE THAN JUST THE GAME</div>
        <h2>Cricket. Beyond <span>Boundaries.</span></h2>
        <p>
          News, match previews, team profiles and cricket analysis.
          Everything a cricket fan wants to explore.
        </p>
        <div className="topics" id="teams">
          <div>🏏 <b>Cricket News</b></div>
          <div>📊 <b>Match Analysis</b></div>
          <div>🏆 <b>Team Profiles</b></div>
          <div>⭐ <b>Player Stories</b></div>
        </div>
      </section>

      <footer id="about">
        <div className="brand">
          <span className="brand-icon">C</span>
          Cricket<span>Talks</span>
        </div>
        <p>Your game. Your passion. Your CricketTalks.</p>
        <small>© 2026 CricketTalks. All rights reserved.</small>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #f4f6fa;
          color: #101d35;
          font-family: Arial, Helvetica, sans-serif;
        }
        a { text-decoration: none; }
        .topbar {
          min-height: 76px;
          padding: 0 7%;
          background: #08265a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }
        .brand {
          font-size: 25px;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }
        .brand > span:last-child { color: #f5b83d; }
        .brand-icon {
          width: 35px;
          height: 35px;
          border-radius: 9px;
          background: #f5b83d;
          color: #08265a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        nav { display: flex; gap: 30px; }
        nav a { color: white; font-size: 14px; font-weight: 700; }
        nav a:hover { color: #f5b83d; }
        .search {
          border: 1px solid #526b91;
          background: transparent;
          color: white;
          padding: 11px 17px;
          border-radius: 5px;
        }
        .hero {
          min-height: 490px;
          background: linear-gradient(115deg, #061b43, #103e7d);
          padding: 65px 9%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          color: white;
          overflow: hidden;
        }
        .hero-content { max-width: 600px; }
        .tag, .eyebrow {
          color: #f5b83d;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .hero h1 {
          font-size: clamp(40px, 5.5vw, 68px);
          line-height: 1.08;
          margin: 20px 0;
          font-weight: 900;
        }
        .hero h1 span, .analysis-section h2 span {
          color: #f5b83d;
        }
        .hero p {
          max-width: 470px;
          line-height: 1.8;
          color: #d0dced;
          font-size: 16px;
        }
        .primary-btn {
          display: inline-block;
          margin-top: 22px;
          padding: 15px 23px;
          background: #f5b83d;
          color: #08234e;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 900;
        }
        .hero-art {
          width: 360px;
          height: 310px;
          border: 1px solid #54729b;
          border-radius: 48% 48% 12px 12px;
          background: radial-gradient(circle, #275a94, #0b2855);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stadium { font-size: 125px; }
        .hero-label { color: #f5b83d; font-weight: 900; letter-spacing: 3px; }
        .news-section { padding: 65px 9%; }
        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 30px;
        }
        .section-heading h2 { font-size: 36px; margin: 10px 0 0; }
        .section-heading h2 span { color: #1b5599; }
        .view-all { color: #174c89; font-size: 12px; font-weight: 900; }
        .news-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 25px;
        }
        .featured {
          background: white;
          border-radius: 9px;
          overflow: hidden;
          box-shadow: 0 5px 25px #102b5010;
        }
        .feature-art {
          height: 235px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 105px;
          background: linear-gradient(130deg, #0b2c62, #2764a3);
        }
        .feature-info { padding: 25px; }
        .category { color: #bd8b23; font-size: 10px; font-weight: 900; letter-spacing: 1px; }
        .feature-info h3 { font-size: 25px; line-height: 1.3; }
        .feature-info p { color: #69778b; line-height: 1.7; font-size: 14px; }
        .read-more { color: #174c89; font-size: 11px; font-weight: 900; }
        .side-stories { display: flex; flex-direction: column; gap: 14px; }
        .story-card {
          min-height: 105px;
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 4px 20px #102b500b;
        }
        .story-image {
          width: 105px;
          min-width: 105px;
          height: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          border-radius: 5px;
        }
        .blue { background: #dceaff; }
        .purple { background: #eee3ff; }
        .green { background: #dff4e8; }
        .orange { background: #fff0d9; }
        .story-info h3 { margin: 7px 0; font-size: 15px; line-height: 1.35; }
        .story-info small { color: #7d8998; font-size: 11px; }
        .analysis-section {
          padding: 65px 9%;
          text-align: center;
          background: #092553;
          color: white;
        }
        .analysis-section h2 { font-size: 36px; }
        .analysis-section p { color: #c5d2e4; line-height: 1.7; }
        .topics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 35px;
        }
        .topics div {
          padding: 22px 10px;
          background: #153969;
          border-radius: 7px;
          color: #f5b83d;
        }
        .topics b { display: block; color: white; margin-top: 10px; font-size: 13px; }
        footer {
          padding: 35px 9%;
          text-align: center;
          background: #061832;
          color: white;
        }
        footer .brand { justify-content: center; }
        footer p { color: #bdc9d9; font-size: 13px; }
        footer small { color: #8294ad; }
        @media (max-width: 800px) {
          .topbar { padding: 18px 5%; flex-wrap: wrap; }
          nav { order: 3; width: 100%; gap: 18px; overflow-x: auto; }
          .search { margin-left: auto; }
          .hero { padding: 55px 7%; }
          .hero-art { display: none; }
          .news-section { padding: 45px 5%; }
          .news-grid { grid-template-columns: 1fr; }
          .topics { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 450px) {
          .hero h1 { font-size: 39px; }
          .section-heading h2 { font-size: 29px; }
          .view-all { font-size: 10px; }
          .story-image { width: 80px; min-width: 80px; }
          .story-info h3 { font-size: 13px; }
        }
      `}</style>
    </main>
  );
}
