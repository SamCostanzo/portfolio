import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  const skills = ["Laravel", "React", "Tailwind", "JavaScript", "WordPress", "PHP"];

  const socials = [
    { label: "GitHub", url: "https://github.com/SamCostanzo" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/samcostanzodev/" },
  ];

  return (
    <section id="about" className={`px-10 py-16 border-b transition-colors duration-500 ${isDark ? "border-white/5" : "border-black/5"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a96e22]" />
          <h2 className="font-cinzel text-[10px] tracking-[0.28em] uppercase text-[#c9a96e]">About</h2>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a96e22]" />
        </div>

        {/* Bio grid */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4">
            <div
              className={`w-36 h-36 rounded-full border flex items-center justify-center font-cinzel text-4xl text-[#c9a96e] transition-colors duration-500 ${
                isDark ? "border-[#c9a96e44] bg-[#0c1520]" : "border-[#c9a96e88] bg-[#f0ead8]"
              }`}
            >
              <span className="m-auto">S</span>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2 w-full">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-sm text-center border transition-all duration-300 hover:text-[#c9a96e] hover:border-[#c9a96e44] ${
                    isDark ? "text-[#4a6080] border-[#1a2a3a]" : "text-[#8a6838] border-[#ddd8cc]"
                  }`}
                >
                  {s.label} →
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-sm text-center transition-all duration-300 hover:opacity-90 ${
                  isDark ? "bg-[#c9a96e] text-[#080d12]" : "bg-[#1a1610] text-[#c9a96e]"
                }`}
              >
                Resume ↓
              </a>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h3 className={`font-cinzel text-lg font-semibold mb-4 tracking-wide transition-colors duration-500 ${isDark ? "text-[#c0ccd8]" : "text-[#1a1610]"}`}>
              Developer. Dreamer. World-builder.
            </h3>
            <p className={`font-raleway text-sm font-light leading-loose mb-8 transition-colors duration-500 ${isDark ? "text-[#9aa8b8]" : "text-[#5a4828]"}`}>
              I'm a web developer based in Syracuse, NY, open to local, remote, and freelance work. My journey into tech was unconventional — I have a Master's degree in Music and spent years teaching
              before making a deliberate switch into tech. I built my skills from the ground up, and have been working professionally in the field since 2019. Over the last 7 years I've designed,
              built, and managed hundreds of production websites. Lately I've been going deep on Laravel, React, and Tailwind — the modern stack I want to build my career around. Outside of work I'm
              into video games, books, and sports — the kind of person who reads the Silmarillion for fun and has strong opinions about Elden Ring. I also play bass, which probably explains why I care
              so much about what's happening underneath the surface of things. My long-term dream is to ship a game on Steam. Right now the mission is simpler: find a great team, build great things.
            </p>

            {/* Skills */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-[10px] tracking-widest px-3 py-1 rounded-sm border transition-colors duration-500 ${
                      isDark ? "text-[#2e5070] border-[#1a2a3a] bg-[#080d12]" : "text-[#8a6838] border-[#ddd8cc] bg-[#f6f5f2]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
