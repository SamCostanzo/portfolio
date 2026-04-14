import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();
  const starsRef = useRef(null);
  const embersRef = useRef(null);

  useEffect(() => {
    spawnStars(starsRef.current, 120, isDark);
    spawnEmbers(embersRef.current, 30);
  }, []);

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden border-b min-h-[400px] transition-colors duration-500 ${
        isDark ? "border-white/5" : "border-black/5"
      }`}
    >
      {/* Background orbs */}
      <div
        className={`absolute top-[-140px] left-[-120px] w-[500px] h-[500px] rounded-full animate-[orb-drift_12s_ease-in-out_infinite] ${
          isDark ? "bg-[radial-gradient(circle,#0d2545_0%,transparent_65%)]" : "bg-[radial-gradient(circle,rgba(201,169,110,0.12)_0%,transparent_65%)]"
        }`}
      />
      <div
        className={`absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] rounded-full animate-[orb-drift_15s_ease-in-out_infinite_reverse] ${
          isDark ? "bg-[radial-gradient(circle,#1a1a3d_0%,transparent_65%)]" : "bg-[radial-gradient(circle,rgba(184,146,42,0.08)_0%,transparent_65%)]"
        }`}
      />
      <div
        className={`absolute top-[20%] right-[10%] w-[260px] h-[260px] rounded-full animate-[orb-drift_10s_ease-in-out_infinite_3s] ${
          isDark ? "bg-[radial-gradient(circle,#0d2a1a_0%,transparent_65%)]" : "bg-[radial-gradient(circle,rgba(201,169,110,0.07)_0%,transparent_65%)]"
        }`}
      />

      {/* Pulsing rings */}
      <div className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-[#c9a96e] animate-[ring-pulse_5s_ease-out_infinite_0s]" />
      <div className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-[#c9a96e] animate-[ring-pulse_5s_ease-out_infinite_1.65s]" />
      <div className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c9a96e] animate-[ring-pulse_5s_ease-out_infinite_3.3s]" />

      {/* Particles */}
      <div ref={starsRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      <div ref={embersRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 animate-[rise-in_1s_ease_both]">
        <div className="font-mono text-[10px] tracking-[0.28em] text-[#c9a96e] mb-4 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-[#c9a96e44]" />
          full-stack developer
          <span className="w-8 h-px bg-[#c9a96e44]" />
        </div>

        <h1 className={`font-cinzel text-5xl font-bold tracking-wide leading-tight mb-3 transition-colors duration-500 ${isDark ? "text-[#f0ece4]" : "text-[#1a1610]"}`}>
          Architect of
          <br />
          <span className="text-[#c9a96e]">Digital Worlds</span>
        </h1>

        <p className={`font-raleway text-xs font-normal tracking-[0.2em] uppercase mb-3 transition-colors duration-500 ${isDark ? "text-[#4a6070]" : "text-[#9a8860]"}`}>
          Web &nbsp;·&nbsp; Systems &nbsp;·&nbsp; Future Game Dev
        </p>

        <p className={`font-raleway text-sm font-light leading-relaxed mb-10 max-w-md transition-colors duration-500 ${isDark ? "text-[#a0b0c0]" : "text-[#5a5040]"}`}>
          Building elegant software for the web — with one eye always on the horizon of worlds yet to be made.
          <span className={`inline-block w-px h-[14px] ml-1 align-middle animate-[cursor-blink_1.1s_ease-in-out_infinite] ${isDark ? "bg-[#c9a96e]" : "bg-[#b8922a]"}`} />
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className={`font-cinzel text-[11px] tracking-widest uppercase px-8 py-3 rounded-sm cursor-pointer transition-colors duration-500 ${
              isDark ? "bg-[#c9a96e] text-[#080d12]" : "bg-[#1a1610] text-[#c9a96e]"
            }`}
          >
            Enter the Archive
          </button>
          <button
            className={`font-cinzel text-[11px] tracking-widest uppercase px-8 py-3 rounded-sm cursor-pointer bg-transparent transition-colors duration-500 ${
              isDark ? "text-[#8a9aaa] border border-[#1e3050]" : "text-[#7a6840] border border-[#c9a96e88]"
            }`}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

function spawnStars(container, count) {
  if (!container) return;
  const cols = ["#ffffff", "#c9a96e", "#d4b870", "#8ab4ff", "#a090ff", "#7ec8e0"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const sz = (Math.random() * 2.6 + 0.4).toFixed(1);
    const dur = (Math.random() * 4 + 2.5).toFixed(1);
    const del = (Math.random() * 6).toFixed(1);
    const lo = (Math.random() * 0.05 + 0.02).toFixed(2);
    const hi = (Math.random() * 0.65 + 0.3).toFixed(2);
    const col = cols[Math.floor(Math.random() * cols.length)];
    el.style.cssText = `position:absolute;border-radius:50%;width:${sz}px;height:${sz}px;left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;background:${col};--lo:${lo};--hi:${hi};animation:twinkle ${dur}s ease-in-out infinite -${del}s;`;
    container.appendChild(el);
  }
}

function spawnEmbers(container, count) {
  if (!container) return;
  const cols = ["#c9a96e", "#e0c070", "#d4a840", "#f0d890", "#b88c40"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const sz = (Math.random() * 3.5 + 0.8).toFixed(1);
    const dur = (Math.random() * 5 + 4).toFixed(1);
    const del = (Math.random() * 9).toFixed(1);
    const pk = (Math.random() * 0.5 + 0.25).toFixed(2);
    el.style.cssText = `position:absolute;border-radius:50%;width:${sz}px;height:${sz}px;left:${(Math.random() * 100).toFixed(1)}%;bottom:${(Math.random() * 70 + 5).toFixed(1)}%;background:${cols[Math.floor(Math.random() * cols.length)]};--pk:${pk};animation:float-up ${dur}s ease-in infinite -${del}s;`;
    container.appendChild(el);
  }
}
