export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-black/10 bg-[#f4f1ec]">
      <h1>Sam Costanzo</h1>
      <div className="flex justify-between items-center gap-5">
        <div className="menu">
          <ul className="flex gap-5">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="badge border border-accent px-5 py-1">
          Open to work
        </div>
      </div>
    </nav>
  );
}
