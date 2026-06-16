export default function Navbar() {
  const links = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-black/10 bg-background font-mono text-sm text-text">
      <h1>
        <a href="/">Sam Costanzo</a>
      </h1>
      <div className="flex justify-between items-center gap-10">
        <div className="menu flex gap-8">
          {links.map((link) => (
            <button
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
              className="uppercase tracking-widest cursor-pointer hover:text-accent transition-colors duration-300 ease-in-out"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="nav-badge border border-accent px-3 py-1">Open to work</div>
      </div>
    </nav>
  );
}
