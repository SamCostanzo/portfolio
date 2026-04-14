export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b border-white/10 bg-[#080d12] sticky top-0 z-20">
      <div className="font-cinzel text-sm tracking-widest text-[#e8e0cc]">
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
            className="font-mono text-[10px] tracking-widest uppercase text-[#4a6080] hover:text-[#c9a96e] transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
