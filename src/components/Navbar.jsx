export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b border-white/10 bg-[#080d12] sticky top-0 z-20">
      <div className="font-cinzel text-sm tracking-widest text-[#e8e0cc]">
        Sam <span className="text-[#c9a96e]">Costanzo</span>
      </div>
      <div className="flex gap-8">
        {["Work", "About", "Resume"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="font-mono text-[10px] tracking-widest uppercase text-[#4a6080] hover:text-[#c9a96e] transition-colors duration-300">
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
