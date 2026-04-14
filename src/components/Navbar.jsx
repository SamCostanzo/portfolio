import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`flex justify-between items-center px-10 py-4 border-b sticky top-0 z-20 transition-colors duration-500 ${isDark ? "bg-[#080d12] border-white/10" : "bg-[#f6f5f2] border-black/10"}`}
    >
      <div className={`font-cinzel text-sm tracking-widest transition-colors duration-500 ${isDark ? "text-[#e8e0cc]" : "text-[#1a1610]"}`}>
        Sam <span className="text-[#c9a96e]">Costanzo</span>
      </div>

      <div className="flex gap-8">
        {[
          { label: "Work", id: "work" },
          { label: "About", id: "about" },
          { label: "Contact", id: "contact" },
        ].map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.id)}
            className={`font-mono text-[10px] tracking-widest uppercase bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-[#c9a96e] ${
              isDark ? "text-[#4a6080]" : "text-[#9a8860]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={toggleTheme}
        className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-full border cursor-pointer transition-all duration-300 ${
          isDark ? "bg-[#0c1520] border-[#1a2a3a] text-[#c9a96e]" : "bg-white border-[#ddd8cc] text-[#b8922a]"
        }`}
      >
        {isDark ? "☀ Light" : "☾ Dark"}
      </button>
    </nav>
  );
}
