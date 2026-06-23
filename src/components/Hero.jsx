import TechnologyBadge from "./TechnologyBadge";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero bg-background border-b border-black/10">
      <div className="hero-inner max-w-container mx-auto px-4 py-20">
        <div className="hero-top flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 mb-8 font-mono text-sm text-muted uppercase leading-none">
          <div className="hero-label">Full-stack developer</div>
          <div className="hero-line h-px flex-1 bg-border"></div>
          <div className="hero-label">Syracuse, NY</div>
        </div>
        <div className="hero-bottom flex justify-between gap-4">
          <div>
            <motion.h1 className="hero-name font-playfair text-7xl font-bold text-text mb-4" initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
              Sam
              <br />
              Costanzo
            </motion.h1>
            <p className="mb-4 font-inter text-light-text font-light max-w-[400px] leading-7">
              I build clean, thoughtful software for the web. Seven years of professional experience shipping real products for real clients - now going deep on React, TypeScript, and Node.
            </p>
            <div className="flex gap-2 mb-4">
              <TechnologyBadge title="JavaScript" />
              <TechnologyBadge title="TypeScript" />
              <TechnologyBadge title="Laravel" />
              <TechnologyBadge title="WordPress" />
            </div>
            <div className="flex gap-2">
              <Button label="Resume" href="https://google.com" target="_blank" />
              <Button label="Learn More" href="https://youtube.com" />
            </div>
          </div>
          {/* <div className="hero-actions flex flex-col gap-4 items end">
            <img src="/images/JL.jpg" alt="Portrait of Sam Costanzo" className="max-w-[400px]" />
            <div className="hero-stack flex gap-2 justify-end">
              <TechnologyBadge title="JavaScript" />
              <TechnologyBadge title="TypeScript" />
              <TechnologyBadge title="Laravel" />
              <TechnologyBadge title="WordPress" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
