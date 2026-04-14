export default function Footer() {
  return (
    <footer className="px-10 py-12 bg-[#060a0e] border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Gold line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

        {/* Logo */}
        <div className="font-cinzel text-sm tracking-widest text-[#e8e0cc]">
          Sam <span className="text-[#c9a96e]">Costanzo</span>
        </div>

        {/* Tagline */}
        <p className="font-mono text-[10px] tracking-widest text-[#1e3050] uppercase">Developer · Dreamer · World-builder</p>

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
              className="font-mono text-[10px] tracking-widest uppercase text-[#1e3050] hover:text-[#c9a96e] transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-mono text-[10px] tracking-widest text-[#1a2a3a] mt-2">© {new Date().getFullYear()} Sam Costanzo. Handcrafted with React & Tailwind.</p>
      </div>
    </footer>
  );
}
