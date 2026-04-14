export default function Contact() {
  return (
    <section id="contact" className="px-10 py-24 border-b border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a96e22]" />
          <h2 className="font-cinzel text-[10px] tracking-[0.28em] uppercase text-[#c9a96e]">Say Hello</h2>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a96e22]" />
        </div>

        {/* Heading */}
        <h3 className="font-cinzel text-3xl font-bold text-[#f0ece4] tracking-wide mb-6 leading-snug">
          Let's Build Something
          <br />
          <span className="text-[#c9a96e]">Worth Remembering</span>
        </h3>

        {/* Friendly note */}
        <p className="font-raleway text-sm font-light text-[#9aa8b8] leading-loose max-w-xl mx-auto mb-10">
          Whether you're a potential employer, a fellow developer, someone who needs a website built, or you want to discuss the best builds in Elden Ring or your favorite Stephen King books — I'd
          genuinely love to hear from you!
        </p>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/samcostanzodev/"
          target="_blank"
          rel="noreferrer"
          className="inline-block font-cinzel text-[11px] tracking-widest uppercase px-10 py-4 bg-[#c9a96e] text-[#080d12] rounded-sm hover:opacity-90 transition-all duration-300"
        >
          Find Me on LinkedIn →
        </a>

        {/* Subtext */}
        <p className="font-mono text-[10px] tracking-widest text-[#2e5070] mt-6">Open to full-time, remote, and freelance work</p>
      </div>
    </section>
  );
}
