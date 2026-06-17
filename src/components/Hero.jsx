export default function Hero() {
  return (
    <div className="hero bg-background border-b border-black/10">
      <div className="hero-inner max-w-container mx-auto px-4 py-20">
        <div className="hero-top flex justify-between items-center gap-4 mb-8 font-mono text-sm text-muted uppercase leading-none">
          <div className="hero-label">Full-stack developer</div>
          <div className="hero-line h-px flex-1 bg-border"></div>
          <div className="hero-label">Syracuse, NY</div>
        </div>
        <h1 className="hero-name mb-4 font-playfair text-7xl font-bold text-text">
          Sam <br />
          Costanzo
        </h1>
        <div className="hero-bottom flex justify-between gap-4">
          <p className="hero-tag font-inter text-light-text font-light max-w-[400px] leading-7">
            I build clean, thoughtful software for the web. Seven years of professional experience shipping real products for real clients — now going deep on React, TypeScript, and Node.
          </p>
          <div className="hero-actions">
            <div className="hero-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
            </div>
            <div className="btns">
              <button className="btn-p">View work</button>
              <button className="btn-g">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
