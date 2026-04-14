import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`px-10 py-12 border-t transition-colors duration-500 ${isDark ? "bg-[#060a0e] border-white/5" : "bg-[#f0ead8] border-black/5"}`}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Gold line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

        {/* Logo */}
        <div className={`font-cinzel text-sm tracking-widest transition-colors duration-500 ${isDark ? "text-[#e8e0cc]" : "text-[#1a1610]"}`}>
          Sam <span className="text-[#c9a96e]">Costanzo</span>
        </div>

        {/* Tagline */}
        <p className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-500 ${isDark ? "text-[#1e3050]" : "text-[#c9a96e]"}`}>Developer · Dreamer · World-builder</p>

        {/* Links */}
        <div className="flex gap-6 mt-2">
          {[
            { label: "Work", id: "work" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`font-mono text-[10px] tracking-widest uppercase bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-[#c9a96e] ${
                isDark ? "text-[#1e3050]" : "text-[#9a8060]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className={`font-mono text-[10px] tracking-widest mt-2 transition-colors duration-500 ${isDark ? "text-[#1a2a3a]" : "text-[#c9a96e88]"}`}>
          © {new Date().getFullYear()} Sam Costanzo. Handcrafted with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
