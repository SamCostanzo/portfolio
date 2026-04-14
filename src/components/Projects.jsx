import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/projects";

const filters = ["All", "Professional", "Personal"];

export default function Projects() {
  const { isDark } = useTheme();
  const [active, setActive] = useState("All");

  const filtered = projects.filter((project) => (active === "All" ? true : project.category === active));

  return (
    <section id="work" className={`px-10 py-16 border-b transition-colors duration-500 ${isDark ? "border-white/5" : "border-black/5"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a96e22]" />
          <h2 className="font-cinzel text-[10px] tracking-[0.28em] uppercase text-[#c9a96e]">Selected Works</h2>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a96e22]" />
        </div>

        {/* Filter buttons */}
        <div className="flex gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-[10px] tracking-widest uppercase px-5 py-2 rounded-sm border transition-all duration-300 cursor-pointer ${
                active === f
                  ? "bg-[#c9a96e] text-[#080d12] border-[#c9a96e]"
                  : isDark
                    ? "bg-transparent text-[#4a6080] border-[#1a2a3a] hover:text-[#c9a96e] hover:border-[#c9a96e44]"
                    : "bg-transparent text-[#9a8860] border-[#ddd8cc] hover:text-[#c9a96e] hover:border-[#c9a96e44]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`relative border rounded-sm p-5 overflow-hidden group transition-colors duration-500 ${isDark ? "bg-[#0c1520] border-[#1a2a3a]" : "bg-white border-[#ddd8cc]"}`}
            >
              {/* Gold top bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e55] to-transparent" />

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[9px] tracking-widest border px-2 py-px rounded-sm transition-colors duration-500 ${
                      isDark ? "text-[#2e5070] border-[#1a2a3a] bg-[#080d12]" : "text-[#8a6838] border-[#ddd8cc] bg-[#f6f5f2]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & description */}
              <h3 className={`font-cinzel text-sm font-semibold mb-2 transition-colors duration-500 ${isDark ? "text-[#c8d0dc]" : "text-[#1a1610]"}`}>{project.title}</h3>
              <p className={`font-raleway text-xs font-light leading-relaxed mb-4 transition-colors duration-500 ${isDark ? "text-[#9aa8b8]" : "text-[#6a5838]"}`}>{project.description}</p>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`font-mono text-[9px] tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a96e] ${isDark ? "text-[#4a6080]" : "text-[#9a8860]"}`}
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`font-mono text-[9px] tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a96e] ${isDark ? "text-[#4a6080]" : "text-[#9a8860]"}`}
                  >
                    Live Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
