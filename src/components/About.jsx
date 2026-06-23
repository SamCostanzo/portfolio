export default function About() {
  return (
    <div className="about bg-background border-b border-black/10">
      <div className="about-inner flex flex-col md:flex-row gap-4 max-w-container mx-auto px-4 py-20">
        <div>
          <img src="/images/male-ph.jpg" alt="" className="max-w-[200px]" />
        </div>
        <div className="p-4">
          <h2 className="mb-4 font-playfair text-[min(12vw,2rem)] font-bold text-text leading-[1.2]">
            Seven Years Building
            <br />
            <em className="text-accent font-normal">Always Learning</em>
          </h2>

          <p className="font-inter text-light-text font-light mb-8">
            I've spent seven years as the sole developer at a web agency, designing and building hundreds of production websites. I'm self-taught, detail-obsessed, and currently going deep on React,
            TypeScript, and Node to take my skills to the next level. I have a Master's degree in Music and spent years teaching before switching into tech - which probably explains why I care so much
            about clear communication and craft.
          </p>

          <div className="grid grid-cols-2">
            <div className="currently-learning">
              <h6 className="mb-4 uppercase font-mono text-sm text-muted font-light tracking-[.14em]">Currently Learning</h6>
              <div className="flex flex-col gap-2 text-xs">
                <span className="text-accent font-mono">React</span>
                <span className="text-accent font-mono">TypeScript</span>
                <span className="text-accent font-mono">Node.js</span>
                <span className="text-accent font-mono">Next.js</span>
              </div>
            </div>
            <div className="currently-learning">
              <h6 className="mb-4 uppercase font-mono text-sm text-muted font-light tracking-[.14em]">Professonal Background</h6>
              <div className="flex flex-col gap-2 text-xs">
                <span className="text-accent font-mono">Laravel/PHP</span>
                <span className="text-accent font-mono">WordPress</span>
                <span className="text-accent font-mono">7 yrs agency work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
